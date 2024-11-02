import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='md:gap-6 md:min-w-[744px] lg:w-full md:h-[80px] bg-teal-700  min-h-[114px] text-teal-50'>

        <nav className='navbar flex justify-between items-center lg:gap-11 '>
            <div className='logo lg:ml-[196px] mt-2 md:ml-[30px] sm:ml-[15px] '>
                <div className='font-semibold lg:text-4xl md:text-xl tracking-[30px] w-[133px]'>
                    MHO
                </div>
                <div className='border-b-2 opacity-50 md:text-sm sm:text-[15px]  '>
                    Mustafa Hilmi Oruç
                </div>

            </div>
            <div className='link lg:text-xl flex  md:gap-10 sm:gap-5  mr-20 items-center md:text-sm sm:text-[15px]'>
                <div>
               <Link href={"/"}>HOME</Link>
                </div>
                <div>
                    ABOUT
                </div>
                <div>
                        SKILLS
                </div>
                <div>
                    CONTACT
                </div>
                <div>
                <Link href={{
        pathname:"/Edit",
   

    }}>EDIT</Link>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Header