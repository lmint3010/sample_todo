import React, { Component } from "react";

class Student extends Component {
  render() {
    return <p>Student {this.props.studentName}</p>;
  }
}

export default Student;
