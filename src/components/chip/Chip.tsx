import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./Chip.module.scss";

interface chipInterface {
  title: string;
  extraClass?: string;
}

const Chip = ({ title, extraClass }: chipInterface) => {
  return (
    <>
      <div
        className={cn(
          `${styles.chip} ${global.body2} ${extraClass && styles[extraClass]} "font-Nunito_web"`
        )}
      >
        {title}
      </div>
    </>
  );
};

export default Chip;
