'use client'

import {
  angularLogo,
  cSharpLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  typescriptLogo,
} from '@/assets/icons'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import type { FC } from 'react'
import { Keycap, type TKeycapTheme } from '../ui/KeyCap'

// List of themes for the keyboard
const KEYBOARD_THEMES: TKeycapTheme[] = [
  {
    bodyColor: '#E44D26',
    textColor: '#ffffff',
    text: <Image src={htmlLogo} alt='html' width={27} height={27} />,
    material: 'plastic',
    position: [0.1, 0.5, -0.4],
  },
  {
    bodyColor: '#1572B6',
    textColor: '#ffffff',
    text: <Image src={cssLogo} alt='css' width={27} height={27} />,
    material: 'plastic',
    position: [0.1, 0.5, -0.4],
  },
  {
    bodyColor: '#68217A',
    textColor: '#ffffff',
    text: <Image src={cSharpLogo} alt='c sharp' width={30} height={30} />,
    material: 'plastic',
    position: [0.15, 0.5, -0.4],
  },
  {
    bodyColor: '#FFD34E',
    textColor: '#fff',
    text: <Image src={jsLogo} alt='js' width={30} height={30} />,
    material: 'metal',
    position: [0.2, 0.3, -0.45],
  },
  {
    bodyColor: '#007acc',
    textColor: '#ffffff',
    text: <Image src={typescriptLogo} alt='ts' width={30} height={30} />,
    material: 'plastic',
    position: [0.3, 0.3, -0.45],
  },
  {
    bodyColor: '#DD0031', // Angular red
    textColor: '#ffffff',
    text: (
      <Image
        src={angularLogo}
        alt='angular'
        width={40}
        height={40}
        className='keycap-icon'
      />
    ),
    material: 'plastic',
  },

  // {
  //   bodyColor: '#61DAFB', // React cyan
  //   textColor: '#000000',
  //   text: (
  //     <Image
  //       src={reactLogo}
  //       alt='react'
  //       width={40}
  //       height={40}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#000000', // Next.js black
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-white p-1'>
  //       <Image src={nextJSLogo} alt='nextjs' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#06B6D4', // Tailwind cyan
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={tailwindLogo}
  //       alt='tailwind'
  //       width={40}
  //       height={40}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#0494C4', // Three blue
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-[#200e2d] p-2'>
  //       <Image src={threeLogo} alt='three' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#E30613', // Framer red
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-yellow-300 p-1'>
  //       <Image src={framerMotionLogo} alt='framer' width={30} height={30} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },

  // {
  //   bodyColor: '#311C87', // Apollo purple
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={apolloClientLogo}
  //       alt='apollo'
  //       width={40}
  //       height={40}
  //       className='keycap-icon rounded-md'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#E10098', // GraphQL pink
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-neutral-900 p-1'>
  //       <Image src={grahqlLogo} alt='graphql' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#000000', // Wagmi black
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={wagmiLogo}
  //       alt='wagmi'
  //       width={40}
  //       height={40}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#FFD34E', // Viem yellow
  //   textColor: '#000000',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-neutral-900 p-1'>
  //       <Image src={viemLogo} alt='viem' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#339933', // Node.js green
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={nodeJSLogo}
  //       alt='node'
  //       width={40}
  //       height={40}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#512BD4', // .NET purple
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={dotnetLogo}
  //       alt='dotnet'
  //       width={40}
  //       height={40}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },

  // {
  //   bodyColor: '#47A248', // MongoDB green
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={mongoDBLogo}
  //       alt='mongodb'
  //       width={30}
  //       height={30}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#CC2927', // SQL Server red
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-white p-1'>
  //       <Image src={sqlServerLogo} alt='sql server' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#336791', // PostgreSQL blue
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-white p-1'>
  //       <Image src={postgreSqlLogo} alt='postgresql' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#DC382D', // Redis red
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-neutral-800 p-1'>
  //       <Image src={redisLogo} alt='redis' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#2535A0', // Ethers blue
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={ethersLogo}
  //       alt='ethers'
  //       width={40}
  //       height={40}
  //       className='keycap-icon rounded-md'
  //     />
  //   ),
  //   material: 'plastic',
  // },

  // {
  //   bodyColor: '#2496ED', // Docker blue
  //   textColor: '#ffffff',
  //   text: (
  //     <div className='flex items-center justify-center rounded-md bg-white p-1'>
  //       <Image src={dockerLogo} alt='docker' width={35} height={35} />
  //     </div>
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#F24E1E', // Figma orange
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={figmaLogo}
  //       alt='figma'
  //       width={30}
  //       height={30}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#F05032', // Git orange-red
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={gitLogo}
  //       alt='git'
  //       width={35}
  //       height={35}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
  // {
  //   bodyColor: '#FF6C37', // Postman orange
  //   textColor: '#ffffff',
  //   text: (
  //     <Image
  //       src={postmanLogo}
  //       alt='postman'
  //       width={35}
  //       height={35}
  //       className='keycap-icon'
  //     />
  //   ),
  //   material: 'plastic',
  // },
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
      <mesh position={[0, -0.5, 0]} receiveShadow>
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
          spacing={1.2}
          keySize={[1.2, 0.5, 1.2]}
          keyRadius={0.1}
          position={[0, 0.8, 0]}
        />
      </Canvas>
    </div>
  )
}
