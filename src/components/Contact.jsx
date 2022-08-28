import React from 'react'
import "../stylesheets/contact.css"
import { Link } from 'react-router-dom'
export default function Contact() {
  const contacts=[{
    id:1,
    name:"Fiverr",
    img:require("../Assets/fiverr.png"),
    url:"https://www.fiverr.com/app_dev6?"
  },
  {
    id:2,
    name:"Upwork",
    img:require("../Assets/upwork.png"),
    url:"https://www.upwork.com/freelancers/~01ccbbc4d4fe220002"
  },
  {
    id:3,
    name:"Linked in",
    img:require("../Assets/linkedin.png"),
    url:"https://pk.linkedin.com/in/siyab-arshad-a0a182197"
  },
  ,
  {
    id:4,
    name:"Github",
    img:require("../Assets/github.png"),
    url:"https://github.com/SiyabArshad"
  },
  {
    id:5,
    name:"Email",
    img:require("../Assets/email.png"),
    url:"mailto:siyabarshadsatti@gmail.com"
  }
]
    return (   
    <div className='cn1' id='contact'>
    <h3>Lets Connect</h3>
    <div className="cnman">
        {
            contacts.map((item,i)=>{
                return(
                  <a className='link' href={item.url}>
                    <div key={item.id} className='cnitem'>
                         <img  src={item.img} />   
                    </div>
                  </a>
                )
            })
        }
    </div>
    <h5>siyabarshadsatti@gmail.com</h5> 
    </div>
  )
}
