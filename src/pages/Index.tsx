
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import PlatformSelector from '../components/PlatformSelector';
import StatsCard from '../components/StatsCard';
import AIInsightCard from '../components/AIInsightCard';
import ScheduledPosts from '../components/ScheduledPosts';
import EngagementChart from '../components/EngagementChart';
import { Home, BarChart2, Calendar, MessageSquare } from 'lucide-react';
import { useDashboardStats } from '@/hooks/useDashboardStats';

const Index = () => {
  const { data: stats, isLoading } = useDashboardStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <Sidebar />
      
      <div className="ml-64">
        <Header />
        
        <main className="p-6">
          <PlatformSelector />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Followers"
              value={isLoading ? "..." : stats?.totalFollowers?.toLocaleString() || "0"}
              change="+5.2%"
              changeType="positive"
              icon={Home}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <StatsCard
              title="Engagement Rate"
              value={isLoading ? "..." : `${stats?.engagementRate || "0"}%`}
              change="+1.3%"
              changeType="positive"
              icon={BarChart2}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
            <StatsCard
              title="Posts This Week"
              value={isLoading ? "..." : stats?.postsThisWeek || "0"}
              change="+2"
              changeType="positive"
              icon={Calendar}
              gradient="bg-gradient-to-r from-green-500 to-green-600"
            />
            <StatsCard
              title="Unread Messages"
              value={isLoading ? "..." : stats?.unreadMessages || "0"}
              change="-4"
              changeType="positive"
              icon={MessageSquare}
              gradient="bg-gradient-to-r from-orange-500 to-orange-600"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <EngagementChart />
              <AIInsightCard />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ScheduledPosts />
              
              {/* Quick Actions */}
              <div className="glass rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl py-3 font-medium hover:shadow-lg transition-all duration-200">
                    Create New Post
                  </button>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl py-3 font-medium hover:shadow-lg transition-all duration-200">
                    Schedule Content
                  </button>
                  <button className="w-full border border-border text-foreground rounded-xl py-3 font-medium hover:bg-accent transition-colors bg-background">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
