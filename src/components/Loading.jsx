import React from 'react'
import ReactLoading from "react-loading"
export default function Loading() {
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <ReactLoading type="spinningBubbles" color="#CD921E" height="100px" width="100px" />
      </div>
  )
}
