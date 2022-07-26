import React from "react";

const Price = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url("https://leverageedu.com/blog/wp-content/uploads/2019/10/Declaration-in-Resume-for-Freshers.jpg")`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center  ">
       <div className="grid    sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 px-12 py-8">
       <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl text-blue-900">Essential</h2>
            <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
            <p className="text-3xl font-extrabold text-blue-900">$244</p>
            <div class="card-actions">
               
              <button class="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl"  >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl text-green-700">Executive</h2>
            <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
            <p className="text-3xl font-extrabold text-green-700">$244</p>
            <div class="card-actions">
               
              <button class="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl text-red-900">Executive +</h2>
            <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
            <p className="text-3xl font-extrabold text-red-900">$244</p>
            <div class="card-actions">
               
              <button class="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Price;
