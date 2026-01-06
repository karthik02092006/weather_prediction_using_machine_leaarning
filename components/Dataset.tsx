
import React from 'react';
import { WEATHER_DATASET } from '../data/weatherData';

const Dataset: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Historical Weather Data</h2>
          <p className="text-xs text-slate-500">Showing sample records from weather_history.csv</p>
        </div>
        <div className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded uppercase tracking-wider">
          {WEATHER_DATASET.length} Records
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {['ID', 'Date', 'Temperature (°C)', 'Humidity (%)', 'Wind Speed (km/h)', 'Rain'].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {WEATHER_DATASET.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.temperature}°</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.humidity}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.windSpeed} km/h</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    row.rain === 'Yes' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'
                  }`}>
                    {row.rain}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dataset;
