"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Video removed for light theme */}
      <HeroContent />
    </div>
  );
};

export default Hero;
