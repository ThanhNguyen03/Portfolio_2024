'use client'

import { KEYBOARD_THEMES } from '@/constants'
import { useTypingAnimation } from '@/hook/typing-animate'
import { cn } from '@/utils/cn'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState, type FC } from 'react'
import { Keycap, type TKeycapTheme } from './KeyCap'

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
  const LIST_WHITE_TEXT = ['#d0d0d0', '#fff', '#f2f7fd']

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
            className={cn(
              'text-23 size-full font-bold',
              clickedKey && LIST_WHITE_TEXT.includes(clickedKey.bodyColor)
                ? 'text-shadow-stroke-gray-2'
                : 'text-shadow-stroke-white-2',
            )}
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
