import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const correctEmail = "keshav@gmail.com";
  const correctPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-6 sm:mb-8">

          <img
            src="/logo.png"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
          />

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-4">
            Login
          </h1>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-2">
            Student Management System
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="text-gray-700 dark:text-white">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full border rounded-lg px-4 py-3 mt-2"
              required
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-700 dark:text-white">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border rounded-lg px-4 py-3 mt-2"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;