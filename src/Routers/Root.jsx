import React from 'react'
import { Outlet} from 'react-router-dom' 
import Nav from '../Components/Nav/Nav'

function Root() {
  return (
    // lg:px-12
    <div className='bg-color1 max-w-[1800px] mx-auto '>

        <Nav/>
        <Outlet/>

    </div>
  )
}

export default Root