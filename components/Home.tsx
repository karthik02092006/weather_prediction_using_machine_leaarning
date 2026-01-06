
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-10">
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-indigo-500/10 text-center relative overflow-hidden max-w-3xl w-full">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-pulse"></div>
        
        <div className="space-y-12">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight">
            Weather <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Prediction</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => onNavigate(Page.Prediction)}
              className="group relative px-10 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2.5rem] font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-400/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start Prediction</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12"></div>
            </button>
            
            <button
              onClick={() => onNavigate(Page.Analysis)}
              className="group px-10 py-6 bg-white border-4 border-indigo-100 text-indigo-700 rounded-[2.5rem] font-black text-xl transition-all hover:bg-indigo-50 hover:border-indigo-200 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/5"
            >
              <span className="flex items-center space-x-3">
                <span>View Analysis</span>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
