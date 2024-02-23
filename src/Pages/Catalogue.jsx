import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard'
import { data } from '../Data/data'
import { useDispatch} from 'react-redux'
import { AddCartItem } from "../Redux/Features/MainSlice";
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
function Catalogue({sale}) {

const dispatch = useDispatch()
function addItem(i){
dispatch(AddCartItem(i))
}

const [showLoading,SetLoading] = useState(true)
const [Data,SetDAta] = useState(null)

useEffect(()=>{
const d = async ()=>{

    try{
      const rep = await data  
      return SetDAta(rep)
    } catch{
      console.error(error);
    } finally{
      SetLoading(false)
    }
}
d()

  window.scroll(0,0)

  // const timer = setTimeout(()=>SetLoading(true),2000)
  // return ()=> clearTimeout(timer)
},[Data])

  return (
    <>
    {/* <div className=" h-[100vh]">
    {
      showLoading && (   )
    }
   </div> */}
   {
    showLoading?(<div className=' h-[100vh]'>
      <p className='text-9xl'>Loding........</p>
    </div>):(
      <section className=' flex flex-wrap  justify-center mx-auto max-w-[1200px] gap-6'>
         
         {
          
            Data.map((i)=>(
              <div  key={i.id} >
                <Link to={`/prodect/${i.id}`}>
          <ItemCard img={i.thumbnail} name={i.title} />
                </Link>
                <div className=" flex  items-center px-2 justify-between ">
                  <p className=' text-c5'> <span className='text-c4'>{i.sale? i.sale: ""}</span> ${sale?<del>800</del>:i.price}</p>
                    <button onClick={()=>addItem(i)} className='  rounded-full p-2 bg-c2 text-c1'><ShoppingCart size={20}/></button>
                  </div>
              </div>
            ))        
         }
             </section>)
   }
  </>
  )
}

export default Catalogue