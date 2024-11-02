import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div  className='bg-teal-700 text-teal-50 min-h-[180px] md:flex-row md:flex sm:flex-col sm:flex sm:items-center md:justify-between   md:items-center'>
        <div className='md:ml-[196px] text-xl'>
Made by Mustafa Hilmi
        </div>

        <div className=' flex md:justify-around  md:mr-32 gap-4 text-4xl'>
<div>
<FaSquareInstagram />
</div>
<div>
<FaXTwitter/>
</div>
<div>
<FaGithub/>
</div>
        </div>
    </div>
  )
}

export default Footer