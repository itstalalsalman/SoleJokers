// src/components/Jordans.jsx

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = () => {
  const { scene } = useGLTF('') // Replace with the path to your .gltf file
  return <primitive object={scene} scale={0.5} />
}

const Jordans = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

export default Jordans
