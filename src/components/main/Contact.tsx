'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { SOCIAL_NAVIGATION } from '@/constants'
import { EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative z-30 px-2 py-16 md:px-6 md:py-24 lg:px-10'
    >
      <div className='mx-auto w-full max-w-[1200px]'>
        {/* Section header */}
        <ScrollReveal direction='up' delay={0}>
          <div className='mb-12 flex items-center gap-4'>
            <h2 className='bg-linear-to-r from-cyan-400 to-pink-400 bg-clip-text text-4xl font-semibold text-transparent'>
              Let&apos;s Connect
            </h2>
            <div className='h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent' />
          </div>
        </ScrollReveal>

        <ScrollReveal direction='up' delay={0.1}>
          <div className='rounded-4 flex flex-col items-center gap-8 border border-violet-700/40 bg-violet-950/20 px-6 py-12 text-center backdrop-blur-sm'>
            <p className='text-18 max-w-[500px] text-white/70'>
              Open to full-time roles, freelance projects, and interesting
              collaborations. Let&apos;s build something together.
            </p>

            {/* Email CTA */}
            <a
              href='mailto:thanhfng.dev@gmail.com'
              className='center gap-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3 text-cyan-300 transition duration-300 hover:bg-cyan-500/20 hover:text-cyan-200'
            >
              <EnvelopeSimpleIcon size={20} weight='fill' />
              <span className='font-small-caps text-16 font-semibold'>
                thanhfng.dev@gmail.com
              </span>
            </a>

            {/* Social links */}
            <div className='flex items-center gap-6'>
              {SOCIAL_NAVIGATION.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex flex-col items-center gap-1.5'
                >
                  <div className='rounded-2 border border-white/10 bg-white/5 p-2.5 transition duration-300 group-hover:border-white/25 group-hover:bg-white/10'>
                    <Image
                      src={social.image || ''}
                      alt={social.name}
                      width={22}
                      height={22}
                    />
                  </div>
                  <span className='font-small-caps text-12 text-white/40 group-hover:text-white/70'>
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
