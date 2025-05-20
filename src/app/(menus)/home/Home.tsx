import React from "react";
import GetEverything from "@/components/getEverything/GetEverything";
import LayoutWrapper from "@/components/wrapper/LayoutWrapper";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import HowItWork from "@/components/howItWork/HowItWork";
import YouNeed from "@/components/youNeed/YouNeed";
import LeftRight from "@/components/leftRight/LeftRight";
import Hero from "@/components/hero/Hero";
// import StreamlineDocument from "@/components/streamlineDocument/StreamlineDocument";
// import StayOrganized from "@/components/stayOrganized/StayOrganized";
// import EffortlessProperty from "@/components/effortlessProperty/EffortlessProperty";
// import EfficientBrokerage from "@/components/efficientBrokerage/EfficientBrokerage";

const HomePage = () => {
  return (
    <SmoothScrolling>
      <LayoutWrapper>
        <Hero />
        <YouNeed />
        <LeftRight />
        <HowItWork />
        <GetEverything />
        
      </LayoutWrapper>
    </SmoothScrolling>
  );
};

export default HomePage;
