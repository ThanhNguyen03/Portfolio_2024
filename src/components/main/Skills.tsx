import {
  ANOTHER_SKILL,
  BE_SKILL_DATA,
  FE_SKILL_DATA,
  LANGUAGES_SKILL,
} from '@/constants'
import SkillDataProvider from '../ui/SkillDataProvider'
import SkillText from '../ui/SkillText'

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative z-30 h-full px-2 pb-10 md:px-6 md:pb-20 lg:px-10 lg:pb-30'
      style={{ transform: 'scale(0.9)' }}
    >
      <div className='center relative mx-auto size-full w-full max-w-[1200px] flex-col gap-6 md:gap-10'>
        <SkillText />
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {LANGUAGES_SKILL.map((skill, index) => (
            <SkillDataProvider
              name={skill.name}
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {FE_SKILL_DATA.map((skill, index) => (
            <SkillDataProvider
              name={skill.name}
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {BE_SKILL_DATA.map((skill, index) => (
            <SkillDataProvider
              name={skill.name}
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='flex flex-wrap items-center justify-around gap-5'>
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
    </section>
  )
}

export default Skills
