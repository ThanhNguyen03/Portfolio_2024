import { RocketIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export const SpaceLogo = () => {
  return (
    <Link href='/' className='z-10 flex items-center justify-center gap-2 py-2'>
      {/* logo */}
      <div className='shadow'>
        <Image
          width={40}
          height={40}
          className='text-primary-600 size-10'
          alt='space logo'
          src='/black-hole.png'
        />
      </div>
      <h1 className='text-16 relative flex h-10 flex-col items-start bg-[radial-gradient(circle,rgba(238,174,202)_0%,rgba(148,187,233)_100%)] bg-clip-text font-bold text-transparent'>
        <p className='mt-0.25 flex items-center'>
          Sp
          <RocketIcon size={20} className='text-violet-200' weight='fill' />
          ce
        </p>
        <p className='absolute bottom-0 z-10 bg-[radial-gradient(circle,rgba(238,174,202)_0%,rgba(148,187,233)_100%)] bg-clip-text font-bold tracking-[0.5px] text-transparent'>
          Porfolio
        </p>
      </h1>
    </Link>
  )
}
