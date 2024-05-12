import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container p-2 fixed top-0 right-0 left-0 mx-auto'>
      <ul className='flex flex-wrap justify-around items-center'>
        <li><NavLink className='text-slate-900 text-lg font-normal' to="">Home</NavLink></li>
        <li><NavLink className='text-slate-900 text-lg font-normal' to="about">About</NavLink></li>
        <li><NavLink className='text-slate-900 text-lg font-normal' to="portfolio">Portfolio</NavLink></li>
        <li><NavLink className='text-slate-900 text-lg font-normal' to="contact">contact</NavLink></li>
      </ul>
    </div>
  )
}
