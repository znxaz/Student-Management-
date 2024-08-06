import "./App.css";
import AddStudnet from "./components/AddStudnet";
import Students from "./components/students";
import DeleteMessage from "./components/DeleteMessage";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import changeName from "./components/changeName";

class App extends Component {
  state = {
    data: [],
    deleteStudent: false,
    changeName: false, 
  };

  addStudent = (user) => {
    user.id = uuidv4();
    const newData = [...this.state.data, user];
    //setState accepts 2 parameters, the values to set and an arrow function
    this.setState({ data: newData }, () => {});
  };

  handleDeleteMessage = () => {
    this.setState({ deleteStudent: !this.state.deleteStudent });
  };

  removeStudent = (studentId) => {
    this.setState({
      data: this.state.data.filter((student) => student.id !== studentId),
    });
  };

  changeNameHandler = () => {
    this.state.setState({changeName: true});
  };

  render() {
    return (
      <>
      <div className="App">
        <AddStudnet
          addHandler={(userData) => {
            this.addStudent(userData);
          }}
        ></AddStudnet>
        <Students
          allData={this.state.data}
          addHandler={() => this.handleDeleteMessage()}
          changeNameHandler={() => this.changeNameHandler()}
        ></Students>
      </div>
      {this.state.deleteStudent && (
          <DeleteMessage
            addHandler={(studentId) => this.removeStudent(studentId)}
          ></DeleteMessage>
        )}
      </>
    );
  }
}

export default App;
