import * as React from 'react'
import "../stylesheets/admin.css"
import AdminNav from '../components/AdminNav'
import AdminProjects from '../components/AdminProjects'
import AdminReviews from '../components/AdminReviews'
import Uploadcv from '../components/Uploadcv'
import UploadReview from '../components/UploadReview'
import UploadProject from '../components/UploadProject'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import {doc,setDoc,getFirestore, addDoc, getDocs,collection,getDoc,serverTimestamp, updateDoc,query,where,orderBy,limit, startAt} from "firebase/firestore"
import app from '../firebase'
export default function Admin() {
  const db=getFirestore(app)
  const[activebutton,setactivebutton]=React.useState("projects")
  const[loading,setloading]=React.useState(false)
  const[projects,setprojects]=React.useState([])
  const[reviews,setreviews]=React.useState([])
  const receiver=(value)=>{
      setactivebutton(value)
  }
  const getinfo=()=>{
    setloading(true)
    getDocs(collection(db, "projects")).then((res)=>{
      const quests=res.docs.map(doc=>({
          data:doc.data(),
          id:doc.id
            }))
       setprojects(quests)
       setloading(false)
       }).catch((e)=>{
        setloading(false)
          console.log(e)
      })
      getDocs(collection(db, "reviews")).then((res)=>{
        const quests=res.docs.map(doc=>({
            data:doc.data(),
            id:doc.id
              }))
              setloading(false)   
         setreviews(quests)
         }).catch((e)=>{
          setloading(false)
            console.log(e)
        })
    
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
    <>
    <AdminNav receiver={receiver}></AdminNav>
    <div className='mainadmin'>
      <button onClick={()=>setactivebutton("addreview")}>Add Review</button>
      <button onClick={()=>setactivebutton("addproject")}>Add Project</button>
    </div>
    {
      activebutton==="projects"
      &&
      <AdminProjects projects={projects}></AdminProjects>
    }
   {
      activebutton==="reviews"
      &&
      <AdminReviews reviews={reviews}></AdminReviews>
    }
    {
      activebutton==="uploadcv"
      &&
      <Uploadcv></Uploadcv>
    }
    {
      activebutton==="addreview"
      &&
      <UploadReview></UploadReview>
    }
    {
      activebutton==="addproject"
      &&
      <UploadProject></UploadProject>
    }
    
    </>
  )
}
}