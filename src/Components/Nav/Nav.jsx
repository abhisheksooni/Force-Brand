import React, { useEffect, useState } from "react";
import { ShoppingCart, AlignJustify, X ,Plus} from "lucide-react";
import { NavLink } from "react-router-dom";
import { CartNav } from "../AllExports";
import {useSelector, useDispatch} from 'react-redux'



function Nav() {
  const selector = useSelector((state)=> state.click)
  const dispatch = useDispatch()
  const [open, SetOpen] = useState(false);
  const [TotalItems, SetTotalItems] = useState(Number);
  

  useEffect(()=>{  
    (()=>SetTotalItems(selector.length))()   
    console.log(TotalItems);
  },[selector,TotalItems])

  return (
    <div className="">
      <div
        className={` ${
          open ? "hidden" : "inline-block"
        } flex justify-between px-[5vw] flex-row-reverse lg:flex-row lg:px-[9vw] py-7 `}
      >
        {/* Logo */}
        <NavLink to={"/"} className=" flex items-baseline gap-1 cursor-pointe">
          <span className="text-3xl fixelBold">FORCE</span>
          <span className="fixelMedium">Brand</span>
        </NavLink>

        {/* Mobile menu */}
        <div className="lg:hidden ">
          <button onClick={() => SetOpen(true)}>
            <AlignJustify />
          </button>
          <NavLink to={"cart"}>
          <div className={`  ${TotalItems < 1 ?"hidden":"inline-block"} absolute`}>
            <div className={` relative -right-4 -top-2 max-w-[18px] min-w-[13px] h-[13px] z-50  rounded-full  text-[8px] font-thin w-full flex items-center justify-center bg-c5 text-c1`}>
              <span className="m-auto ">{TotalItems}</span>
            </div>
              </ div>
          <button className="pl-2">
            <ShoppingCart />
          </button>
          </NavLink>
        </div>

        {/* big nav */}
        <div className=" hidden lg:flex items-center justify-evenly w-full max-w-[320px]">
          <ul className=" flex gap-8 fixelMedium *:cursor-pointer">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-c5" : "text-c2"}`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to={"catalogue"}
              className={({ isActive }) =>
                `${isActive ? "text-c5" : "text-c2"} uppercase`
              }
            >
              catalogue
            </NavLink>
          </ul>

          <div className="flex">
            <NavLink to={"cart"} 
            className={({ isActive }) =>
            `${isActive ? "text-c5" : "text-c2"} uppercase`
          }
            >
              {/* ${CartShow?"hidden":"inline-block"} */}
              <div className={`  ${TotalItems < 1 ?"hidden":"inline-block"} absolute`}>

            <div className={` relative -right-4 -top-2 max-w-[18px] min-w-[13px] h-[13px] z-50  rounded-full  text-[8px] font-thin w-full flex items-center justify-center bg-c5 text-c1`}>
              <span className="m-auto ">{TotalItems}</span>
            </div>
              </ div>
            <button className="" >
              <ShoppingCart />
            </button>
            </NavLink>
            <NavLink to={"add-product"}>
            <Plus/>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        onClick={() => SetOpen(false)}
        className={`bg-c5 relative  text-c1 z-50 h-[100vh] w-full min-w-[320px] max-w-[784px] py-6 top-0 ${
          open ? "inline-block" : "hidden"
        } `}
      >
        <button
          onClick={() => SetOpen(false)}
          className=" absolute right-8 border-2 rounded-full p-2"
        >
          <X size={25} />
        </button>
        <div className=" flex flex-col pt-12 *:my-1 items-center">
          <NavLink to={"/"} className={` text-c1 uppercase`}>
            HOME
          </NavLink>
          <NavLink to={"catalogue"} className={` text-c1 uppercase`}>
            catalogue
          </NavLink>
        </div>
      </div>


      
    </div>
  );
}

export default Nav;
