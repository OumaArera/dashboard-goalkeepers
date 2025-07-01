import React from 'react';
import { useNavigate } from 'react-router-dom';
import handleLogout from '../hooks/useLogout';

const Dashboard = () => {
    const navigate = useNavigate();
    

    const logout =()=>{
        navigate("/");
        handleLogout();
    }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, User!
          </h1>
        </div>
        <button onClick={logout}>Logout</button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Today's Activity</h2>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-gray-500">Actions logged</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Tasks</h2>
            <p className="text-3xl font-bold mt-2">5</p>
            <p className="text-sm text-gray-500">Pending reviews</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="text-3xl font-bold mt-2">3</p>
            <p className="text-sm text-gray-500">New updates</p>
          </div>
        </div>

        {/* Navigation / Shortcuts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg shadow transition duration-200 w-full">
            View Profile
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg shadow transition duration-200 w-full">
            Reports
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow transition duration-200 w-full">
            Team
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded-lg shadow transition duration-200 w-full">
            Settings
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
