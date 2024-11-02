"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Blogscard = ({data}) => {
    const routerred=useRouter();
    
  return (
    <div
  class="h-[16em] w-[18em] border-2 border-teal-500 rounded-[1.5em] bg-gradient-to-br bg-lime-100  text-black font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
>
  <div>
    <h1 class="text-[2em] font-medium">{data.name}</h1>
    <p class="text-[0.85em]">
    {data.job}
    </p>
  </div>

  <button
    class="h-fit w-fit px-[1em] py-[0.25em] border-[1px] bg-teal-500 rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
  onClick={()=>routerred.push(`/blogs/${data.id}`)}>
    <p>
    review</p>
   
  </button>
</div>

  )
}

export default Blogscard