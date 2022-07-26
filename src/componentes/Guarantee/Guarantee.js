import React from "react";

const Guarantee = () => {
  return (
    <div>
      <div class="hero min-h-screen    py-12 " style={{marginTop:"50px"}}>
        <div class="hero-overlay bg-dark "  ></div>
        <div class="hero-content text-center text-black">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <div
              className="sm:mt-[-400px]  mt-[-400px]      shadow-lg rounded bg-primary px-20 "
          //     style={{ height: "400px",marginTop:"-400px" }}
            >
             <div className="flex items-center justify-center">
             <img
                className=" w-8 h-8   "
                src="https://enhancv.com/static/72114f1672e300b3fe53a055a6345816/38f3c/guarantee-icon.png"
                alt=""
              />
              <p className="text-3xl text-center ml-5 py-4">The Enhancv Guarantee</p>
             </div>
              <p className="text-2xl text-center">
                Confident and secured with Enhancv Career Counseling
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
