import React, { useState } from 'react';
import { Search, Menu, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Download className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Asking<span className="text-emerald-500">Mod</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-300 hover:text-emerald-500 font-medium transition-colors">Home</Link>
            <a href="#" className="text-slate-300 hover:text-emerald-500 font-medium transition-colors">Games</a>
            <a href="#" className="text-slate-300 hover:text-emerald-500 font-medium transition-colors">Apps</a>
            <a href="#" className="text-slate-300 hover:text-emerald-500 font-medium transition-colors">Request</a>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mods..."
                className="bg-slate-800 text-slate-200 border border-slate-700 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-64 transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-500" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 pt-4 pb-2 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-slate-900">Home</Link>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Games</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Apps</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Request</a>
          </div>
          <div className="p-4">
             <div className="relative">
              <input
                type="text"
                placeholder="Search mods..."
                className="w-full bg-slate-900 text-slate-200 border border-slate-700 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:border-emerald-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-500" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};