"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./RequestDemo.module.scss";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { axiosApi } from "@/configs/axiosApi.config";
import { AxiosError } from "axios";

import { useModal } from "@/context/ModalContext";
import { useSearchParams } from "next/navigation";
import { LOADER_BTN } from "@/utilities/svgConstant";
import { MEMBER_TYPE } from "@/components/addMember/AddMember.constant";
import { toast, useToast } from "@/components/ui/use-toast";
import { useHookFormMask } from "use-mask-input";
import commonServices from "@/services/common.services";
import { format } from "date-fns";
import { UTILITY_CONSTANT } from "@/utilities/utilityConstant";
import Image from "next/image";

const UserType = ["Agent", "Personal", "Broker"];

const WORKINGHOURS = [
  "09:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "01:00 pm",
  "01:30 pm",
  "02:00 pm",
  "02:30 pm",
  "03:00 pm",
  "03:30 pm",
  "04:00 pm",
  "04:30 pm",
];

type FormValues = {
  name: string;
  email: string;
  userType: string;
  number: string;
  time: string;
  date: any;
};

type RequestDemoValues = {
  name: string;
  email: string;
  userType: string;
  number: string;
  time: string;
  date: any;
  sender: any;
};

const demorequestSchema = zod
  .object({
    name: zod.string().trim().min(1),
    email: zod
      .string()
      .email()
      .trim()
      .transform((v) => v.toLowerCase()),
    userType: zod.string().trim().min(1),
    number: zod.string().trim().min(10),
    date: zod.date(),
    time: zod.string().min(1),
  })
  .required();

export const RequestDemo = () => {
  const [date, setDate] = useState<Date>();
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    // setValue,
    getValues,
    reset,
    setError,
    formState: { errors, isLoading },
    clearErrors,
    trigger,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(demorequestSchema),
  });

  const demoRequestMutation = useMutation({
    mutationFn: (data: RequestDemoValues) => {
      return commonServices.requestDemoSchedule(data);
    },
    onSuccess: (data: any) => {
      reset();
      toast({
        variant: "success",
        description: data.data?.message || "Success",
      });
    },
    onError: (error: AxiosError) => {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again",
      });
    },
  });

  const onRequestDemo = handleSubmit((data) => {
    demoRequestMutation.mutate({
      ...data,
      sender: `${data.name} <no-reply@gobyhomes.com>`,
    });
  });

  const registerWithMask = useHookFormMask(register);

  return (
    <div className={cn("w-full", styles.contactUsForm)}>
      <div className="pt-[108px] w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div
            className={cn(
              global.section_padding,
              "flex w-full pt-10 pb-20 md:pt-8 md:pb-8 order-2 md:order-1"
            )}
          >
            <form className="w-full" ref={formRef} onSubmit={onRequestDemo}>
              <h1 className={cn(global.head2, "text-black font-bold")}>
                Schedule Your Personalized Demo Today!
              </h1>
              <p
                className={cn(
                  global.head5,
                  "font-InterSan mt-2 text-secondary-textSecondary"
                )}
              >
                Thank you for your interest in learning about Goby Homes and how
                we can benefit you. We tailor each demo to your specific
                interests and needs. We look forward to connecting with you
                soon!
              </p>
              <div className="w-full mt-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5">
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                      Name
                    </Label>
                    <Input
                      placeholder="Name"
                      className={cn(
                        styles.input_custom,
                        global.body2,
                        " text-black"
                      )}
                      {...register("name", { required: true })}
                      //   onChange={(e) => setProjectName(e.target.value)}
                    />
                    {errors.name && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Please enter full name
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block ">
                      Email
                    </Label>
                    <Input
                      placeholder="Email"
                      className={cn(
                        styles.input_custom,
                        global.body2,
                        " text-black"
                      )}
                      {...register("email", { required: true })}
                      //   onChange={(e) => setProjectName(e.target.value)}
                    />
                    {errors.email && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Please enter email
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5">
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                      Phone Number
                    </Label>
                    <Input
                      type="text"
                      className={cn(
                        styles.input_custom,
                        global.body2,
                        " text-black"
                      )}
                      {...registerWithMask("number", ["(999) 999-9999"], {
                        required: true,
                      })}
                      //   onChange={(e) => setProjectName(e.target.value)}
                    />
                    {errors.number && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Please enter phone number
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block ">
                      User Type
                    </Label>
                    <Controller
                      control={control}
                      name="userType"
                      defaultValue=""
                      rules={{ required: "User Type is required" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(event) => {
                            field.onChange(event);
                            clearErrors("userType");
                          }}
                        >
                          <SelectTrigger className="text-black">
                            <SelectValue
                              placeholder="Select option"
                              className="text-black"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {UserType.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.userType && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Please select user type
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5">
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block ">
                      Date
                    </Label>
                    <Controller
                      control={control}
                      name={"date"}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <Popover {...field}>
                            <PopoverTrigger asChild>
                              <CustomButton
                                variant={"outline"}
                                className={cn(
                                  "flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-primary-inputBackground px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate [&>span]:inline-block [&>span]:items-center text-black ring-0",
                                  !value && "text-muted-foreground"
                                )}
                              >
                                {value ? (
                                  format(value, "MM/dd/yyyy")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <FaCalendarAlt className="mr-2 h-4 w-4" />
                              </CustomButton>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={new Date(value)}
                                onSelect={(event) => {
                                  onChange(event);
                                  clearErrors("date");
                                  console.log(event);
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        );
                      }}
                    />
                    {errors.date && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Please enter date
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-5 relative">
                    <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block ">
                      Time
                    </Label>
                    <Controller
                      control={control}
                      name="time"
                      defaultValue=""
                      rules={{ required: "User Type is required" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(event) => {
                            field.onChange(event);
                            clearErrors("time");
                          }}
                        >
                          <SelectTrigger className="text-black">
                            <SelectValue
                              placeholder="Select option"
                              className="text-black"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {WORKINGHOURS.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.time && (
                      <p
                        className={cn(
                          "absolute bottom-[-20px] text-red-600 text-xs"
                        )}
                      >
                        Plesae select time
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    "w-full flex items-center justify-end gap-4 mt-6"
                  )}
                >
                  <CustomButton
                    className={cn(global.body2, "w-full")}
                    //   onClick={() => {
                    //     submitCustomProjectName();
                    //   }}
                  >
                    {demoRequestMutation.isPending && <LOADER_BTN />}
                    {demoRequestMutation.isPending ? "Submitting..." : "Submit"}
                  </CustomButton>
                </div>
              </div>
            </form>
          </div>
          <div className="flex w-full h-56 md:h-full md:min-h-[var(--minHeight)] order-1 md:order-2">
            <Image
              src={UTILITY_CONSTANT.IMAGES.DEMO.DEMO_BG}
              alt="images"
              width={1920}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
