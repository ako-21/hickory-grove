import React from 'react'
// import Container from 'react-bootstrap/Container'
// import { IoIosArrowUp } from 'react-icons/io'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Header2Links from '../Header/Header2Links'

class Section4 extends React.Component {
  state = {

  }

  render () {
    return (
      <div className="section4">
        <Navbar style={{ height: '60px', backgroundColor: '#f0ebe1' }} >
          <Header2Links></Header2Links>
        </Navbar>
      </div>
    )
  }
}

export default Section4
