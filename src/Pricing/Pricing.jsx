import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PricingCard = ({ 
  plan, 
  price, 
  description, 
  features, 
  buttonText, 
  isPopular 
}) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
      isPopular 
      ? 'bg-gradient-to-b from-[#7C3AED] to-[#A855F7] text-white scale-105 shadow-2xl z-10' 
      : 'bg-white text-gray-900 border border-gray-100 shadow-lg'
    }`}>
      
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-600 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}

      {/* Plan Title & Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan}</h3>
        <p className={`text-sm ${isPopular ? 'text-purple-100' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-baseline">
        <span className="text-5xl font-bold">${price}</span>
        <span className={`ml-2 text-lg ${isPopular ? 'text-purple-100' : 'text-gray-400'}`}>/Month</span>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center gap-2 text-sm ${isPopular ? 'text-purple-50' : 'text-gray-600'}`}>
            <IoMdCheckmarkCircleOutline className="text-green-500 w-5 h-5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
        isPopular 
        ? 'bg-white text-[#7C3AED] hover:bg-gray-50' 
        : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
      }`}>
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      plan: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      plan: "Pro",
      price: "29",
      description: "Best for professionals",
      features: [
        "Access to all premium tools", 
        "Unlimited templates", 
        "Priority support", 
        "Unlimited projects", 
        "Cloud sync", 
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      plan: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Everything in Pro", 
        "Team collaboration", 
        "Custom integrations", 
        "Dedicated support", 
        "SLA guarantee", 
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((item, idx) => (
            <PricingCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;