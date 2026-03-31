import React from 'react'
import {  toast } from 'react-toastify';
export default function Cart({cart,setcart}) {
    let remove = (id)=>{
      let updateitem=  cart.filter(items => items.id !== id)
      setcart(updateitem)
    }

    let total = cart.reduce((acc,item)=> acc + item.price,0)
    
  return (
    <div>
        {cart.length === 0?<p className='h-[20vh] flex justify-center items-center text-center font-bold text-2xl'>Cart is Empty</p>:
        <div>
          <div className="p-6 bg-gray-100">
            <p className='text-black font-bold text-xl py-3'>Your Cart</p>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-gray-200 rounded-xl p-5 mb-4"
        >
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-xl">
              {item.icon}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>

          {/* Right side */}
          <button onClick={()=> {remove(item.id),toast.error("Remove product")}} className="text-pink-500 font-medium hover:underline">
            Remove
          </button>
        </div>
      ))}
    </div>
    <div className='flex justify-between font-bold text-2xl px-5'>
        <p>Total</p>
        <p>${total}</p>
    </div>
    <div className='mx-5 py-5'>
       <button onClick={()=>{setcart([]),toast.success("Check out done")}} className="w-full p-3 rounded-full text-white text-xl bg-linear-to-r from-[#652df7] to-[#9116fa]  font-bold">Proceed to Checkout</button>
    </div>
  </div>
        }
     
    </div>
  )
}
