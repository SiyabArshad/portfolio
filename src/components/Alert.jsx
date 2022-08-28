import * as React from 'react'
import "../stylesheets/home.css"
export default function Alert({message}) {
    const [isclose,setisclose]=React.useState(false)
    return (
    <div className='alert' style={{display:isclose?"none":"flex"}}>
        <span>
          {message}
        </span>
        <i onClick={()=>setisclose(true)} class="fa-solid fa-xmark"></i>
    </div>
  )
}
