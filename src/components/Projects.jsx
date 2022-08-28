import * as React from 'react'
import "../stylesheets/project.css"
import { Link } from 'react-router-dom'
export default function Projects({projects}) {
    const[index,setindex]=React.useState(5)
    return (
    <div className='proman' id='projects'>
        <div className='promanch'>
          <h1>Projects</h1>
            <div className='promanchch2'>
            {
                projects.slice(0,index).map((item)=>(
                    <div className='projectcard'>
                        <h3>{item.data.name}</h3>
                        <p>
                        {item.data.desc}
                        </p>
                        <a className='link' href={item.data.url}><span className='github'>Github</span></a>
                        <Link className='link' to={`project/${item.id}`}><span className='details'>Details</span></Link>
                    </div>
                ))
            }
        </div>
       {
        index>5?
        <span onClick={()=>setindex(5)} className='readmore'>showLess</span>
        :
        <span onClick={()=>setindex(projects?.length)} className='readmore'>Readmore</span>
       } 
    </div>
    </div>
  )
}
