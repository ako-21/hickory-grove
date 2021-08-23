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
      <Container fluid >
        <Container fluid className="blur" style={{ backgroundImage: `url(${TheImage})` }}>
        </Container>
        <Container fluid className="bg-image" style={{ backgroundImage: `url(${TheImage})`, maxWidth: '1600px', maxHeight: '800px', backgroundPositionX: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottom: '2px solid #2f4f4f' }}>
          <Container>
            <Container style={{ paddingTop: '35rem', paddingBottom: '5rem' }}>
              <Row className="d-flex flex-column bannerfont" >
                <Col lg={5} md={12} sm={12} xl={5}>
                  <h1 className="mb-0 banner-heading bannerfont" style={{ textShadow: '-2px 2px 8px #000' }}>1234 Hickory Grove</h1>
                  <p className="mt-0 banner-subheading bannerfont" style={{ textShadow: '-2px 2px 8px #000' }}>All Inclusive Rental</p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default MainImage
