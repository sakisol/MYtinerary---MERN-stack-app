import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-user-circle" />
        {/* <i className="fas fa-home"></i> */}
        <Menu right width={200} id="push">
          <main id="page-wrap">
            <a className="menu-item">Log-in</a>
            <a className="menu-item">Create Account</a>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
