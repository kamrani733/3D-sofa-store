'use client'

import { useRef, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTheme, tokens } from '../store/scrollStore'

// Keeps the renderer clear color in sync with the active theme.
function ThemeBackground() {
  const theme = useTheme((s) => s.theme)
  const { gl } = useThree()

  useEffect(() => {
    gl.setClearColor(new THREE.Color(tokens[theme].bg))
  }, [gl, theme])

  return null
}

function SofaModel({ progress }: { progress: React.MutableRefObject<number> }) {
  const gltf = useGLTF('/sofa.glb')
  const { camera } = useThree()

  // Clone the cached scene and normalize it once at creation. useGLTF
  // returns a single shared instance across all consumers; mutating it in
  // place makes the model flash visible for a frame and then vanish on the
  // next R3F commit. A clone owns its transform, so we do all the
  // scale/center/floor math here rather than in a separate effect.
  const { cloned, targetCenterY } = useMemo(() => {
    const s = gltf.scene.clone(true)
    s.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    const box = new THREE.Box3().setFromObject(s)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)

    const maxDim = Math.max(size.x, size.y, size.z)
    let centerY = 0.8
    if (maxDim > 0) {
      const scale = 2.5 / maxDim
      s.scale.setScalar(scale)

      // Re-measure after scaling so floor/center math is in world units.
      const box2 = new THREE.Box3().setFromObject(s)
      s.position.x -= center.x * scale
      s.position.z -= center.z * scale
      s.position.y -= box2.min.y

      // Camera target = vertical middle of the sofa.
      const box3 = new THREE.Box3().setFromObject(s)
      centerY = (box3.max.y + box3.min.y) / 2
    }

    return { cloned: s, targetCenterY: centerY }
  }, [gltf.scene])

  const groupRef = useRef<THREE.Group>(null)
  const camPos = useRef(new THREE.Vector3(0, 0.8, 5))
  const ready = useRef(false)

  // Camera setup needs the mounted camera, so it lives in an effect.
  useEffect(() => {
    camPos.current.set(0, targetCenterY, 5)
    camera.position.copy(camPos.current)
    camera.lookAt(0, targetCenterY, 0)
    ready.current = true
  }, [camera, targetCenterY])

  useFrame(() => {
    if (!ready.current) return
    const p = progress.current
    const h = targetCenterY

    let tx: number, ty: number, tz: number

    if (p < 0.25) {
      const t = p / 0.25
      tx = THREE.MathUtils.lerp(0, 4, t)
      ty = THREE.MathUtils.lerp(h, h + 0.5, t)
      tz = THREE.MathUtils.lerp(5, 4, t)
    } else if (p < 0.5) {
      const t = (p - 0.25) / 0.25
      tx = THREE.MathUtils.lerp(4, -4, t)
      ty = THREE.MathUtils.lerp(h + 0.5, h, t)
      tz = THREE.MathUtils.lerp(4, 4, t)
    } else if (p < 0.75) {
      const t = (p - 0.5) / 0.25
      tx = THREE.MathUtils.lerp(-4, 0, t)
      ty = THREE.MathUtils.lerp(h, h + 2, t)
      tz = THREE.MathUtils.lerp(4, 3.5, t)
    } else {
      const t = (p - 0.75) / 0.25
      tx = THREE.MathUtils.lerp(0, 0, t)
      ty = THREE.MathUtils.lerp(h + 2, h, t)
      tz = THREE.MathUtils.lerp(3.5, 5, t)
    }

    camPos.current.lerp(new THREE.Vector3(tx, ty, tz), 0.05)
    camera.position.copy(camPos.current)
    camera.lookAt(0, h, 0)
  })

  return (
    <group ref={groupRef}>
      <primitive object={cloned} />
    </group>
  )
}

useGLTF.preload('/sofa.glb')

export default function SofaCanvas() {
  const progress = useScrollAnimation()

  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0.8, 5], fov: 50 }}
      shadows
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor('#0f0d0a')
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#c4a882" />
      <pointLight position={[0, 4, 2]} intensity={0.6} color="#f8e7c5" />

      <ThemeBackground />

      <Suspense fallback={null}>
        <SofaModel progress={progress} />
        <Environment preset="apartment" background={false} />
      </Suspense>

      <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={8} blur={2} color="#1c140b" />
    </Canvas>
  )
}
