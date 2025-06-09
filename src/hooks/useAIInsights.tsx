
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface AIInsight {
  type: string;
  title: string;
  description: string;
  action: string;
  confidence: number;
}

export const useAIInsights = () => {
  return useQuery({
    queryKey: ['ai-insights'],
    queryFn: async (): Promise<AIInsight[]> => {
      const { data, error } = await supabase.functions.invoke('ai-insights');
      
      if (error) {
        console.error('Error fetching AI insights:', error);
        throw error;
      }
      
      return data;
    },
    refetchInterval: 60000, // Refetch every minute
  });
};
