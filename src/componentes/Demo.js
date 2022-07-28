import React from 'react';

const Demo = () => {
     return (
          <div class=" text-black ">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <div
              className="sm:mt-[-400px]  lg:mt-[-500px]      shadow-2xl rounded bg-white px-20  "
              //     style={{ height: "400px",marginTop:"-400px" }}
            >
              <div className="flex items-center justify-center">
                <img
                  className=" w-8 h-8   "
                  src="https://enhancv.com/static/72114f1672e300b3fe53a055a6345816/38f3c/guarantee-icon.png"
                  alt=""
                />
                <p className="text-3xl text-center ml-5 py-4">
                  The Enhancv Guarantee
                </p>
              </div>
              <p className="text-2xl text-center">
                Confident and secured with Enhancv Career Counseling
              </p>
              <hr className="mt-5" />
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10">
                <div className="mx-auto my-auto ">
                  <img
                    className="w-20 mx-auto h-15 mt-8  "
                    // src={imgone}
                    alt=""
                  />
                  <div className="  ">
                    <p className=" text-2xl text-center   mt-5	">
                      Satisfaction guaranteed <br></br>
                      <span className="text-2xl text-center ">
                        or your money back
                      </span>
                    </p>
                    {/* <p className="text-2xl text-center">or your money back</p> */}
                    <div className="mt-2">
                      <p className="text-1xl text-center  ">
                        If you’re not satisfied during the first 30 days,
                      </p>
                      <p className="text-1xl text-center">
                        we will fully refund you. As simple as that.
                      </p>
                    </div>
                  </div>
                </div>

                {/* right side */}

                <div className=" mx-auto my-auto lg:max-w-lg  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  ">
                  <img
                    className="w-20 mx-auto h-15 mt-5 "
                    // src={imgtwo}
                    alt=""
                  />
                  <div className=" ">
                    <div className=" flex items-center justify-center gap-10 mt-5  ">
                      <p
                        className="text-4xl font-extrabold  "
                        style={{ color: "#2DC08D" }}
                      >
                        68%
                      </p>
                      <p className="   text-xl     ">
                        higher chances of <br></br>
                        <span className="text-1xl font-semibold ">
                          getting an interview
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-10 mt-2 ">
                      <p
                        className="text-4xl font-extrabold  "
                        style={{ color: "#2DC08D" }}
                      >
                        78%
                      </p>
                      <p className="text-xl     ">
                        higher chances of<br></br>
                        <span className="text-1xl font-semibold ">
                          getting an interview
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
};

export default Demo;