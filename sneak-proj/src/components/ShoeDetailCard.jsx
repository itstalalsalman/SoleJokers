import React from 'react';

const ShoeDetailCard = ({ selectedSneaker, onClose }) => {
  if (!selectedSneaker) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="flex gap-5 bg-white p-8 rounded-lg shadow-lg w-[1000px] h-[550px] max-w-4xl max-h-3/4 overflow-y-auto sneaker-detail relative">
        <span
          className="absolute top-5 right-5 text-gray-black cursor-pointer text-3xl hover:text-[#529CDF]"
          onClick={onClose}
        >
          &times;
        </span>
        <div className='w-[400px] flex justify-center items-center'>
            <img
             src={selectedSneaker.image_path}
             alt={selectedSneaker.name}
             className="w-[350px] rounded-lg mb-4"
            />
        </div>
        <div className='w-[500px] flex flex-col items-center justify-center'>    
            <h2 className="text-4xl font-bold mb-4">{selectedSneaker.name}</h2>
            <p className="text-gray-700 mb-2">{selectedSneaker.description}</p>
            <p className="text-black mb-4">${selectedSneaker.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailCard;
