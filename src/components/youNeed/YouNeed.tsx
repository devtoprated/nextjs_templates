"use client";
import React, { useEffect, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./YouNeed.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { LANDING_VIDE_LINK, UTILITY_CONSTANT } from "@/utilities/utilityConstant";


const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetRect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const centerY = targetRect.top + scrollTop - (window.innerHeight / 2) + (targetRect.height / 2);
    
    window.scrollTo({
      top: centerY,
      behavior: 'smooth'
    });
  }
};

const YouNeed: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      const targetId = (e.currentTarget.getAttribute('href') ?? '').substring(1);
      if (targetId) {
        e.preventDefault();
        smoothScroll(targetId);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick as unknown as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick as unknown as EventListener);
      });
    };
  }, []);

  return (
    <SessionProvider>
      <div className={cn(styles.howItSec, global.section_padding)}>
        <div className={cn(global.container)}>
          <div className={`${styles.inner_sec} ${global.padding_block}`}>
            <div className={styles.heading_section}>
              <h2
                className={cn(
                  global.head1,
                  styles.title,
                  "font-semibold !leading-[1.15] font-InterSan p-3"
                )}
              >
                <span className="italic">Everything</span> and <span className="italic">Everyone</span> you need in
                <span className={styles.grad}> ONE PLACE</span>
              </h2>
            </div>
            <div className="relative flex justify-center p-9 my-3 h-5/6  rounded-lg">
              <div className="w-fit h-96 rounded-lg overflow-hidden shadow-lg">
                <video
                  className="absolute inset-0 w-full h-full rounded"
                  src={LANDING_VIDE_LINK}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                <div
                  className="absolute mt-2 top-full left-[43.5%] bg-opacity-60 flex items-center justify-center hover:bg-opacity-80 transition animate-bounce"
                >
                  <button
                    className="px-4 pt-2 py-2 text-white bg-primary bg-opacity-20 border border-white rounded-lg font-semibold hover:bg-opacity-40 transition"
                    onClick={() => {
                      window.open(LANDING_VIDE_LINK, "_blank");
                    }}>
                    Watch the overview
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.grid_wrapper}>
              <Link href="#seamless-communication">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED1}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Multi-Party Messaging
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#streamline-document-workflows">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED2}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Document Management + E-Signature
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#stay-organized">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED3}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Calendar Sync
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="#effortless-property">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED4}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Up-to-date Listings
                    </p>
                  </div>
                </div>
              </Link>
              {/* id="brokrage-interaction" */}
              <Link href="#brokrage-interaction">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED5}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Broker Admin Dashboard
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#alerts-updates">
                <div className={styles.grid_item}>
                  <div className={styles.icon}>
                    <i className="flex">
                      <Image
                        width={50}
                        height={50}
                        src={UTILITY_CONSTANT.IMAGES.YOUR_NEED.YOUR_NEED6}
                        alt="step1"
                      />
                    </i>
                  </div>
                  <div className={styles.grid_content}>
                    <p
                      className={cn(
                        global.body1,
                        styles.title,
                        "font-semibold font-InterSan"
                      )}
                    >
                      Alerts & Updates
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default YouNeed;

