import React, { useEffect, useState } from "react";
import { MainButton } from "../Components/AllExports";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { RemoveCartItem,TotalPrice } from "../Redux/Features/MainSlice.jsx";
function Cart() {
  const selector = useSelector((state) => state.click);
  const dispatch = useDispatch();

  function remove(id) {
    dispatch(RemoveCartItem(id));
    console.log("okokdelit");
  }
  
  const [itemsLanth, SetitemsLanth] = useState(Number);
  const [total, SetTotal] = useState(Number);
  
  
  useEffect(()=>{
    
    // total caunt
      ( ()=>{ SetitemsLanth(selector.length)
      console.log(itemsLanth)
     })();

      ( ()=>{ dispatch(TotalPrice());
      // console.log(TotalPrice)
     })();
    //   ( ()=>{ SetTotal(TotalPrice())
    //  })();
    
    // dispatch(MainSlice.actions.TotalPrice());
    //   console.log(TotalPrice)
   


 },[itemsLanth,remove])
  
  return (
    <div className=" w-full px-11 max-w-[1700px] mx-auto">
      <h2 className="text-3xl fixelMedium">Basket</h2>
      <div className=" flex  flex-col  lg:flex-row py-10">
        {/* cart Basket items */}
        <div className="  w-full lg:w-[70%]  lg:px-5 py-5 lg:py-8">
          {selector.map((i) =>(
            <div key={i.id} className="">
              <CartCard
                img={i.img}
                name={i.name}
                price={i.price}
                btnf={()=>remove(i.id)}
              />
            </div>
          ))}
        </div>

        {/* Cart Together*/}
        <div className="lg:w-[35%] border-2 rounded-2xl px-5 py-7">
          <p className=" text-2xl fixelBold text-c2 mb-6">Together</p>
          <div className=" flex justify-between py-1.5">
            <span>{itemsLanth} Prodect in the cart</span>
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
