import React from 'react';
import { Heart, MessageCircle, Share2, ThumbsUp } from 'lucide-react';

// interface PoetryCardProps {
//   title: string;
//   excerpt: string;
//   imageUrl: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   likes: number;
//   comments: number;
// }

const PoetryCard = ({
  title,
  excerpt,
  imageUrl,
  author,
  likes,
  comments,
}) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-102 hover:shadow-xl">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-hindi leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            {author.name}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{likes}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>साझा करें</span>
          </button>
        </div>
      </div>
    </div>
  );
}