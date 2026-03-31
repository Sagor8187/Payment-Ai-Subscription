import React from "react";
import { TiShoppingCart } from "react-icons/ti";
function Navbar({setactive,cart}) {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-xl bg-linear-to-r from-[#652df7] to-[#9116fa] bg-clip-text text-transparent font-bold">DigiTool</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <div className="relative ">
      <a onClick={()=>setactive("cart")} className="text-xl"><TiShoppingCart /></a>
      <span className={`absolute bottom-2 left-5 ${cart.length===0?"text-black font-semibold":"text-red-500 font-semibold"}`}>{cart.length}</span>
    </div>
    <a className="font-bold ">Login</a>
    <button className="btn  hidden md:block  bg-linear-to-r from-[#652df7] to-[#9116fa] text-white rounded-full">Get Started</button>

  </div>
</div>
    </div>
  );
}

export default Navbar;
