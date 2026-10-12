function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <nav className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-3 sm:px-5 lg:px-8">

      <h2 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-white">
        Student Management System
      </h2>

      <div className="flex items-center gap-2 sm:gap-3">

        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer text-blue-600 font-semibold">
          K
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg cursor-pointer"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;