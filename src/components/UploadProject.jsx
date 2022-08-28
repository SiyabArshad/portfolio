import React from 'react'
import "../stylesheets/uploadrev.css"
export default function UploadProject() {
  return (
    <div className='upr'>
    <div className='uprmain'>
        <h3>Upload Project</h3>
        <div className='source'>
            <label>Project Images</label>
            <input type="file" multiple required accept="image/*"></input>    
        </div>
        <div className='source'>
            <label>Name</label>    
            <input type="text" placeholder="Project Name" required></input>
        </div>
        <div className='uprdesc'>
            <label>Description</label>
            <textarea placeholder='project desc' required></textarea>
        </div>
        <div className='source'>
            <label>Github</label>    
            <input type="url" placeholder="Project url" required></input>
        </div>
        <div className='source'>
        <label>Project Video</label>
        <input type="file" required accept="video/*"></input>
        </div>
        <button>Upload</button>
    </div>
    </div>
 
  )
}
