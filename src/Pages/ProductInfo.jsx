import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { AddCartItem } from "../Redux/Features/MainSlice";
import ReactStars from "react-stars";
import { X, Plus, Minus, BaggageClaim, Heart } from "lucide-react";
import {

    ItemCard,
    Button,

  } from "../Components/AllExports";
import { data } from '../Data/data'
function ProductInfo() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const singalData = data.find(i => i.id === id)
    console.log(singalData);

    function AddCart() {
        dispatch(AddCartItem(singalData))
        console.log("add Click");
    }

useEffect(()=>{

 window.scroll(0,0)
},[])
    return (
        <>
        <section className='max-w-[1800px]'>

       
            <div className=' flex justify-center w-full  p-5  flex-col lg:flex-row sm:gap-5'>
                {/* Images Showing */}
                <div className="my-5 lg:max-w-[25rem] mx-auto lg:mx-0">                   
                    <img src={singalData.thumbnail} className=' lg:max-h-[500px] rounded-xl' alt="" />
                    <div className="flex mx-auto overflow-auto no-scrollbar">
                        {                           
                          singalData.images.map((i)=>(
                                <img key={Math.random()} src={i} className=' w-[80px]  rounded-xl m-1.5' alt="" />
                            
                            ))
                        }
                    </div>
                </div>
                {/* Product Details max-w-[800px] w-full*/}
                <div className="flex flex-col w-full my-5 px-2 max-h-[500px] max-w-[600px]">
                    <div className=" flex justify-between  w-full">
                    <p className='text-3xl fixelMedium py-1.5 '>{singalData.title}</p>
                    <button className='  flex items-center justify-center p-2 hover:text-c4 text-text1  '><Heart /></button>                  
                    </div>
                    <div className="flex items-center gap-2">
                        <p className='text-sm'>{singalData.rating}</p>
                    <ReactStars value={singalData.rating} count={5} size={24} color2={"#ffd700"} />
                    </div>
                    <p className=' py-1.5 text-xl fixelMedium'>{"Rs. " + singalData.price}</p> 
                    <div className=" flex gap-2 my-3">
                    {
                        singalData.size.flatMap((i)=>(
                          <div className=" border border-text1 rounded-sm cursor-pointer px-1.5">
                            <p>{i}</p>
                          </div>
                        ))
                    } 
                        </div>
                        {/* <p className='mb-2 mt-5'>Number</p>
                    <div className=" flex  max-w-[130px] justify-center w-full gap-7 border-2 rounded-full px-3 py-1 mb-5">
                        <button><Minus /></button>
                        <span className=" fixelMedium">0</span>
                        <button><Plus /></button>
                    </div> */}

                        {/* Add to cart and Like btn */}
                    <div className=" flex gap-4 items-center max-w-[450px] mt-auto w-full lg:mb-5">

                        <button onClick={AddCart} className="rounded-full w-[160px] p-1.5  bg-c2 hover:bg-c5 flex items-center">
                            <div className=" bg-c1 pl-0.5 p-1 flex justify-center items-center rounded-full h-[35px] w-[35px]">
                                <BaggageClaim />
                            </div>
                            <p className='text-c1 pl-2.5'>Add to cart</p>
                        </button>

                        <button className='rounded-full w-[160px] h-[47px]   bg-c2 hover:bg-c5 flex items-center text-c1 justify-center'> <p className='text-c1  '>Buy</p></button>
                        
                    </div>

                </div>
            </div>
             {/*Sales section  */}
          <div className=" mx-0 lg:mx-auto my-5 max-w-[1300px]">
            <div className=" flex justify-between py-9">
              <span className="fixelMedium text-3xl font-semibold">
                Top Sale
              </span>
              <Button toLink={"catalogue"} />
            </div>
            {/* New Items */}
            <div className="flex  xl:justify-center gap-5 overflow-x-scroll no-scrollbar">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
            </section>
        </>
    )
}

export default ProductInfo