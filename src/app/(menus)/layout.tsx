import React from "react";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import LayoutWrapper from "@/components/wrapper/LayoutWrapper";

export default function MenusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScrolling>
        <LayoutWrapper>{children}</LayoutWrapper>
      </SmoothScrolling>
    </>
  );
}
