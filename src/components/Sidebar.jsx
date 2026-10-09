import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-8">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />

        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Student Management
          </h1>

          <p className="text-xs text-gray-500">
            Management System
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className="block w-full px-4 py-3 rounded-lg cursor-pointer"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className="block w-full px-4 py-3 rounded-lg cursor-pointer"
        >
          Student List
        </NavLink>

        <NavLink
          to="/settings"
          className="block w-full px-4 py-3 rounded-lg cursor-pointer"
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;