import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { BiMessageDetail } from 'react-icons/bi'

function ContactForm () {
  const [state, handleSubmit] = useForm('mnqlwooa')
  if (state.succeeded) {
    return <p>Thanks for contacting us. We&apos;ll be in touch shortly!</p>
  }
  return (
    <Container className="section9" style={{ backgroundColor: 'rgb(33,77,103)', maxWidth: '1900px', overflow: 'hidden', backgroundPositionX: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Container style={{ height: '100%' }}>
        <Row style={{ height: '100%' }}>
          <Col lg={6}>
            <h1 className="font3 mt-5" style={{ color: 'white', fontWeight: 'bold' }}>Let&apos;s Talk</h1>
            <div className="font2 hide-contact" style={{ color: 'white', fontSize: '1.55rem', height: '400px' }}>
              <div>
                <p className="">You can call or text at <span style={{ fontWeight: 'bold', marginBottom: '0' }}>678.404.2001</span></p>
                <Row className="mb-3">
                  <Col>
                    <div className="d-flex align-items-center" style={{ height: '37px' }}>
                      <div className="" style={{ backgroundColor: 'white', height: '5%', width: '100%' }}></div>
                    </div>
                  </Col>
                  <Col lg={1} md={1} sm={1} xs={1} className="d-flex justify-content-center">
                    <IconContext.Provider value={{ color: 'white', className: '' }}>
                      <div>
                        <FaPhoneSquareAlt />
                      </div>
                    </IconContext.Provider>
                  </Col>
                  <Col className="">
                    <div className="d-flex align-items-center" style={{ height: '100%' }}>
                      <div className="" style={{ backgroundColor: 'white', height: '5%', width: '100%' }}></div>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <p className="" style={{ textAlign: 'center' }}>Or, Fill out the form</p>
                  <IconContext.Provider value={{ color: 'white', className: '' }}>
                    <div>
                      <IoIosArrowRoundForward />
                    </div>
                  </IconContext.Provider>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={6} className="align-self-center">
            <div className="hide-number">
              <Row className="mb-1 mt-3 d-flex justify-content-center">
                <IconContext.Provider value={{ color: 'white', className: '' }}>
                  <div className="mr-1">
                    <FaPhoneSquareAlt size={30} />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: 'white', className: '' }}>
                  <div className="ml-1">
                    <BiMessageDetail size={30} />
                  </div>
                </IconContext.Provider>
              </Row>
              <Row className="mb-3 d-flex justify-content-center">
                <p className="font2" style={{ color: 'white', fontWeight: 'bold', letterSpacing: '.2rem', fontSize: '2rem' }}>678.404.2001</p>
              </Row>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <p className="font2" style={{ color: 'white', fontWeight: 'bold' }}>We look forward to hearing from you!</p>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  id="first-name"
                  type="first-name"
                  name="first-name"
                  placeholder="First Name*"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  id="last-name"
                  type="last-name"
                  name="last-name"
                  placeholder="Last Name*"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  id="message"
                  name="message"
                  as="textarea"
                  placeholder="What Can We Do For You?*"
                  rows={3}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Form.Text className="font2" style={{ color: 'white' }}>
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Button type="submit" variant="ternary" disabled={state.submitting}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
function Section9 () {
  return (
    <ContactForm />
  )
}
export default Section9
