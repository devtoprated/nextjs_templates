import React from "react";
import styles from "./AgentGetInTouch.module.scss";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

type GetInTouchProps = {
  purple?: boolean;
  userDetails?: any;
};

const AgentGetInTouch = ({ purple, userDetails }: GetInTouchProps) => {
  return (
    <div className={styles.menu_list}>
      <div className={styles.social_sec}>
        {
          userDetails?.facebookURL && (
            <Link
              href={userDetails?.facebookURL ? userDetails?.facebookURL : "#"}
              target="_blank"
              className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
            >
              <FaSquareFacebook size={20} />
            </Link>
          )
        }
        {
          userDetails?.twitterURL && (
            <Link
              href={
                userDetails?.twitterURL}
              target="_blank"
              className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
            >
              <FaXTwitter size={20} />
            </Link>
          )
        }
        {                             
          userDetails?.linkedinURL && (
            <Link
              href={
                userDetails?.linkedinURL}
              target="_blank"
              className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
            >
              <FaLinkedinIn size={20} />
            </Link>
          )
        }
        {
          userDetails?.instagramURL && (
            <Link
              href={
                userDetails?.instagramURL}
              target="_blank"
              className={`${styles.link} ${purple ? "text-primary" : "text-white"}`}
            >
              <FaInstagram size={20} />
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default AgentGetInTouch;
