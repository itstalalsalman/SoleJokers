import React from 'react'
import { Link } from 'react-router-dom'
import { SoleJokerPNG } from '../assets'
import { cart } from '../assets'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] flex justify-between items-center'>  
        <img src={SoleJokerPNG}  className='w-[100px] h-full ml-28' alt='logo' />
        <div className='h-full w-[500px] flex justify-end items-center gap-4 mr-28'>
            <ul className='flex justify-center items-center gap-10 mr-3 font-semibold'>
              <li className='hover:cursor-pointer nav-item'><Link to='/'>Home</Link></li>
              <li className='hover:cursor-pointer nav-item'><Link to='/shop'>Shop</Link></li>
              <li className='hover:cursor-pointer nav-item'><Link to='/home'>Brands</Link></li>
            </ul>
            <button className='w-[130px] h-[45px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in'>Login</button>
            <img src={cart} className='w-[50px] h-[35px] hover:cursor-pointer' alt='cart' />
        </div>
    </div>
  )
}

export default Navbar