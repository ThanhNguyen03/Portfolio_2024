import { LIST_FOOTER_NAVIGATION } from '@/constants'
import { cn } from '@/utils/cn'
import { MailboxIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { FC } from 'react'
import { SpaceLogo } from '../sub/SpaceLogo'

type TFooterProps = {
  isInitVideoEnded?: boolean
}
const Footer: FC<TFooterProps> = ({ isInitVideoEnded }) => {
  return (
    <footer
      className={cn(
        'relative z-30 size-full px-2 py-10 shadow-lg md:px-6 md:py-20 lg:px-10',
        !isInitVideoEnded && 'hidden',
      )}
    >
      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-14 pt-10'>
        {/* list */}
        <div className='flex w-full flex-col gap-10 pb-10 md:flex-row md:justify-between'>
          {/* left */}
          <div className='flex w-full min-w-70 flex-col gap-4 md:max-w-100 md:items-start'>
            <div className='flex flex-col items-start'>
              {/* logo */}
              <SpaceLogo />
              {/* description */}
              <p className='text-16 font-lobster font-bold text-white'>
                By{' '}
                <span className='bg-linear-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                  thanhf.ng_
                </span>
              </p>
            </div>
            <Link
              href='mailto:thanhfng.dev@gmail.com'
              target='_blank'
              className='text-14 hover: flex items-center gap-1 text-white'
            >
              <MailboxIcon
                size={24}
                weight='duotone'
                className='text-pink-300'
              />
              Contact:{' '}
              <span className='italic underline'>thanhfng.dev@gmail.com</span>
            </Link>
          </div>

          {/* right */}
          <div className='flex gap-10 lg:gap-20'>
            {LIST_FOOTER_NAVIGATION.map((link) => (
              <div key={link.title} className='flex flex-col gap-4 lg:gap-3'>
                <p className='text-14! leading-[160%] font-semibold text-white/50'>
                  {link.title}
                </p>
                <ul className='flex flex-col gap-4 text-left font-semibold lg:gap-1'>
                  {link.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        target={child.openNewTab ? '_blank' : '_self'}
                        href={child.href}
                        title={child.name}
                        className='text-14! relative from-pink-300 to-violet-300 py-0.75 leading-[160%] text-white duration-500 hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent'
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* policy */}
        <div className='text-12! flex w-full flex-col justify-between gap-2 border-t border-white/30 py-2 leading-[130%] md:flex-row md:gap-0'>
          <p className='font-medium text-white/50'>
            © 2025 <span className='italic'>thanhf.ng_</span>. All rights
            reserved.
          </p>
          <div className='flex items-center gap-3'>
            <Link
              href='/'
              title='Privacy Policy'
              className='py-0.75 text-white underline'
            >
              Privacy Policy
            </Link>
            <Link
              href='/'
              title='Term of Service'
              className='py-0.75 text-white underline'
            >
              Term of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
