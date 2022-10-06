import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import img1 from "../images/Video calling with friends.png";

export default class ContactUS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <div className=" row bg-light m-5">
        <div
          className="bg-light  p-5 text-center col-md-6   "
          style={{ justifyContent: "center" }}
        >
          <h2
            style={{
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Hello Dear Customer
          </h2>
          <br></br>
          <form
            className="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                id="message"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn22 col-5 m-3">
              Submit
            </button>
            <button type="reset" className="btn22 col-5 m-3">
              Reset
            </button>
          </form>
        </div>
        <div className=" mt-5 p-5 col-md-6 bg-light">
          <img
            src={img1}
            alt="about"
            // style={{ width: "900px" }}
          />
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
