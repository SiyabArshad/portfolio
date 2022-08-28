import "../stylesheets/navbar.css"
import * as React from 'react'

export default function AdminNav({receiver}) {
  const[activebutton,setactivebutton]=React.useState("projects")
    return (
    <div className="navmainbg">
        <ul>
            <li 
            style={{color:activebutton==="projects"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("projects") 
                receiver("projects")
            }}
            >
                Projects
            </li>
            <li
            style={{color:activebutton==="reviews"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("reviews") 
                receiver("reviews")
            }}
            >
                Reviews
            </li>
            <li
            style={{color:activebutton==="uploadcv"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("uploadcv")
                receiver("uploadcv") 
            }}
            >
                Upload Cv
            </li>
            <li
            style={{color:activebutton==="logout"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("logout") 
            }}
            >
                Logout
            </li>
        </ul>
          
    </div>
  )
}
