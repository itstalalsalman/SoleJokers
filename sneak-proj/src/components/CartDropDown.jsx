import React from 'react'
import { useStore } from '../store'

const CartDropDown = () => {
    const { setIsMouseOnCart } = useStore(); 

  return (
    <div 
        className='w-[350px] h-[200px] absolute bottom-[-140px] shadow-2xl right-[-50px] bg-white top-20 z-10 rounded-xl animate-cart flex justify-center items-center'
        onMouseEnter={() => setIsMouseOnCart(true)}
        onMouseLeave={() => setIsMouseOnCart(false)}
    >

    </div>
  )
}

export default CartDropDown