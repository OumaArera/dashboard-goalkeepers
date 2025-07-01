import { Users, Target, UserCheck,  DollarSign } from 'lucide-react';

export const stats = [
    { title: 'Total Players', value: '248', change: '+12%', icon: Users, color: 'from-emerald-500 to-teal-500', trend: 'up' },
    { title: 'Active Managers', value: '42', change: '+5%', icon: UserCheck, color: 'from-blue-500 to-indigo-500', trend: 'up' },
    { title: 'Revenue', value: '$125K', change: '+18%', icon: DollarSign, color: 'from-purple-500 to-pink-500', trend: 'up' },
    { title: 'Performance Score', value: '94.2%', change: '-2%', icon: Target, color: 'from-orange-500 to-red-500', trend: 'down' }
  ];

export const recentActivities = [
    { id: 1, user: 'John Smith', action: 'Updated player profile', time: '2 hours ago', type: 'edit' },
    { id: 2, user: 'Sarah Johnson', action: 'Added new training session', time: '4 hours ago', type: 'add' },
    { id: 3, user: 'Mike Chen', action: 'Generated performance report', time: '6 hours ago', type: 'report' },
    { id: 4, user: 'Emma Davis', action: 'Approved manager request', time: '8 hours ago', type: 'approve' }
  ];

export const managementTasks = [
    { id: 1, title: 'Review Player Applications', priority: 'high', status: 'pending', assignee: 'Admin Team', dueDate: '2024-01-15' },
    { id: 2, title: 'Update Training Protocols', priority: 'medium', status: 'in-progress', assignee: 'Training Dept', dueDate: '2024-01-20' },
    { id: 3, title: 'Quarterly Performance Review', priority: 'high', status: 'pending', assignee: 'Management', dueDate: '2024-01-18' },
    { id: 4, title: 'System Maintenance', priority: 'low', status: 'completed', assignee: 'IT Team', dueDate: '2024-01-10' }
  ];

export const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

export const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-500/20';
      case 'pending': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };