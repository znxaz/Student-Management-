import React, { Component } from "react";
import Student from "./student";
import StudentContainer from "./StudentContainer";
import "./styles/global.css";

class Students extends Component {
  render() {
    return (
      <StudentContainer>
        {this.props.allData.length === 0 ? (
          <p className="Students">No Students To Display</p>
        ) : (
          this.props.allData.map((element) => (
            <div key={element.id} className="Students">
              <Student
                full_name={element.full_name}
                id={element.id}
                addHandler={this.props.handleDeleteMessage}
              />
            </div>
          ))
        )}
      </StudentContainer>
    );
  }
}

export default Students;
