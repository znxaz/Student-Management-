import React, { Component } from "react";
import Student from "./student";
import './styles/global.css'
class Students extends Component {
  render() {
    return (
      <>
        {this.props.allData.map((element) => {
          return (
            <div key={element.id} className="Students">
              <Student full_name={element.full_name} id={element.id} addHandler={this.props.addHandler}></Student>
            </div>
          );
        })}
      </>
    );
  }
}

export default Students;
