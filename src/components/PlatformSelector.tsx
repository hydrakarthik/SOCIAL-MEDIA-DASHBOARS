
import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const PlatformSelector = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'twitter']);

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'text-blue-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="glass rounded-2xl p-6 border border-border mb-8 bg-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Select Platforms</h3>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selectedPlatforms.includes(platform.id);
          
          return (
            <button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 font-medium ${
                isSelected
                  ? 'border-primary bg-primary/20 text-primary shadow-md'
                  : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground hover:border-accent-foreground/20'
              }`}
            >
              <Icon className={`h-4 w-4 ${isSelected ? 'text-primary' : platform.color}`} />
              <span className="text-sm">{platform.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformSelector;
