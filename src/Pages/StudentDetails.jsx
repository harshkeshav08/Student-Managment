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
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">

      <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
        <img
          src="/logo.png"
          className="w-20 h-20 mx-auto object-contain"
        />

        <h1 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
          Student Management System
        </h1>
      </div>

      <div className="flex gap-8 mt-8">

        <div>
          <img
            src={student.image}
            className="w-40 h-40 rounded-xl object-cover"
          />
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              UID
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {student.uid}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Full Name
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {student.fullName}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Email
            </p>
            <p className="text-gray-600 dark:text-gray-300">
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
            <p className="text-gray-600 dark:text-gray-300">
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
      
      <div className="flex ml-48 gap-10">
      <div className="flex mt-8">
        <p className="font-semibold text-gray-800 dark:text-white">
          Address :
        </p>
        <p className="text-gray-600 dark:text-gray-300 ml-2 mr-41">
          {student.address}
        </p>
      </div>

      <div className="flex mt-8">
        <p className="font-semibold text-gray-800 dark:text-white">
          Enrollment Date : 
        </p>
        <p className="text-gray-600 dark:text-gray-300 ml-2">
          {student.enrollmentDate}
        </p>
      </div>
</div>
      <div className="flex justify-end mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700"
        >
          Print
        </button>
      </div>

    </div>
  );
}

export default StudentDetails;