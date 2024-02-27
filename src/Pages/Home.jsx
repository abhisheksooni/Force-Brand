import React, { useEffect, useState } from "react";
import AccordingMenu from "../Components/AccordingMenu";
import { useSelector, useDispatch } from 'react-redux'
import { Plus, Minus } from "lucide-react";
import { img14, men, women } from "../Images/AllImagesExport";
import { Link, NavLink } from "react-router-dom";
import { data } from "../Data/data";

// 
import images121 from '../Images/Product-Imges/12/12-1.jpg'
import images122 from '../Images/Product-Imges/12/12-2.jpg'
import images123 from '../Images/Product-Imges/12/12-3.jpg'
import images124 from '../Images/Product-Imges/12/12-4.jpg'
import images125 from '../Images/Product-Imges/12/12-5.jpg'

import { ArrowBtn, ItemCard, Button, ReviewCars, DarkButton, According_Menu, } from "../Components/AllExports";

function Home() {

  const [open, Setopne] = useState(false);
  console.log(open);

  let a = data.filter(item => {
    const data1821 = parseInt(item.id);
    return data1821 >= 12 && data1821 <= 18;
  })

  const NewItem = data.filter(item => {
    const id = parseInt(item.id);
    return id >= 15 && id <= 20;

  });

  const sallItem = data.filter(item => {
    const id = parseInt(item.id);
    return id >= 15 && id <= 18;

  });

  const TopItem = data.filter(item => {
    const id = parseInt(item.id);
    return id >= 18 && id <= 21;

  });




  return (
    <>
      <section className="">
        {/* Home section-1 */}
        <section className="px-5 xl:px-0">
          <div className="flex gap-3 flex-col md:flex-row justify-center h-full lg:h-[60vh]">
            {/* Boxs-1 */}
            <div className=" hidden md:inline-block ">
              <NavLink to={"catalogue"} >

                <div className="  relative womenimg  w-[210px] h-[39%] rounded-2xl hover:scale-[.97] cursor-pointer ease-out duration-200 m-0 lg:m-0 md:mt-1.5">
                  <ArrowBtn addClass={"absolute right-3 top-3"} />
                </div >
              </NavLink>

              <NavLink to={"catalogue"} >

                <div className=" relative menimg  w-[210px] h-[39%] rounded-2xl hover:scale-[.97] cursor-pointer ease-out duration-200 mt-3">
                  <ArrowBtn addClass={"absolute right-3 top-3"} />
                </div>
              </NavLink>

              <NavLink to={"catalogue"} >

                <div className=" relative  bg-c2 w-[210px] h-[17.4%] rounded-2xl hover:scale-[.97] cursor-pointer ease-out duration-200 mt-3">
                  <ArrowBtn addClass={"absolute right-3 top-3"} />
                  <span className="text-c1 text-2xl relative left-5 top-[45%]">
                    Sale
                  </span>
                </div>
              </NavLink>
            </div>
            {/* Box-2 */}
            <div className="w-[500px] rounded-2xl mx-3 p-3 mainimg bg-red-400 hidden lg:inline-block">
              <span className=" fixelMedium text-c2">
                New <br /> Collection
              </span>
            </div>

            {/* Box-3 */}
            <div className=" w-full lg:max-w-[350px]">
              <NavLink to={"catalogue"}>
                <div className="flex items-center justify-between bg-c2 pl-4 p-2 text-c1 rounded-full hover:scale-[.97] cursor-pointer ease-out duration-200 mb-3">
                  <p className="text-xl">Catalogue</p>
                  <ArrowBtn />
                </div>
              </NavLink>

              {/* Scroll items lg:h-[85.5%]*/}
              <div className="m-0.5 flex snap-x overflow-x-auto no-scrollbar snap-mandatory *:snap-center *:object-cover gap-3 rounded-2xl *:rounded-2xl hover:scale-[.98] cursor-pointer ease-out duration-200 h-[60vh]  lg:h-[53.5vh] ">

                <img src={images125} className=" snap-always  " alt="" />
                <img src={images124} className=" snap-always " alt="" />
                <img src={images123} className=" snap-always " alt="" />
                <img src={images122} className=" snap-always " alt="" />
                <img src={images121} className=" snap-always " alt="" />

              </div>
            </div>

            {/* box 4 only <768 wigth */}
            <div className=" flex md:hidden w-full gap-3 my-3">
              {/* <NavLink to={"catalogue"}> */}
                <NavLink to={"catalogue"} className=" relative bg-c3 text-c1 w-full rounded-2xl ">
                  <ArrowBtn addClass={"absolute right-3 top-3"} />
                  <p className="pl-5 py-7 ">
                    Men's <br /> Clothes
                  </p>
                </NavLink>
              {/* </NavLink> */}

              

                <NavLink to={"catalogue"} className=" relative bg-c4 text-c1 w-full rounded-2xl">
                  <ArrowBtn addClass={"absolute right-3 top-3"} />
                  <p className="pl-5 py-7 ">
                    women's <br /> Clothes
                  </p>
                </NavLink>
             
            </div>
          </div>
        </section>
        {/* Home section-2 Items cards */}
        <section className=" mx-auto max-w-[1150px] px-5 xl:px-0">
          {/*New Sales section  */}
          <div className="">
            <div className=" flex justify-between py-9">
              <span className="fixelMedium text-[27px] md:text-2xl">
                New Items
              </span>
              <Button toLink={"catalogue"} />
            </div>

            {/* New Items */}
            <div className="flex snap-x  snap-mandatory  *:snap-always *:snap-center xl:justify-center gap-5 overflow-x-scroll no-scrollbar">
              {
                NewItem.map((i) => (
                  <Link to={`/prodect/${i.id}`}>
                    <ItemCard img={i.thumbnail} />
                  </Link>
                ))
              }

            </div>
          </div>
          {/* Top Sales section  */}
          <div className="">
            <div className=" flex justify-between py-9">
              <span className="fixelMedium text-[27px] md:text-2xl">
                Top Sale
              </span>
              <Button toLink={"catalogue"} />
            </div>
            {/* Top Items */}
            <div className="flex snap-x *:snap-always snap-mandatory *:snap-cente xl:justify-center gap-5 overflow-x-scroll no-scrollbar">
              {
                TopItem.map((i) => (
                  <Link to={`/prodect/${i.id}`}>
                    <ItemCard img={i.thumbnail} />
                  </Link>
                ))
              }
            </div>
          </div>

          {/*Sales section  */}
          <div className="">
            <div className=" flex justify-between py-9">
              <span className="fixelMedium text-[27px] md:text-2xl">Sale</span>
              <Button toLink={"catalogue"} />
            </div>

            {/* Items */}
            <div className="flex snap-x *:snap-always *:snap-cente snap-mandatory xl:justify-center gap-5 overflow-x-scroll no-scrollbar">
              {
                sallItem.map((i) => (
                  <Link to={`/prodect/${i.id}`}>
                    <ItemCard img={i.thumbnail} />
                  </Link>
                ))
              }
              {/* <ItemCard sale="$900" />
              <ItemCard sale="$900" />
              <ItemCard sale="$900" />
              <ItemCard sale="$900" /> */}
            </div>
          </div>
        </section>

        {/* Home section-3 Customer reviews */}
        <section className="mx-auto  my-7 text-c1  bg-c5 px-7 pb-10 rounded-2xl">
          <div className=" flex flex-wrap items-center justify-between py-9 gap-5 md:gap-0 lg:px-[10vw]">
            <span className=" text-xl">Customer reviews</span>

            <DarkButton />
          </div>

          {/* reviews */}
          <div className="flex snap-x *:snap-always *:snap-cente snap-mandatory xl:justify-center gap-5 overflow-x-scroll no-scrollbar">
            <ReviewCars />
            <ReviewCars />
            <ReviewCars />
            <ReviewCars />
          </div>
        </section>

        {/* Home section-4 Frequently */}
        <section className=" flex flex-wrap justify-center pb-7">
          <div className=" max-w-[800px] px-11 mb-7">
            <p className="text-3xl fixelMedium py-7">

              Frequently asked questions.
            </p>

            <div className=" max-w-[450px] m-auto my">
              <p className="text-lg text-text1 px-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, at dolore? Repellendus ex voluptates quod reiciendis illo dolorum a praesentium laboriosam aspernatur. Accusantium sequi ducimus, eligendi magni id sapiente voluptas!
              </p>

            </div>
            {/* <AccordingMenu /> */}
          </div>

          {/* Right box  */}
          <div className="max-w-[460px] w-full">
            <img src={img14} alt="" className="rounded-3xl" />
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
