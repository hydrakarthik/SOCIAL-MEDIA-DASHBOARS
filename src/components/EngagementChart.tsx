
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const EngagementChart = () => {
  const data = [
    { name: 'Mon', engagement: 245 },
    { name: 'Tue', engagement: 312 },
    { name: 'Wed', engagement: 189 },
    { name: 'Thu', engagement: 456 },
    { name: 'Fri', engagement: 378 },
    { name: 'Sat', engagement: 523 },
    { name: 'Sun', engagement: 298 },
  ];

  return (
    <div className="glass rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Weekly Engagement</h3>
          <p className="text-sm text-muted-foreground">Total interactions across platforms</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">2,401</p>
          <p className="text-sm text-green-600">+12.5% vs last week</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              className="text-xs text-muted-foreground"
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <Bar 
              dataKey="engagement" 
              fill="url(#colorGradient)"
              radius={[8, 8, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
