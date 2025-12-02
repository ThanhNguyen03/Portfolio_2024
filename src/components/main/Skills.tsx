import {
  ANOTHER_SKILL,
  BE_SKILL_DATA,
  FE_SKILL_DATA,
  LANGUAGES_SKILL,
} from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative z-30 h-full px-2 pb-10 md:px-6 md:pb-20 lg:px-10 lg:pb-30'
      style={{ transform: 'scale(0.9)' }}
    >
      <div className='center relative mx-auto size-full w-full max-w-[1200px] flex-col gap-4 overflow-hidden md:gap-6'>
        <SkillText />
        <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
          {LANGUAGES_SKILL.map((skill, index) => (
            <SkillDataProvider
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
          {FE_SKILL_DATA.map((skill, index) => (
            <SkillDataProvider
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
          {BE_SKILL_DATA.map((skill, index) => (
            <SkillDataProvider
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
          {ANOTHER_SKILL.map((skill, index) => (
            <SkillDataProvider
              key={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        <div className='absolute size-full'>
          <div className='absolute -z-10 flex size-full items-center justify-center bg-cover opacity-30'>
            <video
              className='h-auto w-full'
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

export default Skills
