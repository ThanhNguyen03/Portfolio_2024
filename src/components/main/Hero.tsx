'use client'

import { FC, useEffect, useRef } from 'react'
import HeroContent from '../sub/HeroContent'

type THeroProps = {
  isInitVideoEnded?: boolean
  setIsVideoEnded: (value: boolean) => void
}
const Hero: FC<THeroProps> = ({ setIsVideoEnded, isInitVideoEnded }) => {
  const video1Ref = useRef<HTMLVideoElement | null>(null)
  const video2Ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video1 = video1Ref.current

    const handleVideoEnd = () => {
      setIsVideoEnded(true)
    }

    if (video1) {
      video1.addEventListener('ended', handleVideoEnd)
      return () => {
        video1.removeEventListener('ended', handleVideoEnd)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='about-me' className='relative flex h-screen w-full flex-col'>
      {!isInitVideoEnded && (
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
      {isInitVideoEnded && (
        <>
          <video
            ref={video2Ref}
            autoPlay
            muted
            playsInline
            loop
            className='animate-slide-to-top absolute top-0 left-0 z-10 size-full overflow-y-hidden object-cover'
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
