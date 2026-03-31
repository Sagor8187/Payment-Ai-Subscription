import React from "react";
import create from "../assets/user.png"; 
import Choose from "../assets/package.png"; 
import start from "../assets/rocket.png"; 

export default function Step() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      image: create,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      image: Choose,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      image: start,
    },
  ];

  return (
    <div>
      {/* Title Section */}
      <div className="text-center">
        <h1 className="font-bold text-4xl">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center w-72"
          >
            {/* Top row: Step Number */}
            <div className="flex w-full justify-end mb-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                {step.id}
              </div>
            </div>

            {/* Image */}
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <img src={step.image} alt={step.title} className="w-12 h-12" />
            </div>

            {/* Title & Description */}
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}