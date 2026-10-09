import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudents from "../hooks/useStudents";

function AddStudent() {
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    uid:"",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    enrollmentDate: "",
    status: "Active",
    image:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.course ||
      !formData.enrollmentDate
    ) {
      alert("Please fill all required fields");
      return;
    }

    addStudent(formData);
    navigate("/students");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Add Student
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-sm border max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">UID</label>
            <input
              type="text"
              name="uid"
              value={formData.uid}
              onChange={handleChange}
              placeholder="Enter your UID"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="">Select course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React JS">React JS</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Enrollment Date
            </label>
            <input
              type="date"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
         <label className="block mb-2 font-medium">Student Image</label>
         <input
          type="file"
          name="image"
          accept="image/*"
        onChange={(e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
}}
    className="w-full border rounded-lg px-4 py-3"
  />
</div>

        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;