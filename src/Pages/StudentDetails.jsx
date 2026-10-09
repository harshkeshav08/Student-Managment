import { useLocation } from "react-router-dom";

function StudentDetails() {
  const location = useLocation();

  const student = location.state;

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow border max-w-4xl mx-auto">

      <div className="text-center border-b pb-6">
        <img
          src="/logo.png"
          className="w-20 h-20 mx-auto object-contain"/>

        <h1 className="text-2xl font-bold mt-2">
          Student Management System
        </h1>
      </div>

      <div className="flex gap-8 mt-8">

        <div>
          <img
            src={student.image}
            className="w-40 h-40 rounded-xl object-cover"/>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">

          <div>
            <p className="font-semibold">UID</p>
            <p>{student.uid}</p>
          </div>

          <div>
            <p className="font-semibold">Full Name</p>
            <p>{student.fullName}</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p>{student.email}</p>
          </div>

          <div>
            <p className="font-semibold">Phone</p>
            <p>{student.phone}</p>
          </div>

          <div>
            <p className="font-semibold">Course</p>
            <p>{student.course}</p>
          </div>

          <div>
            <p className="font-semibold">Status</p>
            <p>{student.status}</p>
          </div>

        </div>
      </div>

      <div className="mt-8">
        <p className="font-semibold">Address</p>
        <p>{student.address}</p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Enrollment Date</p>
        <p>{student.enrollmentDate}</p>
      </div>

      <div className="flex justify-end mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
          Print
        </button>
      </div>

    </div>
  );
}

export default StudentDetails;