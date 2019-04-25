import React, { Component } from "react";
import { Link, Navlink } from "react-router-dom";

class Bottomnav extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/login">Log-in</Link>
        <Link to="/createaccount">Create Account</Link>
      </nav>
    );
  }
}
export default Bottomnav;
