import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BsStopwatch,BsFacebook,BsLinkedin,BsMailbox,BsTwitter } from "react-icons/bs";
 
 
const Allarticale = () => {
  return (
    <div className="grid    sm:grid-cols-1  md:grid-cols-2 gap-14 px-8 py-8">
      <div>
        <img
          className="rounded"
          src="https://cdn-blog.novoresume.com/articles/weirdest-job-titles/bg-mid.png"
          alt=""
        />
        <h1 className="text-3xl font-extrabold mt-2">
          155+ Weirdest Job Titles [As Found on the Internet]
        </h1>

        {/* lokpjmfomdfglnmdglmn */}

        <div class=" py-3 flex items-center ">
          <span class=" ">20 July</span>
          <div class="ml-1">|</div>
          <div class="icon-time ml-1">
               <BsStopwatch className="text-red-500  "></BsStopwatch>
          </div>
          <span class="read-time-art ml-1    ">4 min read</span>
        </div>
        {/* lokpjmfomdfglnmdglmn */}
        <p class="quick-info">
          Think job-hunting and resumes can’t be funny? We’d beg to differ! Read
          our article to discover 155+ of the weirdest job titles on the
          internet.
        </p>
        <p className="text-1xl font-extrabold mt-5">
          Share Within Your Network
        </p>
        <div className="flex py-4">
          <div className="flex justify-between	">
            <BsLinkedin className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <AiFillMail className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <BsFacebook className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <BsTwitter className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded"
          src="https://cdn-blog.novoresume.com/articles/how-to-write-a-resume-guide/bg-mid.png"
          alt=""
        />
        <h1 className="text-3xl font-extrabold mt-2">
          155+ Weirdest Job Titles [As Found on the Internet]
        </h1>

        {/* lokpjmfomdfglnmdglmn */}

        <div class=" py-3 flex items-center ">
          <span class=" ">20 July</span>
          <div class="ml-1">|</div>
          <div class="icon-time ml-1">
               <BsStopwatch className="text-red-500  "></BsStopwatch>
          </div>
          <span class="read-time-art ml-1    ">4 min read</span>
        </div>
        {/* lokpjmfomdfglnmdglmn */}
        <p class="quick-info">
          Think job-hunting and resumes can’t be funny? We’d beg to differ! Read
          our article to discover 155+ of the weirdest job titles on the
          internet.
        </p>
        <p className="text-1xl font-extrabold mt-5">
          Share Within Your Network
        </p>
        <div className="flex py-4">
          <div className="flex justify-between	">
            <BsLinkedin className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <AiFillMail className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <BsFacebook className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
          <div  className="flex ml-2">
            <BsTwitter className="text-dark text-2xl" />
            <p className="ml-2">4</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Allarticale;
