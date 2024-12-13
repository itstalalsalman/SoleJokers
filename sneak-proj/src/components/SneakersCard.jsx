import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStore } from '../store';

const SneakerCard = ({ sneaker }) => {
  
  const setSelectedSneaker = useStore((state) => state.setSelectedSneaker);
  const setIsModalOpen = useStore((state) => state.setIsModalOpen);

  const handleClick = () => {
    setSelectedSneaker(sneaker); // Setting the selected sneaker in the store
    setIsModalOpen(true);
  };

  return (
    <div className="w-[270px] h-[390px] flex flex-col justify-start items-center shadow-2xl rounded-xl relative transform transition duration-300 hover:scale-110 ">
      <img src={`https://solejoker-server.vercel.app${sneaker.image_paths[0]}`} alt={sneaker.name} className='w-[220px] h-[270px] rounded-xl mt-5'/>
      <div className='w-[210px] mt-6 flex justify-between items-center'>
        <div className='flex flex-col justify-center items-start'>
          <h2 className='font-medium text-[14px]'>{sneaker.name}</h2>
          <p className='font-bold text-[18px] text-[#529CDF]'>${sneaker.price}</p>
        </div>
        <div className='w-10 h-10 rounded-full flex justify-center items-center bg-white text-[#529CDF] border-[3px] border-black hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in cursor-pointer' onClick={handleClick}>
          <IoIosArrowRoundForward className='text-[25px]' />
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;