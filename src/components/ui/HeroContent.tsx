import { skill } from '@/assets/images'
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion'
import { SparkleIcon } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { TypingText } from './TypingText'
type THeroContentProps = {
  isInitVideoEnded?: boolean
}
const HeroContent: FC<THeroContentProps> = ({ isInitVideoEnded }) => {
  return (
    <motion.div
      className='z-20 flex h-screen w-full items-center justify-center px-2 pt-40 will-change-transform md:px-6 md:pt-20 lg:px-10'
      initial='hidden'
      animate='visible'
    >
      <div className='mx-auto flex size-full max-w-[1200px] items-center justify-center gap-4 md:gap-6 lg:gap-10'>
        <div className='flex size-full flex-col items-center justify-center gap-4 text-center md:items-start md:gap-6 md:text-start'>
          <motion.div
            className='rounded-8 relative isolate flex w-max items-center overflow-hidden border border-blue-500/55 p-4 shadow-[inset_0_-7px_11px_#309bd585] backdrop-blur-[6px] transition-shadow duration-450 ease-[cubic-bezier(0.6,0.6,0,1)] will-change-transform'
            variants={slideInFromTop}
            initial='hidden'
            animate={isInitVideoEnded ? 'visible' : 'hidden'}
          >
            <SparkleIcon
              size={32}
              className='mr-3 size-6 text-pink-500/95 md:size-8'
            />
            <h1 className='text-16 bg-white bg-clip-text font-semibold text-transparent bg-blend-normal md:bg-[linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(244,97,187,1)_0%,rgba(241,110,83,1)_35%,rgba(135,221,241,0.98)_100%)]'>
              Full-Stack Developer | Web3 & Blockchain
            </h1>
          </motion.div>
          <motion.div
            className='text-44 md:text-55 h-auto w-full max-w-[600px] font-semibold text-white will-change-transform'
            variants={slideInFromLeft(1)}
            initial='hidden'
            animate={isInitVideoEnded ? 'visible' : 'hidden'}
          >
            Building&nbsp;
            <br />
            <TypingText
              sequence={[
                'Secure',
                1000,
                'Scalable',
                1000,
                'High-performance',
                1000,
                'User-centric',
                1000,
              ]}
              speed={60}
              deletionSpeed={40}
              repeat={Infinity}
              className='bg-linear-to-r from-red-500 to-purple-500 bg-clip-text font-semibold text-transparent'
            />
            <br />
            systems
          </motion.div>
          <motion.p
            className='text-16 max-w-[600px] text-white/70 will-change-transform'
            variants={slideInFromLeft(1.5)}
            initial='hidden'
            animate={isInitVideoEnded ? 'visible' : 'hidden'}
          >
            <strong className='text-primary-300'>Software Engineer</strong> with
            2+ years of professional development experience in both{' '}
            <strong className='text-secondary-300'>Frontend</strong> &{' '}
            <strong className='text-pink-300'>Backend</strong>. <br />
            Have 1+ year of experience working with
            <br className='md:hidden' />{' '}
            <strong className='text-violet-300'>Web3 technologies</strong>, and
            blockchain ecosystems
          </motion.p>
          <motion.a
            className='bg-[linear-gradient(180deg,rgba(48,144,241,0)0%,rgba(81,178,219,0.32)100%), rgba(47,68,255,0.12)] hover:bg-[linear-gradient(180deg,rgba(60,8,126,0)0%,rgba(60,8,126,0.42)100%), rgba(113,47,255,0.24)] hover:text-primary-300 max-w-[200px] cursor-pointer rounded-lg border border-white/30 px-8 py-2 text-center text-white shadow-[inset_0_0_12px_#5466ee3d] transition duration-300 will-change-transform hover:shadow-[inset_0_0_12px_#bf97ff70]'
            href='#skills'
            variants={slideInFromLeft(2)}
            initial='hidden'
            animate={isInitVideoEnded ? 'visible' : 'hidden'}
          >
            Learn more!
          </motion.a>
        </div>
        <motion.div
          className='hidden size-full items-center justify-center will-change-transform md:flex'
          variants={slideInFromRight(1.5)}
          initial='hidden'
          animate={isInitVideoEnded ? 'visible' : 'hidden'}
        >
          <Image
            src={skill}
            alt='work icons'
            height={650}
            width={650}
            className='opacity-80'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroContent
