import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { GoDeviceCamera } from 'react-icons/go'
import { MdCamera } from 'react-icons/md'
import { IconContext } from 'react-icons'

class Section7 extends React.Component {
  state = {

  }

  render () {
    return (
      <Container fluid>
        <Row className="mb-5 mt-5 pr-5 pl-5">
          <Col>
            <div className="align-items-center" style={{ height: '100%' }}>
              <div className="section7" style={{ backgroundColor: 'rgb(33, 77, 103)', height: '3%' }}></div>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1} className="d-flex justify-content-center">
            <IconContext.Provider value={{ color: '#fcba08', className: 'camera-icon' }}>
              <div>
                <MdCamera />
              </div>
            </IconContext.Provider>
          </Col>
          <Col>
            <div className="section7" style={{ backgroundColor: 'rgb(33, 77, 103)', height: '3%' }}></div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Section7
