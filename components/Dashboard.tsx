
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CROP_INFLOW_DATA } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Live Crop Analytics</h1>
          <p className="text-slate-500">Real-time monitoring of crop inflows and market volume.</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 border">
          <button className="px-4 py-1 text-sm bg-green-50 text-green-700 rounded shadow-sm font-medium">Weekly</button>
          <button className="px-4 py-1 text-sm text-slate-600 hover:bg-slate-50 rounded font-medium">Monthly</button>
          <button className="px-4 py-1 text-sm text-slate-600 hover:bg-slate-50 rounded font-medium">Yearly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-6">Aggregate Inflow Volume (Metric Tons)</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CROP_INFLOW_DATA}>
                <defs>
                  <linearGradient id="colorWheat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                />
                <Legend iconType="circle" />
                <Area type="monotone" dataKey="wheat" stroke="#16a34a" fillOpacity={1} fill="url(#colorWheat)" strokeWidth={3} />
                <Area type="monotone" dataKey="corn" stroke="#f59e0b" fillOpacity={0} strokeWidth={2} />
                <Area type="monotone" dataKey="rice" stroke="#3b82f6" fillOpacity={0} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-semibold text-slate-700 mb-4">Inflow Summary</h3>
          <div className="space-y-4 flex-1">
            {[
              { name: 'Wheat', value: '2,410 T', trend: '+12%', color: 'bg-green-500' },
              { name: 'Corn', value: '3,039 T', trend: '-5%', color: 'bg-amber-500' },
              { name: 'Rice', value: '1,528 T', trend: '+24%', color: 'bg-blue-500' },
              { name: 'Soy', value: '1,760 T', trend: '+8%', color: 'bg-purple-500' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-8 rounded-full ${item.color}`} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.name}</p>
                    <p className="text-lg font-bold text-slate-800">{item.value}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.trend}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
