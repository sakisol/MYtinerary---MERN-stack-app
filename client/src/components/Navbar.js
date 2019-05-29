import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-user-circle" />
        <Menu right width={300} id="push">
          <main id="page-wrap">
            <a className="menu-item">Side</a> <br />
            <a className="menu-item">bar</a>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
