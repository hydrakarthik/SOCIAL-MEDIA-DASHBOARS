
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface DashboardStats {
  totalFollowers: number;
  engagementRate: string;
  postsThisWeek: number;
  unreadMessages: number;
  weeklyData: Array<{
    day: string;
    followers: number;
    likes: number;
    comments: number;
  }>;
}

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async (): Promise<DashboardStats> => {
      const { data, error } = await supabase.functions.invoke('dashboard-stats');
      
      if (error) {
        console.error('Error fetching dashboard stats:', error);
        throw error;
      }
      
      return data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};
