import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion'
import { SparkleIcon } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'

const SkillText = () => {
  return (
    <div className='flex h-auto w-full flex-col items-center justify-center'>
      <motion.div
        className='rounded-8 relative isolate mb-8 flex w-max items-center overflow-hidden border border-blue-500/55 px-4 py-4 opacity-[0.9] shadow-[inset_0_-7px_11px_#309bd585] backdrop-blur-[6px] transition-shadow duration-450 ease-[cubic-bezier(0.6,0.6,0,1)]'
        variants={slideInFromTop}
      >
        <SparkleIcon className='mr-3 h-6 w-6 text-pink-500' />
        <h1 className='md:bg-[linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)), linear-gradient(0deg,rgba(244,97,187,1)0%,rgba(241,110,83,1)35%, rgba(135,221,241,0.98)100%)] bg-white bg-clip-text text-xl font-semibold text-transparent bg-blend-normal md:text-2xl'>
          Think better with NextJs 14
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='to mt-3 mb-4 bg-purple-500 bg-linear-to-r from-red-500 bg-clip-text text-center text-2xl font-medium text-transparent md:text-3xl'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='mt-3 mb-10 text-center text-gray-200 md:text-xl'
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText
