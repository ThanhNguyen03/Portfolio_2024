import { HEADER_NAVIGATION, SOCIAL_NAVIGATION } from '@/constants'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TMobileHeaderProps = {
  isOpen: boolean
  onClose: () => void
  activeIndex: number
}
const MobileHeader: FC<TMobileHeaderProps> = ({
  isOpen,
  onClose,
  activeIndex,
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-neutral-900/70 backdrop-blur-3xl duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden',
        isOpen
          ? 'h-screen max-h-screen translate-y-0'
          : 'h-0 max-h-0 -translate-y-full',
      )}
    >
      <div
        className={cn(
          'relative size-full overflow-hidden px-2 pt-30 pb-4 backdrop-blur-3xl duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen
            ? 'h-screen max-h-screen translate-y-0'
            : 'h-0 max-h-0 -translate-y-full',
        )}
      >
        <div className='flex size-full flex-col items-start justify-between'>
          <div className='flex h-fit w-full flex-col items-start gap-6'>
            {HEADER_NAVIGATION.map((link, i) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={onClose}
                data-active={activeIndex === i}
                className={cn(
                  'group text-23! rounded-4 font-small-caps relative flex size-full items-center gap-6 border border-transparent px-4 py-2 font-bold text-white/50 transition-all duration-300',
                  activeIndex === i &&
                    'text-secondary-300 border border-pink-400/30 bg-[radial-gradient(circle,rgba(238,174,202,0.5)_0%,rgba(148,187,233,0.5)_100%)] duration-500',
                  'hover:text-secondary-300/50 hover:border-white/30 hover:bg-white/10',
                )}
              >
                {link.icon}
                <p className='mb-1.25'>{link.label}</p>
              </Link>
            ))}
          </div>
          <div
            className={cn(
              'flex w-full items-center justify-center gap-10 pt-6',
              isOpen && 'border-t border-white/30',
            )}
          >
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
