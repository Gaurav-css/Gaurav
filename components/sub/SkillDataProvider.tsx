"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  }

  const animationDelay = 0.1
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
      custom={index}
      transition={{ delay: index * animationDelay, type: "spring", stiffness: 260, damping: 20 }}
      className="p-4 bg-white border-2 border-black shadow-hard rounded-xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
      />
    </motion.div>
  )
}

export default SkillDataProvider