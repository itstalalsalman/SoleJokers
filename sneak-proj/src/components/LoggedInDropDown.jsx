import React from 'react'
import { useStore } from '../store';

import { IoMdPerson } from "react-icons/io";
import { LuBox } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const LoggedInDropDown = () => {
    const navigation = useNavigate();
    const {setIsMouseOnAvatar, logout} = useStore();
    const handleMouseEnter = () => setIsMouseOnAvatar(true);
    const handleMouseLeave = () => setIsMouseOnAvatar(false);

    const handleLogout = () => {
        navigation('/home');
        logout();
    }
    
  return (
    <div 
        className='w-[150px] h-[150px] absolute bottom-[-140px] shadow-2xl right-4 z-50 rounded-xl animate-open flex justify-center items-center bg-white'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <ul className='flex flex-col justify-center items-center font-bold gap-4 italic'>
          <li className='delay-opacity' onClick={() => navigation('/accountDetails')}><IoMdPerson /> My Account</li>
          <li className='delay-opacity'><LuBox /> My Orders</li>
          <li className='delay-opacity' onClick={handleLogout}><IoMdLogOut /> Logout</li>
        </ul>
    </div>
  )
}

export default LoggedInDropDown