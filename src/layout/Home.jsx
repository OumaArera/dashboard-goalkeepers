import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Shield, Users, Zap, Star, ArrowRight } from 'lucide-react';
import logo from '../assets/goalkeepers.png';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    navigate("/login")
    console.log('Hello world');
  };

  const FloatingIcon = ({ icon: Icon, delay, position }) => (
    <div 
      className={`absolute opacity-20 animate-pulse ${position}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '3s' }}
    >
      <Icon size={24} className="text-emerald-400" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating icons */}
      <div className="hidden md:block">
        <FloatingIcon icon={Shield} delay={0} position="top-20 left-20" />
        <FloatingIcon icon={Mic} delay={1} position="top-40 right-32" />
        <FloatingIcon icon={Users} delay={2} position="bottom-40 left-16" />
        <FloatingIcon icon={Zap} delay={3} position="bottom-32 right-20" />
        <FloatingIcon icon={Star} delay={4} position="top-1/2 left-8" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-4 sm:p-6">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={logo}
                      alt="Goalkeeper Logo" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 blur-md opacity-50 animate-pulse"></div>
                </div>
                <div className="text-center">
                  <h1 className="text-xl sm:text-2xl font-bold text-white">Goalkeepers Alliance</h1>
                  <p className="text-emerald-300 text-sm font-medium mt-1">Data-Driven. Globally Connected. Keeper-Focused.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Hero heading */}
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 mb-4 sm:mb-6 leading-tight">
                DEFEND
                <br />
                <span className="text-white drop-shadow-2xl">THE GOAL</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-8 shadow-xl"></div>
            </div>

            {/* Subtitle */}
            <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-2 font-light">
                Speak with <span className="text-emerald-400 font-semibold">one voice</span> as goalkeepers,
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                join a <span className="text-emerald-400 font-semibold">global network</span>, and unlock <span className="text-emerald-400 font-semibold">real-time analytics</span> to elevate your game.
              </p>
            </div>
            {/* Features grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { icon: Mic, title: 'Single Voice', desc: 'Unified platform for goalkeepers worldwide', color: 'from-emerald-500 to-teal-500' },
                { icon: Users, title: 'Global Network', desc: 'Connect with professional goalkeepers', color: 'from-teal-500 to-green-500' },
                { icon: Zap, title: 'Real-time Analytics', desc: 'Advanced performance insights & data', color: 'from-green-500 to-emerald-500' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                onClick={handleGetStarted}
                className="group relative inline-flex items-center px-10 sm:px-16 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Get Started
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 sm:gap-12 mt-16 sm:mt-20 px-2 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { number: '200+', label: 'Elite Goalkeepers', color: 'from-emerald-400 to-teal-400' },
                { number: '5+', label: 'Countries', color: 'from-teal-400 to-green-400' },
                { number: '50k+', label: 'Saves Analyzed', color: 'from-green-400 to-emerald-400' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 sm:p-6 text-center">
          <div className={`transform transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">© {currentYear} Goalkeepers Alliance</p>
                    <p className="text-gray-400 text-xs">All rights reserved</p>
                  </div>
                </div>
                
                <div className="text-center sm:text-right">
                  <p className="text-gray-400 text-sm mb-1">Powered by</p>
                  <a 
                    href="https://safestack.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline font-semibold text-sm"
                  >
                    SafeStack Technologies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;