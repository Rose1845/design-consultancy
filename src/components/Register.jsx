import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '.././firebase'

const Register = () => {
  const navigate=useNavigate()
    // const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const [confirmPassword,setConfirmPassword]=useState("")
    const register=async()=>{
      try{
        await createUserWithEmailAndPassword(auth,email,password)
        navigate('/login')
      }
      catch(err){
        console.log(err);
      }
    }
    ///GOOGLE SIGN IN

    


  return (
    <div style={{flexDirection:'column'}} className='register container d-flex justify-content-center align-items-center'>
    <form>
        <h1 className='text-center text-white'>Sign Up</h1>
  {/* <div className="form-group">
    <label htmlFor="exampleInputname">Username</label>
    <input value={name}
    onChange={(e)=>setName(e.target.value)}
     type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
  </div> */}

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={email} 
     onChange={(e)=>setEmail(e.target.value)}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* S */}
 <div>
 <small>Already have an Account ?
        <Link to='/login'>
        Login
        </Link>
    </small>
 </div>
 {' '}
  <button 
  disabled={ !password || !email }
  onClick={register}

  type="submit" className="btn btn-primary">Register</button>
</form>

    </div>
  )
}

export default Register