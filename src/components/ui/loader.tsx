import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn("h-[200px] mt-[50px]", className)}>
      <div
        id="ball-1"
        className="inline-block bg-[#8d26fa] h-[12px] w-[12px] rounded-[25px] animate-[bounce_1.2s_infinite_0.4s] mr-1"
      />
      <div
        id="ball-2"
        className="inline-block bg-[#26a3fa] h-[12px] w-[12px] rounded-[25px] animate-[bounce_1.2s_infinite_0.5s]"
      />
      <div
        id="ball-3"
        className="inline-block bg-[#17e729] h-[12px] w-[12px] rounded-[25px] animate-[bounce_1.2s_infinite_0.6s] ml-1"
      />
    </div>
  );
};

export default Loader;
