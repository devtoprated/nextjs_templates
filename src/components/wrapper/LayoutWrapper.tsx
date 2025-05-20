import React from "react";
import MainFooter from "@/components/mainFooter/MainFooter";
import MainHeader from "../mainHeader/MainHeader";

const LayoutWrapper = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const data: any = {}
  return (
    <main className="w-full h-max text-white" id="mainSec">
      <MainHeader data={data}/>
      {children}
      <MainFooter data={data} />
    </main>
  );
};

export default LayoutWrapper;
