import React, { useState } from "react";
import { ShoppingCart, AlignJustify, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CartNav } from "../AllExports";
import {useSelector, useDispatch} from 'react-redux'


function Nav() {
  const selector = useSelector((state)=> state.click.onClick)
  const dispatch = useDispatch()
  const [open, SetOpen] = useState(false);
  const [cartopen, SetCartOpen] = useState(false);
  console.log(cartopen);

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
            <button >
              <ShoppingCart />
            </button>
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
