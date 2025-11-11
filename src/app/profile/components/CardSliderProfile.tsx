'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardGlobal from '@/components/CardGlobal';

const CardSliderProfile = ({ navigationKey }: { navigationKey: string }) => {

    return (
        <div className='relative bg-white flex'>
            <Swiper
                className='lg:w-[calc(100vh-368px)] flex-auto'
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={'auto'}
                navigation={{
                    nextEl: `.custom-next-${navigationKey}`,
                    prevEl: `.custom-prev-${navigationKey}`,
                    disabledClass: 'opacity-0 pointer-events-none',
                }}
                loop={false}
                dir="rtl"
                resistance={true}
                resistanceRatio={0.85}

            >
                {Array(8).fill(1).map((_, i) =>
                    <SwiperSlide className="!w-64 md:!w-72">
                        <div className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 md:mb-5 flex items-center justify-center text-white text-3xl md:text-4xl">
                                🧴
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                                ضد آفتاب روزانه
                            </h3>
                            <div className="text-amber-500 font-bold text-base md:text-lg mb-3 md:mb-4">
                                24.99$
                            </div>
                            <p className="text-gray-600 text-sm mb-4 md:mb-5 leading-relaxed flex-grow">
                                فرمول سبک و غیرچرب برای استفاده روزانه با محافظت SPF 50+ و مرطوب کننده طبیعی
                            </p>
                            <button className="bg-amber-500 text-white py-2 md:py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors duration-300 w-full">
                                افزودن به سبد
                            </button>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {/* دکمه‌های ناوبری سفارشی */}
            <button className={`custom-prev-${navigationKey} absolute right-3.5 top-1/2 -translate-y-1/2 z-[8] w-10 h-10 rounded-lg flex items-center justify-center bg-background hover:bg-green-light duretion-300-ms`}>
                <img
                    src="/images/arrow-right-slider.svg"
                    alt="ناوبری راست"
                    className="lg:w-[24px] lg:h-[24px]"
                />
            </button>

            <button className={`custom-next-${navigationKey} absolute left-3.5 top-1/2 -translate-y-1/2 z-[8] w-10 h-10 rounded-lg flex items-center justify-center bg-background hover:bg-green-light duretion-300-ms`}>
                <img
                    src="/images/arrow-left-slider.svg"
                    alt="ناوبری چپ"
                    className="lg:w-[24px] lg:h-[24px]"
                />
            </button>

        </div>


    );
};

export default CardSliderProfile;



