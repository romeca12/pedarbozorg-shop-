"use client";

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SwiperSlider() {
  // const prevRef = useRef(null)
  // const nextRef = useRef(null)

  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination, Autoplay]}
      navigation={{
        // nextEl: prevRef.current,
        // prevEl: nextRef.current,
        // روش بعدی
        nextEl: ".next-slider",
        prevEl: ".prev-slider",
      }}
      pagination={{
        type: 'bullets', // نمایش دایره‌ها
        clickable: true, // امکان کلیک روی نقاط
      }}
      loop={true}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide className="cover-slider cover-slider-1">
        <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider1</h1>
      </SwiperSlide>
      <SwiperSlide className="cover-slider cover-slider-2">
        <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider2</h1>
      </SwiperSlide>
      <SwiperSlide className="cover-slider cover-slider-3">
        <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider3</h1>
      </SwiperSlide>
      <SwiperSlide className="cover-slider cover-slider-4">
        <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider4</h1>
      </SwiperSlide>
      <SwiperSlide className="cover-slider cover-slider-5">
        <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider5</h1>
      </SwiperSlide>

      <div className="prev-slider"></div>
      <div className="next-slider"></div>
    </Swiper>
  )
}
