import React, { useEffect, useState } from "react";
import { MainButton } from "../Components/AllExports";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import MainSlice, { RemoveCartItem } from "../Redux/Features/MainSlice.jsx";
import { Link, NavLink } from "react-router-dom";
function Cart() {
  const selector = useSelector((state) => state.click);
  const dispatch = useDispatch();

  const [itemsLanth, SetitemsLanth] = useState(Number);
  const [total, SetTotal] = useState(0);
  const [discount, SetDiscunt] = useState(0);
  const [totalCost, SetTotalCost] = useState(0);
  const [shipingCost, SetShipingCost] = useState();

  function remove(id) {
    dispatch(RemoveCartItem(id));

  }

  const totalfn = () => {
    let a = dispatch(MainSlice.actions.TotalPrice);
    // SetTotal(a);
  };

  useEffect(() => {
    // total Items
    (() => {
      SetitemsLanth(selector.length);
      // console.log(itemsLanth);
    })();

    // TotalCount
    (() => {
      const pre = ((discount / 100) * total)
      const pre2 = (total - pre)
      SetTotalCost(pre2.toFixed(2))
      // const t = pre2 + shipingCost
      // SetTotalCost((total - pre).toFixed(2)) 
    })()

    // discount
    let d = selector.reduce((price, discount) => {
      return (discount.discountPercentage)
    }, 0)
    // shiping cost
    //  let shicosrt = selector.reduce((price,cost)=>{
    //      return( cost.shipingcost)

    //    })
    //  SetShipingCost(shicosrt)

    SetDiscunt(d)

    console.log(shipingCost);
    // SetTotalCost( total- discount )

    // Total Price
    let totalPrice = selector.reduce((Pprice, Cprice) => {
      return Pprice + Cprice.price;
    }, 0);

    SetTotal(totalPrice);
  }, [itemsLanth, remove, shipingCost]);

  window.scroll(0, 0)

  console.log(discount);

  return (
    <div className=" w-full px-11 max-w-[1700px] mx-auto">
      {itemsLanth < 1 ? (
        <div className=" flex flex-col justify-center items-center h-[100vh]">
          <img
            src="https://cdn.dribbble.com/users/461802/screenshots/4421003/media/e5ec819f7ae4ac0b46aa96643193d5e8.gif"
            className=" w-[25vw] "
            alt=""
          />
          <p className=" text-3xl font-semibold text-text1">
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          {" "}
          <h2 className="text-3xl lg:pl-[4.5rem] fixelMedium">Basket</h2>
          <div className=" flex  flex-col  lg:flex-row py-4">
            {/* cart Basket items */}
            <div className="  w-full lg:w-[70%] no-scrollbar overflow-y-scroll md:h-[100vh]  lg:px-5 py-5 lg:py-3">
              {selector.map((i) => (

                <div key={i.id}>
                  <CartCard
                    img={i.thumbnail}
                    name={i.title}
                    gender={i.gender}
                    category={i.category}
                    price={i.price}
                    btnf={() => remove(i.id)}
                    quantity={"1"}
                  />
                </div>

              ))}
            </div>
            {/* Cart Together    */}
            <div className="lg:w-[35%] lg:h-[30rem] border-2 rounded-2xl px-5 py-7">
              <p className=" text-2xl fixelBold text-c2 mb-6">Together</p>

             
                  <div className="">
                    <div className=" flex justify-between py-1.5">
                      <span>{itemsLanth} Prodect in the cart</span>
                      <span className="fixelBold">Rs. {total}</span>
                    </div>

                    <div className=" flex justify-between py-1.5">
                      <span>Discount</span>
                      <span className="fixelBold">- {discount}</span>
                    </div>

                    <div className=" flex justify-between py-1.5">
                      <span>Shiping cost</span>
                      <span className="fixelBold">+ {shipingCost ? shipingCost : "00"}</span>
                    </div>

                    <div className="h-[2px] bg-text1 rounded-full"></div>

                    <div className=" flex justify-between py-3 fixelBold">
                      <span>Total cost</span>
                      <span className="">Rs. {totalCost}</span>
                    </div>
                  </div>

              


              {/* Buttons */}
              <div className=" px-12 *:">

                <MainButton
                  to={"/order"}
                  text={"Continue"}
                  addCss={"my-4 bg-c5 text-c1 hover:bg-text1  hover:bg-c2"}
                />


                <MainButton to={"/catalogue"}
                  text={"Back to catalogue"}
                  addCss={" hover:bg-c2 hover:text-c1 text-c2"}
                />

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
