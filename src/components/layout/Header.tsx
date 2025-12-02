'use client'

import { SOCIAL_NAVIGATION } from '@/constants'
import { cn } from '@/utils/cn'
import { slideInFromTop } from '@/utils/motion'
import {
  CodesandboxLogoIcon,
  DevToLogoIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'

const HEADER_NAVIGATION = [
  {
    id: 'about-me',
    icon: <DevToLogoIcon weight='fill' className='text-red-500' size={24} />,
    label: 'About',
  },
  {
    id: 'skills',
    icon: (
      <CodesandboxLogoIcon weight='fill' className='text-red-500' size={24} />
    ),
    label: 'Skills',
  },
  {
    id: 'projects',
    icon: <RocketLaunchIcon weight='fill' className='text-red-500' size={24} />,
    label: 'Projects',
  },
]

type THeaderProps = {
  isInitVideoEnded?: boolean
}
const Header: FC<THeaderProps> = ({ isInitVideoEnded }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [targetIndex, setTargetIndex] = useState<number | null>(null)
  const [itemPositions, setItemPositions] = useState<
    { left: number; width: number }[]
  >([])

  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const navWrapperRef = useRef<HTMLDivElement | null>(null)

  // locks & timers
  const isAnimatingRef = useRef<boolean>(false) // lock while step animation runs
  const isNavigating = useRef<boolean>(false) // lock during programmatic smooth scroll
  const stepTimerRef = useRef<number | null>(null)

  // measure positions after layout + on resize / when nav becomes visible
  useLayoutEffect(() => {
    const measure = () => {
      const wrapper = navWrapperRef.current
      if (!wrapper) {
        return
      }

      const navRect = wrapper.getBoundingClientRect()
      const positions = navRefs.current.map((el) => {
        if (!el) {
          return { left: 0, width: 0 }
        }
        const rect = el.getBoundingClientRect()
        return {
          left: rect.left - navRect.left,
          width: rect.width,
        }
      })
      setItemPositions(positions)
    }

    // initial measure (if nav shown)
    measure()
    // measure on resize and also when fonts/images/layout change
    window.addEventListener('resize', measure)

    // also observe mutations (rare) to handle dynamic layout
    const mutationObserver = new MutationObserver(() => measure())
    if (navWrapperRef.current)
      mutationObserver.observe(navWrapperRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      })
    return () => {
      window.removeEventListener('resize', measure)
      mutationObserver.disconnect()
    }
  }, [isInitVideoEnded])

  // helper to clear step timer
  const clearStepTimer = () => {
    if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current)
      stepTimerRef.current = null
    }
  }

  // start step-by-step animation from current -> target
  const runStepAnimation = (from: number, to: number) => {
    clearStepTimer()
    if (from === to) {
      return
    }

    isAnimatingRef.current = true
    const direction = to > from ? 1 : -1
    const stepDuration = 140 // ms per step; tune if needed
    let current = from

    stepTimerRef.current = window.setInterval(() => {
      current = current + direction
      setActiveIndex(current)
      if (current === to) {
        clearStepTimer()
        // small delay to ensure final animation finishes
        window.setTimeout(() => {
          isAnimatingRef.current = false
        }, 40)
      }
    }, stepDuration)
  }

  // exposed click handler
  const handleClickNavigation = (index: number) => {
    // if already animating to same target, ignore
    if (targetIndex === index && isAnimatingRef.current) {
      return
    }

    // set desired, lock scroll-from-user while we programmatically scroll
    setTargetIndex(index)
    isNavigating.current = true

    const el = document.getElementById(HEADER_NAVIGATION[index].id)
    if (el) {
      const headerOffset = 0
      window.scrollTo({
        top: Math.max(0, el.offsetTop - headerOffset),
        behavior: 'smooth',
      })
    }

    // unlock scroll detection after smooth scroll likely finished
    // duration chosen to be safe; if your page is long/slow increase
    window.setTimeout(() => {
      isNavigating.current = false
    }, 700)
  }

  // when desiredIndex changes, start step-by-step (but don't if already animating same)
  useEffect(() => {
    if (targetIndex === null) {
      return
    }
    if (targetIndex === activeIndex) {
      setTargetIndex(null)
      return
    }
    // if while animating a new desired appears, we restart animation to new target
    runStepAnimation(activeIndex, targetIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIndex])

  useEffect(() => {
    const onScroll = () => {
      // ignore while we are programmatically scrolling
      if (isNavigating.current) {
        return
      }
      // ignore scroll while indicator is animating step-by-step
      if (isAnimatingRef.current) {
        return
      }

      const headerOffset = 400
      const scrollY = window.scrollY
      let found = -1
      for (let i = 0; i < HEADER_NAVIGATION.length; i++) {
        const el = document.getElementById(HEADER_NAVIGATION[i].id)
        if (!el) {
          continue
        }
        const top = Math.max(0, el.offsetTop - headerOffset)
        const nextTop =
          i + 1 < HEADER_NAVIGATION.length
            ? Math.max(
                0,
                (document.getElementById(HEADER_NAVIGATION[i + 1].id)
                  ?.offsetTop || Infinity) - headerOffset,
              )
            : Infinity
        if (scrollY >= top && scrollY < nextTop) {
          found = i
          break
        }
      }
      if (found !== -1 && found !== activeIndex) {
        // if user scrolls manually, jump desired -> found and animate step-by-step from current to found
        setTargetIndex(found)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [activeIndex])

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearStepTimer()
    }
  }, [])

  return (
    <header className='bg-black-700/10 fixed top-0 z-70 w-full px-2 shadow-lg shadow-[rgb(42,14,97,0.5)] backdrop-blur-md md:px-6 lg:px-10'>
      {isInitVideoEnded && (
        <motion.div
          variants={slideInFromTop}
          initial='hidden'
          animate='visible'
          className='size-full'
          transition={{ duration: 0.6 }}
        >
          <div className='relative mx-auto flex min-h-15 w-full max-w-[1200px] items-center justify-between'>
            <Link
              className='rounded-3 flex items-center justify-center border border-white/10 bg-white/30 px-4 py-1 duration-300'
              href='/'
            >
              <p className='font-lobster from-pink-300 bg-clip-text font-bold text-white duration-300 hover:bg-violet-200 hover:bg-linear-to-r hover:text-transparent md:block'>
                thanhf.ng_
              </p>
            </Link>

            <div className='absolute left-1/2 flex h-full -translate-x-1/2 items-center justify-center py-2'>
              <nav
                ref={navWrapperRef}
                className='relative flex h-full w-fit items-center justify-center gap-6 rounded-full border border-[#7042f861] bg-violet-300/10 p-1 text-gray-200 md:gap-10'
              >
                {HEADER_NAVIGATION.map((link, i) => (
                  <Link
                    key={link.id}
                    ref={(el) => {
                      navRefs.current[i] = el
                    }}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClickNavigation(i)
                    }}
                    className={cn(
                      'text-18! font-small-caps relative flex size-full items-center gap-2 px-4 font-bold transition-all duration-300',
                      'hover:',
                    )}
                  >
                    {link.icon}
                    <p className='mb-1'>{link.label}</p>
                  </Link>
                ))}

                {/* Indicator */}
                {itemPositions.length > 0 && (
                  <motion.div
                    aria-hidden
                    className='absolute h-[80%] rounded-full border border-pink-400/30 bg-[radial-gradient(circle,rgba(238,174,202,0.5)_0%,rgba(148,187,233,0.5)_100%)] duration-500 ease-[cubic-bezier(0.22,1.31,0.36,1)]'
                    layout
                    style={{
                      left: itemPositions[activeIndex]?.left,
                      width: itemPositions[activeIndex]?.width,
                    }}
                  />
                )}
              </nav>
            </div>

            <div className='hidden gap-4 md:flex md:gap-6'>
              {SOCIAL_NAVIGATION.map((social) => (
                <Link key={social.name} href={social.href}>
                  <Image
                    src={social.image || ''}
                    alt={social.name}
                    width={28}
                    height={28}
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
