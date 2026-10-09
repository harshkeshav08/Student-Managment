import { useEffect, useState } from "react";

function useStudents() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now().toString(),
    };
    
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };
  const clearStudents = () => {
localStorage.removeItem("students");
setStudents([]);
};

  return {
    students,
    addStudent,
    clearStudents,
  };
}

export default useStudents;