import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-user-circle" />
        {/* <i className="fas fa-home"></i> */}
        <Menu right>
          <a className="menu-item">Log-in</a>
          <a className="menu-item">Create Account</a>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
