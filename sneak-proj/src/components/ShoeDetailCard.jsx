import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosCart } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";


const ShoeDetailCard = ({ selectedSneaker, onClose }) => {
  if (!selectedSneaker) return null;
  const [isBuying, setIsBuying] = useState(false);

  const [mainImg, setMainImg] = useState(selectedSneaker.image_paths[0]);

  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="flex gap-5 bg-white p-8 rounded-lg shadow-lg w-[75%] h-[550px]  max-h-3/4 overflow-y-auto sneaker-detail relative">
        <span
          className="absolute top-5 right-5 text-gray-black cursor-pointer text-3xl hover:text-[#529CDF] hover:rotate-45 transition-all ease-in-out"
          onClick={onClose}
        >
          &times;
        </span>
        <div className='w-[450px] h-[485px] flex justify-center items-center'>
          <motion.img
              key={mainImg} // This ensures that the image is re-rendered on source change
              src={`http://localhost:5000${mainImg}`}
              alt={selectedSneaker.name}
              className="w-[350px] rounded-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }} // Adjusting the duration for smoother transitions
            />
        </div>
        <div className='w-[100px] h-[485px] flex flex-col gap-5 justify-center items-center'>
          {selectedSneaker.image_paths.map((path, index) => (
              <img src={`http://localhost:5000${path}`} alt='sneaker-details-imgs' className={`w-[80px] h-[100px] rounded-xl cursor-pointer ${mainImg === path ? 'border-[2px] border-black opacity-80 transition-all duration-75 ease-in-out' : ''}`} onClick={() => {setMainImg(selectedSneaker.image_paths[index])}}/>  
            ))
          }
        </div>
        <div className='w-[550px] h-[485px] flex flex-col items-center justify-center'>    
            <p className='text-gray-400'>{selectedSneaker.brand}</p>
            <h2 className="text-4xl font-bold mb-4">{selectedSneaker.name}</h2>
            <p className="text-gray-700 mb-2 text-center">{selectedSneaker.description}</p>
            <div className='w-full h-[70px] flex justify-between items-center px-8'>
              <p className="text-[#529CDF] text-3xl font-bold ">${selectedSneaker.price}</p>
              { !isBuying && 
                <div className='flex justify-center items-center gap-5'>
                    <button className='w-10 h-10 rounded-full flex justify-center items-center text-[#529CDF] border-[3px] border-black hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in cursor-pointer'><IoMdHeart /></button>
                    <button onClick={() => {setIsBuying(true)}} className='w-10 h-10 rounded-full flex justify-center items-center text-[#529CDF] border-[3px] border-black hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in cursor-pointer'><IoIosCart /></button>
                </div>
              }
              { isBuying &&
                <div className='flex justify-center items-center gap-5'>
                    <button className='btnContinueShopping animate-bounceIn' onClick={onClose}>Continue Shopping</button>
                    <button className='btnCheckout animate-bounceIn delay-100'>Checkout</button> 
                </div>
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailCard;
