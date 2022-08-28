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
import Loading from "../components/Loading"
import {doc,setDoc,getFirestore, addDoc, getDocs,collection,getDoc,serverTimestamp, deleteDoc,updateDoc,query,where,orderBy,limit, startAt} from "firebase/firestore"
import app from '../firebase'

export default function AdminReviews({reviews}) {
  const db=getFirestore(app)
    const[loading,setloading]=React.useState(false)
    const deletefunction=async(id)=>{
        setloading(true)
        await deleteDoc(doc(db,"projects",id))
        window.location.reload(true)
        setloading(false)
    }
    if(loading)
    {
      return(
        <Loading></Loading>
      )
    }
    else
    {
    
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
      reviews.map((item,i)=>{
        return(
      <SwiperSlide>
      <div className='revcard'>
      <div className='revcardch1'>
      <img className='revdp' src={item.data.profile}></img>
      <img className='revrev' src={require("../Assets/5stars.png")}></img>
      </div>
      <div className='revcardch2'>
        <span>{item.data.name}</span>
        <p>
        {item.data.review}
        </p>
        <h5>{item.data.platform}</h5>
        <button onClick={()=>deletefunction(item.id)} className='delete'>Delete</button>
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
}
/**
 * 
 */