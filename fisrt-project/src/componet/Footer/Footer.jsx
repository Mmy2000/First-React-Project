import React from 'react'

export default function Footer() {
  return <>
  <div className=' text-white bg-[#2c3e50] p-20  grid justify-items-center items-center lg:grid-cols-12 bottom-0 right-0 left-0 mx-auto'>
    
    <div className="item-1 my-3 md:my-0 col-span-4">
        <h2 className='text-4xl font-semibold'>Location</h2>
        <p className='my-2'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className="item-1 mb-3 md:mb-0 col-span-4">
        <h2 className='text-4xl font-semibold'>AROUND THE WEB</h2>
        <div className='icons mt-2 flex justify-center items-center'>
            <div className='rounded-full border-[1px] px-2 mx-1  py-1 border-white'>
                <i  className="fa-brands fa-facebook"></i>
            </div>
            <div className='rounded-full border-[1px] px-2 mx-1 py-1 border-white'>
                <i  className="fa-brands fa-twitter"></i>
            </div>
            <div className='rounded-full border-[1px] px-2 mx-1 py-1 border-white'>
                <i  className="fa-brands fa-linkedin"></i>
            </div>
            <div className='rounded-full border-[1px] px-2 mx-1 py-1 border-white'>
                <i  className="fa-solid fa-globe"></i>
            </div>
            
            
            
        </div>
    </div>
    <div className="item-1 my-3 md:my-0 col-span-4">
        <h2 className='text-4xl font-semibold'>ABOUT FREELANCER</h2>
        <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
    </div>
    
</div>


  </>
}
