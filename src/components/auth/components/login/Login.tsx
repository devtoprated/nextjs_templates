import React, { useState } from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./Login.module.scss";
import { CustomButton } from "@/components/ui/button";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import authServices from "@/services/auth.services";
import { useGoogleLogin } from "@react-oauth/google";
import { useModal } from "@/context/ModalContext";
import { LOADER_BTN } from "@/utilities/svgConstant";
import projectServices from "@/services/project.services";
import { useSearchParams } from "next/navigation";
import { signInWithCredential, signInWithCustomToken } from "firebase/auth";
import { auth } from "@/configs/firebase.config";
import { axiosApi } from "@/configs/axiosApi.config";
import { FaApple } from "react-icons/fa6";
import { appleAuthHelpers, AppleAuthResponse } from "react-apple-signin-auth";
type FormValues = {
  email: string;
  password: string;
};

type LoginPageProps = {
  handleAuthType: (val: string) => void;
  setOpenForgotPasswordModal: any;
};

const LogInSchema = zod
  .object({
    email: zod.string().min(1, { message: "Email is required" }).email().trim(),
    password: zod.string().trim().min(6, { message: "Password is required" }),
  })
  .required();

const Login = ({
  handleAuthType,
  setOpenForgotPasswordModal,
}: LoginPageProps) => {
  const { closeModal } = useModal();
  const { toast } = useToast();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormValues>({
    resolver: zodResolver(LogInSchema),
  });

  const onSubmit = handleSubmit((data) => {
    loginHandler(data.email, data.password, "SIGN_IN");
  });

  const redirectAfterLogin = (count: number): string => {
    let url: string = "/";

    if (count <= 0) {
      url = "/choose-create-join-project";
    }

    if (searchParams.get("redirect")) {
      url = searchParams.get("redirect") as string;
    }

    return url;
  };

  const loginHandler = async (
    email: string,
    password: string,
    type: string
  ) => {
    try {
      setIsSubmitting(true);
      const user = await authServices.signIn(email, password);

      await signIn("credentials", {
        email,
        password,
        type,
        callbackUrl: redirectAfterLogin(user.projectsCount ?? 0),
      });
      toast({
        variant: "success",
        description: "Signed in successfully.",
      });
      setIsSubmitting(false);
      // if (typeof window !== "undefined") {
      //   window.history.replaceState(null, "", "/");
      // }
    } catch (error: any) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        description: error.message || error,
      });
    }
  };

  const signInGoogle = useGoogleLogin({
    onSuccess: (data) => {
      handleGoogleSignIn(data?.access_token);
    },
    onError: (error) => {
      console.error("error", error);
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const handleGoogleSignIn = async (userToken: string) => {
    try {
      const user = await authServices.signInWithGoogle(userToken);
      // if (result.email) {
      await signIn("credentials", {
        email: "",
        password: "",
        token: userToken,
        type: "GOOGLE_SIGN_IN",
        callbackUrl: redirectAfterLogin(user.projectsCount ?? 0),
      });
      // }
      //       if (typeof window !== "undefined") {
      //   window.history.replaceState(null, "", "/");
      // }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message || error,
      });
    }
  };

  const signInApple = async () => {
    appleAuthHelpers.signIn({
      authOptions: {
        /** Client ID - eg: 'com.example.com' */
        clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID as string,
        /** Requested scopes, seperated by spaces - eg: 'email name' */
        scope: "email name",
        /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
        redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/apple`,
        /** State string that is returned with the apple response */
        state: "state",
        /** Nonce */
        nonce: "nonce",
        /** Uses popup auth instead of redirection */
        usePopup: true,
      },
      onSuccess: ({ authorization: { id_token } }: AppleAuthResponse) => {
        handleAppleSignIn(id_token);
      },
      onError: (error: any) => {
        console.error("error", error);
        toast({
          description: "Something went wrong",
          variant: "destructive",
        });
      },
    });
  };

  const handleAppleSignIn = async (userToken: string) => {
    try {
      const user = await authServices.signInWithApple(userToken);
      // if (result.email) {
      await signIn("credentials", {
        email: "",
        password: "",
        token: userToken,
        type: "APPLE_SIGN_IN",
        callbackUrl: redirectAfterLogin(user.projectsCount ?? 0),
      });
      // }
      //       if (typeof window !== "undefined") {
      //   window.history.replaceState(null, "", "/");
      // }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message || error,
      });
    }
  };

  return (
    <>
      <div className={styles.login_content_box}>
        <div className={styles.login_wrp}>
          <div className=" w-full">
            <h3
              className={cn(
                global.head2_5,
                "font-bold font-InterSan text-website-TEXT_PRIMARY"
              )}
            >
              <span className="text-website-TEXT_PURPLE block">
                Welcome back!
              </span>{" "}
              Sign in to Continue
            </h3>
          </div>
          <div className={styles.auth_login}>
            <CustomButton
              variant="outline"
              size="lg"
              className={cn(
                styles.login_customButton,
                global.head6,
                " ring-transparent right-0 font-Nunito_web rounded-[9px]"
              )}
              onClick={() => signInGoogle()}
            >
              <FcGoogle />
              Sign In with Google
            </CustomButton>

            <CustomButton
              variant="outline"
              size="lg"
              className={cn(
                // styles.login_customButton,
                global.head6,
                " ring-transparent right-0 font-Nunito_web rounded-[9px] bg-black text-white hover:bg-black "
              )}
              onClick={() => signInApple()}
            >
              <FaApple className="text-white" />
              Sign In with Apple
            </CustomButton>
          </div>
          <div className={styles.line}></div>

          <div className={cn(styles.form_action, "w-full")} data-lenis-prevent>
            <form onSubmit={onSubmit}>
              <div className="w-full mb-6 relative">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Email Address
                </Label>
                <Input
                  placeholder="Enter your email"
                  className={cn(
                    "bg-transparent ",
                    styles.input_custom,
                    global.body2
                  )}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="w-full relative mb-6 ">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Password
                </Label>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className={cn(
                    "bg-transparent ",
                    styles.input_custom,
                    global.body2
                  )}
                  {...register("password", { required: true })}
                />
                <i
                  className=" absolute right-5 top-[50px]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <GoEye className="text-gray-600 cursor-pointer" />
                  ) : (
                    <GoEyeClosed className="text-gray-600 cursor-pointer" />
                  )}
                </i>

                {errors.password && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="w-full pt-3">
                <CustomButton
                  disabled={isSubmitting}
                  type="submit"
                  className={cn(
                    global.body2,
                    "text-white font-semibold w-full"
                  )}
                >
                  {isSubmitting && <LOADER_BTN />}
                  Login
                </CustomButton>
              </div>
            </form>
          </div>
          <div className={styles.bottom_info}>
            <p
              className={cn(
                global.caption1,
                "font-Nunito_web font-semibold",
                styles.caption
              )}
            >
              Don’t have an account -{" "}
              <button
                onClick={() => {
                  handleAuthType("SIGNUP");
                }}
                disabled={isLoading}
                className="text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </p>
            <button
              className={cn(
                global.caption1,
                "font-Nunito_web font-semibold text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
              )}
              onClick={() => {
                closeModal();
                setOpenForgotPasswordModal(true);
              }}
            >
              Forgot password ?
            </button>
          </div>
        </div>
        <div className={styles.modal_footer}>
          <p className={cn(global.caption1, "font-Nunito_web font-semibold ")}>
            By signing in you agree to the{" "}
            <Link
              href="https://gobyhomes.com/terms-of-services"
              target="_blank"
              className={cn(
                global.caption1,
                "text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
              )}
            >
              terms & conditions{" "}
            </Link>{" "}
            and{" "}
            <Link
              href="https://dev.gobyhomes.com/privacy-policy"
              target="_blank"
              className={cn(
                global.caption1,
                "text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
              )}
            >
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
