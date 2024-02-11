import React from 'react'
import { Outlet} from 'react-router-dom' 
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'

function Root() {
  return (
    // lg:px-12
    <div className='bg-color1 max-w-[1800px] mx-auto '>

        <Nav/>
        <Outlet/>
    <Footer/>
    </div>
  )
}

export default Root