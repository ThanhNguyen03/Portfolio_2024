'use client'

import { SOCIAL_NAVIGATION } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>('about-me')

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
    <motion.div initial='hidden' animate='visible'>
      <motion.div variants={slideInFromTop}>
        <div className='w-full h-[60px] fixed top-0 shadow-lg shadow-blue-700/50 bg-back-700/10 backdrop-blur-md z-50 px-10'>
          <div className='w-full h-full flex items-center md:justify-between justify-center m-auto px-3 '>
            <Link
              className='md:flex items-center h-auto w-auto hidden'
              href={'#about-me'}
            >
              <div className='relative overflow-hidden w-full h-full rounded-full hover:animate-bounce'>
                <Image
                  src={'/wavata.PNG'}
                  width={60}
                  height={60}
                  alt='logo'
                  objectFit='fill'
                  className=' cursor-pointer '
                />
              </div>
              <span className='font-bold ml-3 md:block text-gray-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-red-500 to hover:bg-purple-500'>
                ThanhNguyen03
              </span>
            </Link>
            <div className='h-full flex items-center justify-between custom-min1100:mr-20'>
              <div className='flex items-center justify-between w-full h-[70%] border border-[#7042f861] bg-nav mr-4 px-10 py-2 rounded-full text-gray-200'>
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
                      <span className='absolute z-50 opacity-0 translate-y-[-20px] cursor-pointer text-sm'>
                        About Me
                      </span>
                      <div
                        style={{ backgroundImage: `url('/wavata.PNG')` }}
                        className='relative overflow-hidden rounded-full z-10 w-6 h-6 bg-cover'
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
                      href={'#skills'}
                      className='flex flex-col items-center'
                    >
                      <span className='absolute z-50 opacity-0 translate-y-[-20px] cursor-pointer'>
                        Skills
                      </span>
                      <div
                        style={{ backgroundImage: `url('/competence.png')` }}
                        className='relative overflow-hidden rounded-full z-10 w-6 h-6 bg-cover'
                      >
                        {/* <Image src={'/wavata.PNG'} width={30} height={30} alt='logo' objectFit='fill' className=' cursor-pointer '/> */}
                      </div>
                    </Link>
                  </li>
                  <li
                    className={`flex flex-col items-center group ${
                      activeSection === 'projects' ? 'active' : ''
                    }`}
                  >
                    <Link
                      href={'#projects'}
                      className='flex flex-col items-center'
                    >
                      <span className='absolute z-50 opacity-0 translate-y-[-20px] cursor-pointer'>
                        Projects
                      </span>
                      <div
                        style={{ backgroundImage: `url('/project.png')` }}
                        className='relative overflow-hidden rounded-full z-10 w-6 h-6 bg-cover'
                      >
                        {/* <Image src={'/wavata.PNG'} width={30} height={30} alt='logo' objectFit='fill' className=' cursor-pointer '/> */}
                      </div>
                    </Link>
                  </li>
                  <div className='indicator bg-nav'>
                    <div className='indicator1'></div>
                    <div className='indicator2'></div>
                  </div>
                </ul>
              </div>
            </div>
            <div className='md:flex gap-5 hidden'>
              {SOCIAL_NAVIGATION.map((social) => (
                <Link key={social.name} href={social.href}>
                  <Image
                    src={social.src}
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
  )
}

export default Navbar
