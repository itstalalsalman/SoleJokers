import React from 'react'
import { SoleJokerPNG } from '../assets'

const ShopLoader = () => {
  return (
    <div className='w-[85vw] flex flex-col justify-center items-center'>
        <img src={SoleJokerPNG} alt='logo' className='w-[150px]' />
        <p>Loading...</p>
    </div>
  )
}

export default ShopLoader