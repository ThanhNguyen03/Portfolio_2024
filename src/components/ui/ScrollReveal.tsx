'use client'

import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from '@/utils/motion'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type TScrollRevealProps = {
  children: ReactNode
  direction?: 'up' | 'left' | 'right' | 'none'
  delay?: number
  className?: string
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className,
}: TScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants =
    direction === 'up'
      ? slideInFromBottom(delay)
      : direction === 'left'
        ? slideInFromLeft(delay)
        : direction === 'right'
          ? slideInFromRight(delay)
          : fadeIn(delay)

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
