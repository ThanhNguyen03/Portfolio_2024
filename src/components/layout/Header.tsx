'use client'

import { DELAY_TIME, SOCIAL_NAVIGATION } from '@/constants'
import { cn } from '@/utils/cn'
import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('about-me')
  const [delay, setDelay] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true)
    }, DELAY_TIME)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  const handleScroll = () => {
    const sections = document.querySelectorAll('section')
    let currentSection: string | null = null

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id')
      }
    })

    setActiveSection(currentSection || 'about-me')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={cn(!delay && 'hidden size-full')}>
      <motion.div initial='hidden' animate='visible'>
        <motion.div variants={slideInFromTop}>
          <div className='bg-back-700/10 fixed top-0 z-50 mx-auto h-[60px] w-full max-w-[1200px] px-10 shadow-lg shadow-blue-700/50 backdrop-blur-md'>
            <div className='m-auto flex size-full items-center justify-center px-3 md:justify-between'>
              <Link
                className='hidden h-auto w-auto items-center md:flex'
                href={'#about-me'}
              >
                <div className='relative size-full overflow-hidden rounded-full hover:animate-bounce'>
                  <Image
                    src={'/wavata.PNG'}
                    width={60}
                    height={60}
                    alt='logo'
                    objectFit='fill'
                    className='cursor-pointer'
                  />
                </div>
                <span className='to ml-3 bg-clip-text font-bold text-gray-300 hover:bg-purple-500 hover:bg-linear-to-r hover:from-red-500 hover:text-transparent md:block'>
                  ThanhNguyen03
                </span>
              </Link>
              <div className='custom-min1100:mr-20 flex h-full items-center justify-between'>
                <div className='mr-4 flex h-[70%] w-full items-center justify-between rounded-full border border-[#7042f861] bg-[radial-gradient(circle,rgba(238,174,202,0.3)_0%,rgba(148,187,233,0.3)_100%)] px-10 py-2 text-gray-200'>
                  <ul className='flex items-center gap-20'>
                    <li
                      className={`group ${
                        activeSection === 'about-me' ? 'active' : ''
                      }`}
                    >
                      <Link
                        href={'#about-me'}
                        className='flex flex-col items-center'
                      >
                        <span className='absolute z-50 translate-y-[-20px] cursor-pointer text-sm opacity-0'>
                          About Me
                        </span>
                        <div
                          style={{ backgroundImage: `url('/wavata.PNG')` }}
                          className='relative z-10 h-6 w-6 overflow-hidden rounded-full bg-cover'
                        >
                          {/* <Image src={'/wavata.PNG'} width={30} height={30} alt='logo' objectFit='fill' className=' cursor-pointer '/> */}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`group ${
                        activeSection === 'skills' ? 'active' : ''
                      }`}
                    >
                      <Link
                        href='#skills'
                        className='flex flex-col items-center'
                      >
                        <span className='absolute z-50 translate-y-[-20px] cursor-pointer opacity-0'>
                          Skills
                        </span>
                        <div
                          style={{ backgroundImage: `url('/competence.png')` }}
                          className='relative z-10 h-6 w-6 overflow-hidden rounded-full bg-cover'
                        >
                          {/* <Image src={'/wavata.PNG'} width={30} height={30} alt='logo' objectFit='fill' className=' cursor-pointer '/> */}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`group flex flex-col items-center ${
                        activeSection === 'projects' ? 'active' : ''
                      }`}
                    >
                      <Link
                        href={'#projects'}
                        className='flex flex-col items-center'
                      >
                        <span className='absolute z-50 translate-y-[-20px] cursor-pointer opacity-0'>
                          Projects
                        </span>
                        <div
                          style={{ backgroundImage: `url('/project.png')` }}
                          className='relative z-10 h-6 w-6 overflow-hidden rounded-full bg-cover'
                        >
                          {/* <Image src={'/wavata.PNG'} width={30} height={30} alt='logo' objectFit='fill' className=' cursor-pointer '/> */}
                        </div>
                      </Link>
                    </li>
                    <div className='indicator bg-[radial-gradient(circle,rgba(238,174,202,0.3)_0%,rgba(148,187,233,0.3)_100%)]'>
                      <div className='indicator1'></div>
                      <div className='indicator2'></div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className='hidden gap-5 md:flex'>
                {SOCIAL_NAVIGATION.map((social) => (
                  <Link key={social.name} href={social.href}>
                    <Image
                      src={social.image}
                      alt={social.name}
                      width={28}
                      height={28}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
