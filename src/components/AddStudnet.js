import React, { Component } from "react";
import './styles/global.css'
class AddStudent extends Component {
  state = {
    first_name: "",
    last_name: "",
    full_name: " ",
  };

  handleTextInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      this.setState({
        full_name: this.state.first_name + " " + this.state.last_name,
      });
    });
  };

  addStudent = () => {
    this.props.addHandler(this.state);
  };

  render() {
    const inputProperties = [
      {
        label: "First Name",
        id: "first_name",
        type: "text",
        value: this.state.first_name,
      },
      {
        label: "Last Name",
        id: "last_name",
        type: "text",
        value: this.state.last_name,
      },
    ];

    return (
      <div className="AddStudent">
        {inputProperties.map((input) => (
          <>
            <label className="AddStudent">{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              value={input.value}
              onChange={this.handleTextInput}
              className="AddStudent"
            />
            </>
        ))}

        <button
          disabled={
            this.state.full_name !== " " &&
            this.state.first_name !== "" &&
            this.state.last_name !== ""
              ? ""
              : "disabled"
          }
          onClick={this.addStudent}
          className="AddStudent"
        >
          +
        </button>
      </div>
    );
  }
}

export default AddStudent;
