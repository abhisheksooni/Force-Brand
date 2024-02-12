import React, { useState } from 'react'

function ItemCard({sale}) {
  const [Hover,Sethover] = useState(false)

  return (
    <div onMouseEnter={()=>Sethover(true)} onMouseLeave={()=>Sethover(false)} className=' cursor-pointer '>
      <div className={`h-[345px] w-[270px] ease-out duration-200 ${Hover?"scale-[.97]":"scale-100"}`}>
       <img src="" alt=""  className=' w-full h-full rounded-xl bg-slate-400' />
      </div>
        <div className="pl-2">
        <p className='py-2 fixelMedium text-xl text-c5 '>Item Name</p>
        <p className='pb-3 text-c5'> <span className='text-c4'>{sale? sale: ""}</span> ${sale?<del>800</del>:"800"}</p>
        </div>
    </div>
  )
}

export default ItemCard