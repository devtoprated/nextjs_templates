"use client";
``;
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";
import { CustomButton } from "@/components/ui/button";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import TopDropdown from "./topDropdown/TopDropdown";
import TopMenu from "./topMenu/TopMenu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoBellFill } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationsComponent from "./notifications/Notifications";
import {
  NotificationProvider,
  useNotifications,
} from "./notifications/NotificationsContext";
import RightSideBar from "@/app/(project-property-pages)/projects/components/rightSideBar/RightSideBar";
import SideBar from "@/app/(project-property-pages)/projects/components/leftSideBar/SideBar";
import { SessionProvider } from "next-auth/react";

const SHEET_SIDES = ["left"] as const;

type DashboardHeader = (typeof SHEET_SIDES)[number];

interface HeaderPropsInterface {
  userDetails?: any;
}

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface Notification {
  id: string;
  createdAt: Timestamp;
  link: string;
  type: string;
  message: string;
  seen: boolean;
  senderImage?: string;
  senderName?: string;
}

const HeaderWithContext = ({ userDetails }: HeaderPropsInterface) => {
  const [activeSheet, setActiveSheet] = useState(false);
  const [activeSheetRight, setActiveSheetRight] = useState(false);
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  const { notifications, markAsSeen, clearAllNotifications } =
    useNotifications();
  const filteredNotfications =
    notifications?.filter((notification) => !notification.seen) || [];

  const handleSheetOpen = () => {
    setActiveSheet(true);
  };
  const handleSheetRightOpen = () => {
    setActiveSheetRight(true);
  };

  const handleNotificationClick = async (notificationId: string) => {
    await markAsSeen(notificationId);
  };

  useEffect(() => {
    // console.log("filteredNotfications 🎉🎉🎉", filteredNotfications);
  }, [filteredNotfications]);

  return (
    <>
      <Sheet open={activeSheet} onOpenChange={setActiveSheet}>
        <SheetContent className={cn(styles.listItems, "md:p-0")} side="left">
          <SideBar extraClass="responsive_menu" userDetails={userDetails} />
        </SheetContent>
      </Sheet>

      <Sheet open={activeSheetRight} onOpenChange={setActiveSheetRight}>
        <SheetContent className={styles.listItems} side="right">
          <RightSideBar extraClass="responsive_menu" />
        </SheetContent>
      </Sheet>

      <header className={`${styles.header_section}`}>
        <div className={`${styles.custom_container}`}>
          <div className={`${styles.navbar} transition-all`}>
            <CustomButton
              variant="outline"
              className={cn(styles.menu, "ring-borderGrey")}
              onClick={handleSheetOpen}
            >
              <HiMenu className="text-lg" />
            </CustomButton>
            <div className={styles.navbarBrand}>
              <Link href={"/"}>
                <Image
                  src={"/assets/images/dashboard/d-logo.png"}
                  width={245}
                  height={32}
                  alt="logo"
                  className={cn("", styles.d_logo)}
                />
                <Image
                  src={"/assets/images/dashboard/short_logo.png"}
                  width={30}
                  height={33}
                  alt="logo"
                  className={cn("", styles.d_logo_open)}
                />
              </Link>
            </div>

            <SessionProvider>
              <TopMenu />
            </SessionProvider>

            <div className={cn(styles.drop_info)}>
              {userDetails && (
                <div className={cn(styles.bell, "w-fit")}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <span>
                        <GoBellFill />
                        {Array.isArray(filteredNotfications) &&
                        filteredNotfications.length > 0 ? (
                          <div className={styles.count}>
                            {filteredNotfications.length}
                          </div>
                        ) : null}
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72 z-[999] relative right-[30px] translate-x-0">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="px-2 py-3 max-h-[350px] overflow-y-scroll">
                        <NotificationsComponent
                          notifications={filteredNotfications}
                          handleNotificationClick={handleNotificationClick}
                        />
                      </div>
                      <DropdownMenuSeparator />
                      <div
                        className="text-xs font-normal text-center pt-1 pb-2 text-website-TEXT_PURPLE cursor-pointer"
                        onClick={clearAllNotifications}
                      >
                        <span>Clear all</span>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}

              <TopDropdown userDetails={userDetails} />

              <CustomButton
                className={styles.menu2}
                onClick={handleSheetRightOpen}
              >
                <BsThreeDotsVertical className="text-lg" />
              </CustomButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Header: React.FC<HeaderPropsInterface> = ({ userDetails }) => {
  return (
    <NotificationProvider user={userDetails}>
      <HeaderWithContext userDetails={userDetails} />
    </NotificationProvider>
  );
};

export default Header;
