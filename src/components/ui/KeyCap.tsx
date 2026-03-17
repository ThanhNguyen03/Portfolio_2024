'use client'

import { Html, RoundedBox, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  useLayoutEffect,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react'
import * as THREE from 'three'

export type TKeycapTheme = {
  /** Main color of the keycap body */
  bodyColor: string
  /** Text/icon color */
  textColor: string
  /** Text to display (if no icon) */
  text?: string | ReactNode
  /** Material type - 'plastic' or 'glass' */
  material?: 'plastic' | 'glass' | 'metal'
  /** Optional icon position */
  position?: [number, number, number]
  /** Optional URL to open when clicked */
  url?: string
  /** Optional name of keycap */
  name?: string
  /** Optional description of keycap */
  description?: string
}

type TKeycapProps = {
  /** Theme configuration for the keycap */
  theme: TKeycapTheme
  /** Position in 3D space */
  position?: [number, number, number]
  /** Size of the keycap (width, height, depth) */
  size?: [number, number, number]
  /** Border radius */
  radius?: number
  /** Callback when key is pressed */
  onPress?: (theme: TKeycapTheme) => void
  /** Callback when key is released */
  onRelease?: () => void
  /** Custom renderOrther for keycap */
  renderOrder?: number
}

export const Keycap: FC<TKeycapProps> = ({
  theme,
  position = [0, 0, 0],
  size = [1, 0.45, 1],
  radius = 0.05,
  onPress,
  onRelease,
  renderOrder,
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const groupRef = useRef<THREE.Group>(null)
  const velocityY = useRef<number>(0)

  // Spring physics animation
  useFrame((_, delta) => {
    if (!groupRef.current) {
      return
    }

    const target = isPressed ? -0.15 : 0
    const stiffness = 300
    const damping = 20
    const mass = 1

    const currentY = groupRef.current.position.y
    const displacement = target - currentY
    const springForce = displacement * stiffness
    const dampingForce = -velocityY.current * damping
    const acceleration = (springForce + dampingForce) / mass

    const dt = Math.min(delta, 0.1)
    velocityY.current += acceleration * dt
    groupRef.current.position.y += velocityY.current * dt

    if (Math.abs(velocityY.current) < 0.001 && Math.abs(displacement) < 0.001) {
      groupRef.current.position.y = target
      velocityY.current = 0
    }
  })

  const handlePointerDown = (theme: TKeycapTheme) => {
    setIsPressed(true)
    onPress?.(theme)
  }

  const handlePointerUp = () => {
    setIsPressed(false)
    onRelease?.()

    if (theme.url) {
      setTimeout(() => {
        window.open(theme.url, '_blank')
      }, 200)
    }
  }

  return (
    <group position={position} renderOrder={renderOrder}>
      {/* Moving keycap */}
      <group ref={groupRef}>
        <KeycapBody
          theme={theme}
          size={size}
          radius={radius}
          onPointerDown={() => handlePointerDown(theme)}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
        <KeycapLegend theme={theme} size={size} />
      </group>

      {/* Switch housing */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[size[0] * 1.05, 0.2, size[2] * 1.05]} />
        <meshStandardMaterial color='#2a2a2a' roughness={0.8} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
        <meshStandardMaterial color='#cccccc' />
      </mesh>
    </group>
  )
}

type TKeycapBodyProps = {
  theme: TKeycapTheme
  size: [number, number, number]
  radius: number
  onPointerDown: () => void
  onPointerUp: () => void
  onPointerLeave: () => void
}

const KeycapBody: FC<TKeycapBodyProps> = ({
  theme,
  size,
  radius,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [width, height, depth] = size

  useLayoutEffect(() => {
    if (!meshRef.current) {
      return
    }

    const geometry = meshRef.current.geometry
    const posAttribute = geometry.attributes.position
    const vertex = new THREE.Vector3()

    if (geometry.userData.modified) {
      return
    }
    geometry.userData.modified = true

    for (let i = 0; i < posAttribute.count; i++) {
      vertex.fromBufferAttribute(posAttribute, i)

      // Normalize Y to 0..1 range
      const yNormalized = (vertex.y + height / 2) / height

      // Tapering: top is narrower than bottom
      const taperFactor = 0.2
      const scale = 1.0 - Math.max(0, yNormalized) * taperFactor

      vertex.x *= scale
      vertex.z *= scale

      // Concave top (dish effect)
      if (yNormalized > 0.8) {
        const distSq = vertex.x * vertex.x + vertex.z * vertex.z
        const dishAmount = 0.15
        vertex.y += distSq * dishAmount
      }

      posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }

    geometry.computeVertexNormals()
    posAttribute.needsUpdate = true
  }, [height])

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto'
  }

  useLayoutEffect(() => {
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  const commonProps = {
    ref: meshRef,
    args: [width, height, depth] as [number, number, number],
    radius,
    smoothness: 4,
    position: [0, height / 2, 0] as [number, number, number],
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    onPointerOver: handlePointerOver,
    onPointerOut: handlePointerOut,
  }

  if (theme.material === 'glass') {
    return (
      <RoundedBox {...commonProps}>
        <meshPhysicalMaterial
          color={theme.bodyColor}
          roughness={0.15}
          metalness={0.1}
          transmission={1}
          thickness={1.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
        />
      </RoundedBox>
    )
  }

  return (
    <RoundedBox {...commonProps}>
      <meshStandardMaterial
        color={theme.bodyColor}
        roughness={0.3}
        metalness={0.0}
      />
    </RoundedBox>
  )
}

type TKeycapLegendProps = {
  theme: TKeycapTheme
  size: [number, number, number]
}

const KeycapLegend: FC<TKeycapLegendProps> = ({ theme, size }) => {
  // Pin icon Y to the keycap top face height so icon always aligns with the
  // keycap surface regardless of viewport/aspect-ratio (eliminates parallax
  // that occurs when icon Y differs from mesh face Y under angled camera).
  // Center icon on keycap face. X/Z are zeroed so the icon sits exactly at
  // the keycap center regardless of the legacy calibration offsets in theme.
  const iconPos: [number, number, number] = [0, size[1] + 0.01, 0]

  if (typeof theme.text !== 'string') {
    return (
      <Html
        position={iconPos}
        center
        transform
        rotation={[-Math.PI / 2, 0, 0]}
        pointerEvents='none'
      >
        {theme.text}
      </Html>
    )
  }

  // Default text
  return (
    <Text
      position={iconPos}
      rotation={[-Math.PI / 2, 0, 0]}
      color={theme.textColor}
      anchorX='center'
      anchorY='middle'
      letterSpacing={-0.05}
    >
      {theme.text}
    </Text>
  )
}
