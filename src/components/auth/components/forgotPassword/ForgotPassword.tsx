import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./ForgotPassword.module.scss";
import { CustomButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlKey } from "react-icons/sl";
import authServices from "@/services/auth.services";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { LOADER_BTN } from "@/utilities/svgConstant";

type ForgotPasswordProps = {
  onModal: (val: boolean) => void;
  setOpenAuthModal: (val: boolean) => void;
  handleAuthType: any;
  onResetMailSuccessModal: any;
};

interface IFormData {
  email: string;
}

const forgotPasswordModalSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please provide your registered email" })
    .email()
    .trim(),
});

const ForgotPassword = ({
  onModal,
  handleAuthType,
  setOpenAuthModal,
  onResetMailSuccessModal,
}: ForgotPasswordProps) => {
  const { openModal } = useModal();
  const { toast } = useToast();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordModalSchema),
  });

  const sendResetPasswordEmailMutation = useMutation({
    mutationFn: async (email: string) => {
      await authServices.forgotPassword(email);
    },
    onSuccess: (data: any) => {
      onModal(false);
      onResetMailSuccessModal(true);
      setIsSubmiting(false);
    },
    onError: (error: AxiosError) => {
      console.log("sendResetPasswordEmailMutationError", error);
      setIsSubmiting(false);
      toast({
        description:
          error.message ||
          "There was an issue in sending the reset password email. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleResetPassword = async (data: IFormData) => {
    try {
      console.log("handleForgotPassword", data);
      sendResetPasswordEmailMutation.mutate(data?.email);
      setIsSubmiting(true);
    } catch (error) {
      console.log(error, "error>>>");
    }
  };

  return (
    <>
      <div className={styles.login_content_box}>
        <div className={styles.login_wrp}>
          <div className={styles.key}>
            <SlKey />
          </div>
          <div className=" w-full text-center">
            <h3
              className={cn(
                global.head2_5,
                "font-bold font-InterSan text-website-TEXT_PURPLE mb-2"
              )}
            >
              Forgot Password
            </h3>
            <p
              className={cn(
                global.body1,
                "font-Nunito_web font-semibold",
                styles.caption
              )}
            >
              Provide the email used to register and your rest instruction will
              be sent
            </p>
          </div>

          <div data-lenis-prevent className={cn(styles.form_action, "w-full")}>
            <form
              className="w-full"
              onSubmit={handleSubmit(handleResetPassword)}
            >
              <div className={cn(styles.input_group, "w-full mb-6 ")}>
                <div className="w-full relative mb-1">
                  <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-1 block">
                    Email Address
                  </Label>
                  <Input
                    {...register("email")}
                    placeholder="Email Address"
                    defaultValue=""
                    className={cn(
                      "bg-transparent ",
                      styles.input_custom,
                      global.body2
                    )}
                  />
                  {errors?.email?.message && (
                    <p className="absolute text-red-600 text-sm">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <CustomButton
                size="lg"
                className={cn(
                  styles.auth_btn,
                  styles.active,
                  "ring-transparent w-full"
                )}
                disabled={isSubmiting}
              >
                Reset Password
                {isSubmiting && <LOADER_BTN />}
              </CustomButton>
            </form>
            <button
              onClick={() => {
                openModal("auth");
                handleAuthType("LOGIN");
                onModal(false);
              }}
              className={cn(
                "hover:text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out text-center mx-auto block mt-8 text-g",
                styles.caption,
                global.body2
              )}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
