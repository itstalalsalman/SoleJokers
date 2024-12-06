import React, { useState } from 'react'
import { useStore } from '../store'
import CartTiles from './CartTiles.jsx';
import { IoIosCart, IoMdHeart } from 'react-icons/io';

const CartDropDown = () => {
    const { setIsMouseOnCart, cartItems } = useStore(); 
    const [isCartView, setIsCartView] = useState(true);

  return (
    <div 
        className='w-[350px] h-[250px] absolute shadow-2xl right-[-50px] bg-white top-20 z-10 rounded-xl animate-cart flex flex-col justify-between items-center overflow-hidden'
        onMouseEnter={() => setIsMouseOnCart(true)}
        onMouseLeave={() => setIsMouseOnCart(false)}
    >
      <div className='transition-all duration-500 ease-in-out flex justify-between items-center w-full h-[20%]'>
        <h1
          className={`h-full font-bold transition-all duration-500 ease-in-out flex justify-end items-center border-black ${isCartView ? 'w-[80%] bg-[#529CDF] text-white pr-24' : 'w-[20%] px-5 border-2 border-black rounded-tl-xl'}`}
          onClick={() => setIsCartView(true)}
        >
          {isCartView ? 
            "Cart" 
            :
            <div className='w-[25px] h-[25px] rounded-full border-2 border-black flex justify-center items-center cursor-pointer'>
              <IoIosCart style={{fill: '#529CDF'}}/>
            </div>
          }
        </h1>
        <h1
          className={`h-full font-bold transition-all duration-500 ease-in-out flex justify-start items-center text-white ${isCartView ? 'w-[20%] px-5 border-2 border-black rounded-tr-xl' : 'w-[80%] bg-[#529CDF] pl-24'}`}
          onClick={() => setIsCartView(false)}
        >
          {isCartView ? 
            <div className='w-[25px] h-[25px] rounded-full border-2 border-black flex justify-center items-center cursor-pointer'>
              <IoMdHeart style={{ fill: '#529CDF'}}/>
            </div> 
            : 
            'Wishlist'
          }
        </h1>
      </div>
      <div className='w-full max-h-[600px] flex flex-col justify-between items-center gap-3 my-3 overflow-y-scroll'>
          {cartItems.map((shoe, index) => (
              <CartTiles shoe={shoe} key={index}/>
          ))
          }
      </div>                        
      <div className='w-full h-[20%]'>
        {/* <button>Checkout</button>
        <button>?</button> */}
      </div>                                      
    </div>
  )
}

export default CartDropDown;