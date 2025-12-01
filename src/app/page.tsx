'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/main/Hero'
import Project from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import { DELAY_TIME } from '@/constants'
import { cn } from '@/utils/cn'
import { useEffect, useState } from 'react'

export default function Home() {
  const [delay, setDelay] = useState<boolean>(false)
  const [isVideoEnded, setIsVideo1Ended] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true)
    }, DELAY_TIME)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main className='size-full overflow-x-hidden'>
        <div
          className={cn(
            'flex size-full flex-col gap-20',
            !delay && 'overflow-y-hidden',
          )}
        >
          <Hero
            isInitVideoEnded={isVideoEnded}
            setIsVideoEnded={setIsVideo1Ended}
          />
          {delay && (
            <>
              <Skills />
              <Project />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
