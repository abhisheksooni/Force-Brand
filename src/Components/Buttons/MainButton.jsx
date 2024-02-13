import React from "react";
import { NavLink } from "react-router-dom";

function MainButton({
  bg,
  text,
  to,
  addCss,
  hoverbg,
  hovertext,
  hoverbordertext,
}) {
    

    // bg-${bg ? bg : ""} 
    //     hover:bg-${ hoverbg ? hoverbg : "c5"} 
    //     hover:text-${hovertext ? hovertext : "c1"}
    //     hover:border-${hoverbordertext ? hoverbordertext : ""}
  return (
    <NavLink to={to ? to : ""} className={`w-full max-w-[300px] `}>
      <button
        className={`
        uppercase  border-2 border-c5 rounded-full py-2 text-center duration-300 ease-in-out w-full 
        ${addCss} 
        `}
      >
        <p>{text ? text : "ADD Name"} </p>
      </button>
    </NavLink>
  );
}

export default MainButton;
