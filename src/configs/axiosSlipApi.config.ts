import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { signOut } from "next-auth/react";
import { auth } from "./firebase.config";

export const axiosSlipApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SLIP_STREAM_URL,
  headers: {
    "x-api-key": `${process.env.NEXT_PUBLIC_SLIP_STREAM_PUBLIC_KEY}`,
    "x-user-id": "UniqueUserIdentifier",
    'content-type': 'application/json',
    'accept': 'application/json'
  },
});