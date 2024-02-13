import { useState } from "react";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function ArrowBtn({ addClass }) {
  const [hovers, SetHover] = useState(false);
  return (
    <button
      onMouseEnter={() => SetHover(true)}
      onMouseLeave={() => SetHover(false)}
      className={` text-c2 bg-c1 rounded-full p-2 ${addClass}`}
    >
      {/* <div
          className={`   rounded-full p-[2px] transform ease-linear duration-[250ms] 
          ${ hovers ? 'rotate-45' : 'rotate-0' } `}
        >
          <ArrowUpRight strokeWidth={2} />
        </div> */}
      <ArrowUpRight strokeWidth={2} />
    </button>
  );
}

export default ArrowBtn;
