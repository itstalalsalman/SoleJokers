import React, { useEffect, lazy } from 'react';
import { motion, useAnimation } from "framer-motion";
import { slideAnimation } from '../config/motion';
import { IoIosArrowDown } from "react-icons/io";

const Jordans = lazy(() => import('./canvas/Jordans'))

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("animate");
    }, []);

    return (
        <div className='w-full flex justify-center items-center relative'>
            <motion.div
                variants={slideAnimation("left")}
                initial="hidden"
                animate={controls}
                className='w-[600px] h-full flex flex-col items-start justify-center'
            >
                <h1 className='font-extrabold text-[100px]'>SoleJokers</h1>
                <p className='font-semibold text-[#529CDF] text-[30px]'>Where your feet get funny and funky!</p>
                <p className='font-medium text-[24px] mt-14'>Dive into our exclusive collections and find your perfect pair.</p>
                <button className='mt-5 w-[180px] h-[50px] font-semibold'>Shop Now</button>
            </motion.div>
            <Jordans />
            <button className='absolute bottom-0 left-auto w-[50px] h-[50px] flex items-center justify-center bg-[#529CDF] rounded-3xl bounce'>
                <IoIosArrowDown style={{color:'white', fontWeight: 'bolder', fontSize: '24px'}}/>
            </button>
        </div>
    );
}

export default Hero;
