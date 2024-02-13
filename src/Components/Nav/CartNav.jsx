import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { ClickBtn } from "../../Redux/Features/MainSlice.jsx";
function CartNav({btn}) {

    const [open, SetOpen] = useState(false);

    console.log(btn);
  return (
    <>
    {/* <div
        onClick={() => SetOpen(false)}
        className={`bg-c5 relative  text-c1 z-50 h-[100vh] w-full min-w-[320px] max-w-[784px] py-6 top-0 ${
          open ? "inline-block" : "hidden"
        } `}
      >
        <button
          onClick={() => SetOpen(false)}
          className=" absolute right-8 border-2 rounded-full p-2"
        >
          
        </button>
        <div className=" flex flex-col pt-12 *:my-1 items-center">
          <NavLink to={"/"} className={` text-c1 uppercase`}>
            HOME
          </NavLink>
          <NavLink to={"catalogue"} className={` text-c1 uppercase`}>
            catalogue
          </NavLink>
        </div>
      </div> */}
      <div className="">
        etert
      </div>
    </>
  )
}

export default CartNav