import {
  angularLogo,
  apolloLogo,
  cSharpLogo,
  cssLogo,
  dockerLogo,
  ethersLogo,
  expressJSLogo,
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
  nextJSLogo,
  nodeJSLogo,
  postgreSqlLogo,
  postmanLogo,
  reactLogo,
  redisLogo,
  socketLogo,
  sqlServerLogo,
  tailwindLogo,
  threeLogo,
  typescriptLogo,
  vercelLogo,
  viemLogo,
  vitejsLogo,
  vitestLogo,
  wagmiLogo,
} from '@/assets/icons'
import type { TKeycapTheme } from '@/components/ui/KeyCap'
import {
  CodesandboxLogoIcon,
  DevToLogoIcon,
  EnvelopeSimpleIcon,
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
  {
    id: 'contact',
    icon: (
      <EnvelopeSimpleIcon
        weight='fill'
        className='size-7 group-data-[active=true]:text-cyan-400 md:size-6'
        size={24}
      />
    ),
    label: 'Contact',
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

type TSkill = {
  name: string
  icon: React.ReactNode
  width?: number
  height?: number
}
export const LANGUAGES_SKILL: TSkill[] = [
  {
    name: 'Html',
    icon: <Image src={htmlLogo} alt='html' width={40} height={40} />,
  },
  {
    name: 'Css',
    icon: <Image src={cssLogo} alt='css' width={40} height={40} />,
  },
  {
    name: 'C#',
    icon: <Image src={cSharpLogo} alt='c sharp' width={45} height={45} />,
  },
  {
    name: 'JavaScript',
    icon: <Image src={jsLogo} alt='js' width={45} height={45} />,
  },
  {
    name: 'TypeScript',
    icon: <Image src={typescriptLogo} alt='ts' width={45} height={45} />,
  },
  {
    name: 'Angular',
    icon: <Image src={angularLogo} alt='angular' width={45} height={45} />,
  },
]
export const FE_SKILL_DATA: TSkill[] = [
  {
    name: 'React',
    icon: <Image src={reactLogo} alt='react' width={40} height={40} />,
  },
  {
    name: 'Next.js',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-black p-1'>
        <Image src={nextJSLogo} alt='nextjs' width={60} height={60} />
      </div>
    ),
  },
  {
    name: 'Tailwind Css',
    icon: <Image src={tailwindLogo} alt='taiwind' width={45} height={45} />,
  },
  {
    name: 'Three',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-white p-1'>
        <Image src={threeLogo} alt='three' width={40} height={40} />
      </div>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-yellow-300 p-2'>
        <Image
          alt='framer motion'
          src={framerMotionLogo}
          width={40}
          height={40}
        />
      </div>
    ),
  },
  {
    name: 'Vitest',
    icon: <Image src={vitestLogo} alt='vitest' width={40} height={40} />,
  },
  {
    name: 'Wagmi',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#C4A878] p-1'>
        <Image
          src={wagmiLogo}
          alt='apollo client'
          width={50}
          height={50}
          className='rounded-2'
        />
      </div>
    ),
  },
  {
    name: 'Vitejs',
    icon: <Image src={vitejsLogo} alt='vitejs' width={40} height={40} />,
  },
]
export const BE_SKILL_DATA: TSkill[] = [
  {
    name: 'Viem',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-yellow-300 p-1'>
        <Image src={viemLogo} alt='graphql' width={40} height={40} />
      </div>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#5fa04e] p-1'>
        <Image src={nodeJSLogo} alt='node' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Apollo Server',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#2A0E61] p-2'>
        <Image src={apolloLogo} alt='apollo server' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Express.js',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#d0d0d0] p-2'>
        <Image src={expressJSLogo} alt='express' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Graphql',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#E434AA] p-2'>
        <Image src={grahqlLogo} alt='graphql' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#0acf83] p-1'>
        <Image src={mongoDBLogo} alt='mongo db' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'MS SQL Server',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-white p-2'>
        <Image src={sqlServerLogo} alt='ms sql server' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Socket.io',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-white p-2'>
        <Image src={socketLogo} alt='ms sql server' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Posgres SQL',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-white p-2'>
        <Image src={postgreSqlLogo} alt='postgre sql' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-neutral-800 p-2'>
        <Image src={redisLogo} alt='redis' width={80} height={80} />
      </div>
    ),
  },
  {
    name: 'EthersJS',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#24339B] p-2'>
        <Image
          src={ethersLogo}
          alt='apollo client'
          width={80}
          height={80}
          className='rounded-2'
        />
      </div>
    ),
  },
]
export const ANOTHER_SKILL: TSkill[] = [
  {
    name: 'Docker',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-white p-1'>
        <Image src={dockerLogo} alt='redis' width={100} height={100} />
      </div>
    ),
    width: 70,
    height: 70,
  },
  {
    name: 'Figma',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-neutral-800 p-2'>
        <Image src={figmaLogo} alt='figma' width={100} height={100} />
      </div>
    ),
    width: 50,
    height: 50,
  },
  {
    name: 'Git',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#F34F29] p-1'>
        <Image src={gitLogo} alt='git' width={70} height={70} />
      </div>
    ),
    width: 70,
    height: 70,
  },
  {
    name: 'Postman',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-[#f37036] p-1'>
        <Image src={postmanLogo} alt='postman' width={70} height={70} />
      </div>
    ),
    width: 70,
    height: 70,
  },
  {
    name: 'Vercel',
    icon: (
      <div className='center rounded-2 relative aspect-square size-12 bg-neutral-800 p-2'>
        <Image src={vercelLogo} alt='vercel' width={70} height={70} />
      </div>
    ),
    width: 70,
    height: 70,
  },
]

