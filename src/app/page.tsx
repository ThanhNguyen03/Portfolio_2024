'use client'

import Hero from '@/components/main/Hero'
import Project from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import { cn } from '@/utils/cn'
import { useEffect, useState } from 'react'

export default function Home() {
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true)
    }, 4000)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='h-full w-full overflow-x-hidden'>
      <div
        className={cn(
          'flex flex-col gap-20',
          !delay && 'overflow-y-hidden h-[100vh]'
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
