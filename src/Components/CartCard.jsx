import React from 'react'
import { X ,Plus ,Minus } from "lucide-react";
// import img from '../Images/img14.jpg'
function CartCard({name,price,img,btnf}) {
  return (
    <>
    <div className=" ">
          <div className="flex lg:w-[80%]">
          <div className=" max-w-[80px] h-[110px] lg:max-w-[200px]  w-full rounded-lg lg:rounded-xl lg:h-[250px] bg-slate-500">
            <img src={img} alt="" />
          </div>
          <div className=" flex flex-col w-full pl-6">
            <div className=" flex fixelMedium text-c2 lg:w-[100%] justify-between">
              <p className=" text-xl ">{name}</p>
              <button className="text-c5" onClick={btnf}>
                <X size={32}/>
              </button>
            </div>
            <p className="text-sm fixelMedium text-text1 py-3">Item Category name</p>

            <div className=" flex md:justify-between gap-5 md:gap-0 justify-center flex-wrap lg:w-[100%]">

          <div className=" flex gap-7 border-2 rounded-full px-3 py-1 ">

              <button><Minus/></button>
              <span className=" fixelMedium">0</span>
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