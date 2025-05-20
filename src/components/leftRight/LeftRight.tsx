import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./LeftRight.module.scss";
import Image from "next/image";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";

const LeftRight = () => {
  return (
    <div
      id="seamless-communication"
      className={cn(styles.leftRight, "mb-12")}

    >
      <div className={cn(global.container)}>
        <div className={`${styles.inner_sec}`}>
          <div className={styles.grid_wrapper}>
            <div className={styles.grid_item}>
              <div className={styles.image}>
              <i className="flex object-contain h-[763px] w-[470px]">
              <Image
                width={572}
                height={500}
                src={UTILITY_CONSTANT.IMAGES.LEFT_RIGHT.SEAMLESS_COMMUNICATION}
                alt="SEAMLESS COMMUNICATION"
              />
              </i>
              </div>
              <div className={styles.grid_content}>
                <h3
                  className={cn(
                    global.head1,
                    styles.title,
                    "font-semibold font-InterSan text-website-TEXT_PRIMARY"
                  )}
                >
                  Seamless Communication
                </h3>
                <p
                  className={cn(
                    global.head4,
                    styles.para,
                    "font-light font-InterSan"
                  )}
                >
                  We prioritize transparent, real-time communication to ensure{" "}
                  <span
                    className={cn(
                      "text-primary font-semibold",
                      global.blue_text
                    )}
                  >
                    all parties
                  </span>{" "}
                  involved in a real estate transaction remain aligned and
                  informed throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRight;
