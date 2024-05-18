import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  website: string;
}

const ProjectCard = ({src, title, description, github, website} : Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div onClick={handleFlip} className='w-[80vw] h-[30vh] md:w-[450px] md:h-[280px] rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-30 mb-10'>
      <motion.div className='flip-card-inner w-full h-full' initial={false} animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{duration: 0.6, animationDirection: 'normal'}} onAnimationComplete={() => setIsAnimating(false)}>
        <div style={{backgroundImage: `url(${src})`}} className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
          {!isFlipped ? (
            <div className='absolute inset-0 w-full h-full text-xl hidden group-hover:flex items-center z-20 justify-center'>
              Learn more &gt;
            </div>
          ) : ''}
        </div>
        <div style={{backgroundImage: `url(${src})`}} className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 -z-10'/>
          <div className='flex flex-col gap-4 md:gap-8 py-3 z-30'>
            <h1 className='text-whote md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to bg-cyan-500'>{title}</h1>
            <p className='text-gray-200 text-sm md:h-[100px] line-clamp-3'>{description}</p>
            <div className='flex gap-4'>
              <Link href={github} className='z-30 px-6 py-2 rounded-full bg-purple-500/55 hover:bg-gradient-to-r hover:from-red-500 to hover:bg-purple-500 items-center text-center'>
                Github
              </Link>
              <Link href={website} className='z-30 px-6 py-2 rounded-full bg-cyan-500/55 hover:bg-gradient-to-r hover:from-purple-500 to hover:bg-cyan-500 items-center text-center'>
                Website
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard