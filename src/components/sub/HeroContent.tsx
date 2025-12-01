import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion'
import { SparkleIcon } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
      className='z-20 flex w-full items-center justify-center px-2 py-10 md:px-6 md:py-20 lg:px-10 lg:py-30'
      initial='hidden'
      animate='visible'
    >
      <div className='mx-auto flex size-full max-w-[1200px] flex-col items-center justify-center gap-4 text-center md:items-start md:gap-6 md:text-start'>
        <motion.div
          className='rounded-8 relative isolate flex w-max items-center overflow-hidden border border-blue-500/55 px-4 py-4 opacity-[0.9] shadow-[inset_0_-7px_11px_#309bd585] backdrop-blur-[6px] transition-shadow duration-450 ease-[cubic-bezier(0.6,0.6,0,1)]'
          variants={slideInFromTop}
        >
          <SparkleIcon className='mr-3 h-6 w-6 text-pink-500/95' />
          <h1 className='md:bg-[linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)), linear-gradient(0deg,rgba(244,97,187,1)0%,rgba(241,110,83,1)35%, rgba(135,221,241,0.98)100%)] bg-white bg-clip-text text-sm font-semibold text-transparent bg-blend-normal'>
            FrontEnd Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          className='text-bold mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 text-6xl leading-none text-white'
          variants={slideInFromLeft(1)}
        >
          <div>
            <span className='custom-max1100:block'>Providing&nbsp;</span>
            <span className='to bg-purple-500 bg-linear-to-r from-red-500 bg-clip-text text-transparent'>
              the best
            </span>
            <br />
            project expreience
          </div>
        </motion.div>
        <motion.p
          className='my-5 max-w-[600px] text-lg text-gray-400'
          variants={slideInFromLeft(1.5)}
        >
          I&apos;m a FrontEnd Developer with exprience in Website, Mobile. Check
          out my projects and skills.
        </motion.p>
        <motion.a
          className='bg-[linear-gradient(180deg,rgba(48,144,241,0)0%,rgba(81,178,219,0.32)100%), rgba(47,68,255,0.12)] hover:bg-[linear-gradient(180deg,rgba(60,8,126,0)0%,rgba(60,8,126,0.42)100%), rgba(113,47,255,0.24)] max-w-[200px] cursor-pointer rounded-lg border border-white/30 px-8 py-2 text-center text-white shadow-[inset_0_0_12px_#5466ee3d] transition hover:shadow-[inset_0_0_12px_#bf97ff70]'
          href='#skills'
          variants={slideInFromLeft(2)}
        >
          Learn more!
        </motion.a>
      </div>
      <motion.div
        className='hidden size-full items-center justify-center md:flex'
        variants={slideInFromRight(1.5)}
      >
        <Image
          src='/test.png'
          alt='work icons'
          height={650}
          width={650}
          className='opacity-80'
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
