import { facebookLogo, githubLogoWhite, linkdedinLogo } from '@/assets/icons'
import {
  CodesandboxLogoIcon,
  DevToLogoIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react/dist/ssr'
import { StaticImageData } from 'next/image'

export const DELAY_TIME = 4000 // 4s

type TNavigation = {
  name: string
  image?: StaticImageData | string
  href: string
  openNewTab?: boolean
}
export const SOCIAL_NAVIGATION: TNavigation[] = [
  {
    name: 'Facebook',
    image: facebookLogo,
    href: 'https://www.facebook.com/thanhfnguyen.03',
  },
  {
    name: 'LinkedIn',
    image: linkdedinLogo,
    href: 'https://www.linkedin.com/in/thanhfng12dev/',
  },
  {
    name: 'Github',
    image: githubLogoWhite,
    href: 'https://github.com/ThanhNguyen03',
  },
]
export const HEADER_NAVIGATION = [
  {
    id: 'about-me',
    icon: (
      <DevToLogoIcon
        weight='fill'
        className='size-7 group-data-[active=true]:text-pink-300 md:size-6'
        size={24}
      />
    ),
    label: 'About',
  },
  {
    id: 'skills',
    icon: (
      <CodesandboxLogoIcon
        weight='fill'
        className='size-7 group-data-[active=true]:text-red-500 md:size-6'
        size={24}
      />
    ),
    label: 'Skills',
  },
  {
    id: 'projects',
    icon: (
      <RocketLaunchIcon
        weight='fill'
        className='size-7 group-data-[active=true]:text-red-500 md:size-6'
        size={24}
      />
    ),
    label: 'Projects',
  },
]

export const LIST_FOOTER_NAVIGATION: Array<
  Record<'title', string> & {
    children: TNavigation[]
  }
> = [
  {
    title: 'Developers',
    children: [
      { href: '/', name: 'Homepage' },
      { href: 'https://github.com/ThanhNguyen03', name: 'Github' },
    ],
  },
  {
    title: 'Contact',
    children: [
      { href: 'https://m.me/thanhfnguyen.03', name: 'Facebook' },
      { href: 'https://ig.me/m/thanhf.ng_', name: 'Instagram' },
      { href: 'https://www.linkedin.com/in/thanhfnguyen03/', name: 'LinkedIn' },
      { href: 'https://t.me/thanhf.ng_', name: 'Telegram' },
    ],
  },
]
