import React from 'react';

const Cta = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] flex flex-col items-center justify-center text-center text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-lg md:text-xl text-purple-100 mb-10 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter. 
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="px-8 py-3 bg-white text-[#7C3AED] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
          Explore Products
        </button>
        <button className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#7C3AED] transition-all duration-200">
          View Pricing
        </button>
      </div>

      {/* Footer text */}
      <p className="text-sm text-purple-200 opacity-90">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  );
};

export default Cta;