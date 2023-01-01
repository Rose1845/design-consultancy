import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
  return (
    <div className='container-fluid image pt-5'>
       
        <h1 data-os="zoom-in" className='text-center text-white'>Interior Design Consultancy</h1>
        <p data-aos="fade-out "
        data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit 
            omnis alias quasi non animi, commodi eos vitae exercitationem officiis ea 
            quo, maxime dolore reiciendis asperiores amet repellendus accusantium libero!</p>
    </div>
  )
}

export default Home