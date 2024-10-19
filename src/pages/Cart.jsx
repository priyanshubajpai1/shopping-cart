import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='flex flex-col items-center mt-[80px] p-4'>
      {cart.length > 0 ? (
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='flex flex-col lg:w-2/3 w-full p-4 mx-auto items-center'>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className='flex flex-col lg:w-1/3 w-full p-4 rounded mt-8 lg:mt-0 lg:ml-8'>
            <div className='mb-4'>
              <h2 className='text-xl font-semibold text-green-900'>YOUR CART</h2>
              <h3 className='text-4xl font-bold text-green-700'>SUMMARY</h3>
              <p className='mt-2'>
                <span className='text-xl font-semibold text-gray-700'>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className='mt-auto'>
              <p className='text-xl font-semibold text-gray-700'>
                Total Amount: <span className='font-bold text-black'>${totalAmount.toFixed(2)}</span>
              </p>
              <button className='bg-green-700 text-white py-2 px-4 rounded-lg mt-4 font-bold text-xl w-full lg:w-auto h-12'>
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center mt-[210px]'>
          <h1 className='text-3xl font-semibold'>Your cart is empty!</h1>
          <Link to='/'>
            <button className='mt-4 bg-green-600 text-white py-2 px-4 rounded-md w-40 h-12'>
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
