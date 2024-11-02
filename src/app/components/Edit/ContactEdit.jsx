"use client"

import React, { useState } from 'react'

const ContactEdit = ({Email,setEmail,Number,setNumber}) => {
    

  return (
    <div className=' bg-teal-500 h-[362px] w-1/2'>
        <div className='head_skills text-4xl about ml-[196px] py-6 '>
           Edit Contact
        </div>
        <div className='skills flex flex-col  justify-around  h-[227px] ml-[196px] text-2xl opacity-90'>
            <div> 
                <h3 className='inline'>
                    Email : 
                </h3>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" className=' ml-2 text-2xl    bg-lime-100 rounded-md' />
            </div>
            <div className='mb-10'>
            <h3 className='inline'>
                    phone number : 
                </h3>
                  <input onChange={(e)=>setNumber(e.target.value)} type="text" className=' ml-2 text-2xl    bg-lime-100 rounded-md' />
            </div>
            
        </div>
    </div>
  )
}

export default ContactEdit