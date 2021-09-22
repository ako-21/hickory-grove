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
      anchor: null,
      links: [
        { name: 'Floor Plans', anchor: 'section3' },
        { name: 'Area', anchor: 'section6' },
        { name: 'Gallery', anchor: 'section7' },
        { name: 'Contact', anchor: '' }
      ],
      selectedNav: null
    }
    scrollNav = (event) => {
      event.preventDefault()
      // this.setState({ selectedNav: event.target.dataset.anchor })
      const id = event.target.dataset.anchor
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth', block: 'end' })
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
              <Nav.Link key={link.name} data-anchor={link.anchor} onClick={this.scrollNav} className="nav2-text-style">{link.name}</Nav.Link>
            )}
          </div>
        </Container>
      )
    }
}

export default Header2Links
