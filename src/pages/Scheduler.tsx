
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Calendar, Clock, Plus, Edit3, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scheduledPosts = [
  {
    id: 1,
    title: "Summer Campaign Launch",
    platform: "Instagram",
    scheduledTime: "2024-06-15 10:00 AM",
    status: "scheduled",
    content: "🌞 Summer is here! Check out our amazing summer collection...",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Product Announcement",
    platform: "Twitter",
    scheduledTime: "2024-06-15 2:00 PM",
    status: "scheduled",
    content: "Exciting news! We're launching our new product line next week. Stay tuned! 🚀",
    image: null
  },
  {
    id: 3,
    title: "Behind the Scenes",
    platform: "LinkedIn",
    scheduledTime: "2024-06-16 9:00 AM",
    status: "draft",
    content: "Take a look behind the scenes at our creative process...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Weekend Vibes",
    platform: "Instagram",
    scheduledTime: "2024-06-16 6:00 PM",
    status: "published",
    content: "Weekend vibes are here! Time to relax and enjoy 🌅",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  }
];

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram': return 'bg-pink-500';
      case 'Twitter': return 'bg-blue-500';
      case 'LinkedIn': return 'bg-blue-700';
      case 'Facebook': return 'bg-blue-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <Sidebar />
      
      <div className="ml-64">
        <Header />
        
        <main className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Content Scheduler</h1>
              <p className="text-muted-foreground">Plan and schedule your social media content</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Post
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calendar Sidebar */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Calendar
              </h3>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full glass rounded-lg border border-border p-3 text-foreground"
              />
              
              <div className="mt-6">
                <h4 className="font-medium text-foreground mb-3">Quick Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Scheduled</span>
                    <span className="font-medium text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Drafts</span>
                    <span className="font-medium text-yellow-600">5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Published</span>
                    <span className="font-medium text-green-600">28</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts List */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Scheduled Posts</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="outline" size="sm">Scheduled</Button>
                    <Button variant="outline" size="sm">Drafts</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div key={post.id} className="border border-border rounded-xl p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-3 h-3 rounded-full ${getPlatformColor(post.platform)}`}></div>
                            <h4 className="font-medium text-foreground">{post.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                              {post.status}
                            </span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {post.content}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.scheduledTime}
                            </span>
                            <span>{post.platform}</span>
                          </div>
                        </div>

                        {post.image && (
                          <div className="ml-4 flex-shrink-0">
                            <img 
                              src={post.image} 
                              alt="Post preview" 
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          </div>
                        )}

                        <div className="ml-4 flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar View */}
              <div className="glass rounded-2xl p-6 mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Calendar View</h3>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="p-2 text-sm hover:bg-accent rounded-lg cursor-pointer">
                      {i % 7 === 0 && i > 0 ? Math.floor(i / 7) : ''}
                      {i < 7 ? i + 1 : (i - 6) % 30 + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scheduler;
