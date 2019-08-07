import React, { Component } from "react"
import { Link } from "gatsby"
import logoWhite from "../../images/logo-white.svg"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://simplecode.io" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Simplecode. All rights reserved.
        </a>
      </footer>
    )
  }
}
export default Footer
