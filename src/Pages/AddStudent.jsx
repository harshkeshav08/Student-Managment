import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStudents from "../hooks/useStudents";

function AddStudent() {
  const { addStudent, updateStudent } = useStudents();
  const navigate = useNavigate();
  const location = useLocation();

  const editStudent = location.state;

  const [formData, setFormData] = useState(
    editStudent || {
      uid: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      course: "",
      enrollmentDate: "",
      status: "Active",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStudent) {
      updateStudent(editStudent.id, formData);
    } else {
      addStudent({
        ...formData,
        id: Date.now(),
      });
    }

    navigate("/students");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow">

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
        {editStudent ? "Edit Student" : "Add Student"}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <div>
          <label className="text-gray-700 dark:text-white">
            UID
          </label>

          <input
            type="text"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            placeholder="Enter UID"
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Phone
          </label>

          <input
            type="text"
            inputMode="numeric"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value.replace(/\D/g, ""),
              })
            }
            placeholder="Enter phone"
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Course
          </label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React JS">React JS</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 dark:text-white">
            Enrollment Date
          </label>

          <input
            type="date"
            name="enrollmentDate"
            value={formData.enrollmentDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-2"
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2">
          <label className="text-gray-700 dark:text-white">
            Address
          </label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full border rounded-lg px-4 py-3 mt-2"
            rows="3"
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end gap-3">

          <button
            type="button"
            onClick={() => navigate("/students")}
            className="px-6 py-3 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            {editStudent ? "Update Student" : "Add Student"}
          </button>

        </div>

      </form>
    </div>
  );
}

export default AddStudent;