
import React, { useState } from 'react';
import { Instagram, Youtube, Twitter, Facebook, Linkedin, TikTok } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platforms = [
  { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { name: 'YouTube', icon: Youtube, color: 'bg-gradient-to-r from-red-500 to-red-600' },
  { name: 'Twitter', icon: Twitter, color: 'bg-gradient-to-r from-blue-400 to-blue-500' },
  { name: 'Facebook', icon: Facebook, color: 'bg-gradient-to-r from-blue-600 to-blue-700' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-gradient-to-r from-blue-700 to-blue-800' },
  { name: 'TikTok', icon: TikTok, color: 'bg-gradient-to-r from-black to-gray-800' },
];

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Instagram');

  return (
    <div className="glass rounded-2xl p-6 mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">Select Platform</h2>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => {
          const IconComponent = platform.icon;
          const isSelected = selectedPlatform === platform.name;
          
          return (
            <Button
              key={platform.name}
              variant={isSelected ? "default" : "outline"}
              onClick={() => setSelectedPlatform(platform.name)}
              className={`flex items-center space-x-2 ${
                isSelected 
                  ? `${platform.color} text-white hover:opacity-90` 
                  : 'hover:bg-accent'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{platform.name}</span>
            </Button>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        Currently managing: <span className="font-medium text-foreground">{selectedPlatform}</span>
      </p>
    </div>
  );
};

export default PlatformSelector;
