import React from 'react'
import { useState } from 'react';
import{ getDatabase,ref, set } from 'firebase/database'
import { app } from '../Config/conf.js' 

const db = getDatabase(app);


function AddProduct() {
  const [state,setState]= useState()

    const putdata =()=>{
        set(ref(db,'items/name'),{
            id:"asdasd1",
            name:"asdad"
        })
    }

  function handleSubmit(e) {
        // setState({value:e.target.value})
        console.log("submit done");
        e.preventDefault();

    }
   function change(e){
        setState({value:e.target.value})
       console.log(state);
    }

    window.scroll({top:0,behavior:'smooth'})

  return (
    <section className=' h-[100vh]'>
        <form action="" on >
            <label>Prodect Name:
            <br />
            <input type="text" placeholder='Prodect Name'  onChange={(e)=>console.log(e.target.value)} />
            </label>
            <br />
            <label>Prodect image:
            <br />
            <input type="file" placeholder='Prodect Name' onChange={change} />
            </label>
            <br />
            <label>Prodect Cetegrory:
            <br />
            <input type="text" placeholder='Prodect Cetegrory Name' />
            </label>
            <br />
            <label>Price:
            <br />
            <input type="number" placeholder='Price' />
            </label>
            <br />
            <label>More Images
            <br />
            <input type="file" placeholder='Price' />
            </label>
            <br />
<input type="submit" value="Submit" />
        </form>
        
    </section>
  )
}

export default AddProduct