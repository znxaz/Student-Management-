import React, { Component } from "react";
import "./styles/global.css";
class RemoveStudent extends Component {
  removeStudent = () => {
    this.props.addHandler(this.props.id);
  };
  render() {
    return (
      <div onClick={() => this.removeStudent()} className="RemoveStudent">
        X
      </div>
    );
  }
}

export default RemoveStudent;
