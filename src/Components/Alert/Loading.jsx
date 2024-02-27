import React from 'react'
import '../../index.css'
function Loading() {
  return (
    <div className={`  h-[100vh] flex items-center justify-center`}>
        <div className="max-w-[280px] rounded-full w-full h-[7px] bg-c1">
            <div className=" lodbox  bg-c5 rounded-full "></div>
        </div>
    </div>
  )
}

export default Loading