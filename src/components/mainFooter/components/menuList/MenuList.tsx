import global from "@/theme/global/global.module.scss";
import styles from "./MenuList.module.scss";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaHouseDamage } from "react-icons/fa";

const MenuList = () => {
  return (
    <div className={styles.menu_list}>
      <div className={styles.menu_title}>
        <h3
          className={cn(
            `w-full font-semibold ${global.head4} ${styles.title} font-Nunito_web`
          )}
        >
          Explore
        </h3>
      </div>
      <ul className={styles.List_wrapper}>
        <li className={styles.list_item}>
          <Link
            className={`w-full font-light ${global.body1} ${styles.link} `}
            href={"#"}
          >
            <i className={styles.rounded_icon}>
              <FaHouseDamage />
            </i>
            Remix
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            className={`w-full font-light ${global.body1} ${styles.link} `}
            href={"#"}
          >
            <i className={styles.rounded_icon}>
              <FaHouseDamage />
            </i>
            Original Tracks
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            className={`w-full font-light ${global.body1} ${styles.link} `}
            href={"#"}
          >
            <i className={styles.rounded_icon}>
              <FaHouseDamage />
            </i>
            Creative Moods
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            className={`w-full font-light ${global.body1} ${styles.link} `}
            href={"#"}
          >
            <i className={styles.rounded_icon}>
              <FaHouseDamage />
            </i>
            Featured Contest
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
