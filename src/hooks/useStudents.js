import { useState } from "react";

function useStudents() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const addStudent = (student) => {
    const newStudents = [...students, student];
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const updateStudent = (id, updatedStudent) => {
    const newStudents = students.map((student) =>
      student.id === id ? updatedStudent : student
    );

    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const deleteStudent = (id) => {
    const newStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const clearStudents = () => {
    setStudents([]);
    localStorage.removeItem("students");
  };

  return {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
    clearStudents,
  };
}

export default useStudents;