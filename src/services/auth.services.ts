import { db } from "@/configs/firebase.config";
import { isAxiosError } from "axios";
import { axiosApi } from "@/configs/axiosApi.config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

enum AuthProviderEnum {
  GOOGLE = "google.com",
  APPLE = "apple.com",
}

enum AuthRequestSourceEnum {
  WEB = "web",
  MOBILE = "mobile",
}

const authServices = {
  signUp: async (user: any) => {
    try {
      const res = await axiosApi.post("/auth/signup", user);
      return res.data;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      const res = await axiosApi.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },

  signUpWithGoogle: async (token: string, userType: string) => {
    try {
      const res = await axiosApi.post("/auth/provider-signup", {
        token,
        userType,
        provider: AuthProviderEnum.GOOGLE,
      });
      return res.data;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  signInWithGoogle: async (token: string) => {
    try {
      const res = await axiosApi.post(
        "/auth/provider-login",
        {
          token,
          provider: AuthProviderEnum.GOOGLE,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("signInWithGoogle", res);
      return res.data;
    } catch (error: any) {
      console.log("signInWithGoogleError", error);
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  signUpWithApple: async (token: string, userType: string) => {
    try {
      const res = await axiosApi.post("/auth/provider-signup", {
        token,
        userType,
        requestSource: AuthRequestSourceEnum.WEB,
        provider: AuthProviderEnum.APPLE,
      });
      return res.data;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  signInWithApple: async (token: string) => {
    try {
      const res = await axiosApi.post(
        "/auth/provider-login",
        {
          token,
          requestSource: AuthRequestSourceEnum.WEB,
          provider: AuthProviderEnum.APPLE,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("signInWithApple", res);
      return res.data;
    } catch (error: any) {
      console.log("signInWithAppleError", error);
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  changePassword: async (uid: any, data: any) => {
    try {
      const res = await axiosApi.post("/auth/changePassword", {
        id: uid,
        oldPassword: data.current,
        newPassword: data.new,
      });
      return res.data;
    } catch (error: any) {
      console.log(error);
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  async forgotPassword(email: string) {
    try {
      const res = await axiosApi.post("/auth/forget-password", {
        email: email,
      });
      console.log("sendResetPasswordEmailMutationAPISuccess", res);
      return res.data;
    } catch (error) {
      console.log("sendResetPasswordEmailMutationAPIError", error);
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  async resetPassword(token: string, password: string) {
    try {
      const res = await axiosApi.post("/auth/reset-password", {
        token: token,
        password: password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  async deleteAccount(userid: string) {
    try {
      const res = await axiosApi.post("auth/delete-account", {
        userId: userid,
      });
      return res;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },

  async createServiceAgreement(userId:string){
    try {
      const res = await axiosApi.post(`user/${userId}/service-agreement`);
      return res;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  },
  async getServiceAgreement(userId:string){
    try {
      const res = await axiosApi.get(`user/${userId}/service-agreement`);
      return res;
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export default authServices;
