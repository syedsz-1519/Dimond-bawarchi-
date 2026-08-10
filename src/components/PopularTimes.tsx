import React, { useState } from 'react';
import { BarChart3, Clock, Sparkles } from 'lucide-react';

export const PopularTimes: React.FC = () => {
  const [dayType, setDayType] = useState<'weekday' | 'weekend'>('weekend');

  const hourlyData = {
    weekday: [
      { hour: '12 PM', pct: 45, label: 'Moderate' },
      { hour: '2 PM', pct: 60, label: 'Lunch Rush' },
      { hour: '4 PM', pct: 25, label: 'Quiet' },
      { hour: '6 PM', pct: 50, label: 'Moderate' },
      { hour: '8 PM', pct: 85, label: 'Busy' },
      { hour: '10 PM', pct: 40, label: 'Closing' },
    ],
    weekend: [
      { hour: '12 PM', pct: 65, label: 'Lunch Rush' },
      { hour: '2 PM', pct: 80, label: 'Very Busy' },
      { hour: '4 PM', pct: 35, label: 'Moderate' },
      { hour: '6 PM', pct: 75, label: 'Busy' },
      { hour: '8 PM', pct: 100, label: 'PEAK HOUR', isPeak: true },
      { hour: '10 PM', pct: 55, label: 'Moderate' },
    ],
  };

  const currentData = hourlyData[dayType];

  return (
    <section className="px-4 sm:px-6 py-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900 flex items-center gap-1.5 mb-1">
              <BarChart3 className="w-3.5 h-3.5 text-blue-700" />
              Foot Traffic Insights
            </span>
            <h3 className="font-serif-title text-2xl font-bold text-slate-900">
              Popular Dining Hours
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Plan your visit or table booking to skip the weekend dinner rush!
            </p>
          </div>

          {/* Weekday / Weekend Switch */}
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex gap-1">
            <button
              onClick={() => setDayType('weekday')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                dayType === 'weekday'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mon - Thu
            </button>
            <button
              onClick={() => setDayType('weekend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                dayType === 'weekend'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fri - Sun (Peak)
            </button>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div className="flex items-end justify-between h-36 sm:h-44 gap-2 pt-6">
            {currentData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                
                {/* Tooltip on Hover */}
                <div className="absolute -top-8 bg-blue-900 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  {item.pct}% ({item.label})
                </div>

                {/* Vertical Bar */}
                <div className="w-full max-w-[40px] bg-slate-200 rounded-t-lg h-full flex items-end overflow-hidden">
                  <div
                    className={`w-full transition-all duration-700 rounded-t-lg ${
                      item.isPeak
                        ? 'bg-gradient-to-t from-blue-900 via-indigo-900 to-blue-700 shadow-md animate-pulse'
                        : item.pct > 70
                        ? 'bg-blue-900'
                        : item.pct > 40
                        ? 'bg-blue-700'
                        : 'bg-blue-400'
                    }`}
                    style={{ height: `${item.pct}%` }}
                  ></div>
                </div>

                {/* Time Label */}
                <span
                  className={`text-[11px] font-bold ${
                    item.isPeak ? 'text-blue-900 font-extrabold' : 'text-slate-600'
                  }`}
                >
                  {item.hour}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>Busiest hours: <strong className="text-slate-900">8:00 PM – 9:30 PM</strong></span>
            </div>
            <div className="flex items-center gap-1 text-blue-900 font-semibold text-[11px] mt-1 sm:mt-0">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Tip: Book table early for 8 PM dinner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

