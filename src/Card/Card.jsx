import React, { useState } from 'react'
import Cardview from './Cardview'

export default function Card({product,cart,setcart}) {
    
  return (
    <div className='mt-10'>
     
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
        {product.map(info=> <div key={info.id}>
            <Cardview cart={cart} setcart={setcart} info={info}></Cardview>
        </div>)}
    </div>
    </div>
  )
}
