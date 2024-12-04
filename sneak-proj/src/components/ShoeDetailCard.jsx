import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IoIosCart, IoMdHeart } from 'react-icons/io';
import {useStore} from '../store';
import { checkout } from '../assets';
import axios from 'axios';

const ShoeDetailCard = ({ onClose }) => {
  const navigate = useNavigate();
  const { selectedSneaker, cartItems, userId, setIsModalOpen , setSelectedSneaker, accessToken,isBuying, mainImg, isLoggedIn, setMainImg, setIsBuying, addToCart } = useStore();
  const debounceTimeout = useRef(null);
  const [quantity, setQuantity] = useState(1);
  
  const debouncedAddToCart = useCallback((cartItem, shoeSize = 44) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    const item = {
      shoeId: cartItem.id,
      quantity: 1,
      shoeSize: shoeSize,
      img_url: cartItem.image_paths[0],
    }
    console.log(accessToken)
    console.log(item)
    debounceTimeout.current = setTimeout(async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/cart/add', item, {headers: {Authorization: `Bearer ${accessToken}`}});
        console.log('Item added to cart:', response.data);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }, 1000); // Adjust the delay as needed (e.g., 1000ms = 1 second)
  }, []);

  // Setting initial image when sneaker is selected
  useEffect(() => {
    if (selectedSneaker) {
      setMainImg(selectedSneaker.image_paths[0]);
    }
  }, [selectedSneaker, setMainImg]);

  if (!selectedSneaker) return null;

  console.log(selectedSneaker)

  const handleCart = () => {
    setIsBuying(true);
    addToCart(selectedSneaker);
    if(!isLoggedIn){

    }else{
      debouncedAddToCart(selectedSneaker);
    }
  }

  const handleCheckout = () => {
    if(!isLoggedIn){
      //console.log(selectedSneaker.id)
      setSelectedSneaker(null)
    } else{
      setIsModalOpen(false)
      navigate('/checkout')
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="flex gap-5 bg-white p-8 rounded-lg shadow-lg w-[75%] h-[550px] max-h-3/4 overflow-y-auto sneaker-detail relative">
        <span
          className="absolute top-5 right-5 text-gray-black cursor-pointer text-3xl hover:text-[#529CDF] hover:rotate-45 transition-all ease-in-out"
          onClick={onClose}
        >
          &times;
        </span>
        <div className='w-[450px] h-[485px] flex justify-center items-center'>
          <motion.img
            key={mainImg}
            src={`http://localhost:5000${mainImg}`}
            alt={selectedSneaker.name}
            className="w-[350px] rounded-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className='w-[100px] h-[485px] flex flex-col gap-5 justify-center items-center'>
          {selectedSneaker.image_paths.map((path, index) => (
            <img
              key={index}
              src={`http://localhost:5000${path}`}
              alt="sneaker-details-imgs"
              className={`w-[80px] h-[100px] rounded-xl cursor-pointer ${mainImg === path ? 'border-[2px] border-black opacity-80 transition-all duration-75 ease-in-out' : ''}`}
              onClick={() => setMainImg(path)}
            />
          ))}
        </div>
        <div className='w-[550px] h-[485px] flex flex-col items-center justify-center'>
          <p className='text-gray-400'>{selectedSneaker.brand}</p>
          <h2 className="text-4xl font-bold mb-4">{selectedSneaker.name}</h2>
          <p className="text-gray-700 mb-2 text-center">{selectedSneaker.description}</p>
          <div className='w-full h-[70px] flex justify-between items-center px-8'>
            <p className="text-[#529CDF] text-3xl font-bold ">${selectedSneaker.price}</p>
            {!isBuying ? (
              <div className='flex justify-center items-center gap-5'>
                <button className='w-10 h-10 rounded-full flex justify-center items-center text-[#529CDF] border-[3px] border-black hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in cursor-pointer'>
                  <IoMdHeart />
                </button>
                <button
                  onClick={handleCart}
                  className='w-10 h-10 rounded-full flex justify-center items-center text-[#529CDF] border-[3px] border-black hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in cursor-pointer'
                >
                  <IoIosCart />
                </button>
              </div>
            ) : (
              <div className='flex justify-center items-center gap-5'>
                <button className='btnContinueShopping animate-bounceIn' onClick={onClose}>Continue Shopping</button>
                <button className='btnCheckout animate-bounceIn delay-100 flex justify-center items-center gap-1' onClick={handleCheckout}>{isLoggedIn ? 'Checkout' : `Login `} {!isLoggedIn && <img src={checkout} className='w-[20px]'/>}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailCard;
