
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Calendar, MessageSquare, Settings } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Scheduler', href: '/scheduler', icon: Calendar },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border backdrop-blur-xl z-10 shadow-lg">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Social Media Dashboard</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-foreground hover:text-foreground hover:bg-accent border border-transparent hover:border-border'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-accent hover:bg-accent/80 transition-colors cursor-pointer border border-border">
            <div className="w-10 h-10 gradient-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">K</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Karthik</p>
              <p className="text-xs text-muted-foreground truncate">karthik@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
