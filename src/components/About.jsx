import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
import img1 from "../images/People of different races together.png";
export default class About extends Component {
  render() {
    return (
      <div className="container bg-light">
        <div className="bg-light mt-5 p-5 text-center">
          <h2
            style={{
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "70px",
            }}
          >
            About US
          </h2>
          <br></br>
          <p>
            Hello and welcome to ATLANTIC, the place to find the best PRODUCTS
            for every taste and occasion. We thoroughly check the quality of our
            goods, working only with reliable suppliers so that you only receive
            the best quality product.<br></br> We at ATLANTIC believe in high
            quality and exceptional customer service. But most importantly, we
            believe shopping is a right, not a luxury, so we strive to deliver
            the best products at the most affordable prices, and ship them to
            you regardless of where you are located.
          </p>
        </div>
        <div className="row bg-light">
          <div className="col-md-6">
            <ul>
              <li className="mb-3">
                <NavLink
                  className="nav-link"
                  href="https://www.facebook.com/profile.php?id=100066781802219"
                >
                  Our Facebook
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className="nav-link"
                  href="https://twitter.com/Shay_maa_"
                >
                  Our Twitter
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className="nav-link"
                  href="https://www.linkedin.com/in/shaymaa-mohamed1/"
                >
                  Our LinkedIn
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  className="nav-link"
                  href="https://github.com/Shay-maa"
                >
                  Our Github
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 bg-light">
            <img
              className="d-block"
              src={img1}
              alt="about"
              // style={{ width: "900px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
