import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoeDetailCard from './ShoeDetailCard';
import SneakerCard from './SneakersCard';
import { delay, motion, useAnimation } from "framer-motion";
import { slideAnimation } from '../config/motion';

const Shop = () => {
  const [sneakers, setSneakers] = useState([]);
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/shoes')
      .then(response => {
        setSneakers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching sneakers:', error);
      });
  }, []);

  const handleSneakerClick = (sneaker) => {
    setSelectedSneaker(sneaker);
  };

  const handleClose = () => {
    setSelectedSneaker(null);
  };

  const controls = useAnimation();

    useEffect(() => {
        controls.start("animate");
    }, []);

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
          onSneakerClick={handleSneakerClick}
        />
        ))}
      </div>
      <ShoeDetailCard
        selectedSneaker={selectedSneaker}
        onClose={handleClose}
      />
    </div>
  );
};

export default Shop;
