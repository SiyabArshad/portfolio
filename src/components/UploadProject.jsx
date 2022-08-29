import React from 'react'
import "../stylesheets/uploadrev.css"
import app from "../firebase"
import Loading from '../components/Loading'
import Alert from "../components/Alert"
import {createUserWithEmailAndPassword,getAuth,deleteUser,updateProfile,sendEmailVerification,signInWithEmailAndPassword} from "firebase/auth"
import {doc,setDoc,getFirestore, addDoc,updateDoc,getDocs,serverTimestamp, collection} from "firebase/firestore"
import { ref,getDownloadURL,getStorage, uploadBytes,uploadBytesResumable  } from "firebase/storage"
export default function UploadProject() {
    const db=getFirestore(app)
    const storage=getStorage(app)
    const [show,setshow]=React.useState(false)
    const [message,setmessage]=React.useState("")
    const [loading,setloading]=React.useState(false)
    const [git,setgit]=React.useState('')
    const [name,setname]=React.useState('')
    const [desc,setdesc]=React.useState('')
    const [imgurls,setimgurls]=React.useState([])
    const uploadproject=async()=>{
        setloading(true)
        try{

            await addDoc(collection(db,"projects"),{
                name:name,
                desc:desc,
                url:git,
                images:imgurls
            })
            setloading(false)
            setshow(true)
            setmessage("Uploaded")
            setTimeout(() => {
                window.location.reload(true)
            }, 1000);
        }
        catch(e){
            console.log(e)
                setloading(false)
                setshow(true)
                setmessage("Upload Failed")
        }
    }



    
    const uploadimage=(e)=>{
      e.preventDefault()
        for (var i = 0; i < e.target.files.length; i++) {
            setloading(true)
            let imageFile = e.target.files[i];
            uploadimagesfunction(imageFile).then((url)=>setimgurls(old=>[...old,url]))
        }
    }
    //for slider images
    const uploadimagesfunction=async(filename)=>{
        return new Promise((resolve,reject)=>{
        const storageRef = ref(storage, "projectimages/" + filename.name);
        const uploadTask = uploadBytesResumable(storageRef, filename);
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
            setloading(false)
          break;
      
      }
      }, 
      () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {   
        resolve(downloadURL)
        setloading(false)    
      });
      }
      );
        })

        
}

React.useState(()=>{
    setimgurls([])
},[])
    
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
        <h3>Upload Project</h3>
        <div className='source'>
            <label>Project Images</label>
            <input onChange={(e)=>uploadimage(e)} type="file" multiple required accept="image/*"></input>    
        </div>
        <div className='source'>
            <label>Name</label>    
            <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Project Name" required></input>
        </div>
        <div className='uprdesc'>
            <label>Description</label>
            <textarea onChange={(e)=>setdesc(e.target.value)} placeholder='project desc' required></textarea>
        </div>
        <div className='source'>
            <label>Github</label>    
            <input onChange={(e)=>setgit(e.target.value)} type="url" placeholder="Project url" required></input>
        </div>
        <button disabled={name===''||desc===''} onClick={uploadproject}>Upload</button>
    </div>
    </div>
 
  )
}
}
