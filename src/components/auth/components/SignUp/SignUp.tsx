import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./SignUp.module.scss";
import { CustomButton } from "@/components/ui/button";
import { AUTH_AGENT, AUTH_USER, LOADER_BTN } from "@/utilities/svgConstant";
import { GoEye, GoEyeClosed, GoPerson } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import authServices from "@/services/auth.services";
import { useState } from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { useGoogleLogin } from "@react-oauth/google";
import { signIn } from "next-auth/react";
import { useModal } from "@/context/ModalContext";
import { useSearchParams } from "next/navigation";
import { FaApple, FaRegBuilding } from "react-icons/fa6";
import { appleAuthHelpers, AppleAuthResponse } from "react-apple-signin-auth";
import { GrBriefcase, GrGroup, GrUserWorker } from "react-icons/gr";
import { LuUser } from "react-icons/lu";

type SignInProps = {
  handleAuthType: (val: string) => void;
};

const SignUp = ({ handleAuthType }: SignInProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { closeModal } = useModal();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>("");
  const { toast } = useToast();
  const searchParams = useSearchParams();

  let SignUpSchema = zod
    .object({
      firstName: zod
        .string()
        .trim()
        .min(1, { message: "First Name is required" })
        .regex(/^[a-zA-Z\s]+$/, {
          message: "First Name must only contain letters",
        }),
      lastName: zod
        .string()
        .trim()
        .min(1, { message: "Last Name is required" })
        .regex(/^[a-zA-Z\s]+$/, {
          message: "Last Name must only contain letters",
        }),
      email: zod
        .string()
        .min(1, { message: "Email is required" })
        .email()
        .trim()
        .transform((val) => val.toLowerCase()),
      password: zod
        .string()
        .trim()
        .min(6, { message: "Password must contain at least 6 characters" }),
      userType: zod.enum([
        "personal",
        "agent",
        "broker",
        "team",
        "professional",
      ]),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isLoading },
  } = useForm<zod.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      userType: "personal",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await authServices.signUp(data);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        type: "SIGN_IN",
        callbackUrl: searchParams.get("redirect")
          ? (searchParams.get("redirect") as string)
          : "/choose-create-join-project",
      });
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "/");
      }
      closeModal();
      toast({
        variant: "success",
        description: "You have successfully signed up.",
      });
      setIsSubmitting(false);
    } catch (error: any) {
      setIsSubmitting(false);
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const signUpGoogle = useGoogleLogin({
    onSuccess: (data) => handleGoogleLogin(data?.access_token),
    onError: (error) => {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const handleGoogleLogin = async (accessToken: string) => {
    try {
      const result: any = await authServices.signUpWithGoogle(
        accessToken,
        userType
      );
      // await signIn("google", {
      //   callbackUrl: searchParams.get("redirect")
      //     ? (searchParams.get("redirect") as string)
      //     : "/choose-create-join-project",
      // });

      await signIn("credentials", {
        email: "",
        password: "",
        token: accessToken,
        type: "GOOGLE_SIGN_IN",
        callbackUrl: searchParams.get("redirect")
          ? (searchParams.get("redirect") as string)
          : "/choose-create-join-project",
      });

      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "/");
      }
      closeModal();
      toast({
        variant: "success",
        description: "You have successfully signed up.",
      });
    } catch (error: any) {
      console.log(error);
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const signUpApple = () => {
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
        handleAppleLogin(id_token);
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

  const handleAppleLogin = async (accessToken: string) => {
    try {
      const result: any = await authServices.signUpWithApple(
        accessToken,
        userType
      );

      await signIn("credentials", {
        email: "",
        password: "",
        token: accessToken,
        type: "APPLE_SIGN_IN",
        callbackUrl: searchParams.get("redirect")
          ? (searchParams.get("redirect") as string)
          : "/choose-create-join-project",
      });

      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "/");
      }
      closeModal();
      toast({
        variant: "success",
        description: "You have successfully signed up.",
      });
    } catch (error: any) {
      console.log(error);
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {userType.length == 0 ? (
        <>
          <div className={styles.login_content_box}>
            <div className={styles.login_wrp}>
              <div className=" w-full ">
                <h3
                  className={cn(
                    global.head2_5,
                    "font-bold font-InterSan text-website-TEXT_PURPLE"
                  )}
                >
                  Select Account Type
                </h3>
              </div>
            </div>
            <div className={styles.auth_login_accountType}>
              <CustomButton
                variant="outline"
                size="lg"
                className={
                  userType === "personal"
                    ? cn(styles.auth_btn, styles.active, "ring-transparent ")
                    : cn(styles.auth_btn, "ring-transparent ")
                }
                onClick={() => {
                  setValue("userType", "personal");
                  setUserType("personal");
                }}
              >
                <LuUser size={20} />
                Personal
              </CustomButton>

              <CustomButton
                variant="outline"
                size="lg"
                className={
                  userType === "agent"
                    ? cn(styles.auth_btn, styles.active, "ring-transparent ")
                    : cn(styles.auth_btn, "ring-transparent ")
                }
                onClick={() => {
                  setValue("userType", "professional");
                  setUserType("professional");
                }}
              >
                {/* <AUTH_AGENT /> */}
                <GrUserWorker size={20} />
                Professional
              </CustomButton>

              <CustomButton
                variant="outline"
                size="lg"
                className={
                  userType === "agent"
                    ? cn(styles.auth_btn, styles.active, "ring-transparent ")
                    : cn(styles.auth_btn, "ring-transparent ")
                }
                onClick={() => {
                  setValue("userType", "agent");
                  setUserType("agent");
                }}
              >
                {/* <AUTH_AGENT /> */}
                <GrBriefcase size={20} />
                Agent
              </CustomButton>

              <CustomButton
                variant="outline"
                size="lg"
                className={
                  userType === "team"
                    ? cn(styles.auth_btn, styles.active, "ring-transparent ")
                    : cn(styles.auth_btn, "ring-transparent ")
                }
                onClick={() => {
                  setValue("userType", "team");
                  setUserType("team");
                }}
              >
                <GrGroup size={20} />
                Team
              </CustomButton>

              <CustomButton
                variant="outline"
                size="lg"
                className={
                  userType === "broker"
                    ? cn(styles.auth_btn, styles.active, "ring-transparent ")
                    : cn(styles.auth_btn, "ring-transparent ")
                }
                onClick={() => {
                  setValue("userType", "broker");
                  setUserType("broker");
                }}
              >
                <FaRegBuilding size={20} />
                Broker
              </CustomButton>
            </div>

            <div className="justify-center items-center w-full text-center ">
              <div className={styles.bottom_info}>
                <p
                  className={cn(
                    global.caption1,
                    "font-Nunito_web font-semibold",
                    styles.caption
                  )}
                >
                  Already have an account? -
                  <button
                    onClick={() => {
                      handleAuthType("LOGIN");
                    }}
                    className="text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
                  >
                    Login
                  </button>
                </p>
              </div>
              <div className={styles.modal_footer}>
                <p
                  className={cn(
                    global.caption1,
                    "font-Nunito_web font-semibold "
                  )}
                >
                  By signing in you agree to the{" "}
                  <Link
                    href="https://gobyhomes.com/terms-of-services"
                    target="_blank"
                    className={cn(
                      global.caption1,
                      "text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
                    )}
                  >
                    terms & conditions
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
          </div>
        </>
      ) : (
        <>
          <div className={styles.login_content_box}>
            <div className={styles.login_wrp}>
              <div className=" w-full ">
                <h3
                  className={cn(
                    global.head2_5,
                    "font-bold font-InterSan text-website-TEXT_PURPLE"
                  )}
                >
                  Sign Up with
                </h3>
              </div>
              <div className={styles.auth_login} />
              <div className={cn(styles.auth_login, styles.auth_loginSign)}>
                <CustomButton
                  variant="outline"
                  size="lg"
                  className={cn(
                    styles.login_customButton,
                    global.head6,
                    " ring-transparent right-0 font-Nunito_web rounded-[9px]"
                  )}
                  onClick={() => signUpGoogle()}
                >
                  <FcGoogle />
                  Sign Up with Google
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="lg"
                  className={cn(
                    // styles.login_customButton,
                    global.head6,
                    " ring-transparent right-0 font-Nunito_web rounded-[9px] bg-black text-white hover:bg-black "
                  )}
                  onClick={() => signUpApple()}
                >
                  <FaApple className="text-white" />
                  Sign Up with Apple
                </CustomButton>
              </div>
              <div className={styles.line}></div>

              <div
                data-lenis-prevent
                className={cn(styles.form_action, "w-full")}
              >
                <form onSubmit={onSubmit} className="w-full">
                  <div className={cn(styles.input_group, "w-full mb-6 ")}>
                    <div className="w-full relative mb-1">
                      <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-1 block">
                        First Name
                      </Label>
                      <Input
                        placeholder="Enter your first name"
                        className={cn(
                          "bg-transparent ",
                          styles.input_custom,
                          global.body2
                        )}
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className={cn("absolute  text-red-600 text-xs")}>
                          {errors.firstName.message}
                          {/* First Name is required */}
                        </p>
                      )}
                    </div>
                    <div className="w-full mb-1 relative">
                      <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-1 block">
                        Last Name
                      </Label>
                      <Input
                        placeholder="Enter your last name"
                        className={cn(
                          "bg-transparent ",
                          styles.input_custom,
                          global.body2
                        )}
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <p className={cn("absolute  text-red-600 text-xs")}>
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full mb-6 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-1 block">
                      Email Address
                    </Label>
                    <Input
                      placeholder="Enter your email"
                      className={cn(
                        "bg-transparent ",
                        styles.input_custom,
                        global.body2
                      )}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className={cn("absolute  text-red-600 text-xs")}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full relative mb-6 ">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-1 block">
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
                      {...register("password")}
                    />
                    <i
                      className=" absolute right-5 top-[43px]"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <GoEye className="text-gray-600 cursor-pointer" />
                      ) : (
                        <GoEyeClosed className="text-gray-600 cursor-pointer" />
                      )}
                    </i>
                    {errors.password && (
                      <p className={cn("absolute  text-red-600 text-xs")}>
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
                      Sign Up
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
                  Already have an account? -
                  <button
                    onClick={() => {
                      handleAuthType("LOGIN");
                    }}
                    className="text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
            <div className={styles.modal_footer}>
              <p
                className={cn(
                  global.caption1,
                  "font-Nunito_web font-semibold "
                )}
              >
                By signing in you agree to the{" "}
                <Link
                  href="#"
                  className={cn(
                    global.caption1,
                    "text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out"
                  )}
                >
                  terms & conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
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
      )}
    </>
  );
};

export default SignUp;
