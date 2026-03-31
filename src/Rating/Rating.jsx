import React from 'react'

export default function Rating() {
    const info =[
        {id:1,user:"50K+",status:"Active Users"},
        {id:2,user:"200+",status:"Premium Tools"},
        {id:3,user:"4.9",status:"Rating"}
        
    ] 
  return (
    <div className=' text-center bg-linear-to-r from-[#652df7] to-[#9116fa] text-white flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
        {info.map(item=> <div className='p-5 md:p-10 ' key={item.id}>
            <p className='font-bold text-2xl'>{item.user}</p>
            <p>{item.status}</p>
        </div>)}
    </div>
  )
}
