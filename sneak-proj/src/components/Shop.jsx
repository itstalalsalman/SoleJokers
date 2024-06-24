import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoeDetailCard from './ShoeDetailCard';
import SneakerCard from './SneakersCard';

const Shop = () => {
  const [sneakers, setSneakers] = useState([]);
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/shop')
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

  return (
    <div className="w-full flex flex-col justify-center items-center mb-12">
      <h1 className='font-extrabold text-[70px]'>Our Collection</h1>
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
