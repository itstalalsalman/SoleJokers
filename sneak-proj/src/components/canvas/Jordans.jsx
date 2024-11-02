import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import Loader from '../Loader'


const Model = () => {
  const { scene } = useGLTF('./nike_air_jordan/scene.gltf', true, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })
  if (scene) {
    scene.rotation.y = Math.PI / 9; // Adjust this angle to rotate correctly
  }
  return <primitive object={scene} scale={1} position={[1.5, 0, 0]} />
}

const Jordans = () => {
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
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Jordans
