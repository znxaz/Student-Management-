import React, { Component } from "react";
import RemoveStudent from "./RemoveStudent";
class Student extends Component {
  ChangeNameHandler = () => {};
  render() {
    return (
      <div className="Student" key={this.props.id}>
        <p className="Student">{this.props.full_name}</p>
        <button onClick={() => this.ChangeNameHandler()} className="Student">
          Change Name
        </button>
        {this.props.changeName && (
          <changeName addHandler={this.props.changeName}></changeName>
        )}
        <RemoveStudent
          id={this.props.id}
          addHandler={this.props.addHandler}
        ></RemoveStudent>
      </div>
    );
  }
}

export default Student;
