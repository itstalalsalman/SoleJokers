import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { SoleJokerPNG } from '../assets'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className='w-[200px] text-[black] font-semibold flex flex-col justify-center items-center'>
        <img src={SoleJokerPNG}  className='w-[150px] bounce' alt='logo' />
        <p className='mt-[-20px] ml-[10px]'>{progress.toFixed(0)}%</p> 
      </div>
    </Html>
  )
}

export default Loader