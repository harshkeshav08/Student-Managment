import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 max-w-2xl space-y-4">

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">

          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Theme
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Change your application theme
            </p>
          </div>

          <button
            onClick={handleTheme}
            className="px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg cursor-pointer w-full sm:w-auto"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">

          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Language
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Select your preferred language
            </p>
          </div>

          <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-3 py-2 w-full sm:w-auto">
            <option>English</option>
            <option>Hindi</option>
          </select>

        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Terms & Conditions
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Read terms and conditions
            </p>
          </div>

          <button
            onClick={() => navigate("/terms")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer w-full sm:w-auto"
          >
            View
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;