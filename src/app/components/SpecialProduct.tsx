"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import styles from "@/app/css-module/SwiperComponent3.module.css"
// import required modules
import { Navigation } from 'swiper/modules';

export default function SpecialProduct() {
    return (
        <div className={`styles.myCustomSwiper3 mt-16 md:mt-20 px-[23px] ${styles.myCustomSwiper3}`}>
            <div className="h-[51px] font-extrabold flex items-center justify-center text-center mb-4">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
                <h3 className="mt-[32] text-primary pb-8 mx-2 text-xs sm:mx-4 sm:text-base md:text-2xl">محصولات ویژه</h3>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
            </div>
            <Swiper
                navigation={{
                    nextEl: ".next-slider-special",
                    prevEl: ".prev-slider-special",
                }}
                loop={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-center">
                        <div>
                            <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px] md:w-[403px] md:h-[400px]" />
                        </div>
                        <div className="text-center text-sm w-[190px] md:w-[368px]">
                            <h4 className="text-base text-primary my-4 md:text-[32px] md:mb-8">کره بادام زمینی</h4>
                            <div className="bg-background rounded-lg text-primary py-[7px] mb-2 w-full md:py-[9.5px]">تهیه همه روزه با پرس سرد</div>
                            <div className="bg-background rounded-lg text-primary py-[7px] mb-2">مناسب پخت و پز و سرخ کردنی</div>
                            <div className="bg-background rounded-lg text-primary py-[7px] mb-2">بهبود سلامت قلب</div>
                            <div className="bg-background rounded-lg text-primary py-[7px] mb-4 md:mb-8">تصفیه فیزیکی</div>
                            <div className="flex justify-between">
                                <button className="text-sm text-white bg-primary rounded-lg px-[12px] py-[7px]">مشاهده محصول</button>
                                <button>
                                    <img src="./images/cart.svg" alt="" className="w-8 h-8"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./images/Frame 1756.svg" alt="" className="w-[190px] h-[153px]" />
                        <div>
                            <h4></h4>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <button></button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="button-slider prev-slider-special">
                <img src="./images/arrow-right-slider.svg" alt="ناوبری راست" className="lg:w-[24px] lg:h-[24px]" />
            </div>
            <div className="button-slider next-slider-special">
                <img src="./images/arrow-left-slider.svg" alt="ناوبری چپ" className="lg:w-[24px] lg:h-[24px]" />
            </div>
        </div>
    );
}
