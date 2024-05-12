import React from 'react'

export default function Contact() {
  return <>
    <section className='h-screen'>
            <h2 className='text-slate-700 pt-32 text-4xl font-bold'>CONATCT SECTION</h2>    
            <div className='lines'>
                <div className="line-1 bg-slate-700"></div>
                <i class="fa-solid fa-star mx-4"></i>
                <div className="line-1  bg-slate-700 "></div>
            </div>
            <div class="container p-5 my-3">
        <div class="row px-5">
            <div class="form-floating mb-3">
                <input type="text" class="form-control border-0 border-bottom " id="user name"
                    placeholder="user name"/>
                <label for="user name">User Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control border-0 border-bottom" id="user age"
                    placeholder="user age"/>
                <label for="user age">User Age</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control border-0 border-bottom" id="user email"
                    placeholder="user email"/>
                <label for="user email">User Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control border-0 border-bottom" id="user password"
                    placeholder="User Password"/>
                <label for="user password">User Password</label>
            </div>
            
            
            <button  class="d-block col-2 border-none rounded-lg w-fit bg-[#1abc9c]">Send</button>
        </div>
    </div>
            
    </section>
  </>
}
