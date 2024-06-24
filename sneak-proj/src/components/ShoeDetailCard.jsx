import React from 'react';

const ShoeDetailCard = ({ selectedSneaker, onClose }) => {
  if (!selectedSneaker) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl max-h-3/4 overflow-y-auto sneaker-detail">
        <span
          className="top-2 right-2 text-gray-500 cursor-pointer text-2xl"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">{selectedSneaker.name}</h2>
        <img
          src={selectedSneaker.image_path}
          alt={selectedSneaker.name}
          className="w-[150px] rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">{selectedSneaker.description}</p>
        <p className="text-gray-700 mb-4">${selectedSneaker.price}</p>
      </div>
    </div>
  );
};

export default ShoeDetailCard;
