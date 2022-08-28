import * as React from 'react'
import "../stylesheets/admin.css"
import AdminNav from '../components/AdminNav'
import AdminProjects from '../components/AdminProjects'
import AdminReviews from '../components/AdminReviews'
import Uploadcv from '../components/Uploadcv'
import UploadReview from '../components/UploadReview'
import UploadProject from '../components/UploadProject'
import Alert from '../components/Alert'
export default function Admin() {
  const[activebutton,setactivebutton]=React.useState("projects")
  const receiver=(value)=>{
      setactivebutton(value)
  }
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
      <AdminProjects></AdminProjects>
    }
   {
      activebutton==="reviews"
      &&
      <AdminReviews></AdminReviews>
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
