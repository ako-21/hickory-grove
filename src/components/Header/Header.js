import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
// import Logo from './../../images/logoplaceholder.png'
import { BiBuildingHouse } from 'react-icons/bi'

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
  <Fragment className="flex-row align-items-center">
    <Nav.Link className="mr-3" href="#/">770.123.4567</Nav.Link>
    <Nav.Link className="mr-3" href="#/">
      <BiBuildingHouse></BiBuildingHouse>
      The Space
    </Nav.Link>
    <Nav.Link>
      <Button variant="ghost" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#212529' }} className="pr-4 pl-4 button-hover">
        Book Now
      </Button>
    </Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="header" expand="lg" fixed="top" >
    <Container style={{ paddingBottom: '.5rem', paddingTop: '.5rem' }}>
      <Navbar.Brand href="#">
        <BiBuildingHouse size={60}></BiBuildingHouse>
        HickoryGrove
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto flex-row align-items-center">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
          {/* { user ? authenticatedOptions : unauthenticatedOptions } */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
