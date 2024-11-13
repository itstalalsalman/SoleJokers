import React, { useEffect } from 'react';
import axios from 'axios';
import ShoeDetailCard from '../src/components/ShoeDetailCard';
import SneakerCard from '../src/components/SneakersCard';
import { motion, useAnimation } from "framer-motion";
import { slideAnimation } from '../src/config/motion';
import { useStore } from '../src/store'; // Assuming the store is in the same directory
import FilterModal from '../src/components/FilterModal';

const Shop = () => {
  // Accessing store state and actions
  const { sneakers, selectedSneaker, loading, error, setSneakers, setSelectedSneaker, setError, setIsModalOpen, isModalOpen, fetchAllSneakers } = useStore();

  const controls = useAnimation();

  const handleClose = () => {
    setSelectedSneaker(null);
    setIsModalOpen(false);  // Close the modal when user clicks on close
  };

  useEffect(() => {
    fetchAllSneakers(); // Fetch sneakers when the component mounts
    controls.start("animate");
  }, [fetchAllSneakers, controls]); // Dependency array with fetchAllSneakers and controls

  

  return (
    <div className="w-full flex flex-col justify-center items-center mb-12 relative">
      <motion.h1 
        variants={slideAnimation("down")}
        initial="hidden"
        animate={controls} 
        className='font-extrabold text-[70px] mb-4'
      >
        Our Collection
      </motion.h1>
      <FilterModal />
      <div className='mt-5 mx-28 w-[85%] min-h-[70vh] grid grid-cols-4 gap-7'>
        
        {sneakers.map(sneaker => (
          <SneakerCard
            key={sneaker.id}
            sneaker={sneaker}
          />
        ))}
      </div>
      {isModalOpen && (
        <ShoeDetailCard
          selectedSneaker={selectedSneaker}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Shop;
