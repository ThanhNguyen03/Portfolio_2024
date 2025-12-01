import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'
import { ANOTHER_SKILL, BE_SKILL_DATA, FE_SKILL_DATA } from '@/constants'

const Skills = () => {
  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10'
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
        {FE_SKILL_DATA.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
        {BE_SKILL_DATA.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
        {ANOTHER_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='w-full h-full absolute'>
        <div className='w-full h-full -z-10 opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
