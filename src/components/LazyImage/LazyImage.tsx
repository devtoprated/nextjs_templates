import _ from "lodash";
import React, { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./LazyImage.module.scss";

// interface LazyImageInterface {
//   extraClass?: string;
// }

export default function LazyImage({ src, extraClass, imgRef, ...props }: any) {
  const htmlRef = React.useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isImageLoaded, setIsImageLoaded] = React.useState(true);
  const [img, setImg] = React.useState<any>(null);
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setImg(src);
      setIsLoaded(false);
    },
    {
      threshold: 0.9,
    }
  );
  const debounce = _.debounce(() => {
    if (htmlRef.current) intersectionObserver.observe(htmlRef.current);
  }, 600);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(debounce, []);

  return (
    <div
      ref={htmlRef}
      className={`${styles.lazy_img_sec} ${extraClass && styles[extraClass]} global_lazy_img_sec`}
    >
      {isLoaded && isImageLoaded ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <img
          src={img}
          ref={imgRef && imgRef}
          alt=""
          onLoadedData={() => {
            setIsImageLoaded(false);
          }}
          {...props}
        />
      )}
    </div>
  );
}
