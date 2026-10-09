import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import StudentList from "./Pages/StudentList";
import Settings from "./Pages/Settings";
import AddStudent from "./Pages/AddStudent";
import StudentDetails from "./Pages/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 min-w-0">
          <Navbar />

          <main className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/setting" element={<Settings/>}/>
          <Route path="/student-details" element={<StudentDetails />}/>
          
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;