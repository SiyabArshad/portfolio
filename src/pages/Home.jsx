import * as React from 'react'
import "../stylesheets/home.css"
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import Reviews from '../components/Reviews'
import Projects from '../components/Projects'
import Loading from '../components/Loading'
import {doc,setDoc,getFirestore, addDoc, getDocs,collection,getDoc,serverTimestamp, updateDoc,query,where,orderBy,limit, startAt} from "firebase/firestore"
import app from '../firebase'

export default function Home() {
  const db=getFirestore(app)
  const[loading,setloading]=React.useState(false)
  const[projects,setprojects]=React.useState([])
  const[reviews,setreviews]=React.useState([])
  const[cv,setcv]=React.useState({})
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
  const getcv=async()=>{
    setloading(true)
    try{
      const docSnap=await getDoc(doc(db,"cv","nOTAwSPcZeQZeUG1jbn8"))
      setcv(docSnap.data())
      setloading(false)
    }
    catch{
      setloading(false)
    }
  }
  const controller=new AbortController()
  React.useEffect(()=>{
    getcv()
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
    <Navbar></Navbar>
    <Topbar cv={cv}></Topbar>
    <Technologies></Technologies>
    <Projects projects={projects}></Projects>
    <Reviews reviews={reviews}></Reviews>
    <About></About>
    <Contact></Contact>
  </>
  )
}
}