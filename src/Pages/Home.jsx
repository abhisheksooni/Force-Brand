import React from 'react'

// import { ArrowUpRight } from 'lucide-react';
import {ArrowBtn , ItemCard, Button} from '../Components/AllExports'

function Home() {
  return (
    <>
    {/* Home section-1 */}
    <section className=' '>
       <div className="flex gap-3 flex-col md:flex-row justify-center h-full   lg:h-[60vh]">
         {/* Boxs-1 */}
    <div className=" hidden md:inline-block ">
    <div className="  relative bg-red-500 w-[210px] h-[39%] rounded-2xl m-0 lg:m-0 md:mt-1.5">
    <ArrowBtn addClass={'absolute right-3 top-3'}/>
    </div>

    <div className=" relative  bg-red-500 w-[210px] h-[39%] rounded-2xl mt-3">
    <ArrowBtn addClass={'absolute right-3 top-3'}/>
    </div>

    <div className=" relative  bg-c2 w-[210px] h-[17.4%] rounded-2xl mt-3">
    <ArrowBtn addClass={'absolute right-3 top-3'}/>
    <span className='text-c1 text-2xl relative left-5 top-[45%]'>Sale</span>
    </div>
    
    </div>
    {/* Box-2 */}
    <div className="w-[500px] rounded-2xl mx-3 p-3 bg-red-400 hidden lg:inline-block">
        <span className=' fixelMedium text-c2'>New <br /> Collection</span>
    </div>

    {/* Box-3 */}
    <div className=" w-full lg:max-w-[350px]">
      
    <div className="flex items-center justify-between bg-c2 pl-4 p-2 text-c1 rounded-full mb-3">
            <p className='text-xl'>Catalog</p>
            <ArrowBtn />
        </div>
        
        {/* Scroll items lg:h-[85.5%]*/}
        <div className="p-4 bg-red-500 rounded-2xl h-[60vh] lg:h-[53.5vh] ">
            img Scroll
        </div>
    </div>

    {/* box 4 only <768 wigth */}
    <div className=' flex md:hidden w-full gap-3 my-3'>

    <div className=" relative bg-c3 text-c1 w-full rounded-2xl ">
    <ArrowBtn addClass={'absolute right-3 top-3'}/>
      <p className='pl-5 py-7 '>Men's <br /> Clothes</p>
    </div>
    <div className=" relative bg-c4 text-c1 w-full rounded-2xl">
    <ArrowBtn addClass={'absolute right-3 top-3'}/>
      <p className='pl-5 py-7 '>women's <br /> Clothes</p>
    </div>
    </div>
       </div>
    </section>
    {/* Home section-2 */}
    <section className=''>   
<div className="">
  <div className=" flex justify-between py-9">
  <span className='fixelMedium text-3xl font-semibold'>Top Sale</span>
<Button/>
  </div>

 {/* New Items */}
  <div className="flex gap-4 overflow-x-scroll">
<ItemCard/>
<ItemCard/>
<ItemCard/>
  </div>
</div>
    </section>
    </>
  )
}

export default Home