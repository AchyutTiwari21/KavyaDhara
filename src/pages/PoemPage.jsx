import React from 'react';
import { PenLine, Book, Heart, MessageCircle, Share2 } from 'lucide-react';

function PoemPage() {
  const samplePoem = {
    title: "सपनों की उड़ान",
    excerpt: "जब आसमान छूने की चाह में,\nपंख फैलाए उड़ते हैं सपने।\nहर मुश्किल राह में भी,\nनई उम्मीद जगाते हैं सपने।",
    imageUrl: "https://images.unsplash.com/photo-1518050947974-4be8c7469f0c?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "अनुपम शर्मा",
      avatar: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&q=80&w=100",
    },
    likes: 128,
    comments: 23,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">काव्यपथ</h1>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <PenLine className="w-5 h-5" />
                लेखन शुरू करें
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Book className="w-5 h-5" />
                और जानें
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Poetry Card */}
          <div className="max-w-md rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-102 hover:shadow-xl">
            <div className="relative h-48">
              <img
                src={samplePoem.imageUrl}
                alt={samplePoem.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {samplePoem.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-hindi leading-relaxed whitespace-pre-line">
                {samplePoem.excerpt}
              </p>
              
              <div className="flex items-center mb-4">
                <img
                  src={samplePoem.author.avatar}
                  alt={samplePoem.author.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {samplePoem.author.name}
                </span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{samplePoem.likes}</span>
                </button>
                
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{samplePoem.comments}</span>
                </button>
                
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>साझा करें</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PoemPage;