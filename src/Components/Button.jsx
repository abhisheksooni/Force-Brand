import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react';
function Button() {

const [hovers,setHover] = useState(false)
  return (
// 
    <>
    <button onMouseEnter={()=>setHover(!hovers)} onMouseLeave={()=>setHover(!hovers)}  className={`flex pl-3 fixelMedium gap-7 p-1 border border-c2 bg-transparent items-center rounded-full hover:text-c1 hover:bg-c5 `}>
    <p>{"More"}</p>
    <div className={`rotate-${hovers?"45":"0"}  rounded-full p-[2px] bg-c5 text-c1  transform ease-linear duration-300`}>
    <ArrowUpRight/>
    </div>
    </button>
    </>
  )
}

export default Button