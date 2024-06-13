import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Loader from '../Loader'

const Model = () => {
  const { scene } = useGLTF('./unused_blue_vans_shoe/scene.gltf') // Replace with the path to your .gltf file
  if (scene) {
    scene.rotation.y = Math.PI / 2; // Adjust this angle to rotate correctly
  }
  return <primitive object={scene} scale={0.9} position={[0, -0.8, 0]}/>
}

const Vans = () => {
  return (
    <Canvas style={{ width: '700px', height: '600px' }}>
      <ambientLight intensity={1.8} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}

      />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <OrbitControls 
        enableZoom={false}
      />
    </Canvas>
  )
}

export default Vans
