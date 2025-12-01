'use client'

import Hero from '@/components/main/Hero'
import Project from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import { DELAY_TIME } from '@/constants'
import { cn } from '@/utils/cn'
import { useEffect, useState } from 'react'

export default function Home() {
  const [delay, setDelay] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true)
    }, DELAY_TIME)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='h-full w-full overflow-x-hidden'>
      <div
        className={cn(
          'flex flex-col gap-20',
          !delay && 'h-screen overflow-y-hidden',
        )}
      >
        <Hero />
        {delay && (
          <>
            <Skills />
            <Project />
          </>
        )}
      </div>
    </main>
  )
}
