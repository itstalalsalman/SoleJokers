import React from 'react'

const OurCollection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-28'>
        <h1 className='font-extrabold text-[80px]'>Our Collection</h1>
        <p className='w-[700px] text-center mb-4 mt-2 font-normal text-[18px]'>
            Welcome to SoleJoker, where your feet find their happy place! Dive into our quirky collection of 
            kicks that blend fun with fashion. From bold sneakers to funky sandals, each pair is designed to make 
            you smile with every step.
        </p>
        <p className='font-medium text-[20px]'>Shop now and join the SoleJoker family!</p>
        <div className='w-[80%] h-[400px] mb-16 mt-4'> {/* Carousel */}
        
        </div>
    </div>
  )
}

export default OurCollection