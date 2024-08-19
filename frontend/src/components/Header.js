import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <img src="/logo192.png" style={{ width: 50 }} alt="" /> */}
          <NavLink to="/" className=" text-light text-decoration-none text-bolder">Portal</NavLink>
          <Nav className="">
            <NavLink to="/about-us" className="mt-3 mx-2 text-light text-decoration-none">About</NavLink>
            <NavLink to="/careers" className="mt-3 mx-2 text-light text-decoration-none">Careers</NavLink>
            <NavLink to="/team" className="mt-3 mx-2 text-light text-decoration-none">Team</NavLink>
            <NavLink to="/portfolio" className="mt-3 mx-2 text-light text-decoration-none">Portfolio</NavLink>
            <NavLink to="/contact-us" className="mt-3 mx-2 text-light text-decoration-none">Contact</NavLink>
            <NavLink to="/dashboard" className="mt-3 mx-2 text-light text-decoration-none">Dashboard</NavLink>
            <NavLink to="/Register" className="mt-3 mx-2 text-light text-decoration-none">Login/SignUp</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers