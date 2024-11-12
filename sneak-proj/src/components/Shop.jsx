import React, { useEffect } from 'react';
import axios from 'axios';
import ShoeDetailCard from './ShoeDetailCard';
import SneakerCard from './SneakersCard';
import { motion, useAnimation } from "framer-motion";
import { slideAnimation } from '../config/motion';
import { useStore } from '../../store'

const Shop = () => {
  const { sneakers, selectedSneaker, loading, error, setSneakers, setSelectedSneaker, setError, setIsModalOpen, isModalOpen } = useStore();
  const controls = useAnimation();

  useEffect(() => {
    axios.get('http://localhost:5000/api/shoes')
      .then(response => {
        setSneakers(response.data);
      })
      .catch(error => {
        console.error('Error fetching sneakers:', error);
        setError('Failed to load sneakers');
      });
  }, [setSneakers, setError]);

  const handleSneakerClick = (sneaker) => {
    setSelectedSneaker(sneaker);
    setIsModalOpen(true);  // Open the modal when a sneaker is selected
  };

  const handleClose = () => {
    setSelectedSneaker(null);
    setIsModalOpen(false);  // Close the modal when user clicks on close
  };

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mb-12">
      <motion.h1 
        variants={slideAnimation("down")}
        initial="hidden"
        animate={controls} 
        className='font-extrabold text-[70px]'
      >
        Our Collection
      </motion.h1>
      <div className='mt-5 mx-28 w-[85%] grid grid-cols-4 gap-7'>
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
