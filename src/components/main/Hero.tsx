'use client'

import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { FC, useEffect, useRef } from 'react'
import HeroContent from '../ui/HeroContent'

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
    <section className='relative flex w-full flex-col'>
      {!isInitVideoEnded ? (
        <>
          <video
            ref={video1Ref}
            autoPlay
            muted
            playsInline
            className='pointer-events-none fixed inset-0 z-0 size-full object-cover'
          >
            <source src='/vid_whole.mp4' type='video/mp4' />
          </video>
          {/* Skip Intro */}
          <button
            onClick={() => setIsVideoEnded(true)}
            className='center fixed right-8 bottom-8 z-50 cursor-pointer gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm transition duration-300 hover:border-white/40 hover:text-white'
          >
            Skip Intro
            <ArrowRightIcon size={14} />
          </button>
        </>
      ) : null}
      {isInitVideoEnded && (
        <>
          <video
            ref={video2Ref}
            autoPlay
            muted
            playsInline
            loop
            className='animate-slide-to-top pointer-events-none absolute inset-0 z-10 size-full overflow-y-hidden object-cover'
          >
            <source src='/vid_bhole.mp4' type='video/mp4' />
          </video>
          <HeroContent isInitVideoEnded={isInitVideoEnded} />
        </>
      )}
    </section>
  )
}

export default Hero
