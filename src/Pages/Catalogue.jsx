import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard'
import { Loading } from '../Components/AllExports'
import { data } from '../Data/data'
import { useDispatch} from 'react-redux'
import { AddCartItem } from "../Redux/Features/MainSlice";
import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { isAction } from '@reduxjs/toolkit';
function Catalogue({sale,}) {

const dispatch = useDispatch()
function addItem(i){
dispatch(AddCartItem(i))
}

const [showLoading,SetLoading] = useState(true)
const [Data,SetDAta] = useState()
const [filerdata,Setfilterdata] = useState(data)
const [stylef,Setstylef] = useState(false)
const [stylem,Setstylem] = useState(false)
const [styleall,Setstyleall] = useState(true)


useEffect(()=>{
const d = async ()=>{
  SetLoading(true)
    try{
      const rep = await data    
       const ss = SetDAta(rep)
      SetLoading(false)   
      return ss
      }
     catch{
      console.error(error);
    } 
}
d()
  window.scroll(0,0)




},[Data,data,filerdata,styleall,stylem,stylef])

function female (){
Setstylef(true)
Setstylem(false)
Setstyleall(false)
  const female =   Data.filter((female)=> female.gender == "female")
  Setfilterdata(female)
    }
function male (){
  Setstylem(true)
  Setstylef(false)
 Setstyleall(false)

  const male = Data.filter((mail)=>mail.gender == "male")
  Setfilterdata(male)
    }
function all (){
  Setstyleall(true)
  Setstylem(false)
  Setstylef(false)

  Setfilterdata(Data)
    }

const show = (
  data?(
    <>
   <div className=" flex justify-evenly flex-wrap gap-5 my-5">
   <p className=' text-3xl'>Catalogue</p>
     <div className=" flex border-2 border-c5 p-0.5 rounded-full">
       <NavLink className={`${stylem?"bg-c3 text-c1":" bg-white text-c5"} hover:bg-c3 hover:text-c1 py-2 px-5 rounded-full`} onClick={male}>
   Male
       </NavLink>
       <NavLink className={` ${stylef?"bg-c3 text-c1":" bg-white text-c5"} hover:bg-c3 hover:text-c1 py-2 px-5 rounded-full`} onClick={female}>
   Female
       </NavLink>
       <NavLink className={` ${styleall?"bg-c3 text-c1":" bg-white text-c5"} hover:bg-c3 hover:text-c1 py-2 px-5 rounded-full`} onClick={all}>
   All
       </NavLink>

     </div>
   </div>
 <section className=' flex mx-auto max-w-[1200px] my-7'>

    <div className="flex flex-wrap justify-center mx-auto gap-6">

   { filerdata.map((i)=>(
         <div  key={i.id} >
                   <Link to={`/prodect/${i.id}`}>
             <ItemCard img={i.thumbnail} name={i.title} gender={i.gender} />
                   </Link>
                   <div className=" flex  items-center px-2 justify-between ">
                     <p className=' text-c5'> <span className='text-c4'>{i.sale? i.sale: ""}</span> Rs. {sale?<del>800</del>:i.price}</p>
                       <button onClick={()=>addItem(i)} className='  rounded-full p-2 bg-c2 text-c1'><ShoppingCart size={20}/></button>
                     </div>
                 </div>
       ))}
     </div>
        </section> </>
) :(<div className=' h-[100vh]'>
<p className='text-9xl'>Loding........</p>
</div>)
)

    
      
       


  return (
    <>
 { showLoading  ? <Loading/> : show}
  </>
  )
}

export default Catalogue