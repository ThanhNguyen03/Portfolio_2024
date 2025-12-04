import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

type TProjectCardProps = {
  src: string
  title: string
  role: string
  description: string
  detailDescription?: string | React.ReactNode
  github: string
  website: string
}

const ProjectCard: FC<TProjectCardProps> = ({
  src,
  title,
  description,
  detailDescription,
  github,
  website,
  role,
}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <motion.div
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
      className='relative z-30 flex size-full flex-col gap-4 md:flex-row md:gap-6'
    >
      {/* IMAGE */}
      <div className='rounded-4 size-full max-w-[480px] border border-violet-700 shadow-lg'>
        <Image
          alt='project img'
          src={src}
          width={480}
          height={320}
          className='rounded-4 size-full object-cover object-center'
        />
      </div>

      {/* CONTENT */}
      <div className='z-30 flex size-full flex-col items-start justify-between gap-4 p-2 text-white'>
        <div className='relative mb-6 flex flex-col gap-4'>
          <h1 className='text-23 bg-linear-to-br from-violet-600 to-white bg-clip-text font-semibold text-transparent'>
            {title} - {role}
          </h1>

          {/* DESCRIPTION */}
          <motion.span
            key={showMore ? 'open' : 'close'}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='text-16 text-white'
          >
            {showMore
              ? detailDescription || description
              : `${String(description).slice(0, 120)}...`}
          </motion.span>

          <span
            onClick={() => setShowMore(!showMore)}
            className='font-small-caps cursor-pointer underline'
          >
            {showMore ? 'Less' : 'More'}
          </span>
        </div>

        {/* BUTTONS */}
        <motion.div layout className='flex items-center gap-4'>
          <Link
            href={github}
            className='font-small-caps text-16 rounded-full border border-white/10 bg-linear-to-r from-[#202328] to-[#202328] px-6 py-2 font-semibold duration-500 hover:from-violet-500'
          >
            Github
          </Link>
          <Link
            href={website}
            className='font-small-caps text-16 from-secondary-600 to-secondary-600 rounded-full border border-white/10 bg-linear-to-r px-6 py-2 font-semibold duration-500 hover:to-violet-500'
          >
            Website
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
