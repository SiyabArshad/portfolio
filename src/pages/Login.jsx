import * as React from 'react'
import { Link,useLocation } from 'react-router-dom'
import "../stylesheets/auth.css"
import Loading from '../components/Loading'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase"
import Alert from "../components/Alert"

export default function Login() {
  const auth=getAuth(app)
  const [email,setemail]=React.useState("")
  const [password,setpassword]=React.useState("")
  const [loading,setloading]=React.useState(false)
  const [show,setshow]=React.useState(false)
  const [message,setmessage]=React.useState("")
  const loginfunction=(e)=>{
    e.preventDefault();
      setloading(true)
      signInWithEmailAndPassword(auth,email,password).then(()=>{
        setloading(false)
        setshow(true)
        setmessage("Logged in")
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
        <div className="input-container">
          <label>Password </label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' type="password" required />
        </div>
       <button type='submit' onClick={loginfunction}>Login</button>
       <p>
        <Link to="/reset" className='link'>
        Forgot Password?
        </Link>
       </p>
      </form>
    </div>
  )
  }
}
