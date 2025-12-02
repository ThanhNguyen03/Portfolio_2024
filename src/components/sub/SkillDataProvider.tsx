'use client'

import { motion, useInView } from 'framer-motion'
import { FC, useRef } from 'react'

type TSkillDataProviderProps = {
  icon: React.ReactNode
  index: number
}

const SkillDataProvider: FC<TSkillDataProviderProps> = ({ icon, index }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInview = useInView(containerRef, {
    once: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.1

  return (
    <motion.div
      ref={containerRef}
      initial='hidden'
      variants={imageVariants}
      animate={isInview ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {icon}
    </motion.div>
  )
}

export default SkillDataProvider
