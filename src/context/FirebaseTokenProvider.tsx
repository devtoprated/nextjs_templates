"use client";
import app, { auth } from "@/configs/firebase.config";
import { signInWithCustomToken } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { axiosApi } from "@/configs/axiosApi.config";
import { Session } from "next-auth";
import { axiosMlsApi } from "@/configs/axiosMlsApi.config";
import { getAnalytics, logEvent, setUserId } from "firebase/analytics";

interface FirebaseTokenProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

interface FirebaseTokenContextProps {
  token: string | null;
}

const FirebaseTokenContext = createContext<FirebaseTokenContextProps>({
  token: null,
});

export const FirebaseTokenProvider: React.FC<FirebaseTokenProviderProps> = ({
  session,
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscribe = auth.onIdTokenChanged(async (user) => {
      // called on sign in, sign out & token change
      setLoading(false); // render the children after user is loaded
      if (user) {
        console.log("onTokenChange Called");
        const analytics = getAnalytics();
        setUserId(analytics, user.uid);
        const _token = await user.getIdToken();
        if (_token) {
          setToken(_token);
          axiosApi.defaults.headers.common["Authorization"] =
            `Bearer ${_token}`;
          axiosMlsApi.defaults.headers.common["Authorization"] =
            `Bearer ${_token}`;
        }
      }
    });
    return unSubscribe;
  }, []);

  useEffect(() => {
    if (session) {
      if (!loading && !auth.currentUser) {
        const _token = session?.token;
        if (!_token) return;
        (async () => {
          const analytics = getAnalytics();
          logEvent(analytics, "sign_in");

          // login user to firebase
          await signInWithCustomToken(auth, _token);
          const newToken = await auth.currentUser?.getIdToken();
          if (!newToken) return;
          axiosApi.defaults.headers.common["Authorization"] =
            `Bearer ${newToken}`;
          axiosMlsApi.defaults.headers.common["Authorization"] =
            `Bearer ${newToken}`;
        })();
      }
    } else {
      // logout user from google calendar
      (async () => {
        const { loadAuth2, gapi } = await import("gapi-script");
        const auth2 = await loadAuth2(
          gapi,
          process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
          ""
        );
        console.log("auth2", auth2);
        auth2.signOut().then(() => {
          console.log("User signed out from google.");
        });
      })();

      //logout user from firebase
      auth.signOut();
    }
  }, [session, auth, loading]);

  return (
    <FirebaseTokenContext.Provider value={{ token }}>
      {loading ? <div></div> : children}
    </FirebaseTokenContext.Provider>
  );
};

export default FirebaseTokenProvider;
