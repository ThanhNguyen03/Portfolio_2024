import {
  angularLogo,
  apolloClientLogo,
  cSharpLogo,
  cssLogo,
  dockerLogo,
  dotnetLogo,
  ethersLogo,
  facebookLogo,
  figmaLogo,
  framerMotionLogo,
  githubLogoWhite,
  gitLogo,
  grahqlLogo,
  htmlLogo,
  jsLogo,
  linkdedinLogo,
  mongoDBLogo,
  muiLogo,
  nextJSLogo,
  nodeJSLogo,
  postgreSqlLogo,
  postmanLogo,
  reactLogo,
  redisLogo,
  sqlServerLogo,
  tailwindLogo,
  threeLogo,
  typescriptLogo,
  viemLogo,
  wagmiLogo,
} from '@/assets/icons'
import {
  CodesandboxLogoIcon,
  DevToLogoIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react/dist/ssr'
import Image, { StaticImageData } from 'next/image'

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

type TSkill = {
  name: string
  icon: React.ReactNode
  width?: number
  height?: number
}
export const LANGUAGES_SKILL: TSkill[] = [
  {
    name: 'Html',
    icon: <Image src={htmlLogo} alt='html' width={80} height={80} />,
  },
  {
    name: 'Css',
    icon: <Image src={cssLogo} alt='css' width={95} height={95} />,
  },
  {
    name: 'C#',
    icon: <Image src={cSharpLogo} alt='c sharp' width={75} height={75} />,
  },
  {
    name: 'JavaScript',
    icon: <Image src={jsLogo} alt='js' width={65} height={65} />,
  },
  {
    name: 'TypeScript',
    icon: <Image src={typescriptLogo} alt='ts' width={70} height={70} />,
  },
  {
    name: 'Angular',
    icon: <Image src={angularLogo} alt='angular' width={65} height={65} />,
  },
]
export const FE_SKILL_DATA: TSkill[] = [
  {
    name: 'React',
    icon: <Image src={reactLogo} alt='react' width={80} height={80} />,
  },
  {
    name: 'Next.js',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-white p-2'>
        <Image src={nextJSLogo} alt='nextjs' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Tailwind Css',
    icon: <Image src={tailwindLogo} alt='taiwind' width={80} height={80} />,
  },
  {
    name: 'Material UI',
    icon: <Image src={muiLogo} alt='mui' width={80} height={80} />,
  },
  {
    name: 'Three',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-[#200e2d] p-4'>
        <Image src={threeLogo} alt='three' width={200} height={200} />
      </div>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-yellow-300 p-2'>
        <Image
          alt='framer motion'
          src={framerMotionLogo}
          width={60}
          height={60}
        />
      </div>
    ),
  },
  {
    name: 'Apollo Client',
    icon: (
      <Image
        src={apolloClientLogo}
        alt='apollo client'
        width={80}
        height={80}
        className='rounded-2'
      />
    ),
  },
  {
    name: 'Graphql',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-neutral-900 p-2'>
        <Image src={grahqlLogo} alt='graphql' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Wagmi',
    icon: (
      <Image
        src={wagmiLogo}
        alt='apollo client'
        width={80}
        height={80}
        className='rounded-2'
      />
    ),
  },
  {
    name: 'Viem',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-neutral-900 p-2'>
        <Image src={viemLogo} alt='graphql' width={80} height={80} />
      </div>
    ),
  },
]
export const BE_SKILL_DATA: TSkill[] = [
  {
    name: 'Node.js',
    icon: <Image src={nodeJSLogo} alt='node' width={80} height={80} />,
  },
  {
    name: '.NET',
    icon: <Image src={dotnetLogo} alt='net' width={80} height={80} />,
  },
  {
    name: 'Apollo Server',
    icon: (
      <Image
        src={apolloClientLogo}
        alt='apollo server'
        width={80}
        height={80}
        className='rounded-2'
      />
    ),
  },
  {
    name: 'Graphql',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-neutral-900 p-2'>
        <Image src={grahqlLogo} alt='graphql' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'MongoDB',
    icon: <Image src={mongoDBLogo} alt='mongo db' width={40} height={40} />,
  },
  {
    name: 'MS SQL Server',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-white p-2'>
        <Image
          src={sqlServerLogo}
          alt='ms sql server'
          width={225}
          height={225}
        />
      </div>
    ),
  },
  {
    name: 'Posgres SQL',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-white p-2'>
        <Image
          src={postgreSqlLogo}
          alt='postgre sql'
          width={225}
          height={225}
        />
      </div>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-neutral-800 p-3'>
        <Image src={redisLogo} alt='redis' width={500} height={500} />
      </div>
    ),
  },
  {
    name: 'EthersJS',
    icon: (
      <Image
        src={ethersLogo}
        alt='apollo client'
        width={80}
        height={80}
        className='rounded-2'
      />
    ),
  },
]
export const ANOTHER_SKILL: TSkill[] = [
  {
    name: 'Docker',
    icon: (
      <div className='center rounded-2 relative aspect-square size-20 bg-white p-3'>
        <Image src={dockerLogo} alt='redis' width={191} height={191} />
      </div>
    ),
    width: 70,
    height: 70,
  },
  {
    name: 'Figma',
    icon: <Image src={figmaLogo} alt='figma' width={40} height={40} />,
    width: 50,
    height: 50,
  },
  {
    name: 'Git',
    icon: <Image src={gitLogo} alt='git' width={70} height={70} />,
    width: 70,
    height: 70,
  },
  {
    name: 'Postman',
    icon: <Image src={postmanLogo} alt='postman' width={70} height={70} />,
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
