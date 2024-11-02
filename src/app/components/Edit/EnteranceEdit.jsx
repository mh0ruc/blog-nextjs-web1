"use client"

import React, { useState } from 'react'

const EnteranceEdit = ({Name,setName,Job,setJob}) => {

    

  return (
    <div className=' bg-teal-500 lg:h-[530px]  flex justify-around items-center'>
            <div className='photo lg:w-[300px] lg:h-[300px] md:h-[200px]  md:w-[200px] rounded-full bg-teal-50'>
                    
            </div>
            <div className='name_job'>
                <hr />
                <div  className='  text-5xl mt-7 mb-7 w-[660px] font-bold italic '>
                <input onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text" className='  text-lime-50 text-7xl w-[600px]    bg-teal-700 rounded-md' />

                </div>
                <hr />
                <div className=' mb-7 job text-3xl mt-5 '>
                <input onChange={(e)=>setJob(e.target.value)} placeholder='  job' type="text" className='  text-lime-50 text-4xl w-[600px]    bg-teal-700 rounded-md' />

                </div>
                <hr />
               

            </div>
    </div>
  )
}

export default EnteranceEdit