import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./ForgotPassword.module.scss";
import { CustomButton } from "@/components/ui/button";
import { SlKey } from "react-icons/sl";
import { useModal } from "@/context/ModalContext";

type ForgotPasswordProps = {
  onModal: (val: boolean) => void;
  setOpenAuthModal: any;
  handleAuthType: any;
};

const ResetPasswordSuccess = ({
  onModal,
  setOpenAuthModal,
  handleAuthType,
}: ForgotPasswordProps) => {
  const { openModal } = useModal();

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
              Reset email sent
            </h3>
            <p
              className={cn(
                global.body1,
                "font-Nunito_web font-semibold",
                styles.caption
              )}
            >
              We&apos;ve sent further instructions to you. Please check your
              email.
            </p>
          </div>

          <div data-lenis-prevent className={cn(styles.form_action, "w-full ")}>
            <div
              className={cn(
                "w-full flex justify-center items-center flex-col gap-4"
              )}
            >
              <CustomButton
                type="button"
                size="lg"
                className={cn(
                  styles.auth_btn,
                  styles.active,
                  "ring-transparent  mx-auto"
                )}
                onClick={() => onModal(false)}
              >
                Ok
              </CustomButton>
              <button
                onClick={() => {
                  setOpenAuthModal(true);
                  openModal("auth");
                  handleAuthType("LOGIN");
                  onModal(false);
                }}
                className={cn(
                  "hover:text-website-TEXT_PURPLE hover:tracking-wider transition-all duration-300 ease-in-out text-center mx-auto block mt-4 text-g",
                  styles.caption,
                  global.body2
                )}
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordSuccess;
