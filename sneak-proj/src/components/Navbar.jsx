import React from 'react'
import { Link } from 'react-router-dom'
import { SoleJokerPNG } from '../assets'
import { cart, avatarShoe } from '../assets'
import { useStore } from '../store'
import { IoMdPerson } from "react-icons/io";
import { LuBox } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";



const Navbar = () => {
  const { setIsModalOpen, isLoggedIn, setIsMouseOnAvatar, isMouseOnAvatar, logout } = useStore();
  
  const handleMouseEnter = () => setIsMouseOnAvatar(true);
  const handleMouseLeave = () => setIsMouseOnAvatar(false);
  console.log(isLoggedIn);
  return (
    <div className='w-full h-[90px] flex justify-between items-center'>  
        <img src={SoleJokerPNG}  className='w-[100px] h-full ml-28' alt='logo' />
        <div className='h-full w-[500px] flex justify-end items-center gap-4 mr-28 relative'>
            <ul className='flex justify-center items-center gap-10 mr-3 font-semibold'>
              <li className='hover:cursor-pointer nav-item'><Link to='/'>Home</Link></li>
              <li className='hover:cursor-pointer nav-item'><Link to='/shop'>Shop</Link></li>
              <li className='hover:cursor-pointer nav-item'><Link to='/home'>Brands</Link></li>
            </ul>
            {!isLoggedIn ? (<button 
               className='w-[130px] h-[45px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in'
               onClick={() => setIsModalOpen(true)}
            >
            Login</button>) : (
                <div 
                    className='w-[50px] h-full flex justify-center items-center'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                  <img 
                    src={avatarShoe} 
                    alt='loggedIn-avatar' 
                    className='w-[50px] cursor-pointer'
                  />
                </div>
            )}  
            <img 
              src={cart} 
              className='w-[50px] h-[35px] hover:cursor-pointer'  
              alt='cart' 
            />

            {(isLoggedIn && isMouseOnAvatar) && (
              <div 
                className='w-[150px] h-[150px] absolute bottom-[-140px] shadow-2xl right-4 z-30 rounded-xl animate-open flex justify-center items-center'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul className='flex flex-col justify-center items-center font-bold gap-4 italic'>
                  <li className='delay-opacity'><IoMdPerson /> My Account</li>
                  <li className='delay-opacity'><LuBox /> My Orders</li>
                  <li className='delay-opacity' onClick={logout}><IoMdLogOut /> Logout</li>
                </ul>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar