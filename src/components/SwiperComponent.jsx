import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export function SwiperCopmponent({ Children1, Children2, Children3 }) {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>{Children1}</SwiperSlide>
        <SwiperSlide>{Children2}</SwiperSlide>
        <SwiperSlide>{Children3}</SwiperSlide>
      </Swiper>
    </>
  );
}
