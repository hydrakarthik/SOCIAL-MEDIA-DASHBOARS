import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Robot3D from './Robot3D';

const Header = () => {
  const currentHour = new Date().getHours();
  const emoji = currentHour < 12 ? '🌤️' : currentHour < 18 ? '☀️' : '🌙';

  return (
    <header className="glass border-b border-border/50 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between">
        <div className="animate-fade-in flex items-center space-x-4">
          <Robot3D />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome {emoji}
            </h1>
            <p className="text-muted-foreground mt-1">
              Ready to create amazing content today?
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 cursor-pointer">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">AI</span>
            </div>
            <span className="text-sm font-medium">Assistant</span>
          </div>

          <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors bg-background border border-border">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors bg-background border border-border">
            <MessageSquare className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <span className="text-white font-medium">K</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
