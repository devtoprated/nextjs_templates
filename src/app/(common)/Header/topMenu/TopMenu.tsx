"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import global from "@/theme/global/global.module.scss";
import styles from "./TopMenu.module.scss";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const menu = [
  {
    id: 0,
    text: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    text: "Records",
    link: "/records",
  },
  {
    id: 1,
    text: "Calendar",
    link: "/calendar",
  },
  {
    id: 2,
    text: "Pricing",
    link: `${process.env.NEXT_PUBLIC_PRICING_URL as string}`,
  },
];

interface TopMenuInterface {
  extraClass?: string;
  userDetails?: any;
}

const TopMenu = ({ extraClass }: TopMenuInterface) => {
  const pathName = usePathname();
  const session = useSession();

  const userCheck = ["broker", "agent", "personal", "professional", "team"];

  return (
    <>
      <div
        className={`${styles.NavbarItems} ${extraClass && styles[extraClass]}`}
      >
        {menu.map((item, index) => {
          return (
            <div key={item.id}>
              {item.text === "Records" ? (
                <>
                  {session?.data &&
                    userCheck.includes(session?.data?.userType) && (
                      <>
                        <Link
                          key={item.id}
                          href={item?.link ? item.link : `#`}
                          className={`${styles.NavItems} ${
                            item.link === pathName && styles.active
                          }  font-bold ${global.body1} text-black `}
                        >
                          <span className="inline-block font-Nunito_web p-1 transition duration-200 ease-out">
                            {item.text}
                          </span>
                        </Link>
                      </>
                    )}
                </>
              ) : (
                <Link
                  key={item.id}
                  href={item?.link ? item.link : `#`}
                  className={`${styles.NavItems} ${
                    item.link === pathName && styles.active
                  }  font-bold ${global.body1} text-black `}
                >
                  <span className="inline-block font-Nunito_web p-1 transition duration-200 ease-out">
                    {item.text}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopMenu;
