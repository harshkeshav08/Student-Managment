import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudents from "../hooks/useStudents";

function StudentList() {
  const { students } = useStudents();
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const { clearStudents } = useStudents();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Student List
        </h1>

        <button
          onClick={() => navigate("/add-student")}
          className="bg-blue-500 text-white px-5 py-3 rounded-xl"
        >
          + New Student
        </button>
      </div>

      <div className="flex justify-end mt-6">
        <input
          className="w-100 h-10 bg-gray-500 rounded-xl placeholder:text-gray-100 pl-4"
          placeholder="Search students..."
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl ml-2">
          🔍︎
        </button>

        <button className="bg-green-500 text-white px-4 py-2 rounded-xl ml-2">
          🝖
        </button>
      </div>

      <div>
        <table className="mt-20 w-full">
          <thead>
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">E-mail</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Phone</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Address</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Course</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 text-sm text-gray-600">{student.fullName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.address}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.course}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.status}</td>

                <td className="px-6 py-4 relative">
                  <button
                    onClick={() =>
                      setOpen(open === student.id ? null : student.id)
                    }
                    className="text-xl cursor-pointer"
                  >
                    ⋮
                  </button>

                  {open === student.id && (
                    <div className="absolute right-4 top-12 w-40 bg-white border rounded-lg shadow-lg z-10">
                      <button className="block w-full text-left px-4 py-3 hover:bg-gray-50">
                        Edit
                      </button>

                   <button
                  onClick={() => navigate("/student-details", { state: student })}
                   className="text-blue-600 cursor-pointer">
                    View Details
                    </button>
                      <button className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
        <button
  onClick={clearStudents}
  className="fixed bottom-5 right-5 h-10 w-40 bg-gray-300 cursor-pointer rounded-xl hover:bg-gray-400"
>
  Clear All
</button>

        </div>
      </div>
    </div>
  );
}

export default StudentList;