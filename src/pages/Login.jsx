import React from 'react'
import "../stylesheets/auth.css"
export default function Login() {
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Email </label>
          <input  placeholder='email' type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input placeholder='password' type="password" name="pass" required />
        </div>
       <button>Login</button>
       <p>
        Forgot Password?
       </p>
      </form>
    </div>
  )
}
