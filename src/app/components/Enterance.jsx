import React from 'react'

const Enterance = ({name,job}) => {
  return (
    <div className=' bg-teal-500  lg:h-[530px] md:h-[300px]  flex md:justify-around md:flex-row sm:flex-col items-center sm:py-5'>
            <div className='photo lg:w-[300px] lg:h-[300px] md:h-[200px]  md:w-[200px] md:rounded-full sm:w-[300px] sm:h-[200px] sm:rounded-lg bg-teal-50'>
        
            </div>
            <div className='name_job'>
                <hr />
                <div className=' name lg:text-7xl mt-7 mb-7 lg:w-[660px] font-bold italic md:text-4xl md:w-[500px]  text-green-50 sm:text-3xl'>
                        {name}
                </div>
                <hr />
                <div className=' mb-7 job opacity-75 lg:text-3xl mt-5 text-green-50 md:text-xl sm:text-2xl'>
                  {job}
                </div>
                <hr />

            </div>
    </div>
  )
}

export default Enterance