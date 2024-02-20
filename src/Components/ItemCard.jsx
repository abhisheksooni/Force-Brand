import React, { useState } from 'react'
// import img from '../Images/img14.jpg'
import { ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function ItemCard({sale,name,price,img,btnf}) {
  const [Hover,Sethover] = useState(false)

  return (
    
    <div onMouseEnter={()=>Sethover(true)} onMouseLeave={()=>Sethover(false)} className=' cursor-pointer '>
      <div className={`h-[345px] w-[270px] ease-out duration-200 ${Hover?"scale-[.97]":"scale-100"}`}>
       <img src={img} alt=""  className=' w-full h-full rounded-xl bg-slate-400' />
      </div>
        <div className="pl-2">
        <p className='py-2 fixelMedium text-xl text-c5 '>{name}</p>

        {/* <div className=" flex  relative z-40 items-center py-3 justify-between pr-7 ">
        <p className=' text-c5'> <span className='text-c4'>{sale? sale: ""}</span> ${sale?<del>800</del>:price}</p>
          <button onClick={btnf} className='  rounded-full p-2 bg-c2 text-c1'><ShoppingCart size={20}/></button>
        </div> */}
        </div>
    </div>
   
  )
}

export default ItemCard