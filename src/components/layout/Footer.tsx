import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-4 z-30'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full md:flex items-center justify-around flex-wrap'>
          <div className='min-w-[200px] mb-10 md:mb-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to bg-purple-500'>
              Community
            </div>
            <Link
              href={'https://github.com/ThanhNguyen03'}
              className='flex items-center my-4 cursor-pointer'
            >
              <Image
                src={'/gitwhite.png'}
                alt={'facebook'}
                width={28}
                height={28}
              />
              <span className='text-[15px] ml-2'>Github</span>
            </Link>
          </div>
          <div className='min-w-[200px] mb-10 md:mb-auto flex flex-col items-center'>
            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to bg-purple-500'>
              Social Media
            </div>
            <Link
              href={'https://www.facebook.com/thanhfnguyen.03'}
              className='flex items-center my-4 cursor-pointer justify-start'
            >
              <Image
                src={'/facebook.png'}
                alt={'facebook'}
                width={28}
                height={28}
              />
              <span className='text-md ml-2'>Facebook</span>
            </Link>
            <Link
              href={'https://www.instagram.com/thanhf.ng_/'}
              className='flex items-center my-4 cursor-pointer justify-start'
            >
              <Image
                src={'/instagram.png'}
                alt={'facebook'}
                width={28}
                height={28}
              />
              <span className='text-md ml-2'>Instagram</span>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/thanhfnguyen03/'}
              className='flex items-center my-4 cursor-pointer justify-start'
            >
              <Image
                src={'/linkedin.png'}
                alt={'facebook'}
                width={28}
                height={28}
              />
              <span className='text-md ml-2'>LinkedIn</span>
            </Link>
          </div>
          <div className='min-w-[200px] mb-10 md:mb-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to bg-purple-500'>
              About
            </div>
            <p className='flex items-center my-4'>
              <span className='text-[15px] ml-2'>Learning about me</span>
            </p>
            <p className='flex items-center my-4'>
              <span className='text-[15px] ml-2 underline'>
                thanhnguyen25011207@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className='my-5 text-md text-center'>
          &copy;&nbsp;
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-purple-500'>
            ThanhNguyen03
          </span>
          &nbsp;Developer 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
