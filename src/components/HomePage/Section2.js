import React from 'react'
import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import TheImage from './../../images/mainhouse.jpg'

class Section2 extends React.Component {
  state = {
  }
  render () {
    return (
      <Container fluid class="bg-image" style={{ backgroundImage: `url(${TheImage})`, height: '100vh', overflowY: 'hidden' }}>
        <p>fuckhole</p>
      </Container>
    )
  }
}

export default Section2