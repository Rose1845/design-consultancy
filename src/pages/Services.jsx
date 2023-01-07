import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ser from '../../public/serv.jpg'

function Services() {
  return (
   <>
   <p  style={{borderLeft:'10px 8px solid blue'}}className='text-center '>We offer a complete start to finish service, so that your perfect interiors 
    can become a reality. Once we have received your initial enquiry, we will be in 
    touch to set up a consultation, either in person or over the phone.

Once we have agreed a cost, we will then get started on your designs, 
sharing with you our progress as we go. Once we’ve agreed on a design, 
we get to work transforming your home.</p>
    <CardGroup data-aos="fade-in "
        data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <Card >
        <Card.Img classNam='rounded'variant="top" src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-2cc411f/online-decorating/wp-content/uploads/2017/03/havenly-online-interior-design-services.jpg"/>
        <Card.Body>
          <Card.Title>Havenly</Card.Title>
          <Card.Text>
            <a href="https://havenly.com/">Havenly</a>{' '}
          From decor advice or furniture recommendations to whole room designs, 
          Havenly Design offers wonderful
           correspondence with an online interior designer. The process starts 
           with taking a style quiz followed by having you upload images and measurements 
           of your space. With your information, your online interior designer proposes some themes and looks, to begin with. Then, designers present a final concept board complete with layout, new furniture, and accessories. The initial themes from a Havenly designer are in a moodboard format whereas the final concept is a 2D layered rendering. As a result, this helps to better visualize the room.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card style={{marginLeft:'5px'}}className='ms-3'>
        <Card.Img className='image-fluid'variant="top"src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-2cc411f/online-decorating/wp-content/uploads/2019/02/Online-interior-design-service-decorilla-3d-rendering.jpg" />
        <Card.Body>
          <Card.Title>Decorilla</Card.Title>
          <Card.Text>
            <a href="https://www.decorilla.com/">Decorilla</a>{' '}
          All clients experience complete and personalized online interior design
           help beginning with an initial one-on-one consultation and interactive 
           questionnaire to start. You receive design concepts from multiple designers
            based on your requirements and budget with constant designer communication.
             Next, your selected designer works with you to finalize your design in photorealistic 3D renderings (incorporating new and existing items together to scale). They also create a color palette, floor plan, and online shopping list using great designer discounts.
           {' '}
          </Card.Text>
        </Card.Body>

      </Card>
      <Card style={{marginLeft:'5px'}}>
        <Card.Img variant="top"src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-2cc411f/online-decorating/wp-content/uploads/2019/07/online-interior-design-services-Modsy.jpg" />
        <Card.Body>
          <Card.Title>Modsy</Card.Title>
          <Card.Text>
            <a href="https://www.modsy.com/">Modsy</a>{' '}
          Design is an online interior design service that allows clients to 
          see furniture products and get realistic 3D visuals of how they will 
          look in their homes. Firstly, a questionnaire including requirements, 
          room measurements, and photos allows one of Modsy’s designers to create 
          two 3D rendering options for each paid room design. Users also have the 
          ability to swap out any of the furniture with other pieces in Modsy’s 3D furniture catalog. The furniture catalog includes pieces from over one hundred vendors that clients have access to for an unlimited amount of time. For a $20 ordering fee, clients can shop on Modsy’s online interior design platform. Most importantly, Modsy Design will price match the best available online furniture pricing.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <div 
    data-aos="fade-in "
    data-aos-offset="400"
    data-aos-easing="ease-in-sine" >
      <h3 className='text-center'>Why choose us?</h3>
      <div>
        saves time
      </div>
      <div>
        saves money
      </div>
      <div>
      Convenient & Stressfree
      </div>
    </div>
   </>
    
  );
}

export default Services;