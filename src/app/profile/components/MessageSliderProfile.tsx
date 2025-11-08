'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MessageSliderProfile = ({ navigationKey }: { navigationKey: string }) => {

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
                    <SwiperSlide className="!w-[164px] border-l-type-one" key={i}>
                        <div className='p-2 pl-6 flex flex-col gap-y-2'>
                            <span className='text-primary text-sm'>سفارش شما ثبت شد</span>
                            <p className='text-xs leading-[180%] text-gray-three'>سفارش شما درحال پردازش می‌باشد و پس از تایید تحویل پست خواهد شد</p>
                            <span className='text-left text-xs text-text-gray-two'>۱۴۰۹/۰۹/۰۸</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {/* دکمه‌های ناوبری سفارشی */}
            <button className={`custom-prev-${navigationKey} absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-lg flex items-center justify-center bg-background hover:bg-green-light duretion-300-ms`}>
                <img
                    src="/images/arrow-right-slider.svg"
                    alt="ناوبری راست"
                    className="lg:w-[24px] lg:h-[24px]"
                />
            </button>

            <button className={`custom-next-${navigationKey} absolute -left-[18px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-lg flex items-center justify-center bg-background hover:bg-green-light duretion-300-ms`}>
                <img
                    src="/images/arrow-left-slider.svg"
                    alt="ناوبری چپ"
                    className="lg:w-[24px] lg:h-[24px]"
                />
            </button>

        </div>


    );
};

export default MessageSliderProfile;



