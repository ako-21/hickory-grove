import React from 'react'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import { IoIosArrowUp } from 'react-icons/io'
import Header2Links from './Header2Links'

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
            <Header2Links></Header2Links>
          </Navbar>
      } else {
        jsx =
          <div></div>
      }
      return (
        <div className="section4" style= {{ width: '100%' }}>{jsx}</div>
      )
    }
}

export default Header2
