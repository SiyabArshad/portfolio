import * as React from 'react'
import "../stylesheets/uploadcv.css"
import app from "../firebase"
import Loading from '../components/Loading'
import Alert from "../components/Alert"
import {createUserWithEmailAndPassword,getAuth,deleteUser,updateProfile,sendEmailVerification,signInWithEmailAndPassword} from "firebase/auth"
import {doc,setDoc,getFirestore, addDoc,updateDoc,getDocs,serverTimestamp, collection} from "firebase/firestore"
import { ref,getDownloadURL,getStorage, uploadBytes,uploadBytesResumable  } from "firebase/storage"
export default function Uploadcv() {
  const db=getFirestore(app)
  const storage=getStorage(app)
  const [loading,setloading]=React.useState(false)
  const [show,setshow]=React.useState(false)
  const [message,setmessage]=React.useState("")
  const [file,setfile]=React.useState(null)
  const uploadcvfunction=async(e)=>{
    e.preventDefault()
    setloading(true)
    if(file===null)
    {
      setloading(false)
      setshow(true)
      setmessage("File is empty")
      return
    }
    else
    { 
      setloading(true)
      const storageRef = ref(storage, 'cv/' + file.name);
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
      updateDoc(doc(db,"cv","nOTAwSPcZeQZeUG1jbn8"),{
        url:downloadURL
      }).then(()=>{
        setloading(false)
        setshow(true)
        setmessage("Cv Uploaded")
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
    <div className='upc'>
    <div className='upcmain'>
      {
        show && <Alert message={message}></Alert>
      }
        <h3>Upload Cv</h3>
        <input type="file" onChange={(e)=>setfile(e.target.files[0])} name="upload" accept="application/pdf,application/vnd.ms-excel" required/>
        <button onClick={uploadcvfunction}>Upload</button>
    </div>
    </div>
  )
}
}