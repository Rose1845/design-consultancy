import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '.././firebase'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  const navigate=useNavigate()
  const provider = new GoogleAuthProvider();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const login = async(e)=>{
      e.preventDefault()
      try{
        await signInWithEmailAndPassword(auth,email,password)
        navigate('/services')
      }catch(err){
        console.log(err.message)
        
      }
    }
    //google
    const google=()=>{
      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    navigate('/services')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }
  return (
    <div style={{flexDirection:'column'}} className='login container d-flex justify-content-center align-items-center'>
      <h1 className='text-center text-white'>Sign In</h1>
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
 <small className='d-flex'>
  <p>Don't have an Account ?</p>{' '}
  <span>
  
        <Link to='/register'>
       Register
        </Link>
    </span>
 </small>
  <button 
  onClick={login}type="submit" className="btn btn-primary">Login</button>
</form>
<div className='text-center '>
  OR
</div>
<div>
  <button style={{padding:'16px 12px',backgroundColor:'transparent',border:'1px solid blue' }}onClick={google}><FcGoogle/>{' '}SIGN IN WITH GOOGLE</button>
</div>
    </div>
  )
}

export default Login