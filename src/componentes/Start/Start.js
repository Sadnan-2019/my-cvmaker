import React from "react";
import { Link } from "react-router-dom";
import imgone from "../../assets/start1.png";
import imgtwo from "../../assets/start2.png";
import './Start.css'

const Start = () => {
  return (
    <div>
     <div className="bg-[#f9fbfa] mx-10 my-10 border-1 rounded-xl ">

<h1 className="text-5xl font-extrabold text-center py-12 ">
    How would you like to start?
  </h1>
  <div className=" flex    flex-col md:flex-row   justify-center items-center gap-32 	 py-8  ">
    <Link to="">
    <div class=" card   start  rounded-xl     shadow-2xl bg-base-100    ">
      <img src={imgtwo} className="w-[400px] " alt="Shoes" />

      <h2 class=" text-3xl text-center text-extrabold mt-5">
        Create a New Resume
      </h2>

      <p className="text-center text-bold mb-5">
        We'll guide you through each resume section!
      </p>
    </div>
    </Link>
  <Link to ="">
  <div class=" card  start  shadow-2xl bg-base-100       ">
      <img src={imgone} className="w-[400px] " alt="Shoes" />

      <h2 class=" text-3xl text-center text-extrabold mt-5">
        Upload My Current Resume
      </h2>

      <p className="text-center text-bold mb-5">
        We'll guide you through each resume section!
      </p>
    </div>
  </Link>
  </div>
</div>
    </div>
  );
};

export default Start;
