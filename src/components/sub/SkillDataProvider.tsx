'use client'

import React, { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

type TSkillDataProviderProps = {
  src: string
  width: number
  height: number
  index: number
}

const SkillDataProvider: FC<TSkillDataProviderProps> = ({
  src,
  width,
  height,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInview = useInView(containerRef, {
    once: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={containerRef}
      initial='hidden'
      variants={imageVariants}
      animate={isInview ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} alt='skill image' width={width} height={height} />
    </motion.div>
  )
}

export default SkillDataProvider
