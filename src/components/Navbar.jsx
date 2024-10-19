import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="fixed w-full top-0 z-10 shadow-md bg-slate-900">
      <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="../logo.png" className='h-14 w-44' alt='img' />
          </div>
        </NavLink>
         
        <div className='flex items-center font-medium text-gray-700 mr-5 space-x-6'>
          <NavLink to="/">
            <p className=' text-white'>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl text-white' />
              {cart.length > 0 && (
                <span className='absolute top-[-6px] right-[-6px] bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
