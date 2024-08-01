import "./App.css";
import AddStudnet from "./components/AddStudnet";
import Students from "./components/students";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    data: [],
  };

  addStudent = (user) => {
    user.id = uuidv4();
    const newData = [...this.state.data, user];
    this.setState({ data: newData }, () => {
      console.log(this.state.data);
    });
  };

  removeStudent = (studentId) => {
    this.setState({
      data: this.state.data.filter((student) => student.id !== studentId),
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <AddStudnet
          addHandler={(userData) => {
            this.addStudent(userData);
          }}
        ></AddStudnet>
        <Students allData={this.state.data} addHandler={(studentId) => this.removeStudent(studentId)}></Students>
      </div>
    );
  }
}

export default App;
