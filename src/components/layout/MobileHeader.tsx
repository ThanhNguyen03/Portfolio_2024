import { SOCIAL_NAVIGATION } from '@/constants'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TMobileHeaderProps = {
  isOpen: boolean
  onClose: (status: boolean) => void
}
const MobileHeader: FC<TMobileHeaderProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden bg-neutral-900/70 backdrop-blur-3xl duration-700 ease-[cubic-bezier(0.22,1.31,0.36,1)] md:hidden',
        isOpen ? 'h-screen translate-y-0' : 'h-0 -translate-y-full',
      )}
    >
      <div className='relative size-full overflow-hidden px-2 pb-4 backdrop-blur-3xl'>
        <div className='flex size-full flex-col items-center justify-between'>
          <div className='h-full'></div>
          <div className='flex w-full items-center justify-center gap-10 border-t border-white/30 pt-6'>
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
      </div>
    </div>
  )
}

export default MobileHeader
