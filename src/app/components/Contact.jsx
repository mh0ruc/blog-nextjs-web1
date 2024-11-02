import React from 'react'

const Contact = ({email,number}) => {
  return (
    <div className=' md:px-4 bg-teal-500 lg:h-[362px]  sm:[h-250px]  md:h-[300] lg:w-1/2 sm:w-2/3 h-full'>
        <div className='head_skills  lg:text-4xl md:text-2xl about lg:ml-[196px] sm:ml-[100px] py-6   '>
            Contact
        </div>
        <div className='bg-lime-100 p-4 rounded-md  flex flex-col  justify-around  md:h-[227px] sm:h-[160px]  lg:ml-[196px] sm:ml-[100px]  opacity-90  text-left lg:text-2xl md:text-xl  '>
            <div> 
                <h3 className='inline'>
                    Email : 
                </h3>
                <span> {email}</span>
            </div>
            <div className='mb-10'>
            <h3 className='inline'>
                    Number : 
                </h3>
                <span> {number}</span>
            </div>
            
        </div>
    </div>
  )
}

export default Contact