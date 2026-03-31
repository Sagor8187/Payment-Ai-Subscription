import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
 import { ToastContainer, toast } from 'react-toastify';
export default function Cardview({ info,cart,setcart }) {
  const [seleted ,setselected] = useState(false)
  return (
    <div>
      <div className="max-w-xs bg-white rounded-xl shadow-lg p-6 relative font-sans">
        {/* Tag */}
        <div className={`absolute top-4 right-4  text-xs font-semibold px-3 py-1 rounded-full ${info.tagType === "best-seller"?"bg-yellow-100 text-yellow-800":info.tagType ==="popular"?"bg-[#E1E7FF] text-[#652df7]":"bg-green-100 text-green-400" }`}>
          {info.tag}
        </div>

        {/* Icon */}
        <div className="flex  mb-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <span className="text-2xl">{info.icon}</span>
          </div>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800  mb-2">
         {info.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm  mb-4">
          {info.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900  mb-4">
          ${info.price}<span className="text-base font-normal text-gray-500">/{info.period}</span>
        </p>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2"><IoMdCheckmark /></span> {info.features[0]}
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2"><IoMdCheckmark /></span> {info.features[1]}
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2"><IoMdCheckmark /></span> {info.features[2]}
          </li>
        </ul>

        {/* Button */}
        <button disabled={seleted} onClick={()=>{setcart([...cart,info]),setselected(true),toast.success("Buy Successful")}} className="w-full py-2 text-white font-semibold rounded-lg bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
         {seleted === true?"Seleted ":"Buy Now"}
        </button>
      </div>
    </div>
  );
}
