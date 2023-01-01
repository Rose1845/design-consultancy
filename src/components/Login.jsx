import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div className='container'>
        <form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input  value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 <small>Don't have an Account ?
 <span>
    {""}
        <Link to='/register'>
       Register
        </Link>
    </span>
 </small>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login