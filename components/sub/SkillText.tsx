import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div className='Welcome-box py-4 px-4 border border-[#2653e78b] opacity-[0.9] mb-8'
                variants={slideInFromTop}>
                    <SparklesIcon className='text-[rgba(226,128,128,0.95)] mr-3 h-6 w-6'/>
                    <h1 className='Welcome-text text-xl md:text-2xl font-semibold'>Think better with NextJs 14</h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)} className='text-2xl md:text-3xl font-medium mt-3 text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-purple-500'>
                Making apps with modern technologies
            </motion.div>
            <motion.div variants={slideInFromRight(0.5)} className='md:text-xl text-gray-200 mb-10 mt-3 text-center'>
                Never miss a task deadline or idea
            </motion.div>
        </div>
    )
}

export default SkillText