
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Prediction from './components/Prediction';
import Analysis from './components/Analysis';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderContent = () => {
    switch (activePage) {
      case Page.Home:
        return <Home onNavigate={setActivePage} />;
      case Page.Prediction:
        return <Prediction />;
      case Page.Analysis:
        return <Analysis />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow container mx-auto px-4 max-w-5xl">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          {renderContent()}
        </div>
      </main>

      <footer className="mt-12 text-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Weather Prediction Project
        </p>
      </footer>
    </div>
  );
};

export default App;
