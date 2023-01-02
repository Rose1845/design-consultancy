import React from 'react'

const Contact = () => {
  return (
    <div style={{flexDirection:'column'}}className='d-flex justify-content-center align-items-center '>
      <h2>Describe your design and let us know</h2>
        <form className='d-flex justify-content-center align-items-center form-group'action="">
           <div className='row'>
           <div className='col'>
           <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input className='form-control'type="name"placeholder='Please enter your name' />
            </div>
            <div className='form-group'>
                <label htmlFor="name">Project Type</label>
                <select className='form-control' name="project" id="">
                  <option value="hotel">hotel Design</option>
                  <option value="apartment">Apartment Design</option>
                  <option value="villa">Villa Design</option>
                </select>
            </div>
           </div>
           <div className='col'>
           <div className='form-group'>
                <label htmlFor="name">Email</label>
                <input className='form-control'type="email"placeholder='Please enter your email address' />
            </div>
            <div className='form-group'>
                <label htmlFor="name">Phone Number</label>
                <input className='form-control'type="tel"placeholder='Please enter your phone number' />
            </div>
           </div>
            <div>
              <div className='form-group mt-3'>
                <textarea name="" id="" cols="30" rows="5"placeholder='Describe your issue'></textarea>
              </div>
            <button className='mt-3 btn btn-primary'>submit</button>
            </div>
           </div>
        </form>
    </div>
  )
}

export default Contact