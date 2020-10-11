import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from 'react-bootstrap/Image'

const Header = ({ siteTitle }) => (
  <Navbar variant="dark" expand="sm" sticky="top" className="transparentNav">
    <div className="container my-1">
      <Navbar.Brand href="/">
        <img src={require("../images/logo_big.png")} height={"40px"}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects"> Projects </Nav.Link>
          <Nav.Link href="/research"> Research </Nav.Link>
          {/* <Nav.Link href="/contact"> Contact </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
