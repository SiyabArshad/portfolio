import "../stylesheets/navbar.css"
import * as React from 'react'
import { Link } from "react-scroll"
export default function Navbar() {
  const[activebutton,setactivebutton]=React.useState("home")
    return (
    <div className="navmainbg">
        <ul>
            <li 
            style={{color:activebutton==="home"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("home") 
            }}
            >
                Home
            </li>
            <li
            style={{color:activebutton==="about"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("about") 
            }}
            >
                <Link to='about' spy={true} smooth={true}>
                About
                </Link>
            </li>
            <li
            style={{color:activebutton==="contact"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("contact") 
            }}
            >
                <Link to='contact' spy={true} smooth={true}>
                Contact
                </Link>
            </li>
            <li
            style={{color:activebutton==="projects"?"#CD921E":"#FFFF"}}
            onClick={()=>{
                setactivebutton("projects") 
            }}
            >
                <Link to='projects' spy={true} smooth={true}>
                Projects
                </Link>
            </li>
        </ul>
          
    </div>
  )
}
