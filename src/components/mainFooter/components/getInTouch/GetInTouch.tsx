import React from "react";
import styles from "./GetInTouch.module.scss";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

type GetInTouchProps = {
  purple?: boolean;
  userDetails?: any;
};

const GetInTouch = ({ purple, userDetails }: GetInTouchProps) => {
  return (
    <div className={styles.menu_list}>
      <div className={styles.social_sec}>
        {/* <Link
          href={userDetails?.facebookURL ? userDetails?.facebookURL : "#"}
          target="_blank"
          className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
        >
          <FaSquareFacebook size={20} />
        </Link> */}
        <Link
          href={
            userDetails?.twitterURL
              ? userDetails?.twitterURL
              : "https://x.com/GobyHomes"
          }
          target="_blank"
          className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
        >
          <FaXTwitter size={20} />
        </Link>
        <Link
          href={
            userDetails?.linkedinURL
              ? userDetails?.linkedinURL
              : "https://www.linkedin.com/company/goby-homes-inc/"
          }
          target="_blank"
          className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
        >
          <FaLinkedinIn size={20} />
        </Link>
        <Link
          href={
            userDetails?.instagramURL
              ? userDetails?.instagramURL
              : "https://www.instagram.com/gobyhomes/"
          }
          target="_blank"
          className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
        >
          <FaInstagram size={20} />
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
