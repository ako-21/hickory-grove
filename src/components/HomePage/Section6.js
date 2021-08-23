import React from 'react'
import Container from 'react-bootstrap/Container'

class Section6 extends React.Component {
  state = {

  }

  render () {
    return (
      <Container className="mb-5">
        <Container className="pt-5">
          <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>See What&apos;s Around</h1>
          <p className="mt-3 mb-2 font2" style={{ color: '#214d67', fontWeight: 'bold', letterSpacing: '3px' }}>Subject to Availability</p>
          <p style={{ fontWeight: 'bold' }}>*All leases include access to shared spaces such as the kitchen, laundry room, entertainment room, study, etc.</p>
        </Container>
      </Container>
    )
  }
}

export default Section6
