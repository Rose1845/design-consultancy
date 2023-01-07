import React ,{useState}from 'react'

const About = () => {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
 
  return (
    <div data-aos="fade-in "
    data-aos-offset="300"
 data-aos-easing="ease-in-sine" className='container'>
        <h1 className='text-center'>About Us</h1>
        <div className="jumbotron">
            <h1>Design Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias praesentium laboriosam ratione molestias nulla!</p>
            {readMore && extraContent}
            <button 
            onClick={()=>setReadMore(!readMore)}
            className='btn btn-primary'>{readMore ? 'READ LESS' : 'READ MORE'}</button>
        </div>
    </div>
  )
}

export default About