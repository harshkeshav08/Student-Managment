import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-16 sm:w-56 lg:w-64 min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-2 sm:p-4 lg:p-5">

      <div className="flex items-center gap-2 sm:gap-3 mb-8">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain rounded-2xl"
        />

        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            Student Management
          </h1>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Management System
          </p>
        </div>
      </div>

      <nav className="space-y-2">

        <NavLink
          to="/"
          className="block w-full px-2 sm:px-4 py-3 rounded-lg cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center sm:text-left"
        >
          <span className="sm:hidden">🏠</span>
          <span className="hidden sm:inline">Dashboard</span>
        </NavLink>

        <NavLink
          to="/students"
          className="block w-full px-2 sm:px-4 py-3 rounded-lg cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center sm:text-left"
        >
          <span className="sm:hidden">👨‍🎓</span>
          <span className="hidden sm:inline">Student List</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="block w-full px-2 sm:px-4 py-3 rounded-lg cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center sm:text-left"
        >
          <span className="sm:hidden">⚙️</span>
          <span className="hidden sm:inline">Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;