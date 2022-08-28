import React from 'react'
import "../stylesheets/auth.css"
export default function Forgot() {
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Email </label>
          <input placeholder='email' type="email" name="email" required />
        </div>
       <button>Send</button>
      
      </form>
    </div>
  )
}
