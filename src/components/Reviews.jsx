import React from 'react'
import "../stylesheets/reviews.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../stylesheets/details.css"
import 'swiper/css/autoplay';

import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
export default function Reviews({reviews}) {
  return (
   
    <div className='revmain'>
    <h3>Client Reviews</h3>
    <Swiper
    freeMode={true}
    grabCursor={true}
    modules={[FreeMode,Autoplay]}
    className="mySwiper"
    autoplay={{ delay: 3000 }}
    breakpoints={{
      0:{
        slidesPerView:1,
        spaceBetween:10
      },
      480:{
        slidesPerView:2,
        spaceBetween:10
      },
      800:{
        slidesPerView:3,
        spaceBetween:15
      },
      1024:{
        slidesPerView:4,
        spaceBetween:20
      },
    }}
    >
    {
      reviews.map((item,i)=>{
        return(
      <SwiperSlide>
      <img className='reviewprofile' src={item?.data.rev}></img>
    </SwiperSlide>
        )
      })
    }
    </Swiper>
  </div>
  )
}
/**
 * 
 */