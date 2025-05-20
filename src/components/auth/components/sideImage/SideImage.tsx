import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import Image from "next/image";
import React, { FC } from "react";
import styles from './SideImage.module.scss';
import { cn } from "@/lib/utils";

// interface SideImageInterface {
//   image: any;
//   width: number;
//   height: number;
// }
// const authBg = [
//   {
//     image: UTILITY_CONSTANT.IMAGES.AUTH.LOGIN_BG,
//     width: 385,
//     height: 634,
//   },
// ];

const SideImage = () => {
  return (
    <>
      <div className={cn("w-full rounded-e-2xl", styles.img_box)}>

        <Image
          src={UTILITY_CONSTANT.IMAGES.AUTH.LOGIN_BG}
          alt=""
          width={373}
          height={621}
          className=" rounded-e-2xl object-cover "
        /> 
      </div>
    </>
  );
};

export default SideImage;
