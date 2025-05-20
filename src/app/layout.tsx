import type { Metadata } from "next";
import "./globals.css";
import { InterFont, Nunito_web } from "@/utilities/fontContant";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Script from "next/script";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Goby Homes",
  description:
    "Goby Homes is an all-in-one real estate collaboration hub, designed to streamline how brokers, teams, agents, clients, and all other transactional parties communicate, share documents, and manage tasks securely.",
};

if (!Promise.withResolvers) {
  Promise.withResolvers = function <T>(): PromiseWithResolvers<T> {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: any) => void;

    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    return { promise, resolve, reject };
  };
}

interface PromiseWithResolvers<T> {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_KEY as string;
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

  return (
    <html lang="en">
      <meta name="google-signin-client_id" content={GOOGLE_CLIENT_ID} />
      <body className={cn(InterFont.variable, Nunito_web.variable)}>
        <ReactQueryProvider>
          {/* declared here to use globally */}
            
              <ModalProvider>{children}</ModalProvider>
            
          
        </ReactQueryProvider>
        <Toaster />
        <Script
          strategy="beforeInteractive"
          src="https://apis.google.com/js/api.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="https://accounts.google.com/gsi/client"
          defer={true}
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="https://apis.google.com/js/platform.js?onload=renderButton"
          defer={true}
        ></Script>
        <Script
          strategy="beforeInteractive"
          src={
            "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
          }
          defer={true}
        ></Script>
      </body>
    </html>
  );
}
