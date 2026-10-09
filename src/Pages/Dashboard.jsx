import {useNavigate} from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard </h1>

        <p className="text-gray-500 mt-1">
          Student Management System </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Students</p>
          <div className="h-9 mt-3"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Active Students</p>
          <div className="h-9 mt-3"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Courses</p>
          <div className="h-9 mt-3"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">New Students</p>
          <div className="h-9 mt-3"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Students </h2>

            <p className="text-sm text-gray-500 mt-1">
              Student records will appear here </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Student </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Email </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Course </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Status </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-14 text-center text-gray-400">
                    No student data available </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-2xl">
  <h1 className="flex justify-center text-2xl text-gray-600 font-semibold m-5">Quick Actions</h1>

<div className="flex flex-col justify-center text-gray-600 mt-10 ">

<button
onClick={() => navigate("/add-student")}
 className=" h-10 cursor-pointer hover:bg-blue-100 rounded-2xl">
  Add Student
</button>
<button className="h-10 cursor-pointer hover:bg-blue-100 rounded-2xl mt-5">
  View Students
</button>
<button 
onClick={()=> navigate("/setting")}
className="h-10 cursor-pointer hover:bg-blue-100 rounded-2xl mt-5">
  Settings
</button>
</div>
</div>
      </div>
    </div>
  )
}
export default Dashboard