import React from 'react'
import {FaTwitter,FaLinkedin, FaGithub} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className='footer'>
        <div className='col d-flex d-flex justify-content-center align-items-center'>
        <p className='text-center text-white'>&copy; copyright {new Date().getFullYear()}</p>
        <div className='col d-flex justify-content-center align-items-center'>
        <Link to=''>
        <FaTwitter/>
        </Link>
       <Link to=''>
       <FaLinkedin/>
       </Link>
       <Link to=''>
       <FaGithub/>
       </Link> 
       <p className='text-white text-center'>rosevilla designs</p>
        </div>
       
        </div>
    </div>
  )
}

export default Footer