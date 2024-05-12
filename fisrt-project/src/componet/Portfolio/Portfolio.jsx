import React from "react";
import image1 from "../../assets/port1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";
export default function Portfolio() {
  return (
    <>
      <section className="">
        <div className="container pt-32 ">
          <h2 className="text-slate-700 pt-4 text-4xl font-bold">
            PORTFOLIO COMPONENT
          </h2>
          <div className="lines mb-2 ">
            <div className="line-1 bg-slate-700"></div>
            <i className="fa-solid fa-star mx-4"></i>
            <div className="line-1  bg-slate-700 "></div>
          </div>
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image1} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image2} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image3} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image1} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image2} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-3 overflow-hidden rounded-lg   cursor-pointer relative">
                <img className="rounded-lg" src={image3} alt="" />
                <div className="cover absolute rounded-lg top-4  flex items-center justify-center text-white left-4 right-4 bottom-4 bg-[#1abc9c]">
                  <i className="fa-solid fa-plus text-8xl "></i>
                </div>
              </div>
            </div>
          
            
          </div>
        </div>
      </section>
    </>
  );
}
