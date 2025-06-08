
import React from 'react';

const AIInsightCard = () => {
  return (
    <div className="glass rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Smart Suggestions</h3>
          <p className="text-sm text-muted-foreground">Powered by AI</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Best time to post</h4>
              <p className="text-sm text-muted-foreground">
                Your audience is most active between 2-4 PM today. Schedule your next post for maximum engagement!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Content suggestion</h4>
              <p className="text-sm text-muted-foreground">
                Try posting behind-the-scenes content - it's trending in your niche and gets 40% more engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Hashtag optimization</h4>
              <p className="text-sm text-muted-foreground">
                Consider using #MondayMotivation and #CreativeProcess - they're performing well in your category.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl py-3 font-medium hover:shadow-lg transition-all duration-200">
        Get More Insights
      </button>
    </div>
  );
};

export default AIInsightCard;
