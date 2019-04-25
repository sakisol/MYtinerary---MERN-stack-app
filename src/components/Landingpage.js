import React, { Component } from "react";
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import circledright from "../images/circledright.png";
import Bottomnav from "./Bottomnav";

class Landingpage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="logo">
          <img className="mainlogo" src={MYtineraryLogo} alt="mainlogo" />
        </div>

        <div className="maintext">
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>

        <div className="maintext">
          <p>Start browsing</p>
        </div>

        <div className="circle">
          <img className="circleR" src={circledright} alt="circleR" />
        </div>

        <div className="maintext">
          <p>Want to build your own MYtinerary?</p>
        </div>
        <Bottomnav />
      </div>
    );
  }
}
export default Landingpage;
