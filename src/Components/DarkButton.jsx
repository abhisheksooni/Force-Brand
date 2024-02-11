import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";



function DarkButton({addCalss,addCalss2}) {
  const [hovers, SetHover] = useState(false);

  return (
 
    <>
      <button
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
        className={`flex pl-3 fixelMedium gap-7 p-1 border border-c1 bg-transparent items-center rounded-full hover:text-c5 hover:bg-c1 ${addCalss}`}
      >
        <p>{"More"}</p>
        <div
          className={`   rounded-full p-[2px] bg-c1 text-c5  transform ease-linear ${addCalss2} duration-[250ms]
           ${ hovers ? 'rotate-45' : 'rotate-0' } `}
        >
          <ArrowUpRight />
        </div>
      </button>
    </>
  );
}

export default DarkButton;
