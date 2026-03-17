'use client'

import FeatureHighlight from '@/components/ui/FeatureHighlight'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { NGOO_SYSTEM_FEATURES, NGOO_TECH_STACK } from '@/constants'
import { ArrowRightIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

const ArchitectureFlow = () => (
  <div className='rounded-4 border border-violet-700/40 bg-violet-950/20 p-6 backdrop-blur-sm'>
    <p className='text-13 mb-5 font-medium tracking-widest text-violet-400 uppercase'>
      System Architecture
    </p>
    <div className='flex flex-col gap-3'>
      {/* Layer rows */}
      {[
        {
          label: 'Frontend',
          items: ['Next.js 15', 'React 19', 'Apollo Client', 'Wagmi + Viem'],
          color: 'border-cyan-500/50 bg-cyan-950/30 text-cyan-300',
        },
        {
          label: 'API',
          items: ['Apollo Server 4', 'GraphQL', 'Socket.IO', 'Express'],
          color: 'border-violet-500/50 bg-violet-950/30 text-violet-300',
        },
        {
          label: 'Data',
          items: ['MongoDB', 'Redis', 'Mongoose', 'JWT + argon2'],
          color: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300',
        },
        {
          label: 'Blockchain',
          items: [
            'Solidity 0.8.24',
            'Hardhat',
            'OpenZeppelin',
            'Ethereum Sepolia',
          ],
          color: 'border-pink-500/50 bg-pink-950/30 text-pink-300',
        },
      ].map((layer, i, arr) => (
        <div key={layer.label} className='flex flex-col gap-2'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='text-11 w-20 shrink-0 font-medium tracking-widest text-white/40 uppercase'>
              {layer.label}
            </span>
            {layer.items.map((item) => (
              <span
                key={item}
                className={`rounded-2 border px-2.5 py-1 text-[11px] font-medium ${layer.color}`}
              >
                {item}
              </span>
            ))}
          </div>
          {i < arr.length - 1 && (
            <div className='ml-20 flex items-center gap-1 text-white/20'>
              <div className='h-4 w-px bg-white/20' />
              <ArrowRightIcon size={12} className='-ml-1 rotate-90' />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

const SystemShowcase = () => {
  return (
    <section
      id='system-showcase'
      className='relative px-2 py-16 md:px-6 md:py-24 lg:px-10'
    >
      <div className='mx-auto w-full max-w-[1200px]'>
        {/* Section header */}
        <ScrollReveal direction='up' delay={0}>
          <div className='mb-4 flex items-center gap-4'>
            <h2 className='bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-4xl font-semibold text-transparent'>
              NgOo Coffee
            </h2>
            <div className='h-px flex-1 bg-linear-to-r from-pink-500/50 to-transparent' />
          </div>
          <p className='text-16 mb-12 max-w-[700px] text-white/60'>
            A full-stack food ordering platform built from scratch — frontend,
            GraphQL API, real-time layer, and a Solidity smart contract on
            Ethereum Sepolia.
          </p>
        </ScrollReveal>

        {/* Architecture + Feature grid */}
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10'>
          {/* Left — Architecture diagram */}
          <ScrollReveal
            direction='left'
            delay={0.1}
            className='lg:w-[380px] lg:shrink-0'
          >
            <ArchitectureFlow />
          </ScrollReveal>

          {/* Right — Feature highlights grid */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {NGOO_SYSTEM_FEATURES.map((feature, i) => (
                <ScrollReveal
                  key={feature.title}
                  direction='up'
                  delay={0.1 + i * 0.05}
                >
                  <FeatureHighlight {...feature} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack pills */}
        <ScrollReveal direction='up' delay={0.2} className='mt-10'>
          <div className='flex flex-wrap gap-2'>
            {NGOO_TECH_STACK.map((tech) => (
              <span
                key={tech}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/60 transition hover:border-white/20 hover:text-white/80'
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Links */}
        <ScrollReveal direction='up' delay={0.25} className='mt-8'>
          <div className='flex flex-wrap gap-3'>
            {[
              {
                label: 'Frontend',
                href: 'https://github.com/ThanhNguyen03/ngoo-cf-2025',
              },
              {
                label: 'Backend',
                href: 'https://github.com/ThanhNguyen03/ngoo-server-2025',
              },
              {
                label: 'Smart Contract',
                href: 'https://github.com/ThanhNguyen03/ngoo-contract',
              },
            ].map((repo) => (
              <Link
                key={repo.label}
                href={repo.href}
                target='_blank'
                rel='noopener noreferrer'
                className='font-small-caps center gap-2 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(48,144,241,0)_0%,rgba(81,178,219,0.18)_100%),rgba(47,68,255,0.08)] px-5 py-2 text-[13px] font-semibold text-white/80 transition duration-300 hover:border-violet-400/40 hover:text-white'
              >
                <GithubLogoIcon size={16} />
                {repo.label}
              </Link>
            ))}
            <Link
              href='https://ngoo-cf.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-small-caps center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-[13px] font-semibold text-violet-300 transition duration-300 hover:bg-violet-500/20 hover:text-violet-200'
            >
              Live Demo
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default SystemShowcase
