"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-10 overflow-hidden'>

      {/* Top Badge */}
      <motion.div
        variants={slideInFromTop}
        className="mb-10 py-[8px] px-[10px] border-2 border-black bg-white shadow-hard opacity-[0.9] w-max flex items-center rounded-lg z-20"
      >
        <SparklesIcon className="text-black mr-[10px] h-5 w-5" />
        <h1 className="text-black text-[13px] font-bold">
          Stay on track. Always deliver. Never forget
        </h1>
      </motion.div>

      {/* Main Creative Text Layout */}
      <div className="relative flex flex-col items-center justify-center gap-4 z-10">

        {/* Block 1: Empowering Ideas */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="bg-black text-white px-6 py-3 text-4xl md:text-6xl font-black transform -rotate-2 shadow-hard border-2 border-white"
        >
          EMPOWERING IDEAS
        </motion.div>

        {/* Block 2: Through Modern */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          className="bg-white text-black px-8 py-2 text-3xl md:text-5xl font-bold border-4 border-black shadow-hard transform rotate-1 z-10 -mt-4"
        >
          THROUGH MODERN
        </motion.div>

        {/* Block 3: Web Development */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
          className="bg-brand-green text-black px-10 py-4 text-4xl md:text-7xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-2"
        >
          WEB DEVELOPMENT
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-20 w-16 h-16 border-4 border-black rounded-full border-dashed opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-20 w-24 h-24 bg-brand-blue border-4 border-black rounded-full opacity-50 -z-10"
        />
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[20px] text-gray-800 mb-10 mt-[10px] text-center font-medium'
      >
        {/* Optional subtitle or remove if empty */}
      </motion.div>
    </div>
  )
}

export default SkillText