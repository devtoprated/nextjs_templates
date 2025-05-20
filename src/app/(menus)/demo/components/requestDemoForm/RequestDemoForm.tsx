"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import { CustomButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuPlus } from "react-icons/lu";

import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { axiosApi } from "@/configs/axiosApi.config";
import { AxiosError } from "axios";

import { useModal } from "@/context/ModalContext";
import { useSearchParams } from "next/navigation";
import { LOADER_BTN } from "@/utilities/svgConstant";
import { MEMBER_TYPE } from "@/components/addMember/AddMember.constant";
import { useToast } from "@/components/ui/use-toast";
import { useHookFormMask } from "use-mask-input";
import commonServices from "@/services/common.services";

const UserType = ["Agent", "Personal"];

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

const LogInSchema = zod
  .object({
    name: zod.string().trim().min(1),
    email: zod
      .string()
      .email()
      .trim()
      .transform((val) => val.toLowerCase()),
    userType: zod.string().trim().min(1),
    number: zod.string().trim().min(10),
    date: zod.string().trim().min(1),
    time: zod.string().min(1),
  })
  .required();

const RequestDemoForm = () => {
  const formRef = useRef(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { closeModal } = useModal();
  const [memberCaching, setMemberCaching] = useState<FormValues[]>([]);
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const [date, setDate] = useState<any>("");
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
    resolver: zodResolver(LogInSchema),
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
    <>
      <div>
        <div>
          <div className=" mb-8 w-full">
            <h3
              className={cn(
                global.head2_5,
                "font-bold font-InterSan text-website-TEXT_PRIMARY"
              )}
            >
              Demo
            </h3>
          </div>

          <div className={cn("w-full")} data-lenis-prevent>
            <form ref={formRef} onSubmit={onRequestDemo}>
              <div className="w-full mb-6 relative">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Name
                </Label>
                <Input
                  placeholder="Enter your Name"
                  className={cn(global.body2)}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="w-full mb-6 relative">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Email
                </Label>
                <Input
                  placeholder="Enter your email"
                  className={cn(global.body2)}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full mb-6 relative">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Phone Number
                </Label>
                <Input
                  placeholder="Enter your phone Number"
                  className={cn(global.body2)}
                  {...registerWithMask("number", ["(999) 999-9999"], {
                    required: true,
                  })}
                />
                {errors.number && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    {errors.number.message}
                  </p>
                )}
              </div>

              <div className="w-full relative mb-6 ">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
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
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select..." />
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
                    User type is required
                  </p>
                )}
              </div>

              <div className="w-full relative mb-6 ">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Date
                </Label>
                <Controller
                  control={control}
                  name={"date"}
                  render={({ field: { value, onChange, ...field } }) => {
                    return (
                      <input
                        placeholder="Date"
                        // onBlur={handleBlur}
                        {...field}
                        onChange={(e) => {
                          const dateValue = e.target.value;
                          const dateObject = new Date(dateValue);
                          const isoString = dateObject.toISOString();
                          onChange(isoString);
                        }}
                        value={
                          value
                            ? new Date(value).toISOString().slice(0, 16)
                            : ""
                        }
                        type={"date"}
                        className={cn(
                          `w-full min-h-11 text-placeHolder/60 rounded-[40px] px-6 bg-dashboard-bg_input text-xs border border-border3/40 placeholder:text-placeHolder/60`
                        )}
                        autoComplete="off"
                      />
                    );
                  }}
                />
                {errors.date && (
                  <p
                    className={cn(
                      "absolute bottom-[-20px] text-red-600 text-xs"
                    )}
                  >
                    Date is required
                  </p>
                )}
              </div>

              <div className="w-full relative mb-6 ">
                <Label className="font-semibold text-website-textGray400 text-base font-InterSan mb-3 block">
                  Time
                </Label>

                <Controller
                  control={control}
                  name="time"
                  defaultValue=""
                  rules={{ required: "Time is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={(event) => {
                        field.onChange(event);
                        clearErrors("time");
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select..." />
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
                    Time is required
                  </p>
                )}
              </div>

              <div className="w-full pt-6">
                <CustomButton
                  type="submit"
                  className={cn(
                    global.body2,
                    "text-white font-semibold w-full"
                  )}
                >
                  {demoRequestMutation.isPending && <LOADER_BTN />}
                  {demoRequestMutation.isPending ? "Submitting..." : "Submit"}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDemoForm;
