import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/shop')
      .then(response => {
        setSneakers(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching sneakers:', error);
      });
  }, []);

  return (
    <div className="shop">
      {sneakers.map(sneaker => (
        <div key={sneaker.id} className="sneaker">
          <img src={sneaker.image_path} alt={sneaker.name} className='w-[150px]'/>
          <h2>{sneaker.name}</h2>
          <p>${sneaker.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;