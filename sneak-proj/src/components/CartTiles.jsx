import React from 'react'

const CartTiles = ({shoe}) => {
  return (
    <div className='w-[90%] h-[75px] shadow-md border-b-2 border-gray-200 flex flex-row justify-between items-center rounded-xl overflow-hidden'>
        <img src={`http://localhost:5000${shoe.image_paths[0]}`} alt='' className='w-[55px] h-full '/>
        <div className='w-[50%] flex flex-col'>
            <p className='font-semibold text-sm'>{shoe.name}</p>
            <p><span>0</span> x <span>{shoe.price}</span></p>
        </div>
        <div className='w-[30px] h-[30px]'>

        </div>
    </div>
  )
}

export default CartTiles