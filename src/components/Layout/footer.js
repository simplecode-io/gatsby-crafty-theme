import React, { Component } from "react"
import { Link } from "gatsby"
import logoWhite from "../../images/logo-white.svg"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <Link to="/">
            <img
              src={logoWhite}
              alt="Crafty Footer Logo"
              className="footer-logo"
            ></img>
          </Link>
          <div>Crafty Co.</div>
        </div>
        <div className="footer-right">
          © {new Date().getFullYear()}
          {` `}
          <a href="https://simplecode.io"> Simplecode.</a> All rights reserved.
        </div>
      </footer>
    )
  }
}
export default Footer
