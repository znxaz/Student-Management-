import React, { Component } from "react";
import "./styles/global.css";
class StudentContainer extends Component {
  render() {
    return (
      <div className="StudentContainer">
        {this.props.children}
      </div>
    );
  }
}

export default StudentContainer;
