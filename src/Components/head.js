import React from "react";
import { Navbar, Nav} from "react-bootstrap"
import {Link } from "react-router-dom"
export default function NavBarr() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="">
          <Link className="ml-5 black" to="/">Home</Link>
          <Link className="ml-5 black" to="/men">Men</Link>
          <Link className="mx-5 black" to="/women">Women</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}