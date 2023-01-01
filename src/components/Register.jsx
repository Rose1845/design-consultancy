import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
  return (
    <div className='container'>
    <form>
        <h1 className='text-center'>Register</h1>
  <div className="form-group">
    <label htmlFor="exampleInputname">Username</label>
    <input value={name}
    onChange={(e)=>setName(e.target.value)}
     type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input value={confirmPassword}
    onChange={(e)=>setConfirmPassword(e.target.value)}
    type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 <div>
 <small>Already have an Account 
    <span>
       
        <Link to='/login'>
        Login
        </Link>
    </span>
    </small>
 </div>
  <button 
  disabled={ password === !confirmPassword  }
  type="submit" className="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register