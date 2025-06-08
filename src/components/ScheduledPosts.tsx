
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ScheduledPosts = () => {
  const posts = [
    {
      id: 1,
      content: "Sharing my latest design process for mobile apps...",
      platform: "Instagram",
      date: "Today",
      time: "2:30 PM",
      status: "scheduled"
    },
    {
      id: 2,
      content: "Tips for better productivity in remote work",
      platform: "LinkedIn",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "scheduled"
    },
    {
      id: 3,
      content: "Behind the scenes of our latest project",
      platform: "Twitter",
      date: "Dec 10",
      time: "4:15 PM",
      status: "draft"
    }
  ];

  return (
    <div className="glass rounded-2xl p-6 animate-slide-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Scheduled Posts</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-border/50 rounded-xl p-4 hover:bg-accent/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-foreground mb-2 line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.time}</span>
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.platform}
                  </span>
                </div>
              </div>
              <div className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                post.status === 'scheduled' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {post.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-primary text-primary-foreground rounded-xl py-3 font-medium hover:bg-primary/90 transition-colors">
        Schedule New Post
      </button>
    </div>
  );
};

export default ScheduledPosts;
