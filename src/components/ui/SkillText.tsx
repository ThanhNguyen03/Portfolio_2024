import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion'
import { SparkleIcon } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'

const SkillText = () => {
  return (
    <div className='flex h-auto w-full flex-col items-center justify-center gap-6 md:gap-10'>
      <motion.div
        className='rounded-8 relative isolate flex w-max items-center overflow-hidden border border-blue-500/55 px-4 py-4 opacity-[0.9] shadow-[inset_0_-7px_11px_#309bd585] backdrop-blur-[6px] transition-shadow duration-450 ease-[cubic-bezier(0.6,0.6,0,1)]'
        variants={slideInFromTop}
      >
        <SparkleIcon size={32} className='mr-3 text-pink-500' />
        <h1 className='bg-white bg-clip-text text-xl font-semibold text-transparent bg-blend-normal md:bg-[linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(244,97,187,1)_0%,rgba(241,110,83,1)_35%,rgba(135,221,241,0.98)_100%)] md:text-2xl'>
          Technical Expertise
        </h1>
      </motion.div>
      <div className='center flex-col gap-4'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='bg-linear-to-r from-red-500 to-purple-500 bg-clip-text text-center text-2xl font-medium text-transparent md:text-3xl'
        >
          Development Frontend, <br className='lg:hidden' />
          Backend & Web3 Applications
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className='text-18 w-full max-w-[900px] text-center text-white/70'
        >
          Strong analytical mindset, sharp analytical thinking, fast learning
          capability, solid process management skills and effective
          collaboration across product, design, and engineering teams.
        </motion.div>
      </div>
    </div>
  )
}

export default SkillText
