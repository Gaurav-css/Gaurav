"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Spline from "@splinetool/react-spline"; // ✅ Correct import

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
     

      {/* Right Content: Robot + Floating Text */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-[500px] lg:h-[695px] flex justify-center items-center relative"
      >
        <div className="relative w-full h-full">
          <Spline scene="https://prod.spline.design/IZ2Nzq20xExkboUD/scene.splinecode" />

          {/* Floating Name Text beside Robot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-10 left-10 text-white text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
           <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-max flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[-13px]">Software Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[6000px] w-auto h-auto"
        >
          <span>
            Gaurav
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Kumar{" "}
            </span>
            Yadav
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website Development,
          and Software development.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/Gaurav's Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Resume
        </motion.a>
      </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;