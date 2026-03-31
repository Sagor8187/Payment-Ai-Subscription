import React from 'react'
import Cardview from './Cardview'

export default function Card({product}) {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
        {product.map(info=> <div key={info.id}>
            <Cardview info={info}></Cardview>
        </div>)}
    </div>
  )
}
