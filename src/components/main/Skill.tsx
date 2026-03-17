'use client'

import {
  ANOTHER_SKILL,
  BE_SKILL_DATA,
  FE_SKILL_DATA,
  LANGUAGES_SKILL,
} from '@/constants'
import { SkillDataProvider } from '../ui/SkillDataProvider'
import { SkillKeyboard } from '../ui/SkillKeyBoard'

const Skill = () => {
  return (
    <section
      id='skills'
      className='relative overflow-hidden px-2 py-10 md:px-6 md:py-20 lg:px-10'
    >
      <div className='center mx-auto w-full max-w-[1200px] flex-col gap-20'>
        <div className='flex w-full items-center gap-4'>
          <h2 className='bg-linear-to-r from-cyan-500 to-violet-500 bg-clip-text text-4xl font-semibold text-transparent'>
            Technical Expertise
          </h2>
          <div className='h-px flex-1 bg-linear-to-r from-violet-500/50 to-transparent' />
        </div>

        <SkillKeyboard className='hidden md:flex' />

        <div className='center size-full flex-col gap-6 md:hidden'>
          <div className='z-50 flex flex-wrap items-center justify-around gap-6'>
            {LANGUAGES_SKILL.map((skill, index) => (
              <SkillDataProvider
                name={skill.name}
                key={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
          <div className='z-50 flex flex-wrap items-center justify-around gap-6'>
            {FE_SKILL_DATA.map((skill, index) => (
              <SkillDataProvider
                name={skill.name}
                key={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
          <div className='z-50 flex flex-wrap items-center justify-around gap-6'>
            {BE_SKILL_DATA.map((skill, index) => (
              <SkillDataProvider
                name={skill.name}
                key={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
          <div className='z-50 flex flex-wrap items-center justify-around gap-6'>
            {ANOTHER_SKILL.map((skill, index) => (
              <SkillDataProvider
                name={skill.name}
                key={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
          <div className='absolute -top-10 -z-10 flex h-auto w-[1200px] items-center justify-center bg-cover'>
            <video
              className='size-full object-center opacity-30'
              preload='false'
              playsInline
              loop
              muted
              autoPlay
              src='/cards-video.webm'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
