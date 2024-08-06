import React, { Component } from "react";
import "./styles/global.css";

class DeleteMessage extends Component {
  render() {
    return (
      <div className="DeleteMessageContainer">
        <div className="DeleteMessage">
          <h3>Are You Sure?</h3>
          <div className="ButtonContainer">
          <button className="YesButton" onClick={this.props.removeStudent}>Yes</button>
          <button className="CancelButton" onClick={this.props.cancelDelete}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteMessage;
