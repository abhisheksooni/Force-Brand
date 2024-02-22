import React from 'react'
import { X ,Plus ,Minus } from "lucide-react";
// import img from '../Images/img14.jpg'
function CartCard({name,price,img,btnf,quantity}) {
  return (
    <>
    <div className=" ">
      {/* h-[110px] lg:h-[250px] */}
          <div className="flex items-center md:items-start lg:w-[80%]">
          <div className=" max-w-[80px]  lg:max-w-[200px]  w-full rounded-lg lg:rounded-xl  ">
            <img src={img} className=' object-cover rounded-lg lg:rounded-xl' alt="" />
          </div>
          <div className=" flex flex-col w-full pl-6">
            <div className=" flex fixelMedium text-c2 lg:w-[100%] justify-between">
              <p className=" text-xl ">{name}</p>
              <button className="text-c5" onClick={btnf}>
                <X size={32}/>
              </button>
            </div>
            <p className="text-sm fixelMedium text-text1 py-3">Item Category name</p>

            <div className=" flex justify-between gap-5 md:gap-0  flex-wrap lg:w-[100%]">

          <div className=" flex gap-7 border-2 rounded-full px-3 py-1 ">

              <button><Minus/></button>
              <span className=" fixelMedium">{quantity?quantity:"0"}</span>
              <button><Plus/></button>
          </div>

              {/* <p>Add function ++ -- </p> */}
              <p className="fixelMedium text-xl">{price}</p>
            </div>
          </div>
          </div>
          <div className="h-[1px] bg-text1 rounded-full my-5"></div>
        </div>
    </>
  )
}

export default CartCard