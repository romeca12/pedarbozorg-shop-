"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// image-popular-product.svg
import 'swiper/css';
import "swiper/css/navigation";

import styles from "@/app/css-module/SwiperComponent2.module.css"
// import required modules
import { Navigation } from 'swiper/modules';

export default function PopularProductSlider() {
    return (
        <div className={`px-12 lg:px-[88px] pb-2 sm:pb-6 mt-4 lg:mt-10 pt-4 md:pt-6 ${styles.myCustomSwiper2}`}>
            <div className="h-[51px] md:h-[68px] mb-2 font-extrabold flex items-center justify-center text-center">
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
                {Array(9).fill(1).map((_, index) => <SwiperSlide>
                    <div className="w-full p-4">
                        {/* <h1 className="">slider: {index + 1}</h1> */}
                        <img src="./images/image-popular-product.svg" alt="" />
                        <div>
                            <h3 className="text-xl text-primary font-extrabold">آرد نخودچی</h3>
                            <div>
                                <span className="">۹,۳۸۳,۰۰۰</span>
                                <span className="bg-red-500">۶۸٪</span>
                            </div>
                            <span className="text-gray-400 line-through">۹,۳۸۳,۰۰۰</span>
                        </div>
                    </div>
                </SwiperSlide>)}
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
