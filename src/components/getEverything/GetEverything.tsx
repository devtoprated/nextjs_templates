import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./getEverything.module.scss";
import Image from "next/image";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import { CustomButton } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
const GetEverything = () => {
  return (
    <>
      <div className={cn(styles.everything_sec, global.section_padding)}>
        <div className={cn(global.container, styles.custom_container)}>
          <div className={styles.inner_sec}>
            <div className={cn(styles.left_box)}>
              <Image
                src={UTILITY_CONSTANT.IMAGES.EVERYTHING.EVERYTHING_BG}
                alt="everything"
                width={556}
                height={441}
                style={{
                  height: "600px",
                  objectFit: "contain",
                  
                }}
              />
            </div>
            <div className={cn(styles.right_box)}>
              <div className={cn(styles.content)}>
                <h2
                  className={cn(
                    global.head11,
                    " font-medium text-secondary-textWhite tracking-tighter"
                  )}
                >
                  Unlock Your Potential: Schedule Your Demo Today!
                </h2>
                <p
                  className={cn(
                    global.head4,
                    " font-light text-secondary-textWhite"
                  )}
                >
                  Book your personalized demo now to discover how our solutions
                  can transform your business, streamline operations, and drive
                  success.
                </p>
                <Link href={"/demo"}>
                  <CustomButton
                    variant={"outline"}
                    size={"lg"}
                    className={cn(
                      styles.demo_btn,
                      "min-h-16 text-xl font-InterSan font-medium text-secondary-textWhite bg-white/10 ring-white hover:bg-white hover:text-primary mt-5 drop-shadow-xl"
                    )}
                  >
                    <i className="flex">
                      <GoArrowUpRight />
                    </i>
                    Request a Demo
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetEverything;
