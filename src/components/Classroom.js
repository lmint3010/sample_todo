import React, { Component } from "react";

class Classroom extends Component {
  constructor() {
    super();
    this.state = {
      name: "CyberSkill",
      student: ""
    };
  }

  _handleChangeClassroomName = event => {
    this.setState({ name: event.target.value });
  };

  _handleStudentChange = event => {
    this.setState({ student: event.target.value });
  };

  _handleAddStudent = event => {
    this.props.addStudent(this.state.student);
    this.setState({ student: "" });
  };

  render() {
    const {
      _handleChangeClassroomName,
      _handleStudentChange,
      _handleAddStudent,
      state
    } = this;
    return (
      <div>
        Change classroom name:{" "}
        <input onChange={_handleChangeClassroomName} value={state.name} />
        <button onClick={this.props.onChangeName(state.name)}>
          Change classroom name
        </button>
        <p>Classroom of {this.props.name}</p>
        Add Student:{" "}
        <input value={state.student} onChange={_handleStudentChange} />
        <button onClick={_handleAddStudent}>Add</button>
        {this.props.children}
      </div>
    );
  }
}

export default Classroom;
