import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-large.svg"
import menuIcon from "../../images/menu.svg"

class Header extends Component {
  openSidebar() {
    document.getElementById("sidebar").style.display = "block"
  }

  closeSidebar() {
    document.getElementById("sidebar").style.display = "none"
  }
  render() {
    let page = this.props.page
    return this.props.smallScreen ? (
      <div className="sidebar">
        <button onClick={this.openSidebar} className="sidebar-button-off">
          <img src={menuIcon} alt="Menu" className="menu-icon"></img>
        </button>
        <div
          class="sidebar-inner"
          style={{ display: "none" }}
          id="sidebar"
          onClick={this.closeSidebar}
        >
          <button className="sidebar-button-on">
            <img src={menuIcon} alt="Menu" className="menu-icon"></img>
          </button>
          <Link to="/" className="sidebar-link">
            <button className="sidebar-item">HOME</button>
          </Link>
          <Link to="/work" className="sidebar-link">
            <button className="sidebar-item">WORK</button>
          </Link>
          <Link to="/about" className="sidebar-link">
            <button className="sidebar-item">ABOUT</button>
          </Link>
          <Link to="/contact" className="sidebar-link">
            <button className="sidebar-item">CONTACT</button>
          </Link>
        </div>
      </div>
    ) : (
      <header className="header">
        <Link to="/">
          <button className={page === "home" ? "button-active" : "button"}>
            HOME
          </button>
        </Link>
        <Link to="/work">
          <button className={page === "work" ? "button-active" : "button"}>
            WORK
          </button>
        </Link>
        <Link to="/">
          <img src={logo} alt="Crafty Logo" className="logo"></img>
        </Link>
        <Link to="/about">
          <button className={page === "about" ? "button-active" : "button"}>
            ABOUT
          </button>
        </Link>
        <Link to="/contact">
          <button className={page === "contact" ? "button-active" : "button"}>
            CONTACT
          </button>
        </Link>
      </header>
    )
  }
}
export default Header
