import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { X, Plus, Minus, BaggageClaim, Heart } from "lucide-react";
import { data } from '../Data/data'
function ProductInfo() {
    const { id } = useParams()
    const singalData = data.find(i => i.id === id)

    console.log(singalData);
    return (
        <>
            <div className=' flex justify-center p-5 mx-auto max-w-[1200px]  flex-wrap sm:gap-5'>
                <div className="my-5 ">
                    <img src={singalData.thumbnail} className=' max-w-[25rem] w-full  rounded-xl' alt="" />
                    <div className="max-w-[300px] flex flex-wrap">
                        {                           
                            singalData.images.map((i)=>(
                                <img src={i} className='w-[140px] rounded-xl m-1' alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center  justify-center md:justify-start md:items-start">
                    <h1 className='text-2xl fixelMedium py-3'>{singalData.title}</h1>
                    <p className=' py-2 '>{singalData.price}</p>

                    <div className=" flex mx-auto md:mx-0 max-w-[130px] justify-center w-full gap-7 border-2 rounded-full px-3 py-1 my-5">
                        <button><Minus /></button>
                        <span className=" fixelMedium">0</span>
                        <button><Plus /></button>
                    </div>

                    <div className=" flex gap-4 items-center max-w-[450px] w-full">

                        <button className="rounded-full w-[160px] p-1.5  bg-c2 hover:bg-c5 flex items-center">
                            <div className=" bg-c1 pl-0.5 p-1 flex justify-center items-center rounded-full h-[35px] w-[35px]">
                                <BaggageClaim />
                            </div>
                            <p className='text-c1 pl-2.5'>Add to cart</p>
                        </button>
                        <button className=' border-2 rounded-full   flex items-center justify-center p-2 border-text1 text-text1  hover:bg-c5 hover:text-c1'><Heart /></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductInfo