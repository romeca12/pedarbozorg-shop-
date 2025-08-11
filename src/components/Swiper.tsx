"use client";

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from '../app/css-module/SwiperComponent1.module.css';

// import required modules
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SwiperSlider() {
  // const prevRef = useRef(null)
  // const nextRef = useRef(null)

  return (
    <div className="flex justify-center">
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
        loopAdditionalSlides={1} // تعداد اسلایدهای اضافی را کاهش دهید
        pagination={{
          clickable: true, // امکان کلیک روی نقاط
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={styles.myCustomSwiper}
      >
        <SwiperSlide className="cover-slider cover-slider-1">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover-slider cover-slider-2">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover-slider cover-slider-3">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover-slider cover-slider-4">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cover-slider cover-slider-5">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider5</h1>
          </div>
        </SwiperSlide>

        <div className="prev-slider"></div>
        <div className="next-slider"></div>
      </Swiper>
    </div>
  )
}