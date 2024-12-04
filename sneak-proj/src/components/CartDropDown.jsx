import React from 'react'
import { useStore } from '../store'
import {cart} from '../assets/index.js'
import CartTiles from './CartTiles.jsx';

const CartDropDown = () => {
    const { setIsMouseOnCart, cartItems } = useStore(); 

  return (
    <div 
        className='w-[350px] h-[250px] absolute shadow-2xl right-[-50px] bg-white top-20 z-10 rounded-xl animate-cart flex flex-col justify-center items-center'
        onMouseEnter={() => setIsMouseOnCart(true)}
        onMouseLeave={() => setIsMouseOnCart(false)}
    >
      <div className='flex justify-evenly items-center w-full h-[20%] px-4 rounded-xl rounded-bl-none rounded-br-none border-2 border-black'>
        <h1 className='w-[70%] font-bold'>Cart</h1>
        <h2 className='w-[30%] font-bold'>WishList</h2>
      </div>
      <div className='w-full h-[80%] flex flex-col justify-evenly items-center'>
          {cartItems.map((shoe, index) => (
              <CartTiles shoe={shoe} key={index}/>
          ))
          }
      </div>                                                              
    </div>
  )
}

export default CartDropDown;