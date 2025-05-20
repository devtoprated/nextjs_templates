import React, { useEffect } from "react";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { GoBellFill } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/app/(project-property-pages)/components/documentTab/userForShareDocument/UserForShareDocument";
import { cn } from "@/lib/utils";
import { Notification } from "../Header";

interface Props {
  notifications: Notification[];
  handleNotificationClick: any;
}

const NotificationsComponent: React.FC<Props> = ({
  notifications,
  handleNotificationClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log("notifications", notifications);
  }, [notifications]);

  return (
    <>
      {notifications.map(
        (notification) =>
          !notification?.seen && (
            <DropdownMenuCheckboxItem
              className="p-0 cursor-pointer"
              key={notification?.id}
              onClick={() => {
                handleNotificationClick(notification?.id);
                router.push(notification?.link);
              }}
            >
              <div className="flex items-start gap-2 text-lg overflow-hidden p-2 rounded-sm">
                <div className="pt-1">
                  {notification?.senderName ? (
                    <Avatar className="w-10 h-10 min-w-10 rounded-lg">
                      {notification?.senderImage ? (
                        <AvatarImage
                          src={notification?.senderImage}
                          alt="profile"
                        />
                      ) : (
                        <AvatarFallback
                          className={cn("text-1xl bg-red-400 text-white")}
                        >
                          {getInitials(notification?.senderName)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  ) : (
                    <span className="w-10 h-10 block">
                      <GoBellFill size={24} />
                    </span>
                  )}
                </div>
                <div className="text-sm font-normal text-website-textLightPurple overflow-hidden">
                  <p className="overflow-hidden text-ellipsis">
                    {notification?.message}
                  </p>
                  <p className="font-light text-xs">
                    {formatDistanceToNow(
                      new Date(notification?.createdAt?.seconds * 1000),
                      { addSuffix: true }
                    )}
                  </p>
                </div>
              </div>
            </DropdownMenuCheckboxItem>
          )
      )}
    </>
  );
};

export default React.memo(NotificationsComponent);
