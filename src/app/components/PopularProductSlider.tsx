"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import styles from "@/app/css-module/SwiperComponent2.module.css"
// import required modules
import { Navigation } from 'swiper/modules';

export default function PopularProductSlider() {
    return (
        <div className={`px-12 lg:px-[88px] pb-2 sm:pb-6 mt-4 lg:mt-10 ${styles.myCustomSwiper2}`}>
            <div className="h-[51px] font-extrabold flex items-center justify-center text-center mt-4 md:mt-6">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
                <h3 className="mt-[32] text-white pb-8 mx-4 md:text-2xl">پرفروش ترین محصولات</h3>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
            </div>
            <Swiper
                spaceBetween={16}
                grabCursor={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".next-slider",
                    prevEl: ".prev-slider",
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    760: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                }}
            // className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="atext-center">sider-4</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-5</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-6</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-7</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <h1 className="text-center">sider-8</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="button-slider prev-slider">
                <img src="./images/arrow-right-slider.svg" alt="ناوبری راست" className="lg:w-[24px] lg:h-[24px]" />
            </div>
            <div className="button-slider next-slider">
                <img src="./images/arrow-left-slider.svg" alt="ناوبری چپ" className="lg:w-[24px] lg:h-[24px]" />
            </div>
        </div>
    );
}
