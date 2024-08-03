import React, { Component } from "react";

class DeleteMessage extends Component {
  render() {
    return (
      <div className="DeleteMessageConatiner">
        <div className="DeleteMessage">
          <h3 className="DeleteMessage">Are You Sure?</h3>
          <button className="YesButton" onClick={()=>this.props.addHandler()}>Yes</button>
          <button className="CancelButton" onClick={()=>this.props.addHandler()}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default DeleteMessage;
