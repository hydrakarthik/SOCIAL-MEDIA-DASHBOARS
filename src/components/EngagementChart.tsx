
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboardStats } from '@/hooks/useDashboardStats';

const EngagementChart = () => {
  const { data: stats, isLoading, error } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="glass rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Engagement</h3>
        <div className="animate-pulse">
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="glass rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Engagement</h3>
        <p className="text-muted-foreground">Unable to load chart data</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Engagement</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stats.weeklyData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="day" 
              className="text-muted-foreground"
              fontSize={12}
            />
            <YAxis 
              className="text-muted-foreground"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="followers" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Followers"
            />
            <Line 
              type="monotone" 
              dataKey="likes" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Likes"
            />
            <Line 
              type="monotone" 
              dataKey="comments" 
              stroke="#f59e0b" 
              strokeWidth={2}
              name="Comments"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
