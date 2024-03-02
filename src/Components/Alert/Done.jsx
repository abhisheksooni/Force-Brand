import React from 'react'
import { Check, X } from 'lucide-react';
import '../../index.css'

function Done() {
    return (
        <>
           
            <div className="  done flex items-center justify-center gap-1 h-0">
                <div className=" done ease-in-out bg-c5 bg-opacity-50  w-[50%]  md:w-full max-w-[300px] rounded-full flex items-center flex-col  backdrop-blur-sm ">
                    <div className=' font-semibold  py-2  text-c1 flex items-center justify-center gap-2'> 
                    <div className="bg-[#71C923] rounded-full p-[3px]">
                        <Check color='#fff' strokeWidth={3} />
                        </div> 
                    <span>Done</span>
                    </div>
                    {/* <div className="donetimer max-w-[250px] items-start"></div> */}
                </div>
                {/* <button className='w-[50px] h-[50px] rounded-full backdrop-blur-sm border-2 border-text1  flex items-center justify-center'>
                    <X color='#898D9E' />
                </button> */}
            </div>
        </>

    )
}

export default Done