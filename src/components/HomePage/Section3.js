import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsHouseDoor } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Bathroom from './../../images/bathroom.jpg'
import Bedroom from './../../images/bedroom.jpg'
import Kitchen from './../../images/kitchen.jpg'

class Section3 extends React.Component {
  state = {
    show: false,
    currentTitle: '',
    listArray: [
      { image: '', title: 'The 1234', space: 'Entire House', feature: '3 beds / 2.5 baths', sqft: '1800 SQFT' },
      { image: '', title: 'The Suite', space: 'Master Bedroom', feature: 'Private bath w/ tub', sqft: '400 SQFT' },
      { image: '', title: 'The Roommate', space: 'Bedroom', feature: 'Shared Bathroom', sqft: '200 SQFT' },
      { image: '', title: 'The Nomad', space: 'Shared Space', feature: 'Shared Bathroom', sqft: '200 SQFT' }
    ]
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleShow = (event) => {
    event.preventDefault()
    this.setState({ currentTitle: event.target.dataset.name })
    this.setState({ show: true })
  }
  render () {
    return (
      <Container className="mb-5">
        <Container className="pt-5">
          <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>Booking Options</h1>
          <p className="mt-3 mb-5 font2" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '3px' }}>A Reservation Type Available Regardless of Party Size</p>
          <ListGroup className="mt-5">
            {this.state.listArray.map(item =>
              <ListGroup.Item key={item.title} type="button" className="mb-4">
                <Row>
                  <Col lg={4} xl={4} md={12} className="d-flex list-image">
                    <BsHouseDoor className="mr-4" size={80}></BsHouseDoor>
                    <p className="font2" style={{ fontWeight: '900', fontSize: '26px' }}>{item.title}</p>
                  </Col>
                  <Col className="d-flex align-items-center list-area-margins-top list-area-row" style={{ justifyContent: 'space-evenly' }} lg={7} xl={7} md={12}>
                    <p className="d-flex mb-0 font3" >{item.space}</p>
                    <p className="d-flex mb-0 font3">{item.feature}</p>
                    <p className="d-flex mb-0 font3">{item.sqft}</p>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center list-area-margins-top list-area-margins-bottom" lg={1} xl={1} md={12}>
                    <Button data-name={item.title} onClick={this.handleShow} variant="ghost" className="font button-hover" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#fcba08', color: '#214d67' }}>Details</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Container>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>{this.state.currentTitle}</h1>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <Carousel fade interval={1000} className="mt-3 mb-3" style={{ width: '80%' }}>
              <Carousel.Item>
                <img className="resp-img" style={{ width: '100%', border: '2px solid #2f4f4f' }} src={Kitchen} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="resp-img" style={{ width: '100%', border: '2px solid #2f4f4f' }} src={Bedroom} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="resp-img" style={{ width: '100%', border: '2px solid #2f4f4f' }} src={Bathroom} />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
    )
  }
}

export default Section3
