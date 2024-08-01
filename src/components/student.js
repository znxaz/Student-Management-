import React, { Component } from "react";
import RemoveStudent from "./RemoveStudent";
class Student extends Component {
  ChangeNameHandler = () => {
    //setState accepts 2 parameters, the values to set and an arrow function
    this.setState({ name: "mow" });
  };
  render() {
    return (
      <div className="Student" key={this.props.key}>
        <p className="Student">{this.props.full_name}</p>
        <button onClick={() => this.ChangeNameHandler()} className="Student">Change Name</button>

        <RemoveStudent
          id={this.props.id}
          addHandler={this.props.addHandler}
          style={{flex:1}}
        ></RemoveStudent>
      </div>
    );
  }
}

export default Student;
