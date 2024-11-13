import React from 'react'
import { SoleJokerPNG, linkedinLogo, instagramLogo, githubLogo } from '../assets';

const Footer = () => {

  return (
    <footer className='w-full h-[40vh] flex justify-center items-center border-t-2 border-[rgba(0,0,0,0.1)]'>
      <div className='w-[300px] h-full flex flex-col justify-center items-center'>
        <img src={SoleJokerPNG} alt='' className='w-[60%]' />
        <p className='mt-[-25px] font-semibold'>© 2024 SoleJoker. All Rights Reserved.</p>
      </div>
      <div className='w-[65%] h-full flex justify-end items-center gap-32 px-5'>
        <div className='w-[200px] h-full flex flex-col justify-center items-center gap-4'>
          <h4 className='text-xl font-bold'>Connect With Us</h4>
          <ul className='w-full h-[40%] flex flex-col justify-center items-center gap-4'>
            <li><img src={githubLogo} alt="connect-imgs" className='w-[30px] social-link-1 cursor-pointer' /></li>
            <li><img src={instagramLogo} alt="connect-imgs" className='w-[30px] social-link-2 cursor-pointer' /></li>
            <li><img src={linkedinLogo} alt="connect-imgs" className='w-[30px] social-link-3 cursor-pointer' /></li>
          </ul>
        </div>
        <div className='w-[200px] h-full flex flex-col justify-center items-center gap-4 '>
          <h4 className='text-xl font-bold'>What is SoleJokers?</h4>
          <ul className='text-sm text-gray-400 font-normal w-full h-[40%] flex flex-col justify-center items-center gap-4'>
            <li className='hover:text-[#529CDF] transition-all duration-200 cursor-pointer font-semibold aboutUs'>About Us</li>
            <li className='hover:text-[#529CDF] transition-all duration-200 cursor-pointer font-semibold ourJourney'>Our Journey</li>
            <li className='hover:text-[#529CDF] transition-all duration-200 cursor-pointer font-semibold funkIt'>Funk It OUT!!</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer