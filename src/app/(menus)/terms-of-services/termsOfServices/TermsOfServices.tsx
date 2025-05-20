"use client";
import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./TermsOfServices.module.scss";

import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

const TermsOfServices = () => {
  const lenis: any = useLenis(({ scroll }) => {});
  return (
    <>
      <div
        className={cn("w-full", styles.contactUsForm, global.section_padding)}
      >
        <div className={cn(global.container)}>
          <div className={`${styles.inner_sec} ${global.padding_block}`}>
            <div className={cn("py-6")}>
              <h2
                className={cn(
                  styles.Privacy_heading2,
                  global.head2,
                  "font-InterSan text-website-TEXT_PRIMARY"
                )}
              >
                TERMS OF SERVICE
              </h2>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Last updated July 07, 2023
              </p>
            </div>
            <div className={cn("py-6")}>
              <h2
                className={cn(
                  styles.Privacy_heading2,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY"
                )}
              >
                AGREEMENT TO OUR LEGAL TERMS
              </h2>

              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We are Goby Homes, Inc. ("<strong>Company</strong>," "
                <strong>we</strong>," "<strong>us</strong>," "
                <strong>our</strong>"), a company registered in Delaware, United
                States, at 16192 Coastal Highway, Lewes, DE 19958.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We operate the website{" "}
                <Link
                  className={cn(
                    styles.Privacy_link,
                    global.blue_text,
                    "font-bold font-InterSan"
                  )}
                  href="/"
                >
                  https://gobyhomes.com/
                </Link>{" "}
                (the "<strong>Site</strong>"), as well as any other related
                products and services that refer or link to these legal terms
                (the "<strong>Legal Terms</strong>") (collectively, the "
                <strong>Services</strong>").
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Goby Homes is a 100% virtual real estate platform that connects
                all parties in the home-purchasing process onto one unified
                platform for a more collaborative, structured, and virtual
                home-buying experience.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You can contact us by phone at 240-528-0518, email at
                gobyhomesinc@gmail.com, or by mail to 13015 Britts Brook Lane,
                Waldorf, MD 20601, United States.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                ("you"), and Goby Homes, Inc., concerning your access to and use
                of the Services. You agree that by accessing the Services, you
                have read, understood, and agreed to be bound by all of these
                Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS,
                THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
                YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Legal
                Terms at any time and for any reason. We will alert you about
                any changes by updating the "Last updated" date of these Legal
                Terms, and you waive any right to receive specific notice of
                each such change. It is your responsibility to periodically
                review these Legal Terms to stay informed of updates. You will
                be subject to, and will be deemed to have been made aware of and
                to have accepted, the changes in any revised Legal Terms by your
                continued use of the Services after the date such revised Legal
                Terms are posted.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The Services are intended for users who are at least 18 years
                old. Persons under the age of 18 are not permitted to use or
                register for the Services.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We recommend that you print a copy of these Legal Terms for your
                records.
              </p>
              <h3
                className={cn(
                  styles.Privacy_heading2,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY font-bold"
                )}
              >
                TABLE OF CONTENTS
              </h3>

              <ul className={cn(styles.num_list, "pb-8")}>
                <li>
                  <Link
                    href={`#services`}
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#services`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold font-InterSan"
                    )}
                  >
                    1. OUR SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#ipr`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#ipr"
                  >
                    2. INTELLECTUAL PROPERTY RIGHTS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#user-representations"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#user-representations`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    3. USER REPRESENTATIONS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#user-registration"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#user-registration`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    4. USER REGISTRATION
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#purchases-and-payment"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#purchases-and-payment`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    5. PURCHASES AND PAYMENT
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#free-trial"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#free-trial`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    6. FREE TRIAL
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#cancellation"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#cancellation`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    7. CANCELLATION
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#software"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#software`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    8. SOFTWARE
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#prohibited-activities"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#prohibited-activities`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    9. PROHIBITED ACTIVITIES
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#user-generated-contributions"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#user-generated-contributions`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    10. USER GENERATED CONTRIBUTIONS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#contribution-license"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#contribution-license`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    11. CONTRIBUTION LICENSE
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#social-media"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#social-media`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    12. SOCIAL MEDIA
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#third-party-websites-and-content"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#third-party-websites-and-content`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    13. THIRD-PARTY WEBSITES AND CONTENT
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold  font-InterSan"
                    )}
                    href="#services-management"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#services-management`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    14. SERVICES MANAGEMENT
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#privacy-policy"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#privacy-policy`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    15. PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#copyright-infringements"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#copyright-infringements`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    16. COPYRIGHT INFRINGEMENTS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#term-and-termination"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#term-and-termination`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    17. TERM AND TERMINATION
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#modifications-and-interruptions"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#modifications-and-interruptions`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    18. MODIFICATIONS AND INTERRUPTIONS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#governing-law"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#governing-law`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    19. GOVERNING LAW
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#dispute-resolution"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#dispute-resolution`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    20. DISPUTE RESOLUTION
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#corrections"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#corrections`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    21. CORRECTIONS
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#disclaimer"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#disclaimer`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    22. DISCLAIMER
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#limitation-of-liability"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#limitation-of-liability`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    23. LIMITATIONS OF LIABILITY
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#indemnification"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#indemnification`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    24. INDEMNIFICATION
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#user-data"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#user-data`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    25. USER DATA
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#electronic-communications"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#electronic-communications`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#california-users-and-residents"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#california-users-and-residents`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    27. CALIFORNIA USERS AND RESIDENTS
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold   font-InterSan"
                    )}
                    href="#miscellaneous"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#miscellaneous`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    28. MISCELLANEOUS
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      styles.Privacy_link,
                      global.blue_text,
                      "font-semibold font-InterSan"
                    )}
                    href="#contact-us"
                    onClick={(e) => {
                      e.preventDefault();
                      lenis.scrollTo(`#contact-us`, {
                        lerp: 0.08,
                        offset: -100,
                        smoothTouch: true,
                      });
                    }}
                  >
                    29. CONTACT US
                  </Link>
                </li>
              </ul>

              <h3
                id="services"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                1. OUR SERVICES
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The information provided when using the Services is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the
                extent local laws are applicable.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The Services are not tailored to comply with industry-specific
                regulations (Health Insurance Portability and Accountability Act
                (HIPAA), Federal Information Security Management Act (FISMA),
                etc.), so if your interactions would be subjected to such laws,
                you may not use the Services. You may not use the Services in a
                way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
              <h3
                id="ipr"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                2. INTELLECTUAL PROPERTY RIGHTS
              </h3>
              <h4
                className={cn(
                  styles.Privacy_heading4,
                  global.head5,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                Our intellectual property
              </h4>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively, the
                "Content"), as well as the trademarks, service marks, and logos
                contained therein (the "Marks").
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around
                the world.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The Content and Marks are provided in or through the Services
                "AS IS" for your personal, non-commercial use or internal
                business purpose only.
              </p>

              <h4
                className={cn(
                  styles.Privacy_heading4,
                  global.head5,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                Your use of our Services
              </h4>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Subject to your compliance with these Legal Terms, including the
                "
                <a
                  className={cn(
                    styles.Privacy_link,
                    global.blue_text,
                    "font-bold font-InterSan"
                  )}
                  href="#prohibited-activities"
                  rel="”external"
                  onClick={(e) => {
                    e.preventDefault();
                    lenis.scrollTo(`#prohibited-activities`, {
                      lerp: 0.08,
                      offset: -100,
                      smoothTouch: true,
                    });
                  }}
                >
                  PROHIBITED ACTIVITIES
                </a>
                " section below, we grant you a non-exclusive, non-transferable,
                revocable license to:
              </p>
              <ul className={styles.list2}>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    access the Services; and
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    download or print a copy of any portion of the Content to
                    which you have properly gained access. solely for your
                    personal, non-commercial use or internal business purpose.
                  </p>
                </li>
              </ul>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to: gobyhomesinc@gmail.com.
                If we ever grant you the permission to post, reproduce, or
                publicly display any part of our Services or Content, you must
                identify us as the owners or licensors of the Services, Content,
                or Marks and ensure that any copyright or proprietary notice
                appears or is visible on posting, reproducing, or displaying our
                Content.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </p>
              <h4
                className={cn(
                  styles.Privacy_heading4,
                  global.head5,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                Your submissions and contributions
              </h4>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Please review this section and the "
                <Link
                  className={cn(
                    styles.Privacy_link,
                    global.blue_text,
                    "font-semibold font-InterSan"
                  )}
                  href="#prohibited-activities"
                  rel="”external"
                  onClick={(e) => {
                    e.preventDefault();
                    lenis.scrollTo(`#prohibited-activities`, {
                      lerp: 0.08,
                      offset: -100,
                      smoothTouch: true,
                    });
                  }}
                >
                  PROHIBITED ACTIVITIES
                </Link>
                " section carefully prior to using our Services to understand
                the (a) rights you give us and (b) obligations you have when you
                post or upload any content through the Services.
              </p>

              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                <strong>Submissions: </strong> By directly sending us any
                question, comment, suggestion, idea, feedback, or other
                information about the Services ("Submissions"), you agree to
                assign to us all intellectual property rights in such
                Submission. You agree that we shall own this Submission and be
                entitled to its unrestricted use and dissemination for any
                lawful purpose, commercial or otherwise, without acknowledgment
                or compensation to you.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                <strong>Contributions: </strong> The Services may invite you to
                chat, contribute to, or participate in blogs, message boards,
                online forums, and other functionality during which you may
                create, submit, post, display, transmit, publish, distribute, or
                broadcast content and materials to us or through the Services,
                including but not limited to text, writings, video, audio,
                photographs, music, graphics, comments, reviews, rating
                suggestions, personal information, or other material
                ("Contributions"). Any Submission that is publicly posted shall
                also be treated as a Contribution.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You understand that Contributions may be viewable by other users
                of the Services and possibly through third-party websites.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                <strong>
                  When you post Contributions, you grant us a license (including
                  use of your name, trademarks, and logos):{" "}
                </strong>
                By posting any Contributions, you grant us an unrestricted,
                unlimited, irrevocable, perpetual, non-exclusive, transferable,
                royalty-free, fully-paid, worldwide right, and license to: use,
                copy, reproduce, distribute, sell, resell, publish, broadcast,
                retitle, store, publicly perform, publicly display, reformat,
                translate, excerpt (in whole or in part), and exploit your
                Contributions (including, without limitation, your image, name,
                and voice) for any purpose, commercial, advertising, or
                otherwise, to prepare derivative works of, or incorporate into
                other works, your Contributions, and to sublicense the licenses
                granted in this section. Our use and distribution may occur in
                any media formats and through any media channels.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                This license includes our use of your name, company name, and
                franchise name, as applicable, and any of the trademarks,
                service marks, trade names, logos, and personal and commercial
                images you provide.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                <strong>
                  You are responsible for what you post or upload:
                </strong>{" "}
                By sending us Submissions and/or posting Contributions through
                any part of the Services or making Contributions accessible
                through the Services by linking your account through the
                Services to any of your social networking accounts, you:
              </p>

              <ul className={styles.list2}>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    confirm that you have read and agree with our{" "}
                    <Link
                      className={cn(
                        styles.Privacy_link,
                        global.blue_text,
                        "font-semibold font-InterSan"
                      )}
                      href="#prohibited-activities"
                      rel="”external"
                      onClick={(e) => {
                        e.preventDefault();
                        lenis.scrollTo(`#prohibited-activities`, {
                          lerp: 0.08,
                          offset: -100,
                          smoothTouch: true,
                        });
                      }}
                    >
                      "PROHIBITED ACTIVITIES"
                    </Link>{" "}
                    and will not post, send, publish, upload, or transmit
                    through the Services any Submission nor post any
                    Contribution that is illegal, harassing, hateful, harmful,
                    defamatory, obscene, bullying, abusive, discriminatory,
                    threatening to any person or group, sexually explicit,
                    false, inaccurate, deceitful, or misleading;
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    to the extent permissible by applicable law, waive any and
                    all moral rights to any such Submission and/or Contribution;
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    warrant that any such Submission and/or Contributions are
                    original to you or that you have the necessary rights and
                    licenses to submit such Submissions and/or Contributions and
                    that you have full authority to grant us the above-mentioned
                    rights in relation to your Submissions and/or Contributions;
                    and
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    warrant and represent that your Submissions and/or
                    Contributions do not constitute confidential information.
                    You are solely responsible for your Submissions and/or
                    Contributions and you expressly agree to reimburse us for
                    any and all losses that we may suffer because of your breach
                    of (a) this section, (b) any third party’s intellectual
                    property rights, or (c) applicable law.
                  </p>
                </li>
              </ul>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                <strong>We may remove or edit your Content:</strong> Although we
                have no obligation to monitor any Contributions, we shall have
                the right to remove or edit any Contributions at any time
                without notice if in our reasonable opinion we consider such
                Contributions harmful or in breach of these Legal Terms. If we
                remove or edit any such Contributions, we may also suspend or
                disable your account and report you to the authorities.
              </p>

              <h4
                className={cn(
                  styles.Privacy_heading4,
                  global.head5,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                Copyright infringement
              </h4>

              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Please review this section and the We respect the intellectual
                property rights of others. If you believe that any material
                available on or through the Services infringes upon any
                copyright you own or control, please immediately refer to the "{" "}
                <Link
                  className={cn(
                    styles.Privacy_link,
                    global.blue_text,
                    "font-semibold font-InterSan"
                  )}
                  href="#copyright-infringements"
                  onClick={(e) => {
                    e.preventDefault();
                    lenis.scrollTo(`#copyright-infringements`, {
                      lerp: 0.08,
                      offset: -100,
                      smoothTouch: true,
                    });
                  }}
                  rel="”external"
                >
                  COPYRIGHT INFRINGEMENTS
                </Link>{" "}
                " section below.
              </p>

              <h3
                id="user-representations"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                3. USER REPRESENTATIONS
              </h3>

              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                By using the Services, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Legal Terms; (4) you are not a
                minor in the jurisdiction in which you reside; (5) you will not
                access the Services through automated or non-human means,
                whether through a bot, script or otherwise; (6) you will not use
                the Services for any illegal or unauthorized purpose; and (7)
                your use of the Services will not violate any applicable law or
                regulation.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Services (or any portion thereof).
              </p>

              <h3
                id="user-registration"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                4. USER REGISTRATION
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You may be required to register to use the Services. You agree
                to keep your password confidential and will be responsible for
                all use of your account and password. We reserve the right to
                remove, reclaim, or change a username you select if we
                determine, in our sole discretion, that such username is
                inappropriate, obscene, or otherwise objectionable.
              </p>
              <h3
                id="purchases-and-payment"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                5. PURCHASES AND PAYMENT
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We accept the following forms of payment:
              </p>
              <ul>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    - Stripe
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    - American Express
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    - Mastercard
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    - Visa
                  </p>
                </li>
              </ul>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You agree to provide current, complete, and accurate purchase
                and account information for all purchases made via the Services.
                You further agree to promptly update account and payment
                information, including email address, payment method, and
                payment card expiration date, so that we can complete your
                transactions and contact you as needed. Sales tax will be added
                to the price of purchases as deemed required by us. We may
                change prices at any time. All payments shall be in US dollars.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You agree to pay all charges at the prices then in effect for
                your purchases and any applicable shipping fees, and you
                authorize us to charge your chosen payment provider for any such
                amounts upon placing your order. If your order is subject to
                recurring charges, then you consent to our charging your payment
                method on a recurring basis without requiring your prior
                approval for each recurring charge, until such time as you
                cancel the applicable order. We reserve the right to correct any
                errors or mistakes in pricing, even if we have already requested
                or received payment.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We reserve the right to refuse any order placed through the
                Services. We may, in our sole discretion, limit or cancel
                quantities purchased per person, per household, or per order.
                These restrictions may include orders placed by or under the
                same customer account, the same payment method, and/or orders
                that use the same billing or shipping address. We reserve the
                right to limit or prohibit orders that, in our sole judgment,
                appear to be placed by dealers, resellers, or distributors.
              </p>
              <h3
                id="free-trial"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                6. FREE TRIAL
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We offer a __________-day free trial to new users who register
                with the Services. The account will not be charged and the
                subscription will be suspended until upgraded to a paid version
                at the end of the free trial.
              </p>
              <h3
                id="cancellation"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                7. CANCELLATION
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                All purchases are non-refundable. You can cancel your
                subscription at any time by logging into your account. Your
                cancellation will take effect at the end of the current paid
                term.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                If you are unsatisfied with our Services, please email us at
                gobyhomesinc@gmail.com or call us at 240-528-0518.
              </p>

              <h3
                id="software"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                8. SOFTWARE
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We may include software for use in connection with our Services.
                If such software is accompanied by an end user license agreement
                ("EULA"), the terms of the EULA will govern your use of the
                software. If such software is not accompanied by a EULA, then we
                grant to you a non-exclusive, revocable, personal, and
                non-transferable license to use such software solely in
                connection with our services and in accordance with these Legal
                Terms. Any software and any related documentation is provided
                "AS IS" without warranty of any kind, either express or implied,
                including, without limitation, the implied warranties of
                merchantability, fitness for a particular purpose, or
                non-infringement. You accept any and all risk arising out of use
                or performance of any software. You may not reproduce or
                redistribute any software except in accordance with the EULA or
                these Legal Terms.
              </p>
              <h3
                id="prohibited-activities"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                9. PROHIBITED ACTIVITIES
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You may not access or use the Services for any purpose other
                than that for which we make the Services available. The Services
                may not be used in connection with any commercial endeavors
                except those that are specifically endorsed or approved by us.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                As a user of the Services, you agree not to:
              </p>

              <ul className={cn(styles.list2)}>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Systematically retrieve data or other content from the
                    Services to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Services, including
                    features that prevent or restrict the use or copying of any
                    Content or enforce limitations on the use of the Services
                    and/or the Content contained therein.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Use any information obtained from the Services in order to
                    harass, abuse, or harm another person.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Use the Services in a manner inconsistent with any
                    applicable laws or regulations.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Engage in unauthorized framing of or linking to the
                    Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Services or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats ("gifs"), 1×1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as "spyware" or "passive collection
                    mechanisms" or "pcms").
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Interfere with, disrupt, or create an undue burden on the
                    Services or the networks or services connected to the
                    Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Services
                    to you.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Attempt to bypass any measures of the Services designed to
                    prevent or restrict access to the Services, or any portion
                    of the Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Copy or adapt the Services' software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Except as permitted by applicable law, decipher, decompile,
                    disassemble, or reverse engineer any of the software
                    comprising or in any way making up a part of the Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Services, or use or launch any
                    unauthorized script or other software.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Use a buying agent or purchasing agent to make purchases on
                    the Services.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Make any unauthorized use of the Services, including
                    collecting usernames and/or email addresses of users by
                    electronic or other means for the purpose of sending
                    unsolicited email, or creating user accounts by automated
                    means or under false pretenses.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Use the Services as part of any effort to compete with us or
                    otherwise use the Services and/or the Content for any
                    revenue-generating endeavor or commercial enterprise.
                  </p>
                </li>
              </ul>
              <h3
                id="user-generated-contributions"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                10. USER GENERATED CONTRIBUTIONS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The Services may invite you to chat, contribute to, or
                participate in blogs, message boards, online forums, and other
                functionality, and may provide you with the opportunity to
                create, submit, post, display, transmit, perform, publish,
                distribute, or broadcast content and materials to us or on the
                Services, including but not limited to text, writings, video,
                audio, photographs, graphics, comments, suggestions, or personal
                information or other material (collectively, "Contributions").
                Contributions may be viewable by other users of the Services and
                through third-party websites. As such, any Contributions you
                transmit may be treated as non-confidential and non-proprietary.
                When you create or make available any Contributions, you thereby
                represent and warrant that:
              </p>

              <ul className={cn(styles.list2)}>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    The creation, distribution, transmission, public display, or
                    performance, and the accessing, downloading, or copying of
                    your Contributions do not and will not infringe the
                    proprietary rights, including but not limited to the
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    You are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    and to authorize us, the Services, and other users of the
                    Services to use your Contributions in any manner
                    contemplated by the Services and these Legal Terms.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    You have the written consent, release, and/or permission of
                    each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Services and these Legal Terms.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions are not false, inaccurate, or misleading.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions are not unsolicited or unauthorized
                    advertising, promotional materials, pyramid schemes, chain
                    letters, spam, mass mailings, or other forms of
                    solicitation.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libelous, slanderous, or
                    otherwise objectionable (as determined by us).
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse anyone.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions are not used to harass or threaten (in
                    the legal sense of those terms) any other person and to
                    promote violence against a specific person or class of
                    people.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not violate any applicable law,
                    regulation, or rule.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not violate the privacy or publicity
                    rights of any third party.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not violate any applicable law
                    concerning child pornography, or otherwise intended to
                    protect the health or well-being of minors.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not include any offensive comments
                    that are connected to race, national origin, gender, sexual
                    preference, or physical handicap.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Your Contributions do not otherwise violate, or link to
                    material that violates, any provision of these Legal Terms,
                    or any applicable law or regulation. Any use of the Services
                    in violation of the foregoing violates these Legal Terms and
                    may result in, among other things, termination or suspension
                    of your rights to use the Services.
                  </p>
                </li>
              </ul>
              <h3
                id="contribution-license"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                11. CONTRIBUTION LICENSE
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                By posting your Contributions to any part of the Services or
                making Contributions accessible to the Services by linking your
                account from the Services to any of your social networking
                accounts, you automatically grant, and you represent and warrant
                that you have the right to grant, to us an unrestricted,
                unlimited, irrevocable, perpetual, non-exclusive, transferable,
                royalty-free, fully-paid, worldwide right, and license to host,
                use, copy, reproduce, disclose, sell, resell, publish,
                broadcast, retitle, archive, store, cache, publicly perform,
                publicly display, reformat, translate, transmit, excerpt (in
                whole or in part), and distribute such Contributions (including,
                without limitation, your image and voice) for any purpose,
                commercial, advertising, or otherwise, and to prepare derivative
                works of, or incorporate into other works, such Contributions,
                and grant and authorize sublicenses of the foregoing. The use
                and distribution may occur in any media formats and through any
                media channels.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                This license will apply to any form, media, or technology now
                known or hereafter developed, and includes our use of your name,
                company name, and franchise name, as applicable, and any of the
                trademarks, service marks, trade names, logos, and personal and
                commercial images you provide. You waive all moral rights in
                your Contributions, and you warrant that moral rights have not
                otherwise been asserted in your Contributions.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Services. You are solely responsible for
                your Contributions to the Services and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We have the right, in our sole and absolute discretion, (1) to
                edit, redact, or otherwise change any Contributions; (2) to
                re-categorize any Contributions to place them in more
                appropriate locations on the Services; and (3) to pre-screen or
                delete any Contributions at any time and for any reason, without
                notice. We have no obligation to monitor your Contributions.
              </p>
              <h3
                id="social-media"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                12. SOCIAL MEDIA
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                As part of the functionality of the Services, you may link your
                account with online accounts you have with third-party service
                providers (each such account, a "Third-Party Account") by
                either: (1) providing your Third-Party Account login information
                through the Services; or (2) allowing us to access your
                Third-Party Account, as is permitted under the applicable terms
                and conditions that govern your use of each Third-Party Account.
                You represent and warrant that you are entitled to disclose your
                Third-Party Account login information to us and/or grant us
                access to your Third-Party Account, without breach by you of any
                of the terms and conditions that govern your use of the
                applicable Third-Party Account, and without obligating us to pay
                any fees or making us subject to any usage limitations imposed
                by the third-party service provider of the Third-Party Account.
                By granting us access to any Third-Party Accounts, you
                understand that (1) we may access, make available, and store (if
                applicable) any content that you have provided to and stored in
                your Third-Party Account (the "Social Network Content") so that
                it is available on and through the Services via your account,
                including without limitation any friend lists and (2) we may
                submit to and receive from your Third-Party Account additional
                information to the extent you are notified when you link your
                account with the Third-Party Account. Depending on the
                Third-Party Accounts you choose and subject to the privacy
                settings that you have set in such Third-Party Accounts,
                personally identifiable information that you post to your
                Third-Party Accounts may be available on and through your
                account on the Services. Please note that if a Third-Party
                Account or associated service becomes unavailable or our access
                to such Third-Party Account is terminated by the third-party
                service provider, then Social Network Content may no longer be
                available on and through the Services. You will have the ability
                to disable the connection between your account on the Services
                and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR
                RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED
                WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
                AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no
                effort to review any Social Network Content for any purpose,
                including but not limited to, for accuracy, legality, or
                non-infringement, and we are not responsible for any Social
                Network Content. You acknowledge and agree that we may access
                your email address book associated with a Third-Party Account
                and your contacts list stored on your mobile device or tablet
                computer solely for purposes of identifying and informing you of
                those contacts who have also registered to use the Services. You
                can deactivate the connection between the Services and your
                Third-Party Account by contacting us using the contact
                information below or through your account settings (if
                applicable). We will attempt to delete any information stored on
                our servers that was obtained through such Third-Party Account,
                except the username and profile picture that become associated
                with your account.
              </p>
              <h3
                id="third-party-websites-and-content"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                13. THIRD-PARTY WEBSITES AND CONTENT
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                The Services may contain (or you may be sent via the Site) links
                to other websites ("Third-Party Websites") as well as articles,
                photographs, text, graphics, pictures, designs, music, sound,
                video, information, applications, software, and other content or
                items belonging to or originating from third parties
                ("Third-Party Content"). Such Third-Party Websites and
                Third-Party Content are not investigated, monitored, or checked
                for accuracy, appropriateness, or completeness by us, and we are
                not responsible for any Third-Party Websites accessed through
                the Services or any Third-Party Content posted on, available
                through, or installed from the Services, including the content,
                accuracy, offensiveness, opinions, reliability, privacy
                practices, or other policies of or contained in the Third-Party
                Websites or the Third-Party Content. Inclusion of, linking to,
                or permitting the use or installation of any Third-Party
                Websites or any Third-Party Content does not imply approval or
                endorsement thereof by us. If you decide to leave the Services
                and access the Third-Party Websites or to use or install any
                Third-Party Content, you do so at your own risk, and you should
                be aware these Legal Terms no longer govern. You should review
                the applicable terms and policies, including privacy and data
                gathering practices, of any website to which you navigate from
                the Services or relating to any applications you use or install
                from the Services. Any purchases you make through Third-Party
                Websites will be through other websites and from other
                companies, and we take no responsibility whatsoever in relation
                to such purchases which are exclusively between you and the
                applicable third party. You agree and acknowledge that we do not
                endorse the products or services offered on Third-Party Websites
                and you shall hold us blameless from any harm caused by your
                purchase of such products or services. Additionally, you shall
                hold us blameless from any losses sustained by you or harm
                caused to you relating to or resulting in any way from any
                Third-Party Content or any contact with Third-Party Websites.
              </p>
              <h3
                id="services-management"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                14. SERVICES MANAGEMENT
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We reserve the right, but not the obligation, to: (1) monitor
                the Services for violations of these Legal Terms; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Services in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Services.
              </p>
              <h3
                id="privacy-policy"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                15. PRIVACY POLICY
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We care about data privacy and security. Please review our
                Privacy Policy:{" "}
                <a
                  className={cn(
                    styles.Privacy_link,
                    global.blue_text,
                    "font-bold font-InterSan"
                  )}
                  href="/privacy-policy"
                  rel="”external"
                >
                  https://gobyhomes.com/privacy-policy
                </a>
                . By using the Services, you agree to be bound by our Privacy
                Policy, which is incorporated into these Legal Terms. Please be
                advised the Services are hosted in the United States. If you
                access the Services from any other region of the world with laws
                or other requirements governing personal data collection, use,
                or disclosure that differ from applicable laws in the United
                States , then through your continued use of the Services, you
                are transferring your data to the United States , and you
                expressly consent to have your data transferred to and processed
                in the United States .
              </p>
              <h3
                id="copyright-infringements"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                16. COPYRIGHT INFRINGEMENTS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We respect the intellectual property rights of others. If you
                believe that any material available on or through the Services
                infringes upon any copyright you own or control, please
                immediately notify us using the contact information provided
                below (a "Notification"). A copy of your Notification will be
                sent to the person who posted or stored the material addressed
                in the Notification. Please be advised that pursuant to
                applicable law you may be held liable for damages if you make
                material misrepresentations in a Notification. Thus, if you are
                not sure that material located on or linked to by the Services
                infringes your copyright, you should consider first contacting
                an attorney.
              </p>
              <h3
                id="term-and-termination"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                17. TERM AND TERMINATION
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION
                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                DISCRETION.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </p>
              <h3
                id="modifications-and-interruptions"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                18. MODIFICATIONS AND INTERRUPTIONS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We will not be liable to
                you or any third party for any modification, price change,
                suspension, or discontinuance of the Services.
              </p>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We cannot guarantee the Services will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
              </p>
              <h3
                id="governing-law"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                19. GOVERNING LAW
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                These Legal Terms and your use of the Services are governed by
                and construed in accordance with the laws of the State of
                Maryland applicable to agreements made and to be entirely
                performed within the State of Maryland, without regard to its
                conflict of law principles.
              </p>
              <h3
                id="dispute-resolution"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                20. DISPUTE RESOLUTION
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Any legal action of whatever nature brought by either you or us
                (collectively, the "Parties" and individually, a "Party") shall
                be commenced or prosecuted in the state and federal courts
                located in Montgomery County, Maryland, and the Parties hereby
                consent to, and waive all defenses of lack of personal
                jurisdiction and forum non conveniens with respect to venue and
                jurisdiction in such state and federal courts. Application of
                the United Nations Convention on Contracts for the International
                Sale of Goods and the Uniform Computer Information Transaction
                Act (UCITA) are excluded from these Legal Terms. In no event
                shall any claim, action, or proceeding brought by either Party
                related in any way to the Services be commenced more than one
                (1) years after the cause of action arose.
              </p>

              <h3
                id="corrections"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                21. CORRECTIONS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Services at any time, without prior notice.
              </p>
              <h3
                id="disclaimer"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                22. DISCLAIMER
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR
                THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
                ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE,
                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                CAUTION WHERE APPROPRIATE.
              </p>
              <h3
                id="limitation-of-liability"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                23. LIMITATIONS OF LIABILITY
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
                FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER
                OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6)
                MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $200.00 USD
                . CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
                OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF
                THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
              <h3
                id="indemnification"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                24. INDEMNIFICATION
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of: (1) your Contributions; (2) use of the Services;
                (3) breach of these Legal Terms; (4) any breach of your
                representations and warranties set forth in these Legal Terms;
                (5) your violation of the rights of a third party, including but
                not limited to intellectual property rights; or (6) any overt
                harmful act toward any other user of the Services with whom you
                connected via the Services. Notwithstanding the foregoing, we
                reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate, at your expense, with
                our defense of such claims. We will use reasonable efforts to
                notify you of any such claim, action, or proceeding which is
                subject to this indemnification upon becoming aware of it.
              </p>
              <h3
                id="user-data"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                25. USER DATA
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
              </p>
              <h3
                id="electronic-communications"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Services,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights
                or requirements under any statutes, regulations, rules,
                ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic
                records, or to payments or the granting of credits by any means
                other than electronic means.
              </p>
              <h3
                id="california-users-and-residents"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                27. CALIFORNIA USERS AND RESIDENTS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                If any complaint with us is not satisfactorily resolved, you can
                contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 North Market Blvd., Suite N 112,
                Sacramento, California 95834 or by telephone at (800) 952-5210
                or (916) 445-1254.
              </p>
              <h3
                id="miscellaneous"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                28. MISCELLANEOUS
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                These Legal Terms and any policies or operating rules posted by
                us on the Services or in respect to the Services constitute the
                entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Legal Terms shall not operate as a waiver of such right or
                provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Legal Terms is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Legal Terms and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Legal Terms or use of the Services. You agree that these
                Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defenses you may have
                based on the electronic form of these Legal Terms and the lack
                of signing by the parties hereto to execute these Legal Terms.
              </p>
              <h3
                id="contact-us"
                className={cn(
                  styles.Privacy_heading3,
                  global.head4,
                  "font-InterSan text-website-TEXT_PRIMARY pt-8"
                )}
              >
                29. CONTACT US
              </h3>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us at:
              </p>
              <ul>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Goby Homes, Inc.
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    13015 Britts Brook Lane
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Waldorf, MD 20601
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    United States
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    Phone: 240-528-0518
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      styles.Privacy_para,
                      global.head6,
                      "font-regular font-InterSan"
                    )}
                  >
                    gobyhomesinc@gmail.com
                  </p>
                </li>
              </ul>
              <p
                className={cn(
                  styles.Privacy_para,
                  global.head6,
                  "font-regular font-InterSan"
                )}
              >
                These terms of use were created using Termly's Terms and
                Conditions Generator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServices;
