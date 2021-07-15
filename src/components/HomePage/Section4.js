import React from 'react'
import Container from 'react-bootstrap/Container'
import { IoIosArrowUp } from 'react-icons/io'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Section4 extends React.Component {
  state = {

  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render () {
    return (
      <Navbar style={{ height: '60px', backgroundColor: '#f0ebe1' }} >
        <Container className="d-flex justify-content-between">
          <IoIosArrowUp onClick={this.scrollTop} size={40} type="button" className="ml-5 nav2-text-style"></IoIosArrowUp>
          <Nav.Link className="nav2-text-style">test</Nav.Link>
          <Nav.Link className="nav2-text-style">test</Nav.Link>
          <Nav.Link className="nav2-text-style">test</Nav.Link>
          <Nav.Link className="nav2-text-style mr-5">test</Nav.Link>
        </Container>
      </Navbar>
    )
  }
}

export default Section4
