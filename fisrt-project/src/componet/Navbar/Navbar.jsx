import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=' py-8 bg-[#2c3e50] z-50  fixed flex justify-around   items-center top-0 right-0 left-0 '>
        <div>
            <Link className='text-white text-3xl font-black hover:text-white text-decoration-none   ' to="">START FRAMEWORK</Link>
        </div>
      <ul className='hidden md:flex flex-wrap  justify-around items-center'>
        
        
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black text-decoration-none hover:text-white' to="about">About</NavLink></li>
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black hover:text-white text-decoration-none' to="portfolio">Portfolio</NavLink></li>
        <li><NavLink className='text-white text-lg  px-4 py-2 font-black hover:text-white text-decoration-none' to="contact">contact</NavLink></li>
      </ul>
      <button class="md:hidden ms-4 bg-transparent border-gray-800 hover:border-gray-800 rounded-md"  id="toggle">
                    <i class="fa-solid fa-bars fa-lg"></i>
                </button>
    </div>
  )
}
