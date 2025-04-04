import React from 'react';
import { PenLine, Book, Heart, MessageCircle, Share2 } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { Link } from 'react-router-dom';
import poems from '../database/poems';
import parse from "html-react-parser";

function PoemPage() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">काव्यपथ</h1>
            <div className="flex gap-4">

              <Link to="/addPoem">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <PenLine className="w-5 h-5" />
                  लेखन शुरू करें
                </button>
              </Link>
              
              <Link to="/shloka">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Book className="w-5 h-5" />
                और जानें
              </button>
              </Link>

              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Poetry Card */}
          {poems.map((poem) => (
            <div className="max-w-md rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-102 hover:shadow-xl">
              <div className="relative h-48">
                <img
                  src={poem.imageUrl}
                  alt={poem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {poem.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-hindi leading-relaxed whitespace-pre-line">
                  {parse(poem.excerpt)}
                </p>
                
                <div className="flex items-center mb-4">
                  <img
                    src={poem.author.avatar}
                    alt={poem.author.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {poem.author.name}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{poem.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{poem.comments.length}</span>
                  </button>
                  
                  <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>साझा करें</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PoemPage;