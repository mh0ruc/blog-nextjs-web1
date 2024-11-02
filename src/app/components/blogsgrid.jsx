import React from 'react'
import Blogscard from './blogscard'

const Blogsgrid = ({data}) => {
  return (
    <><div className=' justify-around flex flex-wrap gap-5 mx-[60px]'>
    
    {data.map((dt)=><Blogscard data={dt} key={dt.id}/>)}
    </div>
    </>

  )
}

export default Blogsgrid