export type TFeatureHighlight = {
  title: string
  description: string
  tags: string[]
  iconName:
    | 'currency'
    | 'lightning'
    | 'shield'
    | 'lock'
    | 'gauge'
    | 'cube'
    | 'code'
    | 'activity'
}

export const NGOO_SYSTEM_FEATURES: TFeatureHighlight[] = [
  {
    iconName: 'currency',
    title: 'Multi-Payment System',
    description:
      'PayPal webhooks with queue + retry, Cash on Delivery, and on-chain crypto payments via ECDSA signature verification.',
    tags: ['PayPal', 'Socket.IO', 'Solidity'],
  },
  {
    iconName: 'lightning',
    title: 'Real-Time Orders',
    description:
      'Socket.IO bidirectional communication for live order status updates with room-based messaging and reconnect replay.',
    tags: ['Socket.IO', 'Node.js', 'Redis'],
  },
  {
    iconName: 'shield',
    title: 'On-Chain ECDSA Verification',
    description:
      'Smart contract with nonce replay protection, ReentrancyGuard, Pausable, and deadline expiry on Ethereum Sepolia.',
    tags: ['Solidity', 'OpenZeppelin', 'Hardhat'],
  },
  {
    iconName: 'lock',
    title: 'JWT Security Architecture',
    description:
      'Refresh token rotation with reuse detection, Redis allowlist for token revocation, and device-bound sessions.',
    tags: ['JWT', 'Redis', 'argon2'],
  },
  {
    iconName: 'gauge',
    title: 'Performance at Scale',
    description:
      'Cursor-based pagination O(log N), Redis distributed locking via Lua scripts, version-based cache invalidation.',
    tags: ['Redis', 'MongoDB', 'GraphQL'],
  },
  {
    iconName: 'cube',
    title: '3D Interactive UI',
    description:
      'Spring-physics keycap animations, WebGL star field with 5000 points, Framer Motion micro-interactions.',
    tags: ['Three.js', 'Framer Motion', 'R3F'],
  },
]

export const NGOO_TECH_STACK = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Three.js',
  'Zustand',
  'Apollo Client',
  'Wagmi',
  'Viem',
  'Node.js 22',
  'Apollo Server',
  'Express',
  'GraphQL',
  'MongoDB',
  'Redis',
  'Socket.IO',
  'JWT',
  'Solidity',
  'Hardhat',
  'OpenZeppelin',
  'ethers.js',
  'Docker',
]

export const ABOUT_STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Full-Stack Projects' },
  { value: '30+', label: 'Technologies' },
  { value: '3', label: 'Security Audits' },
]

