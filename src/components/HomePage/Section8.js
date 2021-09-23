import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import TheImage from './../../images/image4.png'
import Bathroom from './../../images/bathroom.jpg'
import Bedroom from './../../images/bedroom.jpg'
import Kitchen from './../../images/kitchen.jpg'

class Section8 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container id="section7" className="mb-5">
        <h1 className="font3 visualize" style={{ color: '#214d67', fontWeight: 'bold' }}>Visualize It</h1>
        <Container style={{ height: '50%' }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                style= {{ maxHeight: '500px' }}
                className="d-block w-100 carousel-image"
                src={Bathroom}
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style= {{ maxHeight: '500px' }}
                className="d-block w-100 carousel-image"
                src={Bedroom}
                alt="Second slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style= {{ maxHeight: '500px' }}
                className="d-block w-100 carousel-image"
                src={Kitchen}
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    )
  }
}

export default Section8
