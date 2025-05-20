"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./FreeTrial.module.scss";
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

export const FreeTrial = () => {
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

  const onRequestDemo = handleSubmit(async (data) => {
    // demoRequestMutation.mutate({
    //   ...data,
    //   sender: `${data.name} <no-reply@gobyhomes.com>`,
    // });

    try {
    } catch (error) {
      console.error("Error:", error);
    }
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
            <div>
              <h1 className={cn(global.head2, "text-black font-bold")}>Thank you for your interest in Goby Homes!</h1>
              <p className={cn(
                  global.head5,
                  "font-InterSan mt-2 text-secondary-textSecondary mb-5 mt-5"
                )}>
                To better serve your specific needs, we offer a free
                personalized consultation to answer any questions and provide a
                detailed product walk-through, ensuring you get the most out of
                our platform. We look forward to connecting with you soon!
              </p>
              
              <Link
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3UxEfzPaq-8N8mIow4IfB4DC5HGSjIesD6Vw6t329tTQSrNJpsHXpZSvsIIJi0zPOZ-Cyvx_6n?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.scheduleButton}
              >
                <div className="flex justify-center m-7">
                <CustomButton className="min-h-14 font-bold text-md">Schedule Consultation</CustomButton>
                </div>
               
                
              </Link>
            </div>
           
          </div>
          <div className="flex w-full h-56 md:h-full md:min-h-[var(--minHeight)] order-1 md:order-2">
            <Image
              src={UTILITY_CONSTANT.IMAGES.DEMO.FREE_TRIAL}
              alt="images"
              width={1920}
              height={980}
              className="w-full h-screen object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
