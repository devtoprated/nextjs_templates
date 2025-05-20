import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./exploring.module.scss";
import Image from "next/image";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import { PLAY } from "@/utilities/svgConstant";

const Exploring = () => {
  return (
    <>
      <div
        className={cn(
          styles.exploring_sec,
        )}
      >
        <div className={cn(styles.custom_container)}>
          <div className={styles.inner_sec}>
            <div className={cn(styles.exploring, "max-w-xl")}>
              <div className={cn(`w-fit ${styles.f_logo}`)}>
                <Image
                  src={UTILITY_CONSTANT.IMAGES.AUTH.WHITE_LOGO}
                  width={260}
                  height={39}
                  alt="logo"
                  className="w-full"
                />
              </div>
              <h2
                className={cn(
                  global.extra2,
                  "font-medium text-secondary-textWhite text-center"
                )}
              >
                Exploring in just Under 2 minutes
              </h2>

              <div className={cn(styles.play)}>
                <PLAY />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exploring;
