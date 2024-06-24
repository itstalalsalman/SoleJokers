import React from 'react';
import { IoIosArrowDown } from "react-icons/io";


const SneakerCard = ({ sneaker, onSneakerClick }) => {
  const handleClick = () => {
    onSneakerClick(sneaker); // Pass the sneaker object to the parent component
  };

  return (
    <div className="w-[280px] h-[400px] flex flex-col justify-start items-center shadow-2xl rounded-xl relative">
      <img src={sneaker.image_path} alt={sneaker.name} className='w-[220px] h-[270px] rounded-xl mt-5'/>
      <div className='w-[210px] mt-3 '>
        <h2 className='font-semibold text-[18px]'>{sneaker.name}</h2>
        <p>${sneaker.price}</p>
      </div>
      <IoIosArrowDown style={{color:'black', fontWeight: 'bolder', fontSize: '24px', position: 'absolute', bottom: 0, marginBottom: '10px', cursor: 'pointer'}} onClick={handleClick}/>
    </div>
  );
};

export default SneakerCard;