"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// image-popular-product.svg
import 'swiper/css';
import "swiper/css/navigation";

import styles from '@/app/css-module/SwiperComponent2.module.css';
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
                    nextEl: ".next-slider-2",
                    prevEl: ".prev-slider-2",
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
                    770: {
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
                    <div className="w-full group p-4 relative cursor-pointer">
                        <div className='actions top-4'>
                            <img src="./icons/shoping-heart-fill.svg" alt="لایک" className='absolute hidden' />
                            <img src="./icons/shoping-heart-outline.svg" alt="لایک" className='absolute w-5 h-5 right-4 md:-right-8 md:group-hover:right-4 transition-all duration-300 ease-in-out' />
                            <img src="./icons/shoping-cart-fill.svg" alt="سفارش" className='absolute hidden' />
                            <img src="./icons/shopping-cart-outline.svg" alt="سفارش" className='absolute w-5 h-5 left-4 md:-left-8 md:group-hover:left-4 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='flex justify-center mb-2'>
                            <img src="./images/image-popular-product.svg" alt={`پرفروش ترین محصول ${index}`} className='w-[208px] h-[208px]' />
                        </div>
                        <div>
                            <h3 className="text-xl text-primary mb-2 font-black">آرد نخودچی</h3>
                            <div className='mb-2 flex justify-between items-center'>
                                <div className='bg-[#C62020] rounded-2xl flex items-center px-2 py-0.5'>
                                    <span className=" text-white text-xs font-black">۶۸٪</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className="text-base md:text-xl text-[#353535]">۹,۳۸۳,۰۰۰</span>
                                    <img src="./icons/tooman.svg" alt="تومان" className='w-[23px] h-[16px] my-1.5 mr-1 md:mr-2' />
                                </div>
                            </div>
                            <div className='flex justify-between py-[1px]'>
                                <span><img src="./icons/star.svg" alt="ستاره" className='inline -mt-0.5 ml-1 w-5 h-5' /><span className='text-sm'>۴.۳</span></span>
                                <span className="text-gray-400 line-through text-sm">۹,۳۸۳,۰۰۰</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
            <div className="button-slider prev-slider-2">
                <img src="./images/arrow-right-slider.svg" alt="ناوبری راست" className="lg:w-[24px] lg:h-[24px]" />
            </div>
            <div className="button-slider next-slider-2">
                <img src="./images/arrow-left-slider.svg" alt="ناوبری چپ" className="lg:w-[24px] lg:h-[24px]" />
            </div>
        </div>
    );
}
