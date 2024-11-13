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
  const { sneakers, selectedSneaker, loading, error, setSneakers, setSelectedSneaker, selectedBrands, setIsModalOpen, isModalOpen, fetchAllSneakers, fetchFilteredSneakers } = useStore();

  const controls = useAnimation();

  const handleClose = () => {
    setSelectedSneaker(null);
    setIsModalOpen(false);  // Close the modal when user clicks on close
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      fetchFilteredSneakers(); // Fetching sneakers based on the selected brand
    } else {
      fetchAllSneakers(); // Fetching all sneakers when no filters are applied
    } // Fetching sneakers when the component mounts
    controls.start("animate");
  }, [fetchAllSneakers, fetchFilteredSneakers, selectedBrands, controls]); // Dependency array with fetchAllSneakers and controls


  return (
    <div className="w-full flex flex-col justify-center items-center mb-12 ">
      <motion.h1 
        variants={slideAnimation("down")}
        initial="hidden"
        animate={controls} 
        className='shop-heading'
      >
        Our Collection
      </motion.h1>
      <FilterModal />
      <div className='sneaker-cards-section'>
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
