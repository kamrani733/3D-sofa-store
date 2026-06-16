'use client'

import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  useGLTF,
} from '@react-three/drei'
import * as THREE from 'three'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type SofaSceneProps = {
  progress: React.MutableRefObject<number>
}

function SofaScene({ progress }: SofaSceneProps) {
  const { scene } = useGLTF('/sofa.glb')

  const groupRef = useRef<THREE.Group>(null)

  const { camera } = useThree()

  const cameraTarget = useMemo(
    () => new THREE.Vector3(0, 1, 0),
    []
  )

  const desiredCameraPos = useRef(
    new THREE.Vector3(0, 2, 8)
  )

  useEffect(() => {
    if (!groupRef.current) return

    const model = scene.clone(true)

    const box = new THREE.Box3().setFromObject(model)

    const size = new THREE.Vector3()
    const center = new THREE.Vector3()

    box.getSize(size)
    box.getCenter(center)

    const maxDim = Math.max(
      size.x,
      size.y,
      size.z
    )

    if (maxDim > 0) {
      model.scale.setScalar(2.8 / maxDim)
    }

    model.position.set(
      -center.x,
      -center.y,
      -center.z
    )

    model.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })

    groupRef.current.clear()
    groupRef.current.add(model)
  }, [scene])
useFrame(({ clock }) => {
  if (!groupRef.current) return

  const t = clock.elapsedTime

  groupRef.current.position.x = Math.sin(t) * 2
})
  useFrame(({ clock }) => {
    if (!groupRef.current) return

    const p = THREE.MathUtils.clamp(
      progress.current,
      0,
      1
    )

    const time = clock.elapsedTime

    const sofa = groupRef.current

    //----------------------------------
    // SOFA ANIMATION
    //----------------------------------

    const targetX =
      Math.sin(p * Math.PI * 2) * 1.2

    const targetZ =
      -p * 3

    const targetY =
      Math.sin(time * 1.5) * 0.08

    const targetRotY =
      Math.sin(p * Math.PI) * 0.6

    const pulse =
      1 + Math.sin(time * 2) * 0.02

    sofa.position.x = THREE.MathUtils.lerp(
      sofa.position.x,
      targetX,
      0.08
    )

    sofa.position.y = THREE.MathUtils.lerp(
      sofa.position.y,
      targetY,
      0.08
    )

    sofa.position.z = THREE.MathUtils.lerp(
      sofa.position.z,
      targetZ,
      0.08
    )

    sofa.rotation.y = THREE.MathUtils.lerp(
      sofa.rotation.y,
      targetRotY,
      0.08
    )

    sofa.scale.lerp(
      new THREE.Vector3(pulse, pulse, pulse),
      0.08
    )

    //----------------------------------
    // CINEMATIC CAMERA
    //----------------------------------

    if (p < 0.25) {
      const t = p / 0.25

      desiredCameraPos.current.set(
        THREE.MathUtils.lerp(0, 5, t),
        THREE.MathUtils.lerp(2, 2.5, t),
        THREE.MathUtils.lerp(8, 5, t)
      )
    } else if (p < 0.5) {
      const t = (p - 0.25) / 0.25

      desiredCameraPos.current.set(
        THREE.MathUtils.lerp(5, -5, t),
        THREE.MathUtils.lerp(2.5, 3, t),
        THREE.MathUtils.lerp(5, 5, t)
      )
    } else if (p < 0.75) {
      const t = (p - 0.5) / 0.25

      desiredCameraPos.current.set(
        THREE.MathUtils.lerp(-5, 0, t),
        THREE.MathUtils.lerp(3, 6, t),
        THREE.MathUtils.lerp(5, 2.5, t)
      )
    } else {
      const t = (p - 0.75) / 0.25

      desiredCameraPos.current.set(
        0,
        THREE.MathUtils.lerp(6, 2.2, t),
        THREE.MathUtils.lerp(2.5, 6, t)
      )
    }

    camera.position.lerp(
      desiredCameraPos.current,
      0.05
    )

    camera.lookAt(cameraTarget)
  })

  return <group ref={groupRef} />
}

useGLTF.preload('/sofa.glb')

export default function SofaCanvas() {
  const progress = useScrollAnimation()

  return (
    <div className="relative h-screen w-full bg-[#0f0d0a]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 2, 8],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[8, 10, 8]}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <pointLight
          position={[-6, 4, -4]}
          intensity={1}
        />

        <pointLight
          position={[5, 3, 5]}
          intensity={0.7}
        />

        <Environment
          preset="apartment"
          background={false}
        />

        <SofaScene progress={progress} />

        <ContactShadows
          position={[0, -1.1, 0]}
          opacity={0.6}
          scale={15}
          blur={2}
          far={8}
        />
      </Canvas>
    </div>
  )
}