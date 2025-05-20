import React from "react";
import SideImage from "./components/sideImage/SideImage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import styles from "./Auth.module.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";

type LoginSignInProps = {

  type: any;
  handleAuthType: any;
  setOpenForgotPasswordModal: any;
};

const Auth = ({ type, handleAuthType, setOpenForgotPasswordModal }: LoginSignInProps) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      <div className={styles.login_sec}>
        <div className={styles.inner_sec}>
          <div className={styles.left_content}>
            {type === "SIGNUP" ? (
              <SignUp handleAuthType={handleAuthType} />
            ) : (
              <Login handleAuthType={handleAuthType} setOpenForgotPasswordModal={setOpenForgotPasswordModal} />
            )}
          </div>
          <div className={styles.right_content}>
            <SideImage />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Auth;
