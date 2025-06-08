
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  gradient?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient = 'gradient-primary'
}) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-muted-foreground'
  }[changeType];

  return (
    <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-scale-in group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`text-sm font-medium ${changeColor}`}>
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-2xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
