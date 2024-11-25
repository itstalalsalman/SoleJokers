import React, { useEffect, lazy, Suspense } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { slideAnimation, mainAnimation, transitionControls } from '../config/motion';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useStore } from '../store';

import Jordans from './canvas/Jordans';

const Hero = () => {
    const controls = useAnimation();
    const { setFetchAllSneakers } = useStore();

    useEffect(() => {
        controls.start("animate");
    }, []);

    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center relative z-0">
            <motion.div
                variants={slideAnimation("left")}
                initial="hidden"
                animate={controls}
                className="w-[40%] h-full flex flex-col items-start justify-center"
            >
                <motion.h1 
                    initial={mainAnimation(0 , 0.4)} 
                    whileInView={mainAnimation(1, 1)} 
                    transition={transitionControls(0.8, 'spring')}
                    className="font-extrabold text-[100px]"
                >
                    SoleJokers
                </motion.h1>
                <motion.p 
                    initial={mainAnimation(0 , 0.5)} 
                    whileInView={mainAnimation(1, 1)} 
                    transition={transitionControls(1, 'spring')}
                    className="font-semibold text-[#529CDF] text-[30px]"
                >
                    Where your feet get funny and funky!
                </motion.p>
                <motion.p 
                    initial={mainAnimation(0 , 0.5)} 
                    whileInView={mainAnimation(1, 1)} 
                    transition={transitionControls(1.2, 'spring')}
                    className="font-medium text-[24px] mt-14"
                >
                    Dive into our exclusive collections and find your perfect pair.
                </motion.p>
                <motion.button
                    initial={mainAnimation(0 , 1)} 
                    whileInView={mainAnimation(1, 1)} 
                    transition={transitionControls(1.2, 'spring')} 
                    onClick={() => setFetchAllSneakers(true)} 
                    className="mt-5 w-[180px] h-[50px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
                >
                    <Link to="/shop">Shop Now</Link>
                </motion.button>
            </motion.div>
            {/* Lazy load Jordans 3D object only once */}
            <Jordans />
            <button className="absolute bottom-7 left-auto w-[50px] h-[50px] flex items-center justify-center bg-[#529CDF] rounded-3xl bounce">
                <IoIosArrowDown style={{color: 'white', fontWeight: 'bolder', fontSize: '24px'}} />
            </button>
        </div>
    );
};

export default Hero;
