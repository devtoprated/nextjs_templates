"use client";
import Link from "next/link";
import global from "@/theme/global/global.module.scss";
import styles from "./MainHeader.module.scss";
import useWindowScroll from "@/lib/customHooks/useWindowScroll";
import { CustomButton } from "../ui/button";
import { CIRCLE_USER } from "@/utilities/svgConstant";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import _ from "lodash";
import { toast } from "../ui/use-toast";
import { useModal } from "@/context/ModalContext";
import { usePathname, useSearchParams } from "next/navigation";

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

interface MainHeaderInterface {
  data: any | null;
}
type AuthType = "LOGIN" | "SIGNUP";

const MainHeader = ({ data }: MainHeaderInterface) => {
  const scroll = useWindowScroll();
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const shouldOpenLoginModal = searchParams.get("login") === "true";

  const logout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };


  useEffect(() => {
    if (shouldOpenLoginModal) {
      console.log(searchParams.get("login"));
      openModal("auth");
    }
  }, [shouldOpenLoginModal]);

  return (
    <>
      <header
        className={`${styles.header_section} ${global.section_padding} ${scroll >= 40 && styles.fixed_nav
          } transition-all`}
      >
        <div className={`${global.container}`}>
          <div className={`${styles.navbar} transition-all`}>
            <div className={styles.navbarBrand}>
              <Link href={"/"}>
                <img
                  src="assets/images/dashboard/d-logo.png"
                  width={254}
                  height={39}
                  alt="logo"
                />
              </Link>
            </div>

            <div id={styles.menuToggle}>
              <input type="checkbox" className={` text-black`} />
              <span className={` ${styles.line} bg-white/65`}></span>
              <span className={` ${styles.line} bg-white/65`}></span>
              <span className={` ${styles.line} bg-white/65`}></span>
              <ul className={styles.menu}>
                {menu.map((item) => {
                  if (data) {
                    return (
                      <li className={styles.text_list} key={item.id}>
                        <Link
                          href={item.link}
                          className={`${styles.link} w-full ${item.id === 0 && styles.active
                            } group font-bold  ${global.head3
                            } uppercase text-black overflow-hidden`}
                        >
                          <span className="inline-block font-Nunito_web p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                            {item.text}
                          </span>
                          <span className="absolute left-0 inline-block font-Nunito_web translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li className={styles.text_list} key={item.id}>
                        <Link
                          href={"#"}
                          onClick={() => {
                            toast({
                              description:
                                "Please login to access this feature.",
                              variant: "destructive",
                            });
                          }}
                          className={`${styles.link} w-full ${item.id === 0 && styles.active
                            } group font-bold  ${global.head3
                            } uppercase text-black overflow-hidden`}
                        >
                          <span className="inline-block font-Nunito_web p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                            {item.text}
                          </span>
                          <span className="absolute left-0 inline-block font-Nunito_web translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    );
                  }
                })}
                <li className={`${styles.text_list} mt-3 flex flex-col gap-5`}>
                  {data ? (
                    <>
                      <span className={`${styles.welcome} ${global.head3}`}>
                        Welcome, <b>{_.get(data, "displayName", "")}</b>!
                      </span>
                      <CustomButton
                        variant={"outline"}
                        size={"lg"}
                        className="text-sm font-bold w-fit "
                        onClick={() => logout()}
                      >
                        {" "}
                        Log out
                      </CustomButton>
                    </>
                  ) : (

                    <CustomButton
                      variant={"outline"}
                      size={"lg"}
                      className="text-sm font-bold"
                      onClick={() => openModal("auth")}
                    >
                      <i className="flex ">
                        <CIRCLE_USER />
                      </i>
                      Login / Signup
                    </CustomButton>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>


    </>
  );
};

export default MainHeader;
