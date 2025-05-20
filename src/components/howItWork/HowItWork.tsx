import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./HowItWork.module.scss";
import Image from "next/image";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";

const HowItWorkCard = () => {};

const HowItWork = () => {
  return (
    <div className={cn(styles.howItSec, global.section_padding)}>
      <div className={cn(global.container)}>
        <div className={`${styles.inner_sec} ${global.padding_block}`}>
          <div className={styles.heading_section}>
            <h2
              className={cn(
                global.head1,
                styles.title,
                "font-semibold !leading-[1.15] font-InterSan"
              )}
            >
              How It
              <span className={styles.grad}> Works</span>
            </h2>
            <p
              className={cn(
                global.head4,
                styles.sub_text,
                "font-normal font-InterSan"
              )}
            >
              Goby Homes in four simple steps. 
            </p>
          </div>
          <div className={styles.grid_wrapper}>
            <div className={styles.grid_item}>
              <div className={styles.grid_content}>
                <div className={styles.number}>1</div>
                <p
                  className={cn(
                    global.head2_5,
                    styles.title,
                    "font-semibold font-InterSan"
                  )}
                >
                  Create a Project
                </p>
              </div>
              <div className={styles.icon}>
                <i className="flex">
                  <Image
                    width={217}
                    height={152}
                    src={UTILITY_CONSTANT.IMAGES.HOW_IT_WORK.HOW_IT_WORK1}
                    alt="step1"
                  />
                </i>
              </div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.grid_content}>
                <div className={styles.number}>2</div>
                <p
                  className={cn(
                    global.head2_5,
                    styles.title,
                    "font-semibold font-InterSan"
                  )}
                >
                  Invite Transactional Members
                </p>
              </div>
              <div className={styles.icon}>
                <i className="flex">
                  <Image
                    width={141}
                    height={163}
                    src={UTILITY_CONSTANT.IMAGES.HOW_IT_WORK.HOW_IT_WORK2}
                    alt="step1"
                  />
                </i>
              </div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.grid_content}>
                <div className={styles.number}>3</div>
                <p
                  className={cn(
                    global.head2_5,
                    styles.title,
                    "font-semibold font-InterSan"
                  )}
                >
                  Begin Collaborating
                </p>
              </div>
              <div className={styles.icon}>
                <i className="flex">
                  <Image
                    width={196}
                    height={164}
                    src={UTILITY_CONSTANT.IMAGES.HOW_IT_WORK.HOW_IT_WORK3}
                    alt="step1"
                  />
                </i>
              </div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.grid_content}>
                <div className={styles.number}>4</div>
                <p
                  className={cn(
                    global.head2_5,
                    styles.title,
                    "font-semibold font-InterSan"
                  )}
                >
                  Close Deals
                </p>
              </div>
              <div className={styles.icon}>
                <i className="flex">
                  <Image
                    width={326}
                    height={286}
                    src={UTILITY_CONSTANT.IMAGES.HOW_IT_WORK.HOW_IT_WORK4}
                    alt="step1"
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
