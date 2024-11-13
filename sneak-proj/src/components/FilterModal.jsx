import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from '../store';

import { IoFilter } from "react-icons/io5";


const FilterModal = () => {
    const { selectedBrands, priceRange, setSelectedBrands, loading, error, setPriceRange, fetchFilteredSneakers, resetFilters, fetchAllSneakers } = useStore();
    const [isOpen, setIsOpen] = useState(false);
  
    const brands = ['Nike', 'Adidas', 'Vans'];
  
    const toggleBrand = (brand) => {
      setSelectedBrands(
        selectedBrands.includes(brand)
          ? selectedBrands.filter(b => b !== brand)
          : [...selectedBrands, brand]
      );
    };
  
    const handleApplyFilters = async () => {
      await fetchFilteredSneakers();  // Fetch filtered sneakers
      setIsOpen(false);
    };


    return (
      <div className="w-[80%] h-[50px] flex justify-end items-center mb-8">
        <button
          className="w-[100px] h-[40px] p-2 bg-white rounded-full shadow-2xl border-black border-2 flex justify-center items-center gap-4 font-semibold italic text-[#529CDF] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoFilter /> Filters
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50 rounded-tl-lg rounded-bl-lg"
              >
                <h2 className="font-bold text-xl mb-4">Filters</h2>
                
                <h3 className="font-semibold mt-8 text-lg mb-3">Brand</h3>
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
  
                <h3 className="font-semibold mt-8">Price Range</h3>
                <div className="flex mt-3 space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="border p-2 w-1/2 rounded-xl"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="border p-2 w-1/2 rounded-xl"
                  />
                </div>
  
                <div className="flex justify-center items-center gap-2 mt-8 absolute bottom-5">
                  <button
                      className="w-[100px] h-[45px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl  hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
                      onClick={handleApplyFilters}
                  >
                      Apply
                  </button>
                  <button
                      className="w-[100px] h-[45px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl  hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
                      onClick={() => {
                        resetFilters();  
                        fetchAllSneakers();
                      }}
                  >
                      Reset
                  </button>
                </div>
              </motion.div>
  
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };

  export default FilterModal;
  