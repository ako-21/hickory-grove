import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TheImage from './../../images/background3.png'
import LivingRoom from './../../images/livingroom.jpg'

class Section2 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${TheImage})`, height: '600px', overflow: 'hidden', backgroundPositionX: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Row style={{ width: '80%' }}>
          <Col lg={6} md={6}>
            <h1 className="bannerfont mb-0" style={{ color: '#214d67', textAlign: 'left' }}>Choose from 3 rooms, or rent the entire space!</h1>
            <p className="font2 mb-5" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '5px' }}>Subject to Availability</p>
            <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>THE SPACE</h1>
            <p className="mt-4" style={{ width: '90%' }}>Located in Kennesaw, GA <span style={{ fontWeight: 'bold', color: '#214d67' }}>1234 Hickory Grove</span> is a renovated 3 bedroom, 2 bathroom house with a two car garage nested in a quiet family friendly subdivision. This house will accomodate guests looking for a single room, or a family looking for an entire house. A short distance from the famed &quot;battery&quot;, guest can enjoy various shopping, dining, and entertainment experiences, including dropping in on a Braves game. The house is close to Kennesaw State University, Go Owls! And, if you love the outdoors, Kennesaw Mountain is just a few minutes away. Below are a couple of amenities to make your stay more comfortable.</p>
            <div className="d-flex flex-row">
              <Col>
                <ul>
                  <li>Amenity</li>
                  <li>Amenity</li>
                  <li>Amenity</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Amenity</li>
                  <li>Amenity</li>
                </ul>
              </Col>
            </div>
          </Col>
          <Col className="d-flex justify-content-center" lg={5} md={5}>
            <img src={LivingRoom} style={{ width: '425px', height: '400px', borderStyle: 'solid', borderWidth: '3px', borderColor: 'white' }} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Section2
