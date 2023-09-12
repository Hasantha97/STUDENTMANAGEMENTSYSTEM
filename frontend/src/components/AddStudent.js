import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <Form.Control
        type="text"
        placeholder="enter student name:"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <Form.Control
        type="number"
        placeholder="enter student age:"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <Form.Control
        type="text"
        placeholder="enter student gender:"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <br />
      <Button onClick={sendData} as="input" type="submit" value="Submit" />{" "}
    </>
  );
}

export default AddStudent;
