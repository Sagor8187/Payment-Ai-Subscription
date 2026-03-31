import React from "react";
import banner from "../assets/banner.png";
import dot from "../assets/Group5.png";
export default function Hero() {
  return (
    <div>
      <main>
        <aside>
          <div>
            <img src={dot} alt="" />
            <p className="bg-linear-to-r from-[#652df7] to-[#9116fa] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2>Supercharge Your Digital Workflow</h2>
          <p>
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </aside>
        <aside>
          <img src={banner} alt="" />
        </aside>
      </main>
    </div>
  );
}
