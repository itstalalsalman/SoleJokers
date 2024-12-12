import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { useStore } from '../store';


const CartTiles = ({shoe}) => {
  const {removeFromCart} = useStore()

  return (
    <div className='w-[90%] h-[75px] shadow-md border-b-2 border-gray-200 flex flex-row justify-between items-center rounded-xl'>
        <img src={`https://solejoker-server.vercel.app${shoe.image_paths[0]}`} alt='' className='w-[55px] h-full rounded-tl-xl rounded-bl-xl'/>
        <div className='w-[50%] flex flex-col'>
            <p className='font-semibold text-sm'>{shoe.name}</p>
            <p><span>0</span> x <span>${shoe.price}</span></p>
        </div>
        <div className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer' onClick={() => removeFromCart(shoe.id)}>
            <IoMdTrash style={{width: '20px', height: '20px'}}/>
        </div>
    </div>
  )
}

export default CartTiles