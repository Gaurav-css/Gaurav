"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

// Lazy load Spline for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-5 lg:-mt-10 w-full z-[20] scale-[0.86]"
    >
      {/* Left Content */}
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-5 justify-center text-start -mt-20">
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[10px] border-2 border-black bg-white shadow-hard opacity-[0.9] w-max flex items-center rounded-lg"
        >
          <SparklesIcon className="text-black mr-[10px] h-5 w-5" />
          <h1 className="text-black text-[13px] font-bold">Software Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-7xl font-bold text-black max-w-[600px] w-auto h-auto font-bungee"
        >
          <span>
            Gaurav
            <span style={{ color: '#84cc16' }}>
              {" "}Kumar{" "}
            </span>
            Yadav
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-black font-medium my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website Development,
          and Software development.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/Gaurav.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 text-center text-black font-bold cursor-pointer rounded-lg max-w-[200px] bg-brand-green border-2 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          Resume
        </motion.a>
      </div>

      {/* Right Content: Robot - Lazy Loaded */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-[500px] lg:h-[695px] hidden lg:flex justify-center items-center relative"
      >
        <div className="relative h-full right-20">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Spline scene="https://prod.spline.design/IZ2Nzq20xExkboUD/scene.splinecode" />
          </Suspense>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;