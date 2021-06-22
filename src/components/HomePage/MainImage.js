import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'
import TheImage from './../../images/mainhouse2.jpg'

class MainImage extends React.Component {
  state = {
  }
  render () {
    return (
      <Container fluid class="bg-image" style={{ backgroundImage: `url(${TheImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container style={{ paddingTop: '62vh' }}>
          <Row className="d-flex flex-column bannerfont">
            <Col lg={5}>
              <h1 className="mb-0" style={{ fontSize: '4.25rem' }}>1234 Hickory Grove</h1>
              <p className="mt-0" style={{ fontSize: '1.8rem', textAlign: 'center' }}>Short Term Rental</p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default MainImage
