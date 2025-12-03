'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/main/Hero'
import Project from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import StarCanvas from '@/components/main/StarBackground'
import { cn } from '@/utils/cn'
import { useState } from 'react'

export default function Home() {
  const [isVideoEnded, setIsVideo1Ended] = useState<boolean>(false)

  return (
    <>
      <StarCanvas />
      <Header isInitVideoEnded={isVideoEnded} />
      <main
        id='main'
        className={cn(
          'flex size-full flex-col gap-20 overflow-x-hidden',
          isVideoEnded && 'overflow-hidden',
        )}
      >
        <Hero
          isInitVideoEnded={isVideoEnded}
          setIsVideoEnded={setIsVideo1Ended}
        />
        {isVideoEnded && (
          <>
            <Skills />
            <Project />
          </>
        )}
      </main>
      <Footer isInitVideoEnded={isVideoEnded} />
    </>
  )
}
