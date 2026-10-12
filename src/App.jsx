import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./Pages/Dashboard";
import StudentList from "./Pages/StudentList";
import Settings from "./Pages/Settings";
import AddStudent from "./Pages/AddStudent";
import Terms from "./Pages/Terms";
import StudentDetails from "./Pages/StudentDetails";
import Login from "./Pages/Login";

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">

      <Sidebar />

      <div className="flex-1 min-w-0">

        <Navbar />

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

      </div>

    </div>
  );
}

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" /> : <Login />
          }
        />

        <Route
          path="/*"
          element={
            isLoggedIn ? <Layout /> : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;