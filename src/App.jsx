import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Rating from './Rating/Rating'
import Card from './Card/Card'

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
   
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Card product={product}></Card>

    </div>
  )
}
