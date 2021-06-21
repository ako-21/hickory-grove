import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Logo from './../../images/logoplaceholder.png'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="header" expand="lg" fixed="top" >
    <Navbar.Brand href="#">
      <Image src={Logo} style={{ width: '76px', height: '76px' }} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        {/* { user ? authenticatedOptions : unauthenticatedOptions } */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
