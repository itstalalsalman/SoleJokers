import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import Loader from '../Loader'

const Model = () => {
  const { scene } = useGLTF('./nike_airforce_x_off_white/scene.gltf', true, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  const modelRef = useRef()

  // Using useEffect to store the model in the ref after it loads
  useEffect(() => {
    if (scene) {
      modelRef.current = scene
      modelRef.current.rotation.y = Math.PI * 2;
    }
  }, [scene])

  // Update the rotation, position, and scale inside the useFrame loop
  useFrame(() => {
    const model = modelRef.current
    if (model) {
      
      // Gradually rotate the model to its final rotation on the Y axis
      if (model.rotation.y > Math.PI * 1.65) {
        model.rotation.y -= 0.05
      }
      
      // Move the model slowly along the X axis
      if (model.position.x >= 0.5) {
        model.position.x -= 0.1
      }

    }
  })

  return (
    <primitive object={scene} ref={modelRef} scale={0.2} position={[0.5, -1.25, 0]}/>
  )
}

const Jordans = () => {
  return (
    <Canvas style={{ width: '45%', height: '600px' }}>
      <ambientLight intensity={1.5} />
      <spotLight
        position={[0.5, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={5}
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
