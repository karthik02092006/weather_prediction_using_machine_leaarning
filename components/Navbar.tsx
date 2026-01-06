
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 h-16 rounded-3xl flex justify-between items-center px-6 shadow-xl shadow-blue-500/5">
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => setActivePage(Page.Home)}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-slate-800 tracking-tight">SkyCast</span>
        </div>
        
        <div className="flex space-x-1">
          {Object.values(Page).map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                activePage === item
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                  : 'text-slate-500 hover:text-blue-500 hover:bg-white/50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
