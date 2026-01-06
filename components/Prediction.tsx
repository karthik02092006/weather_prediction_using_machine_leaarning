
import React, { useState } from 'react';
import { predictRain } from '../services/modelService';
import { PredictionResult } from '../types';

const Prediction: React.FC = () => {
  const [inputs, setInputs] = useState({
    temperature: 24,
    humidity: 55,
    windSpeed: 12
  });
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPredicting(true);
    setTimeout(() => {
      const pred = predictRain(inputs.temperature, inputs.humidity, inputs.windSpeed);
      setResult(pred);
      setIsPredicting(false);
    }, 800);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Dynamic colorful blobs for background */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-400/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-800 tracking-tight">Weather Inference</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs opacity-60">Real-time ML Model Processor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Input Panel */}
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-white space-y-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Temperature</label>
                  <span className="text-3xl font-black text-orange-500">{inputs.temperature}<span className="text-sm">°C</span></span>
                </div>
                <input 
                  type="range" min="0" max="50" step="1"
                  value={inputs.temperature}
                  onChange={(e) => setInputs({ ...inputs, temperature: Number(e.target.value) })}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Humidity</label>
                  <span className="text-3xl font-black text-blue-500">{inputs.humidity}<span className="text-sm">%</span></span>
                </div>
                <input 
                  type="range" min="0" max="100" step="1"
                  value={inputs.humidity}
                  onChange={(e) => setInputs({ ...inputs, humidity: Number(e.target.value) })}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Wind Velocity</label>
                  <span className="text-3xl font-black text-cyan-500">{inputs.windSpeed}<span className="text-sm">km/h</span></span>
                </div>
                <input 
                  type="range" min="0" max="80" step="1"
                  value={inputs.windSpeed}
                  onChange={(e) => setInputs({ ...inputs, windSpeed: Number(e.target.value) })}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={isPredicting}
              className="w-full bg-slate-900 hover:bg-black text-white font-black py-6 rounded-[2.5rem] shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isPredicting ? 'Calculating Patterns...' : 'Run Prediction Engine'}
            </button>
          </div>

          {/* Result Area */}
          <div className="relative group min-h-[400px]">
            <div className={`absolute inset-0 blur-3xl opacity-30 transition-all duration-1000 ${
              !result ? 'bg-slate-300' : result.prediction === 'Rain' ? 'bg-blue-600' : 'bg-amber-400'
            }`}></div>
            
            <div className={`relative h-full rounded-[4rem] p-12 flex flex-col items-center justify-center text-center transition-all duration-500 border-4 border-white shadow-2xl ${
              !result ? 'bg-white/40 text-slate-300' : 
              result.prediction === 'Rain' ? 'bg-blue-600 text-white' : 'bg-amber-500 text-white'
            }`}>
              {!result ? (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Ready</h4>
                    <p className="text-xs font-bold opacity-40">Awaiting Atmospheric Input</p>
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-10 animate-in zoom-in duration-500">
                  <div className="text-9xl filter drop-shadow-2xl animate-bounce">
                    {result.prediction === 'Rain' ? '🌧️' : '☀️'}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-6xl font-black tracking-tighter">
                      {result.prediction === 'Rain' ? 'Rain Likely' : 'Stay Sunny'}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-[0.4em] opacity-80">
                      Prediction Computed
                    </p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/30 space-y-4">
                    <div className="flex justify-between items-center px-2">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Probability</span>
                      <span className="text-xl font-black">{result.probability}%</span>
                    </div>
                    <div className="w-full bg-black/10 h-4 rounded-full overflow-hidden border border-white/10 p-0.5">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-sm" 
                        style={{ width: `${result.probability}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
