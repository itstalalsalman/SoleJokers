import React from 'react';
import { adidasLogo, nikeLogo, vansLogo, SoleJokerPNG } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { motion } from 'framer-motion';

import { mainAnimation, transitionControls } from '../config/motion';

const OurCollection = () => {
  const navigate = useNavigate();
  const setSelectedBrands = useStore((state) => state.setSelectedBrands); 

  const shoeCollection = [
    { logo: adidasLogo, brand: 'Adidas' },
    { logo: nikeLogo, brand: 'Nike' },
    { logo: vansLogo, brand: 'Vans' }
  ];

  const handleBrandClick = (brand) => {
    setSelectedBrands([brand]); 
    navigate('/shop'); 
  };


  return (
    <div className="w-full flex flex-col justify-center items-center mt-28">
        <motion.h1 
          className="font-extrabold text-[80px]"
          initial={mainAnimation(0 , 0.4)} 
          whileInView={mainAnimation(1, 1)} 
          transition={transitionControls(0.8, 'spring')}
        >
            Our Collection</motion.h1>
        <motion.p 
          className="w-[700px] text-center mb-4 mt-2 font-normal text-[18px]"
          initial={mainAnimation(0 , 0.5)} 
          whileInView={mainAnimation(1, 1)} 
          transition={transitionControls(1, 'spring')}
        >
            Welcome to SoleJoker, where your feet find their happy place! Dive into our quirky collection of 
            kicks that blend fun with fashion. From bold sneakers to funky sandals, each pair is designed to make 
            you smile with every step.
        </motion.p>
        <motion.p 
          className="font-medium text-[20px]"
          initial={mainAnimation(0 , 0.5)} 
          whileInView={mainAnimation(1, 1)} 
          transition={transitionControls(1.2, 'spring')}
        >
          Shop now and join the SoleJoker family!
        </motion.p>
        <div className="w-[80%] h-[400px] mb-16 mt-14 flex flex-row justify-evenly items-center"> 
          {shoeCollection.map((item) => (
            <div key={item.brand} className="box" onClick={() => handleBrandClick(item.brand)}>
              <span></span>
              <div className="content cursor-pointer">
                  <img src={item.logo} alt='main-logo-collections'/>                
              </div>
            </div>
          ))}
        </div>

        <div className="button-container bounce">
          <button className="brutalist-button solejoker button-1">
            <div className="solejoker-logo">
              <img
                className="solejoker-icon"
                src={SoleJokerPNG}
                alt="img-btnMore"
              />
            </div>
            <div className="button-text" onClick={() => navigate('/brand')}>
              <span>See more of</span>
              <span>SoleJokers</span>
            </div>
          </button>
        </div>
    </div>
  );
};

export default OurCollection;
