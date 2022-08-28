import React from 'react'
import "../stylesheets/technologies.css"
export default function Technologies() {
  const techs=[{
    id:1,
    name:"Nodejs",
    img:require("../Assets/node.png"),
    desc:"Javascript Runtime for Backend"
  },
  {
    id:2,
    name:"Reactjs",
    img:require("../Assets/react.png"),
    desc:"Frontend Library for UI development"
  },
  {
    id:3,
    name:"Mongo DB",
    img:require("../Assets/mongo.png"),
    desc:"A document based NoSql database"
  },
  ,
  {
    id:4,
    name:"MySQL",
    img:require("../Assets/mysql.png"),
    desc:"Based on Structure Query Language"
  },
  {
    id:5,
    name:"Firebase",
    img:require("../Assets/fire.png"),
    desc:"Firebase provides a ready-made backend system backed by Google"
  },
  {
    id:6,
    name:"React Native",
    img:require("../Assets/reactnative.png"),
    desc:"Cross Platform mobile app development Framework backed by Facebook"
  },
  {
    id:7,
    name:"Amazon Web Services",
    img:require("../Assets/aws.png"),
    desc:"Amazon web service is a cloud solutions Provider"
  },
  {
    id:8,
    name:"Spring Boot",
    img:require("../Assets/spring.png"),
    desc:"Spring Boot is an open source Java-based framework used to create a micro Service"
  }
]
    return (   
    <div className='tech1'>
    <h1>Technologies</h1>
    <div className="tecman">
        {
            techs.map((item,i)=>{
                return(
                    <div key={item.id} className='techcard'>
                        <img src={item.img}>
                        </img>
                        <div className='techcardch1'>
                            <h3 className='techhead'>
                                {item.name}
                            </h3>
                            <p className='techdesc'>
                                {item.desc}
                            </p>
                        </div>
                     </div>   
                )
            })
        }
    </div>
    </div>
  )
}
