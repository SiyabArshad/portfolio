import React from 'react'
import "../stylesheets/topbar.css"
import { saveAs } from "file-saver";

export default function Topbar({cv}) {
  const downloadfunc=()=>{
    saveAs(
      cv.url,
      "SiyabArshad_CV.pdf"
    );
  }
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
            <button onClick={downloadfunc}>
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
