import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { signOut } from "next-auth/react";
import { auth } from "./firebase.config";

export const axiosMlsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MLS_API_URL,
});

axiosMlsApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      // Mark the request as retried to avoid infinite loops.
      originalRequest._retry = true;

      try {
        const accessToken = await auth.currentUser?.getIdToken(true);
        if (!accessToken) {
          // If the user is not authenticated, redirect to the login page.
          toast({
            variant: "destructive",
            description: "Not Authorized!",
          });
          axiosMlsApi.defaults.headers.common.Authorization = undefined;
          await signOut({ callbackUrl: "/" });
          return Promise.reject(error);
        }
        // Update the authorization header with the new access token.
        axiosMlsApi.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        // Retry the original request with the new access token.
        return axiosMlsApi(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        toast({
          variant: "destructive",
          description: "Not Authorized!",
        });
        axiosMlsApi.defaults.headers.common.Authorization = undefined;
        await signOut({ callbackUrl: "/" });
        return Promise.reject(refreshError);
      }
    }
    // For all other errors, return the error as is.
    return Promise.reject(error);
  }
);
