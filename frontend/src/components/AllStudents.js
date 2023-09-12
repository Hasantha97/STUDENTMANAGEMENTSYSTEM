import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(err.message);
        });
      getStudents();
    }
  }, []);

  return <div className="container">All Student</div>;
}
