import React from "react";
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ stat }) => (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl`}>
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <div className={`flex items-center space-x-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span>{stat.change}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-gray-400 text-sm">{stat.title}</div>
      </div>
    </div>
  );

export default StatCard;