'use client'

import { motion, useInView } from 'framer-motion'
import { FC, useRef } from 'react'
import { Tooltip } from './Tooltip'

type TSkillDataProviderProps = {
  icon: React.ReactNode
  index: number
  name: string
}

const SkillDataProvider: FC<TSkillDataProviderProps> = ({
  icon,
  index,
  name,
}) => {
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
      className='relative'
    >
      <Tooltip
        offset={0}
        position='top'
        className='z-99 bg-white'
        content={
          <p className='text-14 font-semibold -tracking-[0.32px] text-white'>
            {name}
          </p>
        }
      >
        {icon}
      </Tooltip>
    </motion.div>
  )
}

export default SkillDataProvider
