import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={120}
      alphaTest={0.85}
      scale={3}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      resolution={1024} // Adjust the resolution
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.9}
        ambient={10}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={1.25}
        ambient={20}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop