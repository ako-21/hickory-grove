import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsHouseDoor } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'

class Section3 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container className="mb-5">
        <Container className="pt-5">
          <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>Booking Options</h1>
          <p className="mt-3 mb-5 font2" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '3px' }}>A Reservation Type Available Regardless of Party Size</p>
          <ListGroup className="mt-5">
            <ListGroup.Item type="button" className="mb-4">
              <Row>
                <Col lg={4} xl={4} className="d-flex flex-row">
                  <BsHouseDoor className="mr-4" size={80}></BsHouseDoor>
                  <p className="font2" style={{ fontWeight: '900', fontSize: '26px' }}>ROOM 1</p>
                </Col>
                <Col className="d-flex align-items-center" style={{ justifyContent: 'space-evenly' }} lg={8} xl={8}>
                  <p className="d-flex mb-0 font3" >specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <Button variant="ghost" className="font button-hover" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#fcba08', color: '#214d67' }}>Images</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item type="button" className="mb-4">
              <Row>
                <Col lg={4} xl={4} className="d-flex flex-row">
                  <BsHouseDoor className="mr-4" size={80}></BsHouseDoor>
                  <p className="font2" style={{ fontWeight: '900', fontSize: '26px' }}>ROOM 1</p>
                </Col>
                <Col className="d-flex align-items-center" style={{ justifyContent: 'space-evenly' }} lg={8} xl={8}>
                  <p className="d-flex mb-0 font3" >specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <Button variant="ghost" className="font button-hover" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#fcba08', color: '#214d67' }}>Images</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item type="button" className="mb-4">
              <Row>
                <Col lg={4} xl={4} className="d-flex flex-row">
                  <BsHouseDoor className="mr-4" size={80}></BsHouseDoor>
                  <p className="font2" style={{ fontWeight: '900', fontSize: '26px' }}>ROOM 1</p>
                </Col>
                <Col className="d-flex align-items-center" style={{ justifyContent: 'space-evenly' }} lg={8} xl={8}>
                  <p className="d-flex mb-0 font3" >specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <Button variant="ghost" className="font button-hover" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#fcba08', color: '#214d67' }}>Images</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item type="button">
              <Row>
                <Col lg={4} xl={4} className="d-flex flex-row">
                  <BsHouseDoor className="mr-4" size={80}></BsHouseDoor>
                  <p className="font2" style={{ fontWeight: '900', fontSize: '26px' }}>ROOM 1</p>
                </Col>
                <Col className="d-flex align-items-center" style={{ justifyContent: 'space-evenly' }} lg={8} xl={8}>
                  <p className="d-flex mb-0 font3" >specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <p className="d-flex mb-0 font3">specification</p>
                  <Button variant="ghost" className="font button-hover" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#fcba08', color: '#214d67' }}>Images</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Container>
    )
  }
}

export default Section3
