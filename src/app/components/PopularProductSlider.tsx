"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from "@/app/css-module/SwiperComponent2.module.css"
// import required modules
import { Navigation } from 'swiper/modules';

export default function PopularProductSlider() {
    return (
        <div className={styles.myCustomSwiper2}>
            <h3 className="mt-[32] text-center text-[white]">پرفروش ترین محصولات</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                // grabCursor={true}
                modules={[Navigation]}
                navigation={{
                    // nextEl: prevRef.current,
                    // prevEl: nextRef.current,
                    // روش بعدی
                    nextEl: ".next-slider",
                    prevEl: ".prev-slider",
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 48,
                    },
                }}
            // className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-1</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-2</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-3</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-4</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-5</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-6</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-7</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="absolute flex justify-center">sider-8</h1>
                        <img src="./images/Product.svg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="prev-slider">▶</div>
            <div className="next-slider">◀</div>
        </div>
    );
}
