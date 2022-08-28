import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../stylesheets/details.css"
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
export default function Details() {
    let desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos."
  return (
    <div className="detailsmain">
    <Link className='link' to="/">
        <button className='dtback'>
            Back
        </button>
        </Link>
        <div>
            <h2 className='detpro'>
                App name will written here
            </h2>
            <h4 className='detims'>
                Project Images
            </h4>
            <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 10000 }}
      pagination={{ clickable: true }}
    >
     <SwiperSlide>
     <img className="img" src={require("../Assets/project/1.png")} alt="project image" />
     </SwiperSlide>
     <SwiperSlide>
     <img className="img" src={require("../Assets/project/2.png")} alt="project image" />
     </SwiperSlide>
    </Swiper>
    <p className='detdesc'>
                {desc}
    </p>
        
            <h4 className='detims'>
                Project Video
            </h4>
            <>
            <video className='detvideo' controls>
            <source src={require('../Assets/project/video.mp4')} type="video/mp4" />
                 Sorry, your browser doesn't support videos.
                </video>
            </>
        </div>
    </div>
  )
}
