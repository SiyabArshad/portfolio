import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../stylesheets/details.css"
import 'swiper/css/autoplay';
import { Link,useParams } from 'react-router-dom';
import Loading from '../components/Loading'
import {doc,setDoc,getFirestore, addDoc, getDocs,collection,getDoc,serverTimestamp, updateDoc,query,where,orderBy,limit, startAt} from "firebase/firestore"
import app from '../firebase'

export default function Details() {
    let desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Vel possimus id accusantium quia, rerum ab dolores, vero quae facere voluptate officia doloribus aliquam maxime enim porro placeat dignissimos."
    const {id}=useParams()
    const db=getFirestore(app)
    const[loading,setloading]=React.useState(false)
    const[projectinfo,setprojectinfo]=React.useState(null)
    const getinfo=async()=>{
        setloading(true)
        try{
          const docSnap=await getDoc(doc(db,"projects",id))
          setprojectinfo(docSnap.data())
          setloading(false)
        }
        catch{
          setloading(false)
        }
      }
      const controller=new AbortController()
      React.useEffect(()=>{
        getinfo()
      return()=>{
        controller.abort()
      }
      },[])
      if(loading)
      {
        return(
          <Loading></Loading>
        )
      }
      else
      {
      
    return (
    <div className="detailsmain">
    <Link className='link' to="/">
        <button className='dtback'>
            Back
        </button>
        </Link>
        <div>
            <h2 className='detpro'>
                {projectinfo?.name}
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
        {
            projectinfo?.images.map((item)=>(
        <SwiperSlide>
     <img className="img" src={item} alt="project image" />
     </SwiperSlide>
            )) 
        }
    </Swiper>
    <p className='detdesc'>
                {projectinfo?.desc}
    </p>
        
            <h4 className='detims'>
                Project Video
            </h4>
            <>
            <video className='detvideo' controls>
            <source src={projectinfo?.video} type="video/mp4" />
                 Sorry, your browser doesn't support videos.
                </video>
            </>
        </div>
    </div>
  )
}
}