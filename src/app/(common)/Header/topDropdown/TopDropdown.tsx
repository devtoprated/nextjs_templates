"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import global from "@/theme/global/global.module.scss";
import styles from "./TopDropdown.module.scss";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomButton } from "@/components/ui/button";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import TopMenu from "../topMenu/TopMenu";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import _ from "lodash";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import profileServices from "@/services/profile.services";
import { useQuery } from "@tanstack/react-query";
import { CIRCLE_USER } from "@/utilities/svgConstant";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import GlobalModal from "@/components/globalModal/GlobalModal";
import Auth from "@/components/auth/Auth";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ForgotPassword from "@/components/auth/components/forgotPassword/ForgotPassword";
import ResetPasswordSuccess from "@/components/auth/components/forgotPassword/ResetPasswordSuccess";
import { auth } from "@/configs/firebase.config";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface TopDropdownPropsInterface {
  userDetails?: any;
}

type AuthType = "LOGIN" | "SIGNUP";

const TopDropdown = ({ userDetails }: TopDropdownPropsInterface) => {
  const { openModal } = useModal();
  const [type, setType] = useState<AuthType>("LOGIN");
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const [openResetMailSuccessModal, setOpenResetMailSuccessModal] =
    useState<boolean>(false);

  const [openForgotPasswordModal, setOpenForgotPasswordModal] =
    useState<boolean>(false);
  const session = userDetails;

  const handleAuthType = (val: string) => {
    setType(val as AuthType);
  };

  const onForgotPassChangeHandler = (val: boolean) => {
    setOpenForgotPasswordModal(val);
  };

  const onResetMailSuccessChangeHandler = (val: boolean) => {
    setOpenResetMailSuccessModal(val);
  };

  const uid = session?.uid as string;
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await profileServices.getUserDetails(uid);
    },
  });


  const logout = async () => {
    try {
      localStorage.clear();
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  function getInitials(fullName: string) {
    const nameArray = fullName?.split(" ");
    let initials = "";

    if (Array.isArray(nameArray)) {
      nameArray.forEach((word) => {
        const initial = word.charAt(0).toUpperCase();
        initials += initial;
      });
      return initials;
    } else {
      return "N/A";
    }
  }

  return (
    <>
      <GlobalModal modalId="auth_agent">
        <Auth
          type={type}
          handleAuthType={handleAuthType}
          setOpenForgotPasswordModal={setOpenForgotPasswordModal}
        />
      </GlobalModal>
      <Dialog
        open={openForgotPasswordModal}
        onOpenChange={setOpenForgotPasswordModal}
      >
        <DialogContent className="max-w-lg">
          <ForgotPassword
            onModal={onForgotPassChangeHandler}
            setOpenAuthModal={setOpenAuthModal}
            handleAuthType={handleAuthType}
            onResetMailSuccessModal={onResetMailSuccessChangeHandler}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openResetMailSuccessModal}
        onOpenChange={setOpenResetMailSuccessModal}
      >
        <DialogContent className="max-w-lg">
          {/* <ForgotPassword
            onModal={onChangeHandler}
            handleAuthType={handleAuthType}
          /> */}
          <ResetPasswordSuccess
            onModal={onResetMailSuccessChangeHandler}
            setOpenAuthModal={setOpenAuthModal}
            handleAuthType={handleAuthType}
          />
        </DialogContent>
      </Dialog>
      {session && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomButton
              className={cn(
                styles.drop_btn,
                "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 "
              )}
            >
              <div className={styles.content_box}>
                <div className={styles.box_info}>
                  <h3
                    className={cn(
                      global.head6,
                      "text-black font-semibold font-Nunito_web transition duration-300 ease-in-out"
                    )}
                  >
                    {/* {_.get(session, "displayName", "N/A")} */}
                    {data && data.displayName}
                  </h3>
                  <h4
                    className={cn(
                      global.caption1,
                      "text-black font-semibold font-Nunito_web transition duration-300 ease-in-out"
                    )}
                  >
                    {data && `My Profile`}
                  </h4>
                </div>
                <div className={styles.box_img}>
                  <Avatar className="w-11 h-11 rounded-lg">
                    {data && data?.profileImage ? (
                      <AvatarImage src={data?.profileImage} alt="profile" />
                    ) : (
                      <AvatarFallback
                        className={cn("text-1xl bg-red-400 text-white")}
                      >
                        {/* @ts-ignore */}
                        {data && getInitials(data.displayName)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>
              </div>
              <i className={styles.drop}>
                {" "}
                <TiArrowSortedDown />
              </i>
            </CustomButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[999]">
            {/* @ts-ignore */}
            {session?.userType && session?.userType !== "personal" && (
              <Link href="profile">
                <DropdownMenuItem
                  className={cn("px-4 cursor-pointer", styles.menu)}
                >
                  View Profile
                </DropdownMenuItem>
              </Link>
            )}

            {/* @ts-ignore */}
            {session?.userType && (
              <Link href="update-profile">
                <DropdownMenuItem
                  className={cn("px-4 cursor-pointer", styles.menu)}
                >
                  Update Profile
                </DropdownMenuItem>
              </Link>
            )}
            {session?.uid && (
              <DropdownMenuItem
                onClick={logout}
                className={cn("px-4 cursor-pointer", styles.menu)}
              >
                Log out
              </DropdownMenuItem>
            )}
            {!session?.uid && (
              <DropdownMenuItem className={cn("px-4", styles.menu)}>
                Login / Signup
              </DropdownMenuItem>
            )}
           
           <SessionProvider>
           <TopMenu extraClass="mini_menuBar" />
           </SessionProvider>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {!session && (
        <CustomButton
          variant={"outline"}
          size={"lg"}
          className="text-sm font-bold "
          onClick={() => openModal("auth_agent")}
        >
          <i className="flex">
            <CIRCLE_USER />
          </i>
          Login / Signup
        </CustomButton>
      )}
    </>
  );
};

export default TopDropdown;
