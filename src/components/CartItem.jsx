import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from "../redux/Slices/CartSlice"

const CartItem = ({ item}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>
      <div className='flex w-[600px] ml-56 mt-12 gap-x-14'>
        <div className='w-40'>
          <img src={item.image} alt='img' />
        </div>
        <div className='flex flex-wrap w-[370px]'>
          <h1 className='font-bold text-gray-700 text-[21px]'>{item.title}</h1>
          <h1 className='text-[17px]'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className='flex items-center'>
            <p className='text-green-800 font-bold text-[16px]'>${item.price}</p>
            <div
              className='ml-[280px] p-2 rounded-full bg-red-200 hover:bg-red-400 cursor-pointer'
              onClick={removeFromCart}>
              <AiFillDelete className='text-red-600' />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600 my-4 w-[665px] ml-44" />
    </div>
  )
}

export default CartItem;
