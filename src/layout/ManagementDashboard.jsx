import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, BarChart3, Settings, Bell, Search, 
  Plus, Filter, Calendar, Activity, CheckCircle,
  Eye, Edit, Trash2, MoreVertical, LogOut
} from 'lucide-react';
import { 
    stats, 
    recentActivities, 
    managementTasks, 
    getPriorityColor, 
    getStatusColor 
} from '../utils/managementUtils';
import StatCard from '../ui/StatCard';
import handleLogout from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const ManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();

  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const userInitials = `${userFirstName?.[0] || ''}${userLastName?.[0] || ''}`;

  const logout = () => {
    handleLogout();
    navigate("/");
  }

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-dropdown-container')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className={`bg-white/5 backdrop-blur-xl border-b border-white/10 p-4 sm:p-6 transform transition-all duration-1000 relative z-50 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Management Dashboard</h1>
                <p className="text-emerald-300 text-sm">Goalkeepers Alliance - Administrative Control</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-64"
                />
              </div>
              
              <button className="relative p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Bell className="w-5 h-5 text-white" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="relative user-dropdown-container">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center hover:from-emerald-300 hover:to-teal-500 transition-all duration-300"
                >
                  <span className="text-white font-bold text-sm">{userInitials}</span>
                </button>
                
                {/* User Dropdown - Fixed with higher z-index */}
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl z-[9999]">
                    <div className="p-3 border-b border-white/10">
                      <p className="text-white font-medium">{userFirstName} {userLastName}</p>
                      <p className="text-gray-400 text-sm">Administrator</p>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={logout}
                        className="flex items-center space-x-3 w-full px-3 py-2 text-left text-white hover:bg-gray-900 rounded-lg transition-all duration-300"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className={`bg-white/5 backdrop-blur-xl border-b border-white/10 p-4 sm:p-6 transform transition-all duration-1000 delay-200 relative z-40 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex space-x-1 bg-white/5 rounded-2xl p-1 max-w-fit">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'tasks', label: 'Tasks', icon: CheckCircle },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 relative z-30">
          {activeTab === 'overview' && (
            <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>

              {/* Charts and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Chart */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Performance Overview</h3>
                    <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                      <p className="text-gray-400">Performance analytics visualization</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                    <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{activity.user}</p>
                          <p className="text-gray-400 text-sm">{activity.action}</p>
                        </div>
                        <div className="text-gray-500 text-sm">
                          {activity.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Task Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                <h2 className="text-2xl font-bold text-white">Management Tasks</h2>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-400 hover:to-teal-400 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <span>New Task</span>
                  </button>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-4">
                {managementTasks.map((task) => (
                  <div key={task.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                          <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                            {task.status.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{task.assignee}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{task.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'users' || activeTab === 'settings') && (
            <div className={`flex items-center justify-center h-64 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'users' ? <Users className="w-10 h-10 text-white" /> : <Settings className="w-10 h-10 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {activeTab === 'users' ? 'User Management' : 'Settings'}
                </h3>
                <p className="text-gray-400">
                  {activeTab === 'users' 
                    ? 'Manage users, roles, and permissions'
                    : 'Configure system settings and preferences'
                  }
                </p>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-400 hover:to-teal-400 transition-all duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ManagementDashboard;