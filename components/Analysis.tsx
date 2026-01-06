
import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  ScatterChart, Scatter, ZAxis, Cell
} from 'recharts';
import { WEATHER_DATASET } from '../data/weatherData';

const Analysis: React.FC = () => {
  const scatterData = WEATHER_DATASET.map(d => ({
    temp: d.temperature,
    humidity: d.humidity,
    rain: d.rain === 'Yes' ? 1 : 0,
    color: d.rain === 'Yes' ? '#2563eb' : '#fbbf24'
  }));

  return (
    <div className="relative max-w-5xl mx-auto py-10">
      {/* Background decoration */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>

      <div className="bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[4rem] border-4 border-white shadow-2xl relative z-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Weather Correlation</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Temperature vs Humidity Analysis</p>
          </div>
          <div className="flex gap-6 bg-white/50 p-4 rounded-3xl border border-white">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-200"></div>
              <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Rain</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-200"></div>
              <span className="text-xs font-black text-slate-600 uppercase tracking-widest">No Rain</span>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full bg-white/40 rounded-[3.5rem] p-8 border border-white shadow-inner">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                dataKey="temp" 
                name="Temperature" 
                unit="°C" 
                /* Fixed typo: changed fontWeights to fontWeight */
                tick={{fontSize: 12, fontWeight: 800, fill: '#94a3b8'}}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                type="number" 
                dataKey="humidity" 
                name="Humidity" 
                unit="%" 
                /* Fixed typo: changed fontWeights to fontWeight */
                tick={{fontSize: 12, fontWeight: 800, fill: '#94a3b8'}}
                axisLine={false}
                tickLine={false}
              />
              <ZAxis type="number" range={[200, 200]} />
              <Tooltip 
                cursor={{ strokeDasharray: '4 4', stroke: '#cbd5e1' }} 
                contentStyle={{
                  borderRadius: '24px', 
                  border: 'none', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', 
                  fontWeight: 900,
                  padding: '16px'
                }}
                wrapperStyle={{ outline: 'none' }}
              />
              <Scatter name="Historical Data" data={scatterData}>
                {scatterData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    className="hover:scale-125 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Visual Mapping of Atmospheric Dataset Clusters
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
