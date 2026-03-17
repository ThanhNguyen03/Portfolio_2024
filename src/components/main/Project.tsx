'use client'

import { ngooProject, weatherProject } from '@/assets/images'
import FeatureHighlight from '@/components/ui/FeatureHighlight'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { NGOO_SYSTEM_FEATURES, NGOO_TECH_STACK } from '@/constants'
import { ArrowRightIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '../ui/ProjectCard'

const ArchitectureFlow = () => (
  <div className='rounded-4 h-full border border-violet-700/40 bg-violet-950/20 p-5 backdrop-blur-sm'>
    <p className='text-13 mb-5 font-medium tracking-widest text-violet-400 uppercase'>
      System Architecture
    </p>
    <div className='flex flex-col gap-3'>
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

const Project = () => {
  return (
    <section
      id='projects'
      className='relative z-30 overflow-hidden px-2 py-10 md:px-6 md:py-20 lg:px-10'
    >
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-16'>
        {/* ── Section header ─────────────────────────────── */}
        <ScrollReveal direction='up' delay={0} className='w-full'>
          <div className='flex items-center gap-4'>
            <h2 className='bg-linear-to-r from-cyan-500 to-violet-500 bg-clip-text text-4xl font-semibold text-transparent'>
              My Projects
            </h2>
            <div className='h-px flex-1 bg-linear-to-r from-violet-500/50 to-transparent' />
          </div>
        </ScrollReveal>

        {/* ── NgOo Coffee — featured ──────────────────────── */}
        <div className='flex flex-col gap-8'>
          {/* Brief project card */}
          <ScrollReveal direction='up' delay={0.05} className='w-full'>
            <div className='relative z-30 flex w-full flex-col gap-4 md:flex-row md:gap-6'>
              {/* Image */}
              <div className='rounded-4 w-full border border-violet-700 shadow-lg md:max-w-[420px]'>
                <Image
                  alt='NgOo Coffee project'
                  src={ngooProject.src}
                  width={480}
                  height={320}
                  className='rounded-4 size-full object-cover object-center'
                />
              </div>

              {/* Brief info */}
              <div className='flex flex-1 flex-col justify-between gap-4 p-2 text-white'>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h3 className='text-23 bg-linear-to-br from-violet-400 to-white bg-clip-text font-semibold text-transparent'>
                      NgOo Coffee
                    </h3>
                    <span className='font-small-caps rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-0.5 text-[12px] text-pink-300 lining-nums'>
                      Full-Stack · Web3
                    </span>
                  </div>
                  <p className='text-15 leading-relaxed text-white/70'>
                    A 3D-animated, real-time food ordering platform with
                    multi-authentication (JWT · Google OAuth · Web3 wallet) and
                    three payment methods — PayPal webhooks, Cash on Delivery,
                    and on-chain ECDSA-verified crypto payments.
                  </p>
                </div>

                <div className='flex flex-wrap gap-2'>
                  <Link
                    href='https://ngoo-cf.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-small-caps center cursor-pointer gap-2 rounded-full border border-violet-400/60 bg-[linear-gradient(135deg,rgba(139,92,246,0.35)_0%,rgba(168,85,247,0.20)_100%)] px-6 py-2.5 text-[13px] font-semibold text-violet-200 shadow-[0_0_16px_rgba(139,92,246,0.35)] transition duration-300 hover:border-violet-300/80 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.55)_0%,rgba(168,85,247,0.40)_100%)] hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.55)]'
                  >
                    Live Demo
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Architecture + Features grid */}
          <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8'>
            {/* Architecture diagram */}
            <ScrollReveal
              direction='left'
              delay={0.1}
              className='lg:w-[360px] lg:shrink-0'
            >
              <ArchitectureFlow />
            </ScrollReveal>

            {/* Feature cards */}
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
          <ScrollReveal direction='up' delay={0.15} className='w-full'>
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

          {/* GitHub + Demo links */}
          <ScrollReveal direction='up' delay={0.2} className='w-full'>
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
                  className='font-small-caps center cursor-pointer gap-2 rounded-full border border-white/30 bg-white/8 px-5 py-2 text-[13px] font-semibold text-white/90 transition duration-300 hover:border-white/60 hover:bg-white/15 hover:text-white'
                >
                  <GithubLogoIcon size={15} weight='fill' />
                  {repo.label}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div className='section-divider' />

        {/* ── Other Projects ──────────────────────────────── */}
        <div className='flex flex-col gap-6'>
          <ScrollReveal direction='up' delay={0} className='w-full'>
            <h3 className='text-22 bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text font-semibold text-transparent'>
              Other Projects
            </h3>
          </ScrollReveal>

          <ScrollReveal direction='up' delay={0.05} className='w-full'>
            <ProjectCard
              src={weatherProject.src}
              title='Weather Website'
              role='Front-End'
              github='https://github.com/ThanhNguyen03/Angular_WeatherApp'
              website='https://thanhng-weather-app.vercel.app/'
              techStack={['Angular', 'TypeScript', 'REST API', 'Vercel']}
              description='Real-time search for weather & city suggestions. Displays temperature, precipitation, and wind data by city name. Organized Angular services for clean REST communication.'
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Project
