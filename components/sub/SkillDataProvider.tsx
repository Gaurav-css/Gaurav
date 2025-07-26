"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
<motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{ delay: index * animationDelay }}
  className="group relative p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
  <Image
    src={src}
    width={width}
    height={height}
    alt="skill image"
    className="rounded-md"
  />

  {/* Glow border effect */}
  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_4px_rgba(34,211,238,0.6)] transition-all duration-300 pointer-events-none"></div>
</motion.div>

  )
}

export default SkillDataProvider