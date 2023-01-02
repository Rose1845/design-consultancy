import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  return (
   <>
   <p>We offer a complete start to finish service, so that your perfect interiors 
    can become a reality. Once we have received your initial enquiry, we will be in 
    touch to set up a consultation, either in person or over the phone.

Once we have agreed a cost, we will then get started on your designs, 
sharing with you our progress as we go. Once we’ve agreed on a design, 
we get to work transforming your home.</p>
    <CardGroup data-aos="fade-in "
        data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Villa Design</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Apartment</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Hotel</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <div 
    data-aos="fade-in "
    data-aos-offset="400"
    data-aos-easing="ease-in-sine" >
      <h3 className='text-center'>Why choose us?</h3>
    </div>
   </>
    
  );
}

export default Services;