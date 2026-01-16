"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full pt-20 sm:pt-24 md:pt-28" id="about-me">
      {/* Video removed for light theme */}
      <HeroContent />
    </div>
  );
};

export default Hero;
