import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudents from "../hooks/useStudents";

function StudentList() {
  const {
    students,
    deleteStudent,
    clearStudents,
  } = useStudents();

  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const filteredStudents = students.filter((student) => {
    const matchSearch = student.fullName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCourse =
      course === "" || student.course === course;

    const matchStatus =
      status === "" || student.status === status;

    return matchSearch && matchCourse && matchStatus;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      deleteStudent(id);
      setOpen(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Student List
        </h1>

        <button
          onClick={() => navigate("/add-student")}
          className="bg-blue-500 text-white px-5 py-3 rounded-xl w-full sm:w-auto"
        >
          + New Student
        </button>

      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-end gap-2 mt-6">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 lg:w-80 h-10 bg-gray-500 dark:bg-gray-700 rounded-xl placeholder:text-gray-100 pl-4 text-white"
          placeholder="Search students..."
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full sm:w-auto">
          🔍︎
        </button>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-green-500 text-white px-3 py-2 rounded-xl w-full sm:w-auto"
        >
          <option value="">Filter Course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BCA">BCA</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React JS">React JS</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-purple-500 text-white px-3 py-2 rounded-xl w-full sm:w-auto"
        >
          <option value="">Filter Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      <p className="mt-5 text-gray-600 dark:text-gray-300">
        Showing {filteredStudents.length} students
      </p>

      <div className="w-full overflow-x-auto">

        <table className="mt-10 w-full min-w-[900px]">

          <thead>
            <tr>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Name
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                E-mail
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Phone
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Address
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Course
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Status
              </th>

              <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.fullName}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.email}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.phone}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.address}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.course}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {student.status}
                </td>

                <td className="px-4 sm:px-6 py-3 sm:py-4 relative">

                  <button
                    onClick={() =>
                      setOpen(
                        open === student.id
                          ? null
                          : student.id
                      )
                    }
                    className="text-xl cursor-pointer text-gray-700 dark:text-white"
                  >
                    •••
                  </button>

                  {open === student.id && (
                    <div className="absolute right-4 top-12 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">

                      <button
                        onClick={() =>
                          navigate("/add-student", {
                            state: student,
                          })
                        }
                        className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          navigate("/student-details", {
                            state: student,
                          })
                        }
                        className="block w-full text-left px-4 py-3 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(student.id)
                        }
                        className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
                      >
                        Delete
                      </button>

                    </div>
                  )}

                </td>

              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500 dark:text-gray-400"
                >
                  No students found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      <div className="flex justify-end">
        <button
          onClick={clearStudents}
          className="fixed bottom-5 right-4 sm:right-5 h-10 w-32 sm:w-40 bg-gray-300 dark:bg-gray-700 dark:text-white cursor-pointer rounded-xl hover:bg-gray-400 dark:hover:bg-gray-600 text-sm sm:text-base"
        >
          Clear All
        </button>
      </div>

    </div>
  );
}

export default StudentList;