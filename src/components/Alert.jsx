import * as React from 'react'
import "../stylesheets/home.css"
export default function Alert() {
    const [isclose,setisclose]=React.useState(false)
    return (
    <div className='alert' style={{display:isclose?"none":"flex"}}>
        <span>
            Message display here
        </span>
        <i onClick={()=>setisclose(true)} class="fa-solid fa-xmark"></i>
    </div>
  )
}
