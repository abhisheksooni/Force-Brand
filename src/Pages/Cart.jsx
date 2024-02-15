import React from "react";
import { X ,Plus ,Minus } from "lucide-react";
import { MainButton } from "../Components/AllExports";
function Cart() {
  return (
    <div className=" w-full px-11 max-w-[1700px] mx-auto">
      <h2 className="text-3xl fixelMedium">Basket</h2>
      <div className=" flex  flex-col  lg:flex-row py-10">
        {/* cart Basket items */}
        <div className="  w-full lg:w-[70%]  lg:px-5 py-5 lg:py-8">
          <div className="flex lg:w-[80%]">
          <div className=" max-w-[80px] h-[110px] lg:max-w-[200px]  w-full rounded-lg lg:rounded-xl lg:h-[250px] bg-slate-500">
            <img src="" alt="" />
          </div>
          <div className=" flex flex-col w-full pl-6">
            <div className=" flex fixelMedium text-c2 lg:w-[100%] justify-between">
              <p className=" text-xl ">Item Name</p>
              <button className="text-c5">
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
              <p className="fixelMedium text-xl">Price</p>
            </div>
          </div>
          </div>
          <div className="h-[1px] bg-text1 rounded-full my-5"></div>
        </div>
        {/* Cart Together*/}
        <div className="lg:w-[35%] border-2 rounded-2xl px-5 py-7">
          <p className=" text-2xl fixelBold text-c2 mb-6">Together</p>
          <div className=" flex justify-between py-1.5">
            <span>3 Prodect in the cart</span>
            <span className="fixelBold">$5600</span>
          </div>

          <div className=" flex justify-between py-1.5">
            <span>Discount</span>
            <span className="fixelBold">0</span>
          </div>

          <div className=" flex justify-between py-1.5">
            <span>Shiping cost</span>
            <span className="fixelBold">0</span>
          </div>

          <div className="h-[2px] bg-text1 rounded-full"></div>

          <div className=" flex justify-between py-3 fixelBold">
            <span>Shiping cost</span>
            <span className="">0</span>
          </div>
          {/* Buttons */}
          <div className=" px-12 *:">
            <MainButton
              text={"Continue"}
              addCss={"my-4 bg-c5 text-c1 hover:bg-text1  hover:bg-c2"}
            />
            <MainButton
              text={"Back to catalogue"}
              addCss={" hover:bg-c2 hover:text-c1 text-c2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
