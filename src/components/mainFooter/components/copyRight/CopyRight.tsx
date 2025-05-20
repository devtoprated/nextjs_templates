import React from "react";
import global from "@/theme/global/global.module.scss";
import styles from "./CopyRight.module.scss";
import Link from "next/link";
import GetInTouch from "../getInTouch/GetInTouch";

interface CopyRightProps {
  userDetails: any;
}

const CopyRight = ({ userDetails }: CopyRightProps) => {
  return (
    <div className={styles.copy_right_sec}>
      <div className={styles.inner_copy_right}>
        <div className={styles.left_side}>
          <p
            className={`${global.body2} transition-all ${styles.link} font-Nunito_web font-medium text-muted-textGray`}
          >
            Copyright 2024 Goby Homes, Inc.
          </p>
        </div>
        <div className={`${styles.middle}`}>
          {/* <Image
            src={UTILITY_CONSTANT.IMAGES.FOOTER.FOOTER_HOME_LOGO}
            alt="home_logo"
            width={39}
            height={40}
          /> */}
          <GetInTouch userDetails={userDetails} />
        </div>
        <div className={styles.right_side}>
          <Link
            href={"/help"}
            className={`${global.body2} transition-all ${styles.link} font-Nunito_web font-medium text-muted-textGray`}
          >
            Help
          </Link>
          <Link
            href={"/contact-us"}
            className={`${global.body2} transition-all ${styles.link} font-Nunito_web font-medium text-muted-textGray`}
          >
            Contact Us
          </Link>
          <Link
            href={"/terms-of-services"}
            className={`${global.body2} transition-all ${styles.link} font-Nunito_web font-medium text-muted-textGray`}
          >
            Terms of services
          </Link>
          <Link
            href={"/privacy-policy"}
            className={`${global.body2} transition-all ${styles.link} font-Nunito_web font-medium text-muted-textGray`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
