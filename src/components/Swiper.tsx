"use client";

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
    <div className={styles.myCustomSwiper}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".next-slider",
          prevEl: ".prev-slider",
        }}
        pagination={{
          clickable: true, // امکان کلیک روی نقاط
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={300}
        followFinger={false} // برای navigation مهم است
        threshold={15} // حداقل حرکت برای تغییر اسلاید
        cardsEffect={{
          slideShadows: false, // سایه‌ها را غیرفعال می‌کند
          perSlideOffset: 10,  // فاصله بین اسلایدها
          perSlideRotate: 2,   // مقدار چرخش کمتر
        }}
      >
        {Array(5).fill(1).map((_, i) => <SwiperSlide key={i} className="cover-slider cover-slider-1">
          <div>
            <h1 className="text-center mt-8 text-gray-900 text-5xl">Slider {i}</h1>
          </div>
        </SwiperSlide>)
        }
      </Swiper>
      <div className="prev-slider"></div>
      <div className="next-slider"></div>
    </div>
  )
}