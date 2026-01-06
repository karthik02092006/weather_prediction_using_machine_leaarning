
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">Project Documentation</h2>
        <p className="text-slate-500 font-medium">An educational deep-dive into how simple math can predict the skies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-xl shadow-indigo-200">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-2xl font-black mb-4">The Data Source</h3>
          <p className="text-indigo-100 font-medium leading-relaxed">
            We curated a custom dataset of 1,250 weather records. Each record tracks three independent variables: Temperature, Humidity, and Wind Speed, paired with a binary outcome: Rain or No Rain.
          </p>
        </div>

        <div className="bg-violet-600 rounded-[3rem] p-10 text-white shadow-xl shadow-violet-200">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl">⚙️</span>
          </div>
          <h3 className="text-2xl font-black mb-4">The Logic</h3>
          <p className="text-violet-100 font-medium leading-relaxed">
            Using Logistic Regression, our model creates a decision boundary. It calculates the "Probability Logits" and maps them through a Sigmoid function to ensure a clear 0-100% output range.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm md:col-span-2 space-y-6">
          <h3 className="text-2xl font-black text-slate-800">Model Pipeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: 'Ingestion', color: 'bg-blue-50 text-blue-600' },
              { step: 'Weighting', color: 'bg-indigo-50 text-indigo-600' },
              { step: 'Sigmoid', color: 'bg-violet-50 text-violet-600' }
            ].map((s, idx) => (
              <div key={idx} className={`${s.color} p-6 rounded-[2rem] font-bold text-center border border-white`}>
                <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Step {idx + 1}</div>
                <div>{s.step}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm font-medium italic text-center">
            The system applies weights (W) and a bias (B) to your inputs to solve the equation: z = W · x + B
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[3rem] p-12 text-center text-white space-y-4">
        <h3 className="text-3xl font-black">Future Horizons</h3>
        <p className="text-slate-400 max-w-lg mx-auto font-medium">
          In future versions, we plan to implement Neural Networks and process real-time API data for global forecasting.
        </p>
      </div>
    </div>
  );
};

export default About;
