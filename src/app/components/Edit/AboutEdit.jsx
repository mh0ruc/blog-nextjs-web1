"use client"
import React, { useState } from 'react'

const AboutEdit = ({About  ,setAbout}) => {

  
  return (
    <div className='  h-[682px] bg-green-400 bg-opacity-60'>
        <div className='text-4xl  about ml-[196px] py-6'>
           Edit About
        </div>
        <textarea onChange={(e)=>setAbout(e.target.value)} type='text' className=' m-4/5 text-3xl pharaph bg-g w-4/5 h-[333] p-6 ml-28 mt-10 bg-lime-100 rounded-md '/>
           
        
    
    </div>
  )
 
}

export default AboutEdit