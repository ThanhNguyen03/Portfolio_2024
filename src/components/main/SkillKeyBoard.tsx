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
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import type { FC } from 'react'
import { Keycap, type TKeycapTheme } from '../ui/KeyCap'

// List of themes for the keyboard
const KEYBOARD_THEMES: TKeycapTheme[] = [
  // row 1
  {
    bodyColor: '#f2f7fd',
    textColor: '#fff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={reactLogo}
        alt='react'
        width={27}
        height={27}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0],
  },
  {
    bodyColor: '#000000',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={nextJSLogo}
        alt='nextjs'
        width={27}
        height={27}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0],
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
  },
  {
    bodyColor: '#FFD34E',
    textColor: '#000000',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={viemLogo}
        alt='viem'
        width={28}
        height={28}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0],
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
    position: [-0.02, 0.7, 0],
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
    position: [-0.07, 0.7, 0],
  },
  {
    bodyColor: '#bd34fe',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={vitejsLogo}
        alt='vitejs'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [-0.07, 0.7, 0.01],
  },

  // row 2
  {
    bodyColor: '#06B6D4',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={postgreSqlLogo}
        alt='postgresql'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0.05],
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
    position: [0.02, 0.7, 0.01],
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
    position: [0, 0.7, 0.01],
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
    position: [-0.02, 0.7, 0.02],
  },
  {
    bodyColor: '#000000',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none rounded-[3.5px] select-none'
        src={wagmiLogo}
        alt='wagmi'
        width={30}
        height={30}
      />
    ),
    material: 'plastic',
    position: [-0.06, 0.7, 0.02],
  },
  {
    bodyColor: '#47A248',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={mongoDBLogo}
        alt='mongodb'
        width={26}
        height={26}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.02],
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
    position: [-0.02, 0.7, 0.02],
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
    position: [-0.08, 0.7, 0.02],
  },

  // row 3
  {
    bodyColor: '#A2CB8B',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={vitestLogo}
        alt='vitest'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [0.02, 0.7, 0.02],
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
    position: [0.02, 0.7, 0.06],
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
    position: [0, 0.7, 0],
  },
  {
    bodyColor: '#68217A',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={figmaLogo}
        alt='figma'
        width={22}
        height={22}
      />
    ),
    material: 'plastic',
    position: [-0.02, 0.7, 0.02],
  },
  {
    bodyColor: '#38bdf8',
    textColor: '#ffffff',
    text: (
      <Image
        className='pointer-events-none select-none'
        src={tailwindLogo}
        alt='tailwind'
        width={24}
        height={24}
      />
    ),
    material: 'plastic',
    position: [-0.03, 0.7, 0.02],
  },
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
    position: [-0.06, 0.7, 0.05],
  },
  {
    bodyColor: '#2535A0',
    textColor: '#ffffff',
    text: (
      <Image
        className='rounded-0.5 pointer-events-none'
        src={ethersLogo}
        alt='ethers'
        width={31}
        height={31}
      />
    ),
    material: 'plastic',
    position: [-0.09, 0.7, 0.05],
  },
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
    position: [-0.04, 0.7, 0.03],
  },

  // row 3
  {
    bodyColor: '#000',
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
    position: [-0.01, 0.6, 0],
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
    position: [-0.04, 0.7, 0.06],
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
    position: [-0.04, 0.7, 0.06],
  },
]

type TKeyboardProps = {
  columns?: number
  spacing?: number
  keySize?: [number, number, number]
  keyRadius?: number
  position?: [number, number, number]
}

const KeyboardModel: FC<TKeyboardProps> = ({
  columns = 6,
  spacing = 1.8,
  keySize = [1.2, 0.5, 1.2],
  keyRadius = 0.08,
  position = [0, 0, 0],
}) => {
  const rows = Math.ceil(KEYBOARD_THEMES.length / columns)

  return (
    <group position={position} rotation={[0.6, 0.3, 0]}>
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
      {KEYBOARD_THEMES.map((theme, index) => {
        const row = Math.floor(index / columns)
        const col = index % columns

        const totalWidth = (columns - 1) * spacing
        const totalHeight = (rows - 1) * spacing

        const startX = -totalWidth / 2
        const startY = totalHeight / 2

        const x = startX + col * spacing
        const y = startY - row * spacing
        const z = 0

        return (
          <Keycap
            key={index}
            theme={theme}
            position={[x, z, y]}
            size={keySize}
            radius={keyRadius}
            onPress={() => console.log(`Pressed: ${theme.text}`)}
          />
        )
      })}
    </group>
  )
}

// Main Scene component
export const SkillKeyboard = () => {
  return (
    <div className='center relative z-100 h-[400px] w-full max-w-[800px]'>
      <Canvas
        shadows
        camera={{ position: [-1, 4, 6], fov: 50 }}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          background: 'transparent',
        }}
      >
        <Environment preset='city' background={false} />

        <KeyboardModel
          columns={8}
          spacing={1}
          keySize={[1, 0.6, 1]}
          keyRadius={0.1}
          position={[0, 0.8, 0]}
        />
      </Canvas>
    </div>
  )
}
