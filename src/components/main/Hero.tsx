'use client'

import { useEffect, useRef, useState } from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement | null>(null)
  const video2Ref = useRef<HTMLVideoElement | null>(null)
  const [video1Ended, setVideo1Ended] = useState(false)

  useEffect(() => {
    const video1 = video1Ref.current

    const handleVideoEnd = () => {
      setVideo1Ended(true)
    }

    if (video1) {
      video1.addEventListener('ended', handleVideoEnd)
      return () => {
        video1.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  return (
    <section id='about-me' className='relative flex h-screen w-full flex-col'>
      {!video1Ended && (
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className='absolute top-0 left-0 z-10 size-full object-cover'
        >
          <source src='/vid_whole.mp4' type='video/mp4' />
        </video>
      )}
      {video1Ended && (
        <>
          <video
            ref={video2Ref}
            autoPlay
            muted
            playsInline
            loop
            className='slideToTop absolute top-0 left-0 z-10 size-full object-cover'
          >
            <source src='/vid_bhole.mp4' type='video/mp4' />
          </video>
          <HeroContent />
        </>
      )}
    </section>
  )
}

export default Hero
