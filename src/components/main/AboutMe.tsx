'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { ABOUT_STATS } from '@/constants'
import { DownloadSimpleIcon } from '@phosphor-icons/react/dist/ssr'

const AboutMe = () => {
  return (
    <section
      id='about-me'
      className='relative z-30 px-2 py-16 md:px-6 md:py-24 lg:px-10'
    >
      <div className='mx-auto w-full max-w-[1200px]'>
        {/* Section header */}
        <ScrollReveal direction='up' delay={0}>
          <div className='mb-12 flex items-center gap-4'>
            <h2 className='bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-4xl font-semibold text-transparent'>
              About Me
            </h2>
            <div className='h-px flex-1 bg-linear-to-r from-violet-500/50 to-transparent' />
          </div>
        </ScrollReveal>

        <div className='flex flex-col gap-12 md:flex-row md:items-start md:gap-16'>
          {/* Left — Bio */}
          <ScrollReveal direction='left' delay={0.1} className='flex-1'>
            <div className='flex flex-col gap-6'>
              <p className='text-16 leading-relaxed text-white/70'>
                I design and build complete systems — from pixel-perfect React
                interfaces to production GraphQL APIs and on-chain smart
                contracts. My focus is on{' '}
                <strong className='text-white'>
                  security-first architecture
                </strong>
                ,{' '}
                <strong className='text-white'>real-world payment flows</strong>
                , and{' '}
                <strong className='text-white'>performance at scale</strong>.
              </p>

              <p className='text-16 leading-relaxed text-white/70'>
                Outside the standard Web2 stack I work with{' '}
                <strong className='text-violet-300'>Wagmi + Viem</strong> on the
                client, <strong className='text-violet-300'>ethers.js</strong>{' '}
                on the server, and write{' '}
                <strong className='text-violet-300'>Solidity</strong> contracts
                with OpenZeppelin security patterns — bringing end-to-end
                ownership across the full Web3 lifecycle.
              </p>

              <a
                href='/CV_Thanh_Nguyen.pdf'
                download
                target='_blank'
                className='hover:text-primary-300 center mt-2 w-fit gap-2 rounded-lg border border-white/30 bg-[linear-gradient(180deg,rgba(48,144,241,0)_0%,rgba(81,178,219,0.32)_100%),rgba(47,68,255,0.12)] px-8 py-2.5 text-center text-white shadow-[inset_0_0_12px_#5466ee3d] transition duration-300 hover:bg-[linear-gradient(180deg,rgba(60,8,126,0)_0%,rgba(60,8,126,0.42)_100%),rgba(113,47,255,0.24)] hover:shadow-[inset_0_0_12px_#bf97ff70]'
              >
                <DownloadSimpleIcon size={18} />
                <span className='font-small-caps text-16'>Download CV</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <ScrollReveal
            direction='right'
            delay={0.2}
            className='sm:w-full md:w-auto'
          >
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-2'>
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-4 flex flex-col items-center gap-1 border border-violet-700/40 bg-violet-950/20 p-6 text-center backdrop-blur-sm'
                >
                  <span className='text-44 bg-linear-to-br from-pink-400 to-violet-400 bg-clip-text font-bold text-transparent'>
                    {stat.value}
                  </span>
                  <span className='text-13 text-white/60'>{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
