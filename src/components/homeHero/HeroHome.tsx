import React from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./HeroHome.module.scss";
import Image from "next/image";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomButton } from "@/components/ui/button";
import { HOME_CHECK, HOME_OUTLINE } from "@/utilities/svgConstant";
import { CiSearch } from "react-icons/ci";

const HeroHome = () => {
  return (
    <div className={cn(styles.heroHome_sec, global.section_padding)}>
      <div className={styles.image_house}>
        <Image
          src={UTILITY_CONSTANT.IMAGES.HOME.HOME}
          width={941}
          height={627}
          alt="logo"
          className="w-full"
        />
      </div>
      <div className={cn(`${global.container}`)}>
        <div className={cn("w-full h-full")}>
          <div className={cn(`${styles.inner_content}`)}>
            <h1
              className={cn(
                global.extra1,
                styles.title,
                "font-semibold !leading-none font-InterSan"
              )}
            >
              Provide an <span className={styles.grad}>unparalleled</span>{" "}
              buying experience for your clients.
            </h1>
            <div className={styles.payment_tab}>
              <Tabs defaultValue="buy" className={styles.payment_tab_wrapper}>
                <TabsList className="w-fit">
                  <TabsTrigger value="buy">
                    <i className="flex">
                      <HOME_CHECK />
                    </i>
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="rent">
                    <i className="flex">
                      <HOME_OUTLINE />
                    </i>
                    Rent
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="buy">
                  <Card
                    className={cn(
                      "rounded-[0px_10px_10px_10px]",
                      styles.card_sec
                    )}
                  >
                    <CardContent className="p-0">
                      <div
                        className={cn("w-full px-10 py-7", styles.main_wrapper)}
                      >
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className={cn("mt-3", styles.input_control)}
                          />
                        </div>
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Name</Label>
                          <Select>
                            <SelectTrigger
                              className={cn(
                                "w-[140px] mt-3 gap-2",
                                styles.select
                              )}
                            >
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Houses</SelectLabel>
                                <SelectItem value="apple">
                                  Apple Houses
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana Houses
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Price Range</Label>
                          <Select>
                            <SelectTrigger
                              className={cn(
                                "w-[140px] mt-3 gap-2",
                                styles.select
                              )}
                            >
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>$200 - $300</SelectLabel>
                                <SelectItem value="apple">
                                  $200 - $300
                                </SelectItem>
                                <SelectItem value="banana">
                                  $200 - $300
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  $200 - $300
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <CustomButton className="min-h-16 text-xl font-InterSan font-medium w-full md:w-fit  md:min-w-52">
                          <i className="flex">
                            <CiSearch />
                          </i>
                          Search
                        </CustomButton>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="rent">
                  <Card
                    className={cn(
                      "rounded-[0px_10px_10px_10px]",
                      styles.card_sec
                    )}
                  >
                    <CardContent className="p-0">
                      <div
                        className={cn("w-full px-10 py-7", styles.main_wrapper)}
                      >
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className={cn("mt-3", styles.input_control)}
                          />
                        </div>
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Name</Label>
                          <Select>
                            <SelectTrigger
                              className={cn(
                                "w-[140px] mt-3 gap-2",
                                styles.select
                              )}
                            >
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Houses</SelectLabel>
                                <SelectItem value="apple">
                                  Apple Houses
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana Houses
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className={styles.input_wrapper}>
                          <Label htmlFor="name">Price Range</Label>
                          <Select>
                            <SelectTrigger
                              className={cn(
                                "w-[140px] mt-3 gap-2",
                                styles.select
                              )}
                            >
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>$200 - $300</SelectLabel>
                                <SelectItem value="apple">
                                  $200 - $300
                                </SelectItem>
                                <SelectItem value="banana">
                                  $200 - $300
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  $200 - $300
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <CustomButton className="min-h-16 text-xl font-InterSan font-medium w-full  md:min-w-52">
                          <i className="flex">
                            <CiSearch />
                          </i>
                          Search
                        </CustomButton>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
