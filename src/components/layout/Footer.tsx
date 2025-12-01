import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TFooterProps = {
  isInitVedioEnded?: boolean
}
const Footer: FC<TFooterProps> = ({ isInitVedioEnded }) => {
  return (
    <footer
      className={cn(
        'z-30 size-full px-2 py-10 text-gray-200 shadow-lg md:px-6 md:py-20 lg:px-10',
        !isInitVedioEnded && 'hidden',
      )}
    >
      <div className='mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center'>
        <div className='size-full flex-wrap items-center justify-around md:flex'>
          <div className='mb-10 flex min-w-[200px] flex-col items-center justify-start md:mb-auto'>
            <div className='to bg-purple-500 bg-linear-to-r from-cyan-500 bg-clip-text text-[16px] font-bold text-transparent'>
              Community
            </div>
            <Link
              href={'https://github.com/ThanhNguyen03'}
              className='my-4 flex cursor-pointer items-center'
            >
              <Image
                src={'/gitwhite.png'}
                alt={'facebook'}
                width={28}
                height={28}
              />
              <span className='ml-2 text-[15px]'>Github</span>
            </Link>
          </div>
          <div className='mb-10 flex min-w-[200px] flex-col items-center md:mb-auto'>
            <div className='to bg-purple-500 bg-linear-to-r from-cyan-500 bg-clip-text text-[16px] font-bold text-transparent'>
              Social Media
            </div>
            <Link
              href={'https://www.facebook.com/thanhfnguyen.03'}
              className='my-4 flex cursor-pointer items-center justify-start'
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
              className='my-4 flex cursor-pointer items-center justify-start'
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
              className='my-4 flex cursor-pointer items-center justify-start'
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
          <div className='mb-10 flex min-w-[200px] flex-col items-center justify-start md:mb-auto'>
            <div className='to bg-purple-500 bg-linear-to-r from-cyan-500 bg-clip-text text-[16px] font-bold text-transparent'>
              About
            </div>
            <p className='my-4 flex items-center'>
              <span className='ml-2 text-[15px]'>Learning about me</span>
            </p>
            <p className='my-4 flex items-center'>
              <span className='ml-2 text-[15px] underline'>
                thanhnguyen25011207@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className='text-md my-5 text-center'>
          &copy;&nbsp;
          <span className='to bg-purple-500 bg-linear-to-r from-red-500 bg-clip-text text-transparent'>
            ThanhNguyen03
          </span>
          &nbsp;Developer 2024 Inc. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
