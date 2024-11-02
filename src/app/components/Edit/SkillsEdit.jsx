"use client"
import React, { useState } from 'react'



const SkillsEdit = ({Skills,setSkills,Skill,setSkill}) => {



  const ekle=()=>{
    

    setSkills([
      {
        text: Skill,
        
        id: Math.random(),
      },
      ...Skills,
      
  
    ]);
    setSkill("")
    
  }
  
  return (
    <div className='  bg-teal-500 h-[362px] w-1/2'>
        <div className='head_SkillsEdit text-4xl about ml-[196px] py-6 '>
            Edit Skills
        </div>
        <div className='SkillsEdit flex gap-1 justify-around  ml-[196px] text-2xl opacity-90 '>
        <input value={Skill} onChange={(e)=>setSkill(e.target.value)} type="text" className=' ml-2 text-2xl    bg-lime-100 rounded-md' />
<button onClick={ekle} className='p-2 border rounded-md bg-teal-700 text-teal-50 '> Add </button>
        </div>
    </div>
  )
}

export default SkillsEdit