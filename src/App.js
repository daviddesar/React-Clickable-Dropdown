import React, { Component, Fragment } from "react";
import "./app.scss";

export default class App extends Component {
  state = {
    displayState: false
  }
  oncClickHandler = () => {
    this.setState({displayState: !this.state.displayState})
  }
  render() {
    let displayStyle = {display: 'none'}
    if (this.state.displayState) {
      displayStyle['display'] = 'block'
    }
    return (
      <div className="parentDiv">
        <span className="clickTrigger" onClick={() => this.oncClickHandler()
        }>Click me</span>
        <div className="innerContent" style={displayStyle}>
          <p>Hi</p>
          <p>I am dropdown inner content</p>
        </div>
      </div>
    )
  }
}
