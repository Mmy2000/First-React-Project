import React from "react";
import avatar from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <section className="h-screen flex items-center  bg-[#1abc9c]">
        <div className="container ">
          <div className="row justify-center items-center">
            <div className="col-md-4">
              <div className="inner  d-flex items-center flex-col text-white">
                <img className="w-50" src={avatar} alt="" />
                <h2 className=" pt-4 text-4xl font-bold">
                  START FRAMEWORK
                </h2>
                <div className="lines mb-2 ">
                  <div className="line-1 bg-white"></div>
                  <i class="fa-solid fa-star mx-4"></i>
                  <div className="line-1  bg-white "></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
