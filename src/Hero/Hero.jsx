import React from "react";
import banner from "../assets/banner.png";
import dot from "../assets/Group5.png";
import play from "../assets/play.png";
export default function Hero() {
  return (
    <div>
      <main className="flex justify-center gap-5 my-8 mx-20 items-center">
        <aside className="space-y-2">
          <div className="flex gap-1">
            <img src={dot} className="w-6 animate-[pulse_2s_infinite] filter brightness-100" alt="" />
            <p className="bg-linear-to-r from-[#652df7] to-[#9116fa] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2 className="text-5xl font-bold">Supercharge Your Digital Workflow</h2>
          <p className="text-[#677382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex  gap-5">
            <button className="p-2 font-bold px-4 text-center items-center  hidden md:block  bg-linear-to-r from-[#652df7] to-[#9116fa] text-white rounded-full">Explore Products</button>
            <button className="border-3 border-l-[#652df7] border-r-[#9116fa] border-b-[#9116fa] border-t-[#652df7] rounded-full flex items-center justify-center gap-1 p-2 "> <img src={play} alt="" />Watch Demo</button>
          </div>
        </aside>
        <aside>
          <img src={banner} alt="" />
        </aside>
      </main>
    </div>
  );
}
