import "./App.css";
import AddStudnet from "./components/AddStudnet";
import Students from "./components/students";
import DeleteMessage from "./components/DeleteMessage";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    data: [],
    deleteStudent: false,
  };

  addStudent = (user) => {
    user.id = uuidv4();
    const newData = [...this.state.data, user];
    this.setState({ data: newData }, () => {
      console.log(this.state.data);
    });
  };

  handleDeleteMessage = () => {
    this.setState({ deleteStudent: !this.state.deleteStudent });
  };
  removeStudent = (studentId) => {
    this.setState({
      data: this.state.data.filter((student) => student.id !== studentId),
    });
  };

  render() {
    return (
      <div className="App">
        <AddStudnet
          addHandler={(userData) => {
            this.addStudent(userData);
          }}
        ></AddStudnet>
        <Students
          allData={this.state.data}
          addHandler={() => this.handleDeleteMessage()}
        ></Students>
        {this.state.deleteStudent && (
          <DeleteMessage
            addHandler={(studentId) => this.removeStudent(studentId)}
          ></DeleteMessage>
        )}
      </div>
    );
  }
}

export default App;
