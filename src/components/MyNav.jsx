import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class MyNav extends Component {
  render() {
    return (
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">GENERAL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home/men">MEN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home/women">WOMEN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home/furniture">FURNITURE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home/books">BOOKS</Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
