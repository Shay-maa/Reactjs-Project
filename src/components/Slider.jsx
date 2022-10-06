import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../images/Transactional SMS.png";
import img2 from "../images/Approved.png";
import img3 from "../images/People buying halloween stuff.png";
export default class Slider extends Component {
  render() {
    return (
      <Carousel
        variant="dark"
        className="slider"
        style={{
          backgroundColor: "#F2F2F2",
        }}
      >
        <Carousel.Item>
          <img className="d-block" src={img1} alt="First slide" />
          <h1 className="itemTitle">Handle easily</h1>
          <br></br>
          <p className="desc">
            You can pay from your Credit Card and loan through our website{" "}
            <br></br> using any Mastercard or Visa debit card, Bancnet ATM card,
            <br></br>
            UnionBank, and BPI account
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={img2} alt="Second slide"></img>

          <h1 className="itemTitle">Buy & Sell Near You</h1>
          <br></br>
          <p className="desc">
            Join the millions who buy and sell from each other <br></br>{" "}
            everyday in local communication around the world
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={img3} alt="Third slide" />

          <h1 className="itemTitle">NEW Style !!</h1>
          <br></br>

          <p className="desc">
            Clothes with a personality, made for showing off yours{" "}
          </p>
        </Carousel.Item>
      </Carousel>
    );
  }
}
