import * as React from 'react'
import "../stylesheets/uploadcv.css"
export default function Uploadcv() {
  return (
    <div className='upc'>
    <div className='upcmain'>
        <h3>Upload Cv</h3>
        <input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" required/>
        <button>Upload</button>
    </div>
    </div>
  )
}
