
import * as React from 'react'
import "../stylesheets/project.css"
export default function AdminProjects() {
    return (
    <div className='proman'>
        <div className='promanch'>
            <div className='promanchch2'>
            {
                [1,2,3,4,5].map((item)=>(
              
                    <div className='projectcard'>
                        <h3>Name of the project</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, impedit odio quam officia fugit iure sed doloremque, illo, provident voluptates recusandae? Voluptatum saepe voluptatem a vero. Consectetur reiciendis beatae aliquam? 
                        </p>
                        <span className='github'>Delete</span>
                    </div>
                
                ))
            }
        </div> 
    </div>
    </div>
  )
}
