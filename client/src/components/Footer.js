import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/">
          <i className="fas fa-home" />
        </Link>
      </div>
    );
  }
}
export default Footer;
