import React from 'react'
import { adidasLogo, nikeLogo, vansLogo, SoleJokerPNG } from '../assets'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const OurCollection = () => {

  const navigate = useNavigate();
  const setSelectedBrands = useStore((state) => state.setSelectedBrands); // Get Zustand function to set selected brands

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
    <div className='w-full flex flex-col justify-center items-center mt-28'>
        <h1 className='font-extrabold text-[80px]'>Our Collection</h1>
        <p className='w-[700px] text-center mb-4 mt-2 font-normal text-[18px]'>
            Welcome to SoleJoker, where your feet find their happy place! Dive into our quirky collection of 
            kicks that blend fun with fashion. From bold sneakers to funky sandals, each pair is designed to make 
            you smile with every step.
        </p>
        <p className='font-medium text-[20px]'>Shop now and join the SoleJoker family!</p>
        <div className='w-[80%] h-[400px] mb-16 mt-14 flex flex-row justify-evenly items-center'> 
          {shoeCollection.map((item) => (
            <div key={item.brand} className="box" onClick={() => handleBrandClick(item.brand)}>
              <span></span>
              <div className="content cursor-pointer">
                  <img src={item.logo} alt='main-logo-collections'/>                
              </div>
            </div>
            ))
          }
        </div>

        <div class="button-container bounce">
          <button class="brutalist-button solejoker button-1">
            <div class="solejoker-logo">
              <img
                className="solejoker-icon"
                src={SoleJokerPNG}
                alt='img-btnMore'
              />
            </div>
            <div class="button-text">
              <span>See more of</span>
              <span>SoleJokers</span>
            </div>
          </button>
        </div>

    </div>
  )
}

export default OurCollection