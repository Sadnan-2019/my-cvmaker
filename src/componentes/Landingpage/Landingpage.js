import React from "react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div
      class="hero min-h-screen bg-cover  "
      style={{
        backgroundImage: `url("https://i.ibb.co/fNRnthP/image-05.jpg?fbclid=IwAR0b05P8XznbzEN5RpLz6oBsBdcob8TpI_xN7nyedIYDEB44eRYFCAcSK_o")`,
      }}
    >
      <div class=" "></div>
      {/* <div class="hero-content text-center text-neutral-content"> */}
      <div className="grid    sm:grid-cols-1  md:grid-cols-2      text-neutral-content   px-4 py-32    ">
        <div className="max-w-xl mx-auto my-auto ">
          <h1 className=" text-3xl 	md:text-5xl  font-extrabold p-5 mt-10">
            Build your body
            <span class="font-extrabold text-warning ">
              {" "}
              using our organic food.
            </span>
          </h1>
          <button className="btn btn-warning ml-5 mt-2">Get Started</button>
          <button className="btn btn-danger text-white ml-5 mt-2">
            Learn more
          </button>
        </div>
        <div className="text-2xl p-5 mt-11">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            navigation={true}
            EffectCoverflow={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper py-10"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/K5PQjZ7/building.jpg"
                alt=""
                className="imgone"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Landingpage;
