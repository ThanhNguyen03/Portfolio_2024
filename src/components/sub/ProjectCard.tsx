import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

type TProjectCardProps = {
  src: string
  title: string
  description: string
  github: string
  website: string
}

const ProjectCard: FC<TProjectCardProps> = ({
  src,
  title,
  description,
  github,
  website,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='z-30 mb-10 h-[30vh] w-[80vw] cursor-pointer rounded-lg border border-blue-700 shadow-lg md:h-[280px] md:w-[450px]'
    >
      <motion.div
        className='size-full transition-transform duration-700 transform-3d'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${src})` }}
          className='group relative size-full rounded-lg bg-cover bg-center p-4 text-white backface-hidden'
        >
          <div className='absolute inset-0 size-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
          {!isFlipped && (
            <div className='absolute inset-0 z-20 hidden size-full items-center justify-center text-xl group-hover:flex'>
              Learn more &gt;
            </div>
          )}
        </div>
        <div
          style={{ backgroundImage: `url(${src})` }}
          className='group relative size-full rotate-y-180 rounded-lg bg-cover bg-center p-4 text-white backface-hidden'
        >
          <div className='absolute inset-0 -z-10 size-full rounded-md bg-black opacity-50' />
          <div className='z-30 flex flex-col gap-4 py-3 md:gap-8'>
            <h1 className='text-whote to bg-cyan-500 bg-linear-to-r from-gray-200 bg-clip-text font-semibold text-transparent md:text-2xl'>
              {title}
            </h1>
            <p className='line-clamp-3 text-sm text-gray-200 md:h-[100px]'>
              {description}
            </p>
            <div className='flex gap-4'>
              <Link
                href={github}
                className='to z-30 items-center rounded-full bg-purple-500/55 px-6 py-2 text-center hover:bg-purple-500 hover:bg-linear-to-r hover:from-red-500'
              >
                Github
              </Link>
              <Link
                href={website}
                className='to z-30 items-center rounded-full bg-cyan-500/55 px-6 py-2 text-center hover:bg-cyan-500 hover:bg-linear-to-r hover:from-purple-500'
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
