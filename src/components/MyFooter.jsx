import React, { Component } from "react";
import { CgFacebook } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default class MyFooter extends Component {
  render() {
    return (
      <footer className="footer ">
        <div className=" icons">
          <a
            className="social-media"
            href="https://www.facebook.com/profile.php?id=100066781802219"
          >
            <CgFacebook />
          </a>
          &nbsp;&nbsp;
          <a className="social-media" href="https://twitter.com/Shay_maa_">
            <TiSocialTwitter />
          </a>
          &nbsp; &nbsp;
          <a className="social-media" href="https://github.com/Shay-maa">
            <BsGithub />
          </a>
          &nbsp; &nbsp;
          <a
            className="social-media"
            href="https://www.linkedin.com/in/shaymaa-mohamed1/"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="txt-footer">All Right Reseved to &copy; Shaymaa</p>
      </footer>
    );
  }
}
