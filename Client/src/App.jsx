import { Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Learn from "../pages/Learn";
import Certificates from "../pages/Certificate";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/learn" element={<ProtectedRoute> <Learn /></ProtectedRoute>}/>

        <Route path="/certificates" element={<ProtectedRoute><Certificates /></ProtectedRoute>}/>
      </Routes>
    </>
  );
}