// List of themes for the keyboard
export const KEYBOARD_THEMES: TKeycapTheme[] = [
  // Row 1
  {
    bodyColor: '#fff',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={threeLogo}
        alt='three'
        width={26}
        height={26}
      />
    ),
    material: 'plastic',
    position: [0.04, 0.7, 0.05],
    name: 'Three.js',
    description:
      'Powerful JavaScript 3D library that uses WebGL to create and display animated 3D graphics in the browser with physics, lighting, and complex geometries.',
  },
  {
    bodyColor: '#FFD34E',
    textColor: '#fff',
    text: (
      <Image
        className='rounded-1 pointer-events-none'
        src={jsLogo}
        alt='js'
        width={22}
        height={22}
      />
    ),
    material: 'metal',
    position: [-0.01, 0.6, -0.01],
    name: 'JavaScript',
    description:
      'High-level, just-in-time compiled programming language that conforms to the ECMAScript specification. Core technology of the World Wide Web, enabling interactive web pages and dynamic content.',
  },
  {
    bodyColor: '#c4473a',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={angularLogo}
        alt='angular'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.01, 0.7, 0.06],
    name: 'Angular',
    description:
      'TypeScript-based web application framework led by Google. Provides a complete solution for building dynamic single-page applications with two-way data binding, dependency injection, and modular architecture.',
  },
  {
    bodyColor: '#68217A',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={cSharpLogo}
        alt='c sharp'
        width={23}
        height={23}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.05],
    name: 'C#',
    description:
      'Modern, object-oriented programming language developed by Microsoft. Runs on .NET Framework and is widely used for Windows applications, game development with Unity, and enterprise backend services.',
  },
  {
    bodyColor: '#000000',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={vercelLogo}
        alt='vercel'
        width={20}
        height={20}
      />
    ),
    material: 'plastic',
    position: [0, 0.6, -0.05],
    name: 'Vercel',
    description:
      'Cloud platform for static sites and serverless functions that enables developers to host websites and web services with automatic SSL, global CDN, and continuous deployment from Git repositories.',
  },
  {
    bodyColor: '#E44D26',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={htmlLogo}
        alt='html'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [0, 0.6, 0],
    name: 'HTML5',
    description:
      'Standard markup language for creating web pages and web applications. Provides structure and semantics for content with support for multimedia, graphics, and modern web APIs.',
  },
  {
    bodyColor: '#24339B',
    textColor: '#ffffff',
    text: (
      <Image
        className='rounded-0.5 pointer-events-none'
        src={ethersLogo}
        alt='ethers'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.03, 0.7, 0.05],
    name: 'Ethers.js',
    description:
      'Complete Ethereum wallet implementation and library for interacting with the Ethereum blockchain. Features a clean, lightweight API for sending transactions, interacting with smart contracts, and managing private keys.',
  },
  {
    bodyColor: '#1572B6',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={cssLogo}
        alt='css'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [0, 0.6, 0],
    name: 'CSS3',
    description:
      'Style sheet language used for describing the presentation of a document written in HTML. Enables responsive design, animations, grid layouts, and custom styling across different screen sizes.',
  },

  // Row 2
  {
    bodyColor: '#f37036',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={postmanLogo}
        alt='postman'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [0.03, 0.7, 0.05],
    name: 'Postman',
    description:
      'API development and testing environment that simplifies each step of building an API. Features request building, test automation, documentation generation, and team collaboration tools.',
  },
  {
    bodyColor: '#38bdf8',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={tailwindLogo}
        alt='tailwind'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0.04],
    name: 'Tailwind CSS',
    description:
      'Utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Enables rapid UI development with consistent styling and responsive design patterns.',
  },
  {
    bodyColor: '#a259ff',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={figmaLogo}
        alt='figma'
        width={20}
        height={20}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.02],
    name: 'Figma',
    description:
      'Cloud-based design tool for interface design and prototyping with real-time collaboration. Enables teams to create, share, and test designs with version control and developer handoff features.',
  },
  {
    bodyColor: '#2A0E61',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={apolloLogo}
        alt='apollo'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.04],
    name: 'Apollo GraphQL',
    description:
      'Comprehensive GraphQL platform that includes client and server tools for managing data with a unified graph. Provides state management, caching, and real-time updates for modern applications.',
  },
  {
    bodyColor: '#fff',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={framerMotionLogo}
        alt='framer'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.05, 0.7, 0.07],
    name: 'Framer Motion',
    description:
      'Production-ready motion library for React that makes creating animations and gestures simple. Features spring animations, layout transitions, drag gestures, and SVG path animations with a declarative API.',
  },
  {
    bodyColor: '#A2CB8B',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={vitestLogo}
        alt='vitest'
        width={20}
        height={20}
      />
    ),
    material: 'plastic',
    position: [-0.04, 0.7, 0.02],
    name: 'Vitest',
    description:
      'Blazing fast unit testing framework powered by Vite. Offers Jest-compatible API with built-in TypeScript support, watch mode, and parallel execution for efficient test-driven development.',
  },
  {
    bodyColor: '#0494C4',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={dockerLogo}
        alt='docker'
        width={28}
        height={28}
      />
    ),
    material: 'plastic',
    position: [-0.1, 0.7, 0.02],
    name: 'Docker',
    description:
      'Platform for developing, shipping, and running applications in containers. Ensures consistent environments across development, testing, and production with lightweight virtualization and easy scaling.',
  },
  {
    bodyColor: '#fff',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={sqlServerLogo}
        alt='sql server'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.05, 0.7, 0.02],
    name: 'SQL Server',
    description:
      'Relational database management system developed by Microsoft. Features high performance, security, and business intelligence capabilities for enterprise data management and analytics.',
  },

  // Row 3
  {
    bodyColor: '#0acf83',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={mongoDBLogo}
        alt='mongodb'
        width={23}
        height={23}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0.02],
    name: 'MongoDB',
    description:
      'NoSQL document database with JSON-like schema and powerful querying. Designed for scalability and flexibility, featuring horizontal scaling, rich indexing, and aggregation pipelines for modern applications.',
  },
  {
    bodyColor: '#C4A878',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none rounded-[3.5px] select-none'
        src={wagmiLogo}
        alt='wagmi'
        width={35}
        height={35}
      />
    ),
    material: 'plastic',
    position: [0.01, 0.7, 0.03],
    name: 'Wagmi',
    description:
      'Collection of React Hooks for Ethereum that makes it easy to connect to wallets, interact with contracts, and manage blockchain state. Provides a robust foundation for building decentralized applications with type safety.',
  },
  {
    bodyColor: '#fff',
    textColor: '#000000',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={socketLogo}
        alt='socket'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [0, 0.7, 0.02],
    name: 'Socket.io',
    description:
      'Library enabling real-time, bidirectional communication between web clients and servers. Supports fallback options, automatic reconnection, and multiplexing for chat applications, live updates, and collaborative features.',
  },
  {
    bodyColor: '#FFD34E',
    textColor: '#000000',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={viemLogo}
        alt='viem'
        width={23}
        height={23}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.03],
    name: 'Viem',
    description:
      'TypeScript-first interface for Ethereum that provides low-level stateless APIs for interacting with the blockchain. Features modular design, tree-shaking support, and comprehensive type inference for better developer experience.',
  },
  {
    bodyColor: '#F34F29',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={gitLogo}
        alt='git'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.03, 0.7, 0.02],
    name: 'Git',
    description:
      'Distributed version control system designed for tracking changes in source code. Enables multiple developers to work simultaneously with branching, merging, and complete history of all changes.',
  },
  {
    bodyColor: '#06B6D4',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={postgreSqlLogo}
        alt='postgresql'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.04, 0.7, 0.05],
    name: 'PostgreSQL',
    description:
      'Advanced, enterprise-class open-source relational database with ACID compliance. Features complex queries, foreign keys, triggers, and extensibility with support for JSON and custom data types.',
  },
  {
    bodyColor: '#bd34fe',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={vitejsLogo}
        alt='vitejs'
        width={21}
        height={21}
      />
    ),
    material: 'plastic',
    position: [-0.07, 0.7, 0.04],
    name: 'Vite',
    description:
      'Next-generation frontend build tool that provides instant server start and fast Hot Module Replacement. Uses native ES modules for development and Rollup for production builds with optimal configuration.',
  },
  {
    bodyColor: '#FF6C37',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={redisLogo}
        alt='redis'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [-0.1, 0.7, 0.03],
    name: 'Redis',
    description:
      'In-memory data structure store used as database, cache, and message broker. Supports various data structures like strings, hashes, lists, sets, and provides high performance with persistence options.',
  },

  // Row 4
  {
    bodyColor: '#f2f7fd',
    textColor: '#fff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={reactLogo}
        alt='react'
        width={23}
        height={23}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0],
    name: 'React',
    description:
      'Declarative, component-based JavaScript library for building user interfaces. Uses virtual DOM for performance, supports server-side rendering, and has a rich ecosystem of tools and extensions.',
  },
  {
    bodyColor: '#5fa04e',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={nodeJSLogo}
        alt='node'
        width={27}
        height={27}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0],
    name: 'Node.js',
    description:
      'JavaScript runtime built on Chrome V8 engine that enables server-side scripting. Features event-driven, non-blocking I/O model, npm ecosystem, and is ideal for building scalable network applications.',
  },
  {
    bodyColor: '#007acc',
    textColor: '#ffffff',
    text: (
      <Image
        className='rounded-1 pointer-events-none'
        src={typescriptLogo}
        alt='ts'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0],
    name: 'TypeScript',
    description:
      'Strongly typed programming language that builds on JavaScript by adding static type definitions. Enhances code quality and maintainability with interfaces, generics, and advanced type inference for large-scale applications.',
  },
  {
    bodyColor: '#E434AA',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={grahqlLogo}
        alt='graphql'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [-0.03, 0.7, 0.01],
    name: 'GraphQL',
    description:
      'Query language for APIs that allows clients to request exactly the data they need. Provides a single endpoint, strong typing, real-time subscriptions, and introspection for better API discoverability.',
  },
  {
    bodyColor: '#d0d0d0',
    textColor: '#fff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={expressJSLogo}
        alt='express'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.05, 0.7, 0.02],
    name: 'Express.js',
    description:
      'Fast, unopinionated, minimalist web framework for Node.js that provides robust routing, middleware support, and template engines for building web applications and APIs with simplicity and flexibility.',
  },
  {
    bodyColor: '#000000',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={nextJSLogo}
        alt='nextjs'
        width={25}
        height={25}
      />
    ),
    material: 'plastic',
    position: [-0.08, 0.7, 0],
    name: 'Next.js',
    description:
      'React framework for production with hybrid static and server rendering. Features file-based routing, API routes, image optimization, and built-in CSS support for building full-stack web applications.',
  },
]
