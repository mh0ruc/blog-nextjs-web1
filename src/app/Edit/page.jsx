"use client"
import React, { useEffect, useState } from 'react'
import AboutEdit from '../components/Edit/AboutEdit'
import EnteranceEdit from '../components/Edit/EnteranceEdit'
import ContactEdit from '../components/Edit/ContactEdit'
import SkillsEdit from '../components/Edit/SkillsEdit'

const Page = () => {
    const [Name, setName] = useState("")
    const [Job, setJob] = useState("")
    const [About, setAbout] = useState("")
    const [Email, setEmail] = useState("")
    const [Number, setNumber] = useState("")
    const [Skills, setSkills] = useState([])
    const [Skill, setSkill] = useState("")
   
    
    

    const savelocal=()=>{
      localStorage.setItem("blog",JSON.stringify({
        name:Name,
        job:Job,
        about:About,
        email:Email,
        number:Number,
        skills:Skills,


      }))
    }

  return (
    <div>
        <EnteranceEdit Name={Name} setJob={setJob} setName={setName} Job={Job}/>
        <AboutEdit About={About} setAbout={setAbout} />
        <div className='flex'>
        <SkillsEdit Skills={Skills} setSkills={setSkills} setSkill={setSkill} Skill={Skill}/>
        <ContactEdit Email={Email} setEmail={setEmail} setNumber={setNumber} Number={Number}/>
       
        </div>
        <div className='flex justify-center  bg-teal-500'><button className="h-10 hover:bg-teal-700 hover:text-teal-50  w-40 bg-lime-100 mb-5" onClick={savelocal}>Tümünü Kaydet</button></div>
        
     
        
    </div>
  )
}

export default Page