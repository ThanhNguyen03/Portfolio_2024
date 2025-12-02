import {
  cssLogo,
  dotnetLogo,
  facebookLogo,
  figmaLogo,
  githubLogoWhite,
  htmlLogo,
  jsLogo,
  linkdedinLogo,
  mongoDBLogo,
  muiLogo,
  nextJSLogo,
  nodeJSLogo,
  postmanLogo,
  reactLogo,
  sqlServerLogo,
  tailwindLogo,
  typescriptLogo,
} from '@/assets/icons'
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

type TSkill = {
  name: string
  image: StaticImageData | string
  width?: number
  height?: number
}
export const SKILL_DATA = [
  {
    name: 'Html',
    image: htmlLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Css',
    image: cssLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'JavaScript',
    image: jsLogo,
    width: 65,
    height: 65,
  },
  {
    name: 'Tailwind Css',
    image: tailwindLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'React',
    image: reactLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Redux',
    image: sqlServerLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'TypeScript',
    image: typescriptLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Next.js 15',
    image: nextJSLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Framer Motion',
    image: sqlServerLogo,
    width: 80,
    height: 80,
  },
  {
    name: ' Payment',
    image: sqlServerLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Node.js',
    image: nodeJSLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'MongoDB',
    image: mongoDBLogo,
    width: 40,
    height: 40,
  },
]
export const FE_SKILL_DATA: TSkill[] = [
  {
    name: 'Html',
    image: htmlLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Css',
    image: cssLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'JavaScript',
    image: jsLogo,
    width: 65,
    height: 65,
  },
  {
    name: 'Tailwind Css',
    image: tailwindLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Material UI',
    image: muiLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'React',
    image: reactLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'TypeScript',
    image: typescriptLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Next.js',
    image: nextJSLogo,
    width: 80,
    height: 80,
  },
  {
    name: 'Apollo Client',
    image: sqlServerLogo,
    width: 80,
    height: 80,
  },
]
export const BE_SKILL_DATA: TSkill[] = [
  {
    name: 'Node.js',
    image: nodeJSLogo,
    width: 80,
    height: 80,
  },
  {
    name: '.NET',
    image: dotnetLogo,
    width: 70,
    height: 70,
  },
  {
    name: 'MongoDB',
    image: mongoDBLogo,
    width: 40,
    height: 40,
  },
  {
    name: 'MS SQL Server',
    image: sqlServerLogo,
    width: 70,
    height: 70,
  },
  {
    name: 'Redis',
    image: sqlServerLogo,
    width: 70,
    height: 70,
  },
]
export const ANOTHER_SKILL: TSkill[] = [
  {
    name: 'Docker',
    image: sqlServerLogo,
    width: 70,
    height: 70,
  },
  {
    name: 'Figma',
    image: figmaLogo,
    width: 50,
    height: 50,
  },
  {
    name: 'Git',
    image: githubLogoWhite,
    width: 70,
    height: 70,
  },
  {
    name: 'Postman',
    image: postmanLogo,
    width: 70,
    height: 70,
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
