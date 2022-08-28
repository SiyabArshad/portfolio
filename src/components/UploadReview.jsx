import React from 'react'
import "../stylesheets/uploadrev.css"
export default function UploadReview() {
  return (
    <div className='upr'>
    <div className='uprmain'>
        <h3>Upload Review</h3>
        <div className='source'>
            <label>Source</label>
            <select>
            <option>Upwork</option>
            <option>Fiverr</option>
            <option>Others</option>
        </select>
        </div>
        <div className='source'>
            <label>Name</label>    
            <input type="text" placeholder="Client Name" required></input>
        </div>
        <div className='uprdesc'>
            <label>Review</label>
            <textarea placeholder='review'></textarea>
        </div>
        <div className='source'>
        <label>Client Image</label>
        <input type="file" required accept="image/*"></input>
        </div>
        <button>Upload</button>
    </div>
    </div>
 
  )
}
