import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { slideAnimation } from '../config/motion';

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("animate");
    }, []);

    return (
        <div className='w-full flex justify-center items-center'>
            <motion.div
                variants={slideAnimation("left")}
                initial="hidden"
                animate={controls}
                className='w-[600px] h-full flex flex-col items-start justify-center mt-24'
            >
                <h1 className='font-extrabold text-[100px]'>SoleJokers</h1>
                <p className='font-semibold text-[#529CDF] text-[30px]'>Where your feet get funny and funky!</p>
                <p className='font-medium text-[24px] mt-14'>Dive into our exclusive collections and find your perfect pair.</p>
                <button className='mt-5 w-[180px] h-[50px] font-semibold'>Shop Now</button>
            </motion.div>
            <div className='w-[710px]'>

            </div>
        </div>
    );
}

export default Hero;
