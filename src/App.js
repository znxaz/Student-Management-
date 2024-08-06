import "./App.css";
import AddStudent from "./components/AddStudnet";
import Students from "./components/students";
import DeleteMessage from "./components/DeleteMessage";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    data: [],
    deleteStudent: null, // Store the student ID to be deleted
  };

  addStudent = (user) => {
    user.id = uuidv4();
    const newData = [...this.state.data, user];
    this.setState({ data: newData });
  };

  handleDeleteMessage = (studentId) => {
    this.setState({ deleteStudent: studentId });
  };

  removeStudent = () => {
    this.setState({
      data: this.state.data.filter((student) => student.id !== this.state.deleteStudent),
      deleteStudent: null, // Reset the deleteStudent state
    });
  };

  cancelDelete = () => {
    this.setState({ deleteStudent: null });
  };

  render() {
    return (
      <>
        <div className="App">
          <AddStudent addHandler={this.addStudent} />
          <Students allData={this.state.data} handleDeleteMessage={this.handleDeleteMessage} />
        </div>
        {this.state.deleteStudent && (
          <DeleteMessage
            removeStudent={this.removeStudent}
            cancelDelete={this.cancelDelete}
          />
        )}
      </>
    );
  }
}

export default App;
