import React, { useEffect, useState, Suspense } from 'react';
import { motion, useAnimation } from "framer-motion";
import { mainAnimation, slideAnimation, transitionControls } from '../config/motion';
import ShoeDetailCard from '../components/ShoeDetailCard';
import { useStore } from '../store'; 
import FilterModal from '../components/FilterModal';
import ShopLoader from '../components/ShopLoader';

// Lazy load the SneakerCard component
const SneakerCard = React.lazy(() => import('../components/SneakersCard'));

const Shop = () => {
  const { sneakers, selectedSneaker, setSelectedSneaker, selectedBrands, setIsModalOpen, isModalOpen, fetchAllSneakers, fetchFilteredSneakers } = useStore();
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const controls = useAnimation();

  const handleClose = () => {
    setSelectedSneaker(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchSneakers = async () => {
      setIsLoading(true);  // Set loading state to true when fetching starts

      if (selectedBrands.length > 0) {
        await fetchFilteredSneakers(); // Fetch sneakers based on selected brand
      } else {
        await fetchAllSneakers(); // Fetch all sneakers if no filters are applied
      }

      setIsLoading(false); // Set loading state to false once data is fetched
    };

    fetchSneakers();
    controls.start("animate");
  }, [fetchAllSneakers, fetchFilteredSneakers, selectedBrands, controls]);

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-start items-center mb-12 z-0">
      <motion.h1 
        variants={slideAnimation("down")}
        initial="hidden"
        animate={controls} 
        whileInView={mainAnimation(1, 1)} 
        transition={transitionControls(1.2, 'spring')}
        className='shop-heading'
      >
        Our Collection
      </motion.h1>
      <FilterModal />
      
      
      <div className="sneaker-cards-section">
        <Suspense fallback={<ShopLoader />}>
          {sneakers.map(sneaker => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </Suspense>
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
