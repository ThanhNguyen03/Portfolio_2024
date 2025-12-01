import { ANOTHER_SKILL, BE_SKILL_DATA, FE_SKILL_DATA } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-10'
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
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
      <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
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
      <div className='mt-4 flex flex-wrap items-center justify-around gap-5'>
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
      <div className='absolute h-full w-full'>
        <div className='absolute -z-10 flex h-full w-full items-center justify-center bg-cover opacity-30'>
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
    </section>
  )
}

export default Skills
