import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./Hero.module.scss";
import Image from "next/image";
import {playStoreLink, appleLink, UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import { DiApple } from "react-icons/di";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { CustomButton } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className={cn(styles.heroHome_sec, global.section_padding)}>
        <div className={cn(`${global.container}`)}>
          <div className={cn(styles.innerWrap_content)}>
            <div className={cn(styles.left_content)}>
              <div className={cn(`${styles.inner_content}`)}>
                <h4 className={cn(global.head3, styles.hero_sub_title)}>
                  Empowering Connectivity
                </h4>
                <h1 className={`${global.extra2} ${styles.hero_title}`}>
                  Streamlining Real Estate Transactions with{" "}
                  <span className={cn(global.blue_text)}>
                    Unified Collaboration
                  </span>
                </h1>
              </div>
              <div className={cn(styles.herobox)}>
                <p className={cn(global.body1, "text-black font-medium")}>
                Download Our Mobile App for the Ultimate Collaborative Experience!
                  {/* Mobile app coming soon */}
                </p>
              </div>
              <div className={cn(styles.hero_bottomInfo)}>
                <div className={cn(styles.hero_social)}>
                  <div className={styles.social_box}>
                    <div className={styles.box}>
                      <Link href={playStoreLink} target="_blank">
                        <Image
                          src={UTILITY_CONSTANT.IMAGES.HOME.PLAY_STORE}
                          width={23}
                          height={26}
                          alt="hero"
                        />
                      </Link>
                    </div>
                    <div className={styles.box}>
                      <Link href={appleLink} target="_blank">
                        <DiApple />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.hero_btn}>
                  <Link href="/free-trial">
                    <CustomButton className=" bg-white text-primary hover:text-white min-h-16">
                      <p>Start 14-day free trial</p>
                      <i>
                        <HiArrowUpRight />
                      </i>
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
            <div className={cn(styles.right_content)}>
              <div className={cn(`${styles.right_inner_content}`)}>
                <div className={cn("w-fit m-auto relative")}>
                  <Image
                    src={UTILITY_CONSTANT.IMAGES.HOME.HOME_HERO}
                    width={576}
                    height={576}
                    alt="hero"
                    quality={100}
                    placeholder="blur"
                  />
                  <div className={cn(`${styles.heroSmall_img}`)}>
                    <div className={cn(`${styles.heroSmall_imgBox}`)}>
                      <Image
                        src={UTILITY_CONSTANT.IMAGES.HOME.HERO_SMALL}
                        width={218}
                        height={218}
                        alt="hero"
                        className={styles.Small_img}
                      />
                      <div className={styles.content_box2}>
                        <p
                          className={cn(
                            global.details,
                            styles.custom_text,
                            " font-light font-InterSan text-white leading-7"
                          )}
                        >
                          YESSS!
                        </p>
                        <Image
                          src={UTILITY_CONSTANT.IMAGES.HOME.HOME}
                          width={19}
                          height={20}
                          alt="home"
                          // className="w-full max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content_box}>
                    <p
                      className={cn(
                        global.details,
                        styles.custom_text,
                        " font-light font-InterSan text-white leading-7"
                      )}
                    >
                      I have great news! Your offer has been ACCEPTED!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
