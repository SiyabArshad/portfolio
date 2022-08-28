import * as React from 'react'
import { Link,useLocation } from 'react-router-dom'
import "../stylesheets/auth.css"
import Loading from '../components/Loading'
import { getAuth,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase"
import Alert from "../components/Alert"

export default function Forgot() {
  const auth=getAuth(app)
  const [email,setemail]=React.useState("")
  const [loading,setloading]=React.useState(false)
  const [show,setshow]=React.useState(false)
  const [message,setmessage]=React.useState("")
  const resetfunction=(e)=>{
    e.preventDefault();
      setloading(true)
      sendPasswordResetEmail(auth,email,).then(()=>{
        setloading(false)
        setshow(true)
        setmessage("Recovery Email Sent")
      }).catch((e)=>{
        setloading(false)
        setshow(true)
        setmessage(e.message)
      })
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
    <div className="form">
      <form>
       {
        show &&
        <Alert message={message}></Alert>
       }
        <div className="input-container">
          <label>Email </label>
          <input value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='email' type="email" required />
        </div>
       <button type='submit' onClick={resetfunction}>Send</button>
       </form>
    </div>
  )
  }
}
