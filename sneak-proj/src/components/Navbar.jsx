import React from 'react';
import { Link } from 'react-router-dom';
import { SoleJokerPNG } from '../assets';
import { cart, avatarShoe } from '../assets';
import { useStore } from '../store';
import LoggedInDropDown from './LoggedInDropDown';
import CartDropDown from './CartDropDown';

const Navbar = () => {
  const { setIsModalOpen, isLoggedIn, setIsMouseOnAvatar, isMouseOnAvatar, setIsMouseOnCart, isMouseOnCart, setFetchAllSneakers, cartItems } = useStore();

  const handleMouseEnterAvatar = () => setIsMouseOnAvatar(true);
  const handleMouseLeaveAvatar = () => setIsMouseOnAvatar(false);

  const handleMouseEnterCart = () => setIsMouseOnCart(true);
  const handleMouseLeaveCart = () => setIsMouseOnCart(false);

  console.log("obj", isLoggedIn); //un-necessary re-renders along the navbar needs fixing ----------------

  return (
    <div className='w-full h-[90px] flex justify-between items-center bg-white shadow-md fixed z-50'>
      <img src={SoleJokerPNG} className='w-[100px] h-full ml-28' alt='logo' />
      <div className='h-full w-[500px] flex justify-end items-center gap-4 mr-28 relative'>
        <ul className='flex justify-center items-center gap-10 mr-3 font-semibold'>
          <li className='hover:cursor-pointer nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:cursor-pointer nav-item' onClick={() => setFetchAllSneakers(true)}>
            <Link to='/shop'>Shop</Link>
          </li>
          <li className='hover:cursor-pointer nav-item'>
            <Link to='/brands'>Brands</Link>
          </li>
        </ul>

        {!isLoggedIn ? (
          <button
            className='w-[130px] h-[45px] font-semibold text-[#529CDF] border-[3px] border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in'
            onClick={() => setIsModalOpen(true)}
            aria-label="Login"
          >
            Login
          </button>
        ) : (
          <div
            className='w-[50px] h-full flex justify-center items-center'
            onMouseEnter={handleMouseEnterAvatar}
            onMouseLeave={handleMouseLeaveAvatar}
          >
            <img
              src={avatarShoe}
              alt='loggedIn-avatar'
              className='w-[50px] cursor-pointer'
            />
          </div>
        )}

        <div
          className='w-[50px] h-full flex justify-center items-center relative'
          onMouseEnter={handleMouseEnterCart}
          onMouseLeave={handleMouseLeaveCart}
        >
          <img
            src={cart}
            className='w-[50px] h-[35px] hover:cursor-pointer'
            alt='cart'
            aria-label="Shopping cart"
          />
          {cartItems.length > 0 &&
            <p className='absolute top-5 right-0 w-4 h-4 rounded-full bg-[#529CDF] text-white text-xs text-center font-semibold'>{cartItems.length}</p>
          }
        </div>

        {(isLoggedIn && isMouseOnAvatar) && <LoggedInDropDown />}
        {isMouseOnCart && <CartDropDown />}
      </div>
    </div>
  );
};

export default Navbar;
