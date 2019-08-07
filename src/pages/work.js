import React, { Component } from "react"
import Layout from "../components/Layout/layout"

class WorkPage extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }

  render() {
    let workData = this.props.data.allWorkJson.nodes[0]
    let workItems = []
    let i = 0
    workData.work_items.forEach(item => {
      workItems.push(
        <div
          key={i}
          onClick={this.openModal.bind(this, item)}
          className={
            this.state.smallScreen ? "grid-item-small" : "work-grid-item"
          }
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "100%",
          }}
        ></div>
      )
      i++
    })
    return (
      <Layout page={"work"}>
        <h1 className="title">{workData.title}</h1>
        <div className="text">{workData.text}</div>
        <div
          className={
            this.state.smallScreen
              ? "grid-container-small"
              : "work-grid-container"
          }
        >
          {workItems}
        </div>
        <div id="modal" className="modal" onClick={this.closeModal}>
          <div
            className={
              this.state.smallScreen ? "modal-content-small" : "modal-content"
            }
          >
            <span className="modal-close">&times;</span>
            <div className="modal-grid-container">
              <div className="modal-grid-item-left">
                <span className="modal-title">{this.state.modal.name}</span>
                <p className="modal-text">{this.state.modal.description}</p>
                <p className="modal-text">
                  Completed: {this.state.modal.completed}
                </p>
              </div>
              <div className="modal-grid-item-right">
                <img
                  src={this.state.modal.image}
                  alt={this.state.modal.name}
                  className="modal-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default WorkPage

export const query = graphql`
  query {
    allWorkJson {
      nodes {
        id
        title
        description
        text
        work_items {
          name
          description
          completed
          image
        }
      }
    }
  }
`
