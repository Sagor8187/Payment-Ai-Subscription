import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Rating from './Rating/Rating'
import Card from './Card/Card'
import Cart from './Cart/Cart'


export default function App() {
  let [product,setproduct] = useState([])
  useEffect(()=>{
    let fetchdata = async ()=>{
      let api = await fetch("/data.json")
      let res = await api.json()
      setproduct(res)
      
    }
    fetchdata()
  },[])
const [active,setactive]=useState("product")
const [cart,setcart]=useState([])
   console.log(cart)
  return (
    <div>
      <Navbar cart={cart} setactive={setactive}></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <div className='mt-5 md:mt-10'>
        <div className='text-center space-y-5'>
       <h1 className='font-bold text-2xl md:text-4xl'>Premium Digital Tools</h1>
      <p className='text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity</p>
      <div className='flex justify-center gap-5 '>
        <button onClick={()=>setactive("product")} className={`${active==="product"?"bg-linear-to-r from-[#652df7] to-[#9116fa] p-2 rounded-full text-white font-bold":"bg-white text-[#25065D]"}`}>Products</button>
        <button onClick={()=>setactive("cart")} className={`${active==="cart"?"bg-linear-to-r from-[#652df7] to-[#9116fa] p-2 px-4 rounded-full text-white font-bold":"bg-white text-[#25065D]"}`}>Cart ({cart.length})</button>
      </div>
     </div>
    </div>
    {active==="product"? <Card product={product} cart={cart} setcart={setcart} ></Card> :<Cart cart={cart} setcart={setcart}></Cart>}
      {/* <Card product={product}></Card> */}

    </div>
  )
}
