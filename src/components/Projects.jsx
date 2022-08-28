import * as React from 'react'
import "../stylesheets/project.css"
import { Link } from 'react-router-dom'
export default function Projects() {
  const [activebutton,setactivebutton]=React.useState("web")
    return (
    <div className='proman' id='projects'>
        <div className='promanch'>
            <div className='promanchch1'>
                <span style={{backgroundColor:activebutton==="web"?"#CD921E":"#2F2F2F"}} onClick={()=>setactivebutton("web")}>Web</span>
                <span style={{backgroundColor:activebutton==="mobile"?"#CD921E":"#2F2F2F"}} onClick={()=>setactivebutton("mobile")}>Mobile</span>
            </div>
            <div className='promanchch2'>
            {
                [1,2,3,4,5].map((item)=>(
                    <div className='projectcard'>
                        <h3>Name of the project</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, impedit odio quam officia fugit iure sed doloremque, illo, provident voluptates recusandae? Voluptatum saepe voluptatem a vero. Consectetur reiciendis beatae aliquam? 
                        </p>
                        <span className='github'>Github</span>
                        <Link className='link' to="/project/8666"><span className='details'>Details</span></Link>
                    </div>
                ))
            }
        </div>
        <span className='readmore'>Readmore</span> 
    </div>
    </div>
  )
}
