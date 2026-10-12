import { useNavigate } from "react-router-dom";
import useStudents from "../hooks/useStudents";

function Dashboard() {
  const navigate = useNavigate();
  const { students } = useStudents();

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  );

  const courses = [...new Set(students.map((student) => student.course))];

  return (
    <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Student Management System
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Students
          </p>
          <div className="text-2xl font-bold text-gray-800 dark:text-white mt-3">
            {students.length}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Active Students
          </p>
          <div className="text-2xl font-bold text-gray-800 dark:text-white mt-3">
            {activeStudents.length}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Courses
          </p>
          <div className="text-2xl font-bold text-gray-800 dark:text-white mt-3">
            {courses.length}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            New Students
          </p>
          <div className="text-2xl font-bold text-gray-800 dark:text-white mt-3">
            {students.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Recent Students
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Student records will appear here
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    Student
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    Email
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    Course
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-200">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {student.fullName}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {student.email}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {student.course}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {student.status}
                    </td>
                  </tr>
                ))}

                {students.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-14 text-center text-gray-400 dark:text-gray-500"
                    >
                      No student data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
          <h1 className="flex justify-center text-2xl text-gray-600 dark:text-gray-200 font-semibold m-5">
            Quick Actions
          </h1>

          <div className="flex flex-col justify-center text-gray-600 dark:text-gray-300 mt-10">
            <button
              onClick={() => navigate("/add-student")}
              className="h-10 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 rounded-2xl"
            >
              Add Student
            </button>

            <button
              onClick={() => navigate("/students")}
              className="h-10 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 rounded-2xl mt-5"
            >
              View Students
            </button>

            <button
              onClick={() => navigate("/settings")}
              className="h-10 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 rounded-2xl mt-5"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;