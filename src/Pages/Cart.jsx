import React from "react";
import { X } from "lucide-react";
import { MainButton } from "../Components/AllExports";
function Cart() {
  return (
    <div className=" w-full max-w-[1800px]">
      <h2 className="text-3xl">Basket</h2>
      <div className=" flex  flex-col lg:flex-row">
        {/* cart Basket */}
        <div className=" flex w-full lg:w-[70%]  px-5">
          <div className=" max-w-[80px] h-[110px] lg:max-w-[200px]  w-full rounded-lg lg:rounded-xl lg:h-[250px] bg-slate-500">
            <img src="" alt="" />
          </div>
          <div className="">
            <div className=" flex">
              <p className=" text-xl">Item Name</p>
              <button>
                <X />
              </button>
            </div>
            <p>Item Category name</p>

            <div className=" flex justify-between">
              <p>Add function ++ -- </p>
              <p>Price</p>
            </div>
          </div>
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
