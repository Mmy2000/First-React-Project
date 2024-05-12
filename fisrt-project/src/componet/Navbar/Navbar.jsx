import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container py-8 bg-[#2c3e50]  fixed flex justify-around   items-center top-0 right-0 left-0 mx-auto'>
        <div>
            <Link className='text-white text-3xl font-black hover:text-white   ' to="">START FRAMEWORK</Link>
        </div>
      <ul className='flex flex-wrap  justify-around items-center'>
        
        
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black hover:text-white' to="about">About</NavLink></li>
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black hover:text-white' to="portfolio">Portfolio</NavLink></li>
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black hover:text-white' to="contact">contact</NavLink></li>
      </ul>
    </div>
  )
}
