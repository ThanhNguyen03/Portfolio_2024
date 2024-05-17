import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div className='flex items-center justify-center px-20 mt-40 w-full z-20'
        initial='hidden' animate='visible'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto md:text-start text-center'>
            <motion.div className='Welcome-box py-4 px-4 border border-[#2653e78b] opacity-[0.9] custom-max:mx-auto'
                variants={slideInFromTop}>
                    <SparklesIcon className='text-[rgba(226,128,128,0.95)] mr-3 h-6 w-6'/>
                    <h1 className='Welcome-text text-sm font-semibold'>FrontEnd Developer Portfolio</h1>
            </motion.div>
            <motion.div className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto leading-none'
                variants={slideInFromLeft(1)}>
                <div>
                    <span className='custom-max1100:block'>Providing&nbsp;</span>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-purple-500'>the best</span><br/>
                    project expreience
                </div>
            </motion.div>
            <motion.p className='text-lg text-gray-400 my-5 max-w-[600px]'
                variants={slideInFromLeft(1.5)}>
                I&apos;m a FrontEnd Developer with exprience in Website, Mobile. 
                Check out my projects and skills.
            </motion.p>
            <motion.a className='py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] custom-max:mx-auto'
                href='#skills'
                variants={slideInFromLeft(2)}>
                Learn more!
            </motion.a>
        </div>
        <motion.div className='hidden md:flex w-full h-full justify-center items-center'
            variants={slideInFromRight(1.5)}>
            <Image src={'/test.png'} alt='work icons' height={650} width={650} className='opacity-80'/>
        </motion.div>
    </motion.div>
  )
}

export default HeroContent