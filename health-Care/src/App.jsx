import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/patient/dashboard">Patient Dashboard</Link></li>
          <li><Link to="/doctor/dashboard">Doctor Dashboard</Link></li>
          <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

