import { cn } from '@/utils/cn'
import { slideInFromLeft } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

type TProjectCardProps = {
  src: string
  title: string
  role: string
  description: string | React.ReactNode
  github: string
  website: string
}

const ProjectCard: FC<TProjectCardProps> = ({
  src,
  title,
  description,
  github,
  website,
  role,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'relative z-30 flex w-full flex-col gap-4 md:flex-row md:gap-6',
        showMore ? 'md:h-fit lg:h-fit' : 'h-fit md:h-60 lg:h-80',
      )}
    >
      <div className='rounded-4 size-full max-w-[480px] border border-violet-700 shadow-lg'>
        <Image
          alt='project img'
          src={src}
          width={480}
          height={320}
          className='rounded-4 size-full object-cover object-center'
        />
      </div>
      <motion.div
        variants={slideInFromLeft(1)}
        className={cn(
          'group rounded-4 z-30 flex size-full flex-col items-start justify-between gap-4 p-2 text-white duration-600',
          showMore ? 'max-h-fit md:max-h-60 lg:max-h-80' : 'max-h-full',
        )}
      >
        <div className='relative mb-6 flex h-full flex-col items-start gap-4'>
          <h1 className='text-whote text-23 bg-linear-to-r from-gray-200 to-cyan-500 bg-clip-text font-semibold text-transparent'>
            {title} - {role}
          </h1>
          <p
            className={cn(
              'text-16 line-clamp-3 text-white',
              showMore && 'line-clamp-none',
            )}
          >
            {description}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className='center absolute right-0 bottom-0 z-10 flex cursor-pointer flex-col text-white/50'
          >
            More
          </button>
        </div>
        <div className='flex h-fit items-center gap-4'>
          <Link
            href={github}
            className='font-small-caps text-16 items-center rounded-full bg-purple-500 px-6 py-2 text-center font-semibold duration-500 hover:bg-linear-to-r hover:from-red-500 hover:to-purple-500'
          >
            Github
          </Link>
          <Link
            href={website}
            className='font-small-caps text-16 items-center rounded-full bg-cyan-500 px-6 py-2 text-center font-semibold duration-500 hover:bg-linear-to-r hover:from-purple-500 hover:to-cyan-500'
          >
            Website
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
