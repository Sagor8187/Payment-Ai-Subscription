import React from "react";

export default function Cardview({ info }) {
  console.log(info);
  return (
    <div>
      <div className="max-w-xs bg-white rounded-xl shadow-lg p-6 relative font-sans">
        {/* Tag */}
        <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
          {info.tag}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <span className="text-2xl">{info.icon}</span>
          </div>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
         {info.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm text-center mb-4">
          {info.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 text-center mb-4">
          $29<span className="text-base font-normal text-gray-500">/{info.period}</span>
        </p>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔</span> {info.features[0]}
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔</span> {info.features[1]}
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔</span> {info.features[2]}
          </li>
        </ul>

        {/* Button */}
        <button className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
