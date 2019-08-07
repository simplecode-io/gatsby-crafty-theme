import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
class layout extends Component {
  state = {
    smallScreen: false,
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
  }
  render() {
    const { children, page } = this.props
    return (
      <div className="main">
        <Header page={page} smallScreen={this.state.smallScreen} />
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default layout
