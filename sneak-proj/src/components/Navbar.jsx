import React from 'react'
import { SoleJokerPNG } from '../assets'
import { cart } from '../assets'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] flex justify-between items-center'>  
        <img src={SoleJokerPNG}  className='w-[100px] h-full ml-28' alt='logo' />
        <div className='h-full w-[500px] flex justify-end items-center gap-4 mr-28'>
            <ul className='flex justify-center items-center gap-10 mr-3'>
              <li>Home</li>
              <li>Shop</li>
              <li>Brands</li>
            </ul>
            <button className='w-[150px] h-[50px]'>Login</button>
            <img src={cart} className='w-[50px] h-[35px]' alt='cart' />
        </div>
    </div>
  )
}

export default Navbar