import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import TheImage from './../../images/image4.png'
import Lexus from './../../images/lexuspng.png'

class Section5 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container fluid className="d-flex flex-column justify-content-center" style={{ backgroundColor: 'rgb(33,77,103)', height: '600px', wmaxWidth: '1900px', overflow: 'hidden', backgroundPositionX: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col className="d-flex flex-column justify-content-center" xl={5} lg={5} md={12} sm={12}>
              <h1 className="font3" style={{ color: 'white', fontWeight: 'bold', marginBottom: '70px', fontSize: '2.5rem' }}>Need Transportation?</h1>
              <h1 className="bannerfont mb-2" style={{ color: 'white', textAlign: 'left', fontSize: '28px' }}>Book AN AVAILABLE RENTAL CAR WITH THE UNIT</h1>
              <p className="font2 mb-3" style={{ color: 'white', fontWeight: 'bold', letterSpacing: '3px' }}>Subject to Availability | Rates Apply</p>
              <Button variant="ternary" className="mt-2">See More</Button>
            </Col>
            <Col className="lexus-col" xl={7} lg={7} md={12} sm={12}>
              <img id="imgsect5" src={Lexus} />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Section5
