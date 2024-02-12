import React from "react";
import { ShoppingCart, AlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between px-[5vw] flex-row-reverse lg:flex-row lg:px-[9vw] py-7">
      {/* Logo */}
      <NavLink to={"/"} className=" flex items-baseline gap-1 cursor-pointe">
        <span className="text-3xl fixelBold">FORCE</span>
        <span className="fixelMedium">Brand</span>
      </NavLink>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <button>
          <AlignJustify />
        </button>
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

        <div className=" flex">
          <button>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
