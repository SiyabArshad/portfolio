import React from 'react'
import "../stylesheets/topbar.css"
export default function Topbar() {
  return (
    <div className='tpbman'>
        <div className='tpbch1'>
            <span className='tpbhey'>Hey!</span>
            <br></br>
            <span className='tpbname1'>I'm </span>
            <span className='tpbname2'>Siyab Arshad</span>
            <br></br>
            <span className='tpbname3'>an FullStack Developer.</span>
            <div className='tpbdesc'>
            <button>
                Download CV
            </button>
        </div>
        </div>

        <div className='tpbch2'>
            <img src={require("../Assets/BulletPoints.png")}></img>
        </div>
    
    </div>
  )
}
