import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class MyHeader extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="navv">
        <h1 className="logo App-logo">ATLANTIC</h1>
        <Nav className="me-auto ">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/products"> Products</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contactus">Contact US</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
