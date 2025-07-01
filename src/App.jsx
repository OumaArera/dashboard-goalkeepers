import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './layout/Home';
import Login from './components/auth/Login';
import Dashboard from './layout/Dashboard';
import ProtectedRoute from './services/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/manager/sales" element={<Dashboard />} />
          <Route path="/manager/analysis" element={<Dashboard />} />
          <Route path="/manager/services" element={<Dashboard />} />
          <Route path="/manager/overview" element={<Dashboard />} />
          <Route path="/player/profile" element={<Dashboard />} />
          <Route path="/player/dashboard" element={<Dashboard />} />
          <Route path="/staff/dashboard" element={<Dashboard />} />
          <Route path="/director/donors" element={<Dashboard />} />
          <Route path="/director/management" element={<Dashboard />} />
          <Route path="/director/overview" element={<Dashboard />} />
          <Route path="/unauthorized" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
