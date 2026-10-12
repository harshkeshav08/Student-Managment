import { useLocation } from "react-router-dom";

function StudentDetails() {
  const location = useLocation();

  const student = location.state;

  if (!student) {
    return (
      <h1 className="text-gray-800 dark:text-white">
        Student not found
      </h1>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">

      <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-5 sm:pb-6">
        <img
          src="/logo.png"
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
        />

        <h1 className="text-xl sm:text-2xl font-bold mt-2 text-gray-800 dark:text-white">
          Student Management System
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6 sm:mt-8">

        <div className="flex justify-center sm:block">
          <img
            src={student.image}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover"
          />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              UID
            </p>
            <p className="text-gray-600 dark:text-gray-300 break-words">
              {student.uid}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Full Name
            </p>
            <p className="text-gray-600 dark:text-gray-300 break-words">
              {student.fullName}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Email
            </p>
            <p className="text-gray-600 dark:text-gray-300 break-words">
              {student.email}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Phone
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {student.phone}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Course
            </p>
            <p className="text-gray-600 dark:text-gray-300 break-words">
              {student.course}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Status
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {student.status}
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-6 sm:mt-8">

        <div className="flex flex-col sm:flex-row">
          <p className="font-semibold text-gray-800 dark:text-white">
            Address :
          </p>

          <p className="text-gray-600 dark:text-gray-300 sm:ml-2 break-words">
            {student.address}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <p className="font-semibold text-gray-800 dark:text-white">
            Enrollment Date :
          </p>

          <p className="text-gray-600 dark:text-gray-300 sm:ml-2">
            {student.enrollmentDate}
          </p>
        </div>

      </div>

      <div className="flex justify-end mt-6 sm:mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 w-full sm:w-auto"
        >
          Print
        </button>
      </div>

    </div>
  );
}

export default StudentDetails;