
import React from 'react';
import { Brain, TrendingUp, Users, Video } from 'lucide-react';
import { useAIInsights } from '@/hooks/useAIInsights';

const AIInsightCard = () => {
  const { data: insights, isLoading, error } = useAIInsights();

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'performance':
        return TrendingUp;
      case 'content':
        return Video;
      case 'audience':
        return Users;
      default:
        return Brain;
    }
  };

  if (isLoading) {
    return (
      <div className="glass rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
        </div>
        <p className="text-muted-foreground">Unable to load insights</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
          <Brain className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
      </div>

      <div className="space-y-4">
        {insights?.map((insight, index) => {
          const IconComponent = getInsightIcon(insight.type);
          return (
            <div key={index} className="border border-border rounded-xl p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{insight.action}</span>
                    <span className="text-xs text-muted-foreground">{insight.confidence}% confidence</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIInsightCard;
