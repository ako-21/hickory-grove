import React, { Fragment, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
// import Logo from './../../images/logoplaceholder.png'
import { BiBuildingHouse } from 'react-icons/bi'
import { BsPeopleCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Header2Links from './Header2Links'
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
    <div className="d-flex justify-content-center nav-text-style">
      <Nav.Link className="mr-3" href="#/">678.404.2001</Nav.Link>
      <Nav.Link className="mr-3" href="#/">
        <IconContext.Provider value={{ color: 'rgb(33, 77, 103)' }}>
          <BsPeopleCircle />
        </IconContext.Provider>
        <span className="ml-1">Residents</span>
      </Nav.Link>
    </div>
    <div className="extra-nav-links hide-nav2-links">
      <Header2Links></Header2Links>
    </div>
    <Nav.Link>
      <Button variant="ghost" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#212529' }} className="pr-4 pl-4 button-hover nav-button-two">
          Apply Now
      </Button>
    </Nav.Link>
  </Fragment>
)

// const Header = ({ user }) => (
//   <Navbar className={navbar ? 'navbar-transparent' : 'navbar-solid'} expand="md" fixed="top" >
//     <Container style={{ paddingBottom: '.5rem', paddingTop: '.5rem' }}>
//       <Navbar.Brand href="#">
//         <BiBuildingHouse size={60}></BiBuildingHouse>
//         HickoryGrove
//       </Navbar.Brand>
//       <div className="nav-text-style humburger-button">
//         <Button variant="ghost" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#212529' }} className="pr-4 pl-4 button-hover nav-button-one mr-2">
//           Book Now
//         </Button>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       </div>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto flex-row align-items-center justify-content-end ">
//           { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
//           { alwaysOptions }
//           {/* { user ? authenticatedOptions : unauthenticatedOptions } */}
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// )

function Header ({ user }) {
  const [navbar, setNavbar] = useState(true)

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <Navbar className={(navbar ? 'navbar-transparent' : 'navbar-solid')} expand="md" fixed="top" >
      <Container style={{ paddingBottom: '.5rem', paddingTop: '.5rem' }}>
        <Navbar.Brand href="#">
          <BiBuildingHouse size={60}></BiBuildingHouse>
          HickoryGrove
        </Navbar.Brand>
        <div className="nav-text-style humburger-button">
          <Button variant="ghost" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#212529' }} className="pr-4 pl-4 button-hover nav-button-one mr-2">
            Apply Now
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="responsive-nav">
            { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
            { alwaysOptions }
            {/* { user ? authenticatedOptions : unauthenticatedOptions } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
