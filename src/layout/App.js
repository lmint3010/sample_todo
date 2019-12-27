import React from "react";
import "./App.css";
import Student from "../components/Student";
import Classroom from "../components/Classroom";

class App extends React.Component {
  state = {
    name: "CyberSkill",
    studentList: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" }
    ]
  };

  _handleClickChangeName = value => event => {
    this.setState({ name: value });
  };

  _handleAddStudent = name => {
    const studentList = [
      ...this.state.studentList,
      { id: Math.random() * 100, name }
    ];
    this.setState({ studentList });
  };

  render() {
    const { state, _handleClickChangeName, _handleAddStudent } = this;
    return (
      <Classroom
        name={state.name}
        onChangeName={_handleClickChangeName}
        addStudent={_handleAddStudent}
      >
        {state.studentList.map(item => (
          <Student key={item.id} studentName={item.name} />
        ))}
      </Classroom>
    );
  }
}

export default App;
