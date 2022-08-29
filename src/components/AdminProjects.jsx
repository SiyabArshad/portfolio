
import * as React from 'react'
import "../stylesheets/project.css"
import Loading from "../components/Loading"
import {doc,setDoc,getFirestore, addDoc, getDocs,collection,getDoc,serverTimestamp, deleteDoc,updateDoc,query,where,orderBy,limit, startAt} from "firebase/firestore"
import app from '../firebase'
export default function AdminProjects({projects}) {
    const db=getFirestore(app)
    const[loading,setloading]=React.useState(false)
    const deletefunction=async(id)=>{
        setloading(true)
        await deleteDoc(doc(db,"projects",id))
        window.location.reload(true)
        setloading(false)
    }
    if(loading)
    {
      return(
        <Loading></Loading>
      )
    }
    else
    {
      return (
    <div className='proman'>
        <div className='promanch'>
            <div className='promanchch2'>
            {
                projects?.map((item)=>(
              
                    <div className='projectcard'>
                        <h3>{item.data.name}</h3>
                        <p>
                          {
                            item.data.desc.slice(0,300)
                          } 
                          .....
                        </p>
                        <span onClick={()=>deletefunction(item.id)} className='github'>Delete</span>
                    </div>
                
                ))
            }
        </div> 
    </div>
    </div>
  )
}
}