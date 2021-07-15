import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import { IoIosArrowUp } from 'react-icons/io'

class Header2 extends React.Component {
    state = {
      show: false
    }

    changeBackground = () => {
      if (window.scrollY >= 1270) {
        this.setState({ show: true })
      } else {
        this.setState({ show: false })
      }
    }

    scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    render () {
      window.addEventListener('scroll', this.changeBackground)
      let jsx
      if (this.state.show) {
        jsx =
          <Navbar fixed="top" style={{ marginTop: '102px', height: '60px', backgroundColor: '#f0ebe1' }} >
            <Container className="d-flex justify-content-between">
              <IoIosArrowUp onClick={this.scrollTop} size={40} type="button" className="ml-5 nav2-text-style"></IoIosArrowUp>
              <Nav.Link className="nav2-text-style">test</Nav.Link>
              <Nav.Link className="nav2-text-style">test</Nav.Link>
              <Nav.Link className="nav2-text-style">test</Nav.Link>
              <Nav.Link className="nav2-text-style mr-5">test</Nav.Link>
            </Container>
          </Navbar>
      } else {
        jsx =
          <div></div>
      }
      return (
        <div>{jsx}</div>
      )
    }
}

export default Header2
