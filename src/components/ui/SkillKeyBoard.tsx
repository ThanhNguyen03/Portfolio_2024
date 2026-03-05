'use client'

import {
  angularLogo,
  apolloLogo,
  cSharpLogo,
  cssLogo,
  dockerLogo,
  ethersLogo,
  expressJSLogo,
  figmaLogo,
  framerMotionLogo,
  gitLogo,
  grahqlLogo,
  htmlLogo,
  jsLogo,
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
import { useTypingAnimation } from '@/hook/typing-animate'
import { cn } from '@/utils/cn'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import { useState, type FC } from 'react'
import { Keycap, type TKeycapTheme } from './KeyCap'

// List of themes for the keyboard
const KEYBOARD_THEMES: TKeycapTheme[] = [
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

type TKeyboardProps = {
  listTheme: TKeycapTheme[]
  columns?: number
  spacing?: number
  keySize?: [number, number, number]
  keyRadius?: number
  position?: [number, number, number]
  onKeyPress?: (theme: TKeycapTheme) => void
  onKeyRelease?: () => void
}

const KeyboardModel: FC<TKeyboardProps> = ({
  listTheme,
  columns = 6,
  spacing = 1.8,
  keySize = [1.2, 0.5, 1.2],
  keyRadius = 0.08,
  position = [0, 0, 0],
  onKeyPress,
  onKeyRelease,
}) => {
  const rows = Math.ceil(KEYBOARD_THEMES.length / columns)
  const lastRowCols = KEYBOARD_THEMES.length % columns || columns
  const lastRowOffset = ((columns - lastRowCols) * spacing) / 2

  return (
    <group position={position} rotation={[0.3, 0.4, 0]}>
      {/* Keyboard base plate */}
      <mesh position={[0, -0.7, 0]} receiveShadow>
        <boxGeometry args={[columns * spacing, 0.6, rows * spacing]} />
        <meshStandardMaterial color='#1a1a1a' roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Keyboard frame */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <boxGeometry
          args={[columns * spacing + 0.4, 0.2, rows * spacing + 0.4]}
        />
        <meshStandardMaterial color='#2a2a2a' roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Map themes to keycaps */}
      {listTheme.map((theme, index) => {
        const row = Math.floor(index / columns)
        const col = index % columns

        const totalWidth = (columns - 1) * spacing
        const totalHeight = (rows - 1) * spacing

        const startX = -totalWidth / 2
        const startY = -totalHeight / 2

        let x = startX + col * spacing
        const y = -startY - (rows - 1 - row) * spacing

        // Center last row if it has fewer keys
        if (row === rows - 1 && lastRowCols !== columns) {
          x += lastRowOffset
        }

        const renderOrder = (row * columns + (columns - col)) * 10

        return (
          <Keycap
            key={index}
            theme={theme}
            position={[x, 0, y]}
            size={keySize}
            radius={keyRadius}
            onPress={onKeyPress}
            onRelease={onKeyRelease}
            renderOrder={renderOrder}
          />
        )
      })}
    </group>
  )
}

// Main Scene component
type TSkillKeyboardProps = {
  className?: string
}
export const SkillKeyboard: FC<TSkillKeyboardProps> = ({ className }) => {
  const [clickedKey, setClickedKey] = useState<TKeycapTheme>()
  const { displayText, isTyping } = useTypingAnimation(
    clickedKey?.description || '',
    !!clickedKey,
    3,
  )

  return (
    <div
      className={cn(
        'center relative z-100 h-[560px] w-full max-w-[800px]',
        className,
      )}
    >
      <div className='absolute top-0 mr-15 flex size-full max-w-[500px] -rotate-26 skew-[2.5deg] flex-col text-white'>
        <div className='flex flex-col items-start gap-2'>
          <h3
            className='text-23 text-shadow-stroke-white-2 size-full font-bold'
            style={{
              color: `${clickedKey?.bodyColor}`,
            }}
          >
            {clickedKey?.name}
          </h3>
          <p className='text-14 min-h-30 leading-[160%]'>
            <span>{displayText}</span>
            {isTyping && (
              <span className='ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-white' />
            )}
          </p>
        </div>
      </div>
      <Canvas
        shadows
        camera={{ position: [-1, 7, 6], fov: 50 }}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          background: 'transparent',
        }}
      >
        <Environment preset='city' background={false} />

        <KeyboardModel
          listTheme={KEYBOARD_THEMES}
          columns={8}
          spacing={1}
          keySize={[1, 0.6, 1]}
          keyRadius={0.1}
          position={[0, 0.8, 0]}
          onKeyPress={setClickedKey}
          onKeyRelease={() => setClickedKey(undefined)}
        />
      </Canvas>
    </div>
  )
}
