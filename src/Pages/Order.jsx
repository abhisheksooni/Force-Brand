import React, { useEffect, useState } from 'react'
import { Input, MainButton } from '../Components/AllExports'
import {  useDispatch, useSelector } from 'react-redux'
import { RemoveCartItem } from '../Redux/Features/MainSlice'
function Order() {

  const [itemsLanth, SetitemsLanth] = useState(Number);
  const [total, SetTotal] = useState();
  const selector = useSelector((state) => state.click)
  const dispatch = useDispatch()

const remove = (id)=>{
  dispatch(RemoveCartItem(id))
}

useEffect(()=>{
  (()=>{
    SetitemsLanth(selector.length)
  })()

  let totalPrice = selector.reduce((Pprice, Cprice) => {
    return Pprice + Cprice.price;
  }, 0);

  SetTotal(totalPrice)
},[selector])

  return (
    <>
      <section className='px-3'>
        <h1 className='fixelMedium text-3xl my-4 mb-8 text-center'>Placing an order</h1>
        <section className='  lg:flex justify-center fixelMedium gap-6 '>
          {/* Box-1 */}
          <div className="border-2 rounded-xl h-fit py-7 px-5 mb-8 w-full xl:max-w-[700px]">
            <p className='text-2xl my-2.5  '>Order from</p>
            <Input label={"Your name and surname"} placeholder={"Enter your name "} />
            <Input label={"Email"} placeholder={"Enter your email "} />
            <Input label={"Phone Number"} inputType={"Number"} placeholder={"Enter your Number "} />
            <div className=" flex gap-2">
              <Input label={"City"} placeholder={"City"} />
              <Input label={"Pin Code"} placeholder={"Code"} />
            </div>
            <p className='text-[14px] mx-2 my-2 mt-4'>Payment method</p>
            <ul className='mx-3'>
              <li>Full 100% online payment</li>
              <li>Cash on delivery</li>
            </ul>
            <Input label={"Promo code"}

            />
          </div>
          {/* Box-2 */}
          <div className="border-2 rounded-xl h-fit py-7 px-5 lg:max-w-[650px] w-full mb-8">
            <p className='text-2xl my-2.5  '>Products in the basket</p>
            {/* Products list */}
            <div className="">
              {
                selector.map((i)=>(
                  <div key={i.id} className="">
                  <div className='flex'>
                    <div className="bg-red max-w-[70px] min-w-[40px] max-h-[100px] mr-4">
                      <img src={i.thumbnail} className=' rounded-xl' alt="" />
                    </div>
                    <div className=" w-full ">
                      <div className="flex justify-between pb-2 pt-1 gap-3 text-[14px] md:text-base">
                        <p className=''>{i.title}</p>
                        <button onClick={()=>remove(i.id)}> X </button>
                      </div>
                      <p className='text-[17px] md:text-base'>{"Rs." + i.price}</p>
                    </div>
                  </div>
                  <div className="h-[2px] my-2 bg-text1 w-[95%] mx-auto"></div>
                </div>
                ))
              }
            </div>
           

            {/* price  */}
            <div className="">
              <p className=' text-xl my-2.5 mx-2'>Order amount</p>
              <div className=" flex justify-between">
                <p>{itemsLanth} Products in the cart</p>
                <p>Price {total}</p>
              </div>
              <div className="h-[2px] my-2 bg-text1 w-full"></div>
              <div className=" flex justify-between">
                <p>To be paid</p>
                <p>Total Price {total}</p>
              </div>

              {/* Button */}
              <MainButton
                to={"/order"}
                text={"Confirm order"}
                addCss={"my-4 bg-c5 text-c1 hover:bg-text1 hover:bg-c2"}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Order