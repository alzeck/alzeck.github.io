import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


const Header = ({ siteTitle }) => (
  <Navbar variant="dark" expand="sm" sticky="top" className="transparentNav">
    <div className="container my-1">
      <Navbar.Brand href="/">
        <img alt={"Alzeck-Logo"} src={require("../images/logo_big.png")} height={"40px"}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={"border-0"} />
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
