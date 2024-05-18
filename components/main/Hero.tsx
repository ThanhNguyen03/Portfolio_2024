"use client"
import React, { useRef, useEffect, useState } from 'react';
import HeroContent from '../sub/HeroContent';
import Navbar from "@/components/main/Navbar";
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const [video1Ended, setVideo1Ended] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;

    const handleVideoEnd = () => {
      setVideo1Ended(true);
    };

    if (video1) {
      video1.addEventListener('ended', handleVideoEnd);
      return () => {
        video1.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <section id='about-me' className='relative flex flex-col h-[100vh] w-full'>
      {!video1Ended && (
        <video ref={video1Ref} autoPlay muted playsInline className='absolute top-0 left-0 z-[1] w-full h-full object-cover'>
          <source src='/vid_whole.mp4' type='video/mp4'/>
        </video>
      )}
      {video1Ended && (
        <>
          <video ref={video2Ref} autoPlay muted playsInline loop className='absolute top-0 left-0 z-[1] w-full h-full object-cover slideToTop'>
            <source src='/vid_bhole.mp4' type='video/mp4' />
          </video>
          <HeroContent/>
          <motion.div initial='hidden' animate='visible'>
            <motion.div variants={slideInFromTop}>
              <Navbar/>
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;
