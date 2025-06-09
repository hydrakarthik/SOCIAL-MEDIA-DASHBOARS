
import React from 'react';
import { Brain, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

interface AIInsightCardProps {
  type: string;
  title: string;
  description: string;
  action: string;
  confidence: number;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({
  type,
  title,
  description,
  action,
  confidence
}) => {
  const getIcon = () => {
    switch (type) {
      case 'growth':
        return TrendingUp;
      case 'warning':
        return AlertCircle;
      case 'suggestion':
        return Lightbulb;
      default:
        return Brain;
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'growth':
        return 'text-green-600 dark:text-green-400';
      case 'warning':
        return 'text-amber-600 dark:text-amber-400';
      case 'suggestion':
        return 'text-blue-600 dark:text-blue-400';
      default:
        return 'text-purple-600 dark:text-purple-400';
    }
  };

  const Icon = getIcon();

  return (
    <div className="glass rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 bg-card">
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg bg-accent/50 ${getIconColor()}`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-foreground text-base">{title}</h3>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {confidence}% confidence
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {description}
          </p>
          
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            {action} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsightCard;
