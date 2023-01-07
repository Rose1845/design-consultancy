import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
  return (
    <div data-aos="fade-out "
    data-aos-offset="300"
 data-aos-easing="ease-in-sine" className='container-fluid image pt-5'>
       
        <h1 
        className='text-center text-white'>Interior Design Consultancy</h1>
        <p data-os="zoom-in" 
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
     className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit 
            omnis alias quasi non animi, commodi eos vitae exercitationem officiis ea 
            quo, maxime dolore reiciendis asperiores amet repellendus accusantium libero!</p>
            <div className='d-flex justify-content-center'>
            <button style={{backgroundColor:'orange',border:' solid orange'}} className='btn btn-primary p-2'>Get Started</button>
            </div>
    </div>
  )
}

export default Home