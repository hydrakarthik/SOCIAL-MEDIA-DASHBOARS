
import React from 'react';
import { Calendar, Clock, Globe } from 'lucide-react';

const ScheduledPosts = () => {
  // Mock data for scheduled posts
  const scheduledPosts = [
    {
      id: 1,
      title: "Summer Collection Launch",
      platform: "Instagram",
      scheduledTime: "2:00 PM",
      status: "scheduled"
    },
    {
      id: 2,
      title: "Weekly Tips & Tricks",
      platform: "Twitter",
      scheduledTime: "4:30 PM",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      platform: "LinkedIn",
      scheduledTime: "Tomorrow 9:00 AM",
      status: "scheduled"
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return 'bg-pink-500';
      case 'Twitter':
        return 'bg-blue-500';
      case 'LinkedIn':
        return 'bg-blue-700';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="glass rounded-2xl p-6 border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Scheduled Posts</h3>
      </div>

      <div className="space-y-4">
        {scheduledPosts.map((post) => (
          <div key={post.id} className="border border-border rounded-xl p-4 hover:bg-accent/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-foreground text-sm">{post.title}</h4>
              <span className="text-xs text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20 px-2 py-1 rounded-full">
                {post.status}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${getPlatformColor(post.platform)}`}></div>
                <span>{post.platform}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.scheduledTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 border border-dashed border-border text-muted-foreground rounded-xl py-3 text-sm hover:bg-accent transition-colors">
        + Schedule New Post
      </button>
    </div>
  );
};

export default ScheduledPosts;
