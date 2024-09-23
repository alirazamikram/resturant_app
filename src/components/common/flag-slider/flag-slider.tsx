import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export const FlagSlider = () => {
  return (
    <div className="my-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        breakpoints={{
          1400: {
            slidesPerView: 5,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="w-[250px] h-[250px]"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
