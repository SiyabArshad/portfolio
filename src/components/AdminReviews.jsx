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
export default function AdminReviews() {
  return (
   
    <div className='revmain'>
    <Swiper
    freeMode={true}
    grabCursor={true}
    modules={[FreeMode,Autoplay]}
    className="mySwiper"
    autoplay={{ delay: 5000 }}
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
      [1,2,3,4,5,6,7].map((item,i)=>{
        return(
      <SwiperSlide>
      <div className='revcard'>
      <div className='revcardch1'>
      <img className='revdp' src={require("../Assets/profile.png")}></img>
      <img className='revrev' src={require("../Assets/5stars.png")}></img>
      </div>
      <div className='revcardch2'>
        <span>Name user</span>
        <p>
        Superb seller. Very attention to detail. Listen to your needs and draws accordingly, step by step, until completion. An amazing developer, a friend, which stands by our side until the gig is finished. Even after if you have any queries, he is prompt to help. Fantastic.
        </p>
        <h5>Fiverr</h5>
        <button className='delete'>Delete</button>
      </div>
    </div>
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