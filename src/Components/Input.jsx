import React from 'react'

function Input({label,inputType,placeholder}) {
  return (
    <div className="mt-3">
        <label className=' text-sm mx-2 fixelMedium'
         htmlFor="">{label}</label>
        <br />
        <input
        className='border-2 rounded-xl outline-none px-2 my-1 py-1.5 w-full '
         type={inputType?inputType: "text"} 
         placeholder={placeholder}
        
        />
    </div>
  )
}

export default Input