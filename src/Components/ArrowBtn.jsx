import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function ArrowBtn({addClass}) {
  return (
    
    <button className={` text-c2 bg-c1 rounded-full p-2 ${addClass}`}>
< ArrowUpRight strokeWidth={2}/>
</button>

  )
}

export default ArrowBtn