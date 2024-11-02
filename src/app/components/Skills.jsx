
import React from 'react';


const Skills = ({skills}) => {

  
  return (
    <div className=' md:w-  bg-teal-500 lg:h-[362px]  sm:[h-250px] lg:w-1/2 sm:w-1/3'>
        <div className='head_skills lg:text-4xl md:text-2xl  lg:ml-[196px] sm:ml-[15px] md:ml-[30px] py-6 '>
            Skills
        </div>
        <div className='bg-lime-100 p-4 rounded-md skills flex flex-col gap-1 justify-around lg:h-[227px]  lg:ml-[196px] lg:text-2xl md:text-xl sm:ml-[15px] md:ml-[30px] opacity-90'>
       <ul>
       {skills?.map((skill,index) => (
            <li key={index}>{skill}</li>
          ))}
       </ul>
        </div>
    </div>
  )
}

export default Skills