import React, { useEffect, useState } from "react";
import { MainButton } from "../Components/AllExports";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import MainSlice, { RemoveCartItem , } from "../Redux/Features/MainSlice.jsx";
function Cart() {
  const selector = useSelector((state) => state.click);
  const dispatch = useDispatch();

  const [itemsLanth, SetitemsLanth] = useState(Number);
  const [total, SetTotal] = useState();

  function remove(id) {
    dispatch(RemoveCartItem(id));
    console.log("okokdelit");
  }

  const totalfn = () => {
    let a = dispatch(MainSlice.actions.TotalPrice);
    SetTotal(a);
  };

  

  useEffect(() => {
    // total Items
    (() => {
      SetitemsLanth(selector.length);
      // console.log(itemsLanth);
    })();

    // Total Price 
    let t = selector.reduce((Pprice, Cprice) => {
      return Pprice + Cprice.price;
    }, 0);
   
    SetTotal(t);

    
  }, [itemsLanth, remove]);

  return (
    <div className=" w-full px-11 max-w-[1700px] mx-auto">
      
      {
         itemsLanth < 1 ? <div className=" flex flex-col justify-center items-center h-[100vh]">      
         <img src="https://cdn.dribbble.com/users/461802/screenshots/4421003/media/e5ec819f7ae4ac0b46aa96643193d5e8.gif" className=" w-[25vw] " alt="" />
         <p className=" text-3xl font-semibold text-text1">Your cart is empty</p>
   </div>:
  <>  <h2 className="text-3xl fixelMedium">Basket</h2>
   <div className=" flex  flex-col  lg:flex-row py-10">
         {/* cart Basket items */}
         <div className="  w-full lg:w-[70%]  lg:px-5 py-5 lg:py-8">
           {selector.map((i) => (
             <div key={i.id} className="">
               <CartCard
                 img={i.img}
                 name={i.name}
                 price={i.price}
                 btnf={() => remove(i.id)}
               />
             </div>
           ))}
         </div>
         {/* Cart Together    */}
         <div className="lg:w-[35%] border-2 rounded-2xl px-5 py-7">
           <p className=" text-2xl fixelBold text-c2 mb-6">Together</p>
           <div className=" flex justify-between py-1.5">
             <span>{itemsLanth} Prodect in the cart</span>
             <span className="fixelBold">${total}</span>
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
             <span className="">{total}</span>
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
       </>
      }
      
      
    </div>
  );
}

export default Cart;
