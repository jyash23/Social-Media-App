import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
      <div className='left'>
        <h1>Hello World</h1>
        <p>

        </p>
        <span>Don't you have an account</span>
        <Link to="/register">
        <button type='button'>Register</button>
        </Link>
      </div>
      <div className='right'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Username'/>
            <input type='password' placeholder='Password'/>
            <button type='button'>Login</button>
        </form>
      </div>
        
      </div>
    </div>
  )
}

export default Login
