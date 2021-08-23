import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TheImage from './../../images/image4.png'
import LivingRoom from './../../images/livingroom.jpg'

class Section2 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container fluid className="d-flex flex-column justify-content-center" style={{ backgroundImage: `url(${TheImage})`, height: '600px', wmaxWidth: '1900px', overflow: 'hidden', backgroundPositionX: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col xl={6} lg={6} md={12} sm={12}>
              <h1 className="bannerfont mb-0" style={{ color: '#214d67', textAlign: 'left', fontSize: '28px' }}>Comfortable Space, Great Location, Great Amenities!</h1>
              <p className="font2 mb-1" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '3px' }}>Fully Furnished</p>
              <p className="font2 mb-3" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '3px' }}>Subject to Availability</p>
              <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>THE SPACE</h1>
              <p className="mt-3" style={{ fontSize: '14px' }}>Located in Kennesaw, GA <span style={{ fontWeight: 'bold', color: '#214d67' }}>1234 Hickory Grove</span> is a renovated 3 bedroom, 2 bathroom house with a two car garage nested in a quiet family friendly subdivision. This house will accommodate tenants looking for a coliving experience, where each occupant has a private lodge but shares some areas of the house. A short distance from the famed &quot;battery&quot;, tenants can enjoy various shopping, dining, and entertainment experiences. The house is close to Kennesaw State University, Go Owls! And, if you love the outdoors, Kennesaw Mountain is just a few minutes away. Below are a couple of amenities to make your stay more comfortable.</p>
              <div className="d-flex flex-row">
                <Col>
                  <ul style={{ fontSize: '14px' }}>
                    <li>Fully Furnished</li>
                    <li>Free WIFI</li>
                    <li>Utilities Included</li>
                  </ul>
                </Col>
                <Col>
                  <ul style={{ fontSize: '14px' }}>
                    <li>Study Room</li>
                    <li>Washer and Dryer Available</li>
                    <li>Pet Friendly</li>
                  </ul>
                </Col>
              </div>
            </Col>
            <Col className="section2-img" xl={5} lg={5} md={0} sm={0}>
              <img id="imgsect2" src={LivingRoom} style={{ width: '425px', height: '400px', borderStyle: 'solid', borderWidth: '5px', borderColor: '#2f4f4f' }} />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Section2
