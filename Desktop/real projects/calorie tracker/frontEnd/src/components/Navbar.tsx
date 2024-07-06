import React from 'react'
import img from '../assets/logo.avif'
const Navbar = () => {

  return (
    <div className='w-[350px] h-[900px]'>
      
      <div id="logo" className='h-[250px]'>
      <img src={img} alt="" className=' h-[250px] px-11 py-5'/>
      </div>
      <ul className='list-none flex flex-col'>
        <li className='px-5 text-lg border-y-2 border-r-2 border-black'>Dashboard</li>
        <li className='px-5 text-lg  border-r-2 border-black'>News</li>
        <li className='px-5 text-lg border-y-2 border-r-2 border-black'>BMI Calculator</li>
      </ul>
    </div>
  )
}

export default Navbar