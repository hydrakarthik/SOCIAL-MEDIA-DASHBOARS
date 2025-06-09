
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  gradient: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient
}) => {
  return (
    <div className="glass rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          changeType === 'positive' 
            ? 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20' 
            : 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20'
        }`}>
          {change}
        </span>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;
