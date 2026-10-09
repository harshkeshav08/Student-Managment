function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h2>

        <p className="text-xs text-gray-500">
          Overview of student management
        </p>
      </div>

        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer text-blue-600 font-semibold">
          K
        </div>

    </header>
  )
}

export default Navbar