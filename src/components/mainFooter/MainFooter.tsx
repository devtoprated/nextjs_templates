"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { playStoreLink,appleLink, UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import global from "@/theme/global/global.module.scss";
import styles from "./MainFooter.module.scss";
import Image from "next/image";
import GetInTouch from "./components/getInTouch/GetInTouch";
import CopyRight from "./components/copyRight/CopyRight";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

interface MainFooterProps {
  data: any;
}

const MainFooter = ({ data }: MainFooterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setClicked(true);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer
        className={cn(`w-full bg-primary-bgDarkPurple
         ${global.section_padding} ${styles.footer_sec}`)}
      >
        <div className={styles.top_scroll}>
          <div
            className={`${styles.top_arrow}	 ${clicked ? "clicked" : ""}`}
            onClick={scrollToTop}
          >
            <IoIosArrowUp />
          </div>
        </div>
        <div className={cn(`${global.container}`)}>
          <div className={cn("w-full")}>
            <div className={cn(`${styles.inner_content}`)}>
              <div className={cn(`w-fit ${styles.footer_content}`)}>
                <div className={cn(`w-fit ${styles.f_logo}`)}>
                  <Image
                    src={UTILITY_CONSTANT.IMAGES.AUTH.WHITE_LOGO}
                    width={260}
                    height={39}
                    alt="logo"
                    className="w-full"
                  />
                </div>
                <div className={cn(`w-full mt-5 ${styles.text_box}`)}>
                  <p
                    className={cn(
                      "font-normal text-website-FOOT_Text !leading-6",
                      global.body1
                    )}
                  >
                    {/* Goby Homes is a multi-party collaboration platform,
                    empowering brokers to streamline transaction and brokerage
                    management. */}
                    Connect. Collaborate. Close.
                  </p>
                </div>
              </div>

              <div className={styles.menu_sec}>
                <div className={styles.download_our_mobile}>
                  <div className={styles.our_mobile_wrapper}>
                    <p
                      className={cn(
                        "font-normal text-website-FOOT_Text",
                        global.body1,
                        styles.foot_text
                      )}
                    >
                      Download our Mobile app
                    </p>
                    <div className={styles.link_group}>
                      <Link href={playStoreLink} className={styles.app} target="_blank">
                        <Image
                          src={UTILITY_CONSTANT.IMAGES.FOOTER.PLAY_STORE}
                          width={29}
                          height={29}
                          alt="playstore"
                        />
                      </Link>
                      <Link href={appleLink}  target="_blank" className={styles.app}>
                        <Image
                          src={UTILITY_CONSTANT.IMAGES.FOOTER.APPLE}
                          width={19}
                          height={24}
                          alt="apple"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <ul className="flex justify-center md:justify-end items-center gap-x-12 gap-y-5 flex-wrap">
                    <li className="w-fit">
                      <a
                        href="/projects"
                        className={cn(
                          `w-full font-bold ${global.head6} ${styles.title} font-Nunito_web`
                        )}
                      >
                        Projects
                      </a>
                    </li>
                    <li className="w-fit">
                      <a
                         href="#"
                        className={cn(
                          `w-full font-bold ${global.head6} ${styles.title} font-Nunito_web`
                        )}
                      >
                        Calendar
                      </a>
                    </li>
                    <li className="w-fit">
                      <a
                        href="#"
                        className={cn(
                          `w-full font-bold ${global.head6} ${styles.title} font-Nunito_web `
                        )}
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <CopyRight userDetails={data} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
