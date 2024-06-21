import React from 'react'
import Vans from './canvas/Vans'

const AboutUs = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <Vans />
        <div className='w-[600px] h-[500px] flex flex-col justify-center items-center'>
            <h1 className='text-[80px] font-extrabold mb-4'>About Us</h1>
            <p className='text-center mb-2 font-normal'>
                At SoleJoker, we believe that every step should be a laugh and every stride a statement. 
                Founded with a passion for combining top-notch quality with quirky designs, SoleJoker is 
                your go-to online sneaker store for all things fun and funky. Our mission is to bring joy 
                to your feet with a unique collection of sneakers that are as comfortable as they are eye-catching. 
                Whether you're looking for bold patterns, vibrant colors, or playful designs, we've got something that 
                will tickle your toes and your funny bone. <b>Join us at SoleJoker</b>, where your sneaker game gets a hilarious upgrade!
            </p>
            <button className='mt-5 w-[180px] h-[50px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in'>
                Be a SoleJoker
            </button>
        </div>  
    </div>
  )
}

export default AboutUs