import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard'
import { data } from '../Data/data'
import { useDispatch} from 'react-redux'
import { AddCartItem } from "../Redux/Features/MainSlice";
function Catalogue() {

const dispatch = useDispatch()
function addItem(i){
dispatch(AddCartItem(i))
}
  return (
    <section className=' flex flex-wrap  justify-center mx-auto max-w-[1200px] gap-6'>
      
{
  data.map((i)=>(
    <div  key={i.id}  >
<ItemCard img={i.img} name={i.name} price={i.price} btnf={()=>addItem(i)}/>

    </div>
  ))
}
 
      {/* <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/> */}

    </section>
  )
}

export default Catalogue