//import React, { useState } from "react";
import React from "react";
import "./StudentList.css";
import { AddStudentForm } from "./AddStudentForm/AddStudentForm";
import { useSelector } from "react-redux";
//useSelector is a hook that allows us to access the state of the store
//useSelector returns a piece of the state tree
//by useSelector we also subscribe to the updates of the state: whenever students array changes studentList will be rendered and display updated list
export const StudentList = () => {
  // console.log("Student list rendered");
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [classroom, setClassroom] = useState("");

  const studentList = useSelector((state) => state.students.list);
  // const [studentList, setStudentList] = useState(studentListForReactProgramming);
  // const addStudent = (student) => {
  //   setStudentList([...studentList, student]);
  // };
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.login.error);
  if (error) {
    return <div>{error}</div>;
  }
  if (!token || token.length === 0) { //if no token
    return <div>Please login to see student list</div>
  }


  // const [isReactClassroom, setReactClassroom] = useState(false);
  // const navigate = useNavigate();
  // const studentList = isReactClassroom ? studentListForReactProgramming : studentListForJavaProgramming;
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Classroom</th>
          </tr>
        </thead>
        <tbody>
          {/*you comment kinda like css in JSX??? and it's different then how you comment in XML?? whyyy*/}
          {/*this is better form then passing in student for {} and having each be student.xy and z*/}
          {studentList.map(({ name, age, classroom }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{classroom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={() => setReactClassroom((prevState) => !prevState)}>
        Switch Classroom
      </button>
      <button onClick={() => navigate('/posts')}>
        Watch posts
      </button>
      <button onClick={() => navigate('/')}>
        Login
      </button> */}
      <AddStudentForm
        // name={name}
        // setName={setName}
        // age={age}
        // setAge={setAge}
        // classroom={classroom}
        // setClassroom={setClassroom}
        //addStudent={addStudent}
      />
    </div>
  );
};