import React from 'react'

export default function About() {
  return <>
    <section className='h-screen text-white  flex justify-center items-center  bg-[#1abc9c]'>
      <div className="container ">
        <h2 className='text-4xl font-bold'>ABOUT COMPONENT</h2>
        <div className='lines'>
                <div className="line-1 bg-white"></div>
                <i class="fa-solid fa-star mx-4"></i>
                <div className="line-1  bg-white "></div>
            </div>
            <div className="row">
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
      
    </section>
  </>
}
