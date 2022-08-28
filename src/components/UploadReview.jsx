import React from 'react'
import "../stylesheets/uploadrev.css"
import app from "../firebase"
import {createUserWithEmailAndPassword,getAuth,deleteUser,updateProfile,sendEmailVerification,signInWithEmailAndPassword} from "firebase/auth"
import {doc,setDoc,getFirestore, addDoc,updateDoc,getDocs,serverTimestamp, collection} from "firebase/firestore"
import { ref,getDownloadURL,getStorage, uploadBytes,uploadBytesResumable  } from "firebase/storage"
import Loading from '../components/Loading'
import Alert from "../components/Alert"
export default function UploadReview() {
  const db=getFirestore(app)
  const storage=getStorage(app)
  const [loading,setloading]=React.useState(false)
  const [show,setshow]=React.useState(false)
  const [message,setmessage]=React.useState("")
  const [file,setfile]=React.useState('')
  const [source,setsource]=React.useState('')
  const [name,setname]=React.useState('')
  const [rev,setrev]=React.useState('')


  const uploadreviewfunction=async(e)=>{
    e.preventDefault()
    setloading(true)
    if(file===''||name===''||source===''||rev==='')
    {
      setloading(false)
      setshow(true)
      setmessage("Fields are empty")
      return
    }
    else
    { 
      setloading(true)
      const storageRef = ref(storage, 'review/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
    (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
    }, 
    (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
       setloading(false)
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        setloading(false)
        // User canceled the upload
        break;
    
      // ...
    
      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        setloading(false)
        break;
    
    }
    }, 
    () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {   
      addDoc(collection(db,"reviews"),{
        review:rev,
        platform:source,
        name:name,
        profile:downloadURL
      }).then(()=>{
        setloading(false)
        setshow(true)
        setmessage("Review Uploaded")
        setTimeout(() => {
          window.location.reload(true)
        }, 1000);
      }).catch(()=>{
        setloading(false)
        setshow(true)
        setmessage("Upload Failed")
      })
   
      
    });
    }
    );
    }
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
    <div className='upr'>
    <div className='uprmain'>
      {
        show && <Alert message={message}></Alert>
      }
        <h3>Upload Review</h3>
        <div className='source'>
            <label>Source</label>
            <select value={source} onChange={(e)=>setsource(e.target.value)}>
            <option value="Upwork">Upwork</option>
            <option value="Fiverr">Fiverr</option>
            <option value="Others">Others</option>
        </select>
        </div>
        <div className='source'>
            <label>Name</label>    
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="Client Name" required></input>
        </div>
        <div className='uprdesc'>
            <label>Review</label>
            <textarea onChange={(e)=>setrev(e.target.value)} value={rev} placeholder='review'></textarea>
        </div>
        <div className='source'>
        <label>Client Image</label>
        <input type="file" onChange={(e)=>setfile(e.target.files[0])} required accept="image/*"></input>
        </div>
        <button onClick={uploadreviewfunction}>Upload</button>
    </div>
    </div>
 
  )
}
}