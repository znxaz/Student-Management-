import React, { Component } from "react";

class ChangeName extends Component {
  state = {
    first_Name: "",
    last_Name: "",
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  inputProps = [
    {
      id: "first_Name",
      type: "text",
      value: this.state.first_Name,
      key: "changeFirstName",
      label: "First Name",
      labelFor: "changeFirstName",
    },
    {
      id: "last_Name",
      type: "text",
      value: this.state.last_Name,
      key: "changeLastName",
      label: "Last Name",
      labelFor: "changeLastName",
    },
  ];

  render() {
    return (
      <div>
        {this.inputProps.map((prop) => (
          <div key={prop.key}>
            <label htmlFor={prop.labelFor}>
              {prop.label}
            </label>
            <input
              id={prop.id}
              type={prop.type}
              value={this.state[prop.id]}
              onChange={this.handleInput}
            />
          </div>
        ))}
        <button>Submit</button>
      </div>
    );
  }
}

export default ChangeName;
