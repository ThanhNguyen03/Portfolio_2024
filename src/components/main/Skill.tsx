'use client'

import { slideInFromTop } from '@/utils/motion'
import { SparkleIcon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { SkillKeyboard } from '../ui/SkillKeyBoard'

const Skill = () => {
  return (
    <section
      id='skills'
      className='relative overflow-hidden px-2 py-10 md:px-6 md:py-20 lg:px-10'
    >
      <div className='center mx-auto w-full max-w-[1200px] flex-col gap-20'>
        <motion.div
          className='rounded-6 relative isolate flex w-max items-center overflow-hidden border border-blue-500/55 px-4 py-2 opacity-[0.9] shadow-[inset_0_-7px_11px_#309bd585] backdrop-blur-[6px] transition-shadow duration-450 ease-[cubic-bezier(0.6,0.6,0,1)]'
          variants={slideInFromTop}
        >
          <SparkleIcon size={32} className='mr-3 text-pink-500' />
          <h1 className='bg-white bg-clip-text text-xl font-semibold text-transparent bg-blend-normal md:bg-[linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(244,97,187,1)_0%,rgba(241,110,83,1)_35%,rgba(135,221,241,0.98)_100%)] md:text-2xl'>
            Technical Expertise
          </h1>
        </motion.div>

        <SkillKeyboard />
      </div>
    </section>
  )
}

export default Skill
