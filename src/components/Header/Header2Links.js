import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import { IoIosArrowUp } from 'react-icons/io'

class Header2Links extends React.Component {
    state = {
      links: [ 'link1', 'link2', 'link3', 'link4' ]
    }

    scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    render () {
      return (
        <Container className="nav2-link-position">
          <IoIosArrowUp onClick={this.scrollTop} size={40} type="button" className="ml-3 nav2-text-style col-1 scroll-to-top"></IoIosArrowUp>
          <div className="extra-nav-links">
            {this.state.links.map(link =>
              <Nav.Link key={link} className="nav2-text-style">{link}</Nav.Link>
            )}
          </div>
        </Container>
      )
    }
}

export default Header2Links
