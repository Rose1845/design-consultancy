import React from 'react'
import {FaTwitter,FaLinkedin, FaGithub} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='flex'>
        <p className='text-center text-white'>&copy; copyright {new Date().getFullYear()}</p>
        <div className='col'>
        <Link>
        <FaTwitter/>
        </Link>
       <Link>
       <FaLinkedin/>
       </Link>
       <Link>
       <FaGithub/>
       </Link>
          
        </div>
        <p className='text-white text-center'>rosevilla designs</p>
        </div>
    </div>
  )
}

export default Footer