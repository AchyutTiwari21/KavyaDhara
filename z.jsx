import React, { useState } from 'react';
import { Moon, Sun, Heart, MessageCircle, Share2, Feather, PenSquare, Volume2, X } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [showReadModal, setShowReadModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [poems, setPoems] = useState([
    {
      title: "न च प्राण संज्ञो",
      content: "न च प्राण संज्ञो न वै पञ्चवायु: न वा सप्तधातुनर् वा पञ्चकोश: न वाक्पािणपादौ न चोपस्थपायू िचदानन्द रूप:िशवोऽहम् िशवोऽहम्",
      translation: "मैं शुद्ध आत्मा हूँ, जो इन सबसे परे है, और मैं ही शिव हूँ।",
      likes: 24,
      comments: [
        {
          id: '1',
          text: 'बहुत सुंदर श्लोक है!',
          author: 'रमेश',
          timestamp: '2 घंटे पहले'
        },
        {
          id: '2',
          text: 'आध्यात्मिक ज्ञान से भरपूर',
          author: 'सुनीता',
          timestamp: '1 दिन पहले'
        }
      ],
      isLiked: false
    },
    {
      title: "संग्रहकस्य यन्त्र",
      content: "संग्रहकस्य यन्त्र, वर्तमानस्य गति, आधारस्य शिल्प",
      translation: "संग्रहकर्ता की मशीन, वर्तमान का पथ, आधार का शिल्प",
      likes: 18,
      comments: [
        {
          id: '3',
          text: 'आधुनिक युग की सटीक व्याख्या',
          author: 'अनिल',
          timestamp: '3 घंटे पहले'
        }
      ],
      isLiked: false
    }
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLike = (index) => {
    const newPoems = [...poems];
    const poem = newPoems[index];
    poem.isLiked = !poem.isLiked;
    poem.likes = poem.isLiked ? poem.likes + 1 : poem.likes - 1;
    setPoems(newPoems);
    if (selectedPoem) {
      setSelectedPoem({ ...poem });
    }
  };

  const handleShare = async (poem) => {
    try {
      await navigator.share({
        title: poem.title,
        text: `${poem.content}\n\n${poem.translation}`,
        url: window.location.href
      });
    } catch (error) {
      navigator.clipboard.writeText(`${poem.title}\n\n${poem.content}\n\n${poem.translation}`);
      alert('कविता को क्लिपबोर्ड पर कॉपी कर दिया गया है।');
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleAddComment = () => {
    if (!selectedPoem || !newComment.trim()) return;

    const newCommentObj = {
      id: Date.now().toString(),
      text: newComment,
      author: 'आप',
      timestamp: 'अभी'
    };

    const updatedPoems = poems.map(poem => 
      poem.title === selectedPoem.title 
        ? { ...poem, comments: [newCommentObj, ...poem.comments] }
        : poem
    );

    setPoems(updatedPoems);
    setSelectedPoem(updatedPoems.find(p => p.title === selectedPoem.title) || null);
    setNewComment('');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Feather className={`h-8 w-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={`ml-2 text-2xl font-sanskrit ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>काव्यपथ</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowWriteModal(true)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                }`}
              >
                <PenSquare className="h-5 w-5 mr-2" />
                <span>लिखें</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isDarkMode ? 'text-yellow-300' : 'text-gray-600'}`}
              >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className={`text-4xl tracking-tight font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
                    <span className="block">चक्षुरध्ययनम्</span>
                    <span className={`block ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} xl:inline`}>वचनं श्रवणम्</span>
                  </h1>
                  <p className={`mt-3 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}>
                    देखना अध्ययन है, सुनना श्रवण है, सब कुछ एकीकृत है
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Poems */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, index) => (
              <div 
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-white'} cursor-pointer transform transition-transform hover:scale-105`}
              >
                <div className="p-6">
                  <h3 
                    onClick={() => {
                      setSelectedPoem(poem);
                      setShowReadModal(true);
                      setShowComments(false);
                    }}
                    className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    {poem.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {poem.translation}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleLike(index)}
                        className={`flex items-center ${poem.isLiked ? 'text-red-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <Heart className={`h-5 w-5 ${poem.isLiked ? 'fill-current' : ''}`} />
                        <span className="ml-1">{poem.likes}</span>
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedPoem(poem);
                          setShowReadModal(true);
                          setShowComments(true);
                        }}
                        className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span className="ml-1">{poem.comments.length}</span>
                      </button>
                      <button 
                        onClick={() => handleShare(poem)}
                        className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write Modal */}
      {showWriteModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-2xl p-6`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>नई कविता लिखें</h2>
                <button onClick={() => setShowWriteModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="शीर्षक"
                  className={`w-full p-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                  } border-2 border-transparent focus:border-purple-500 outline-none`}
                />
                <textarea
                  placeholder="अपनी कविता यहाँ लिखें..."
                  rows={8}
                  className={`w-full p-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                  } border-2 border-transparent focus:border-purple-500 outline-none`}
                ></textarea>
                <textarea
                  placeholder="हिंदी अनुवाद (वैकल्पिक)"
                  rows={4}
                  className={`w-full p-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                  } border-2 border-transparent focus:border-purple-500 outline-none`}
                ></textarea>
                <button className={`w-full py-2 rounded-lg ${
                  isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
                } text-white font-medium`}>
                  प्रकाशित करें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Read Modal */}
      {showReadModal && selectedPoem && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-2xl p-6`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedPoem.title}</h2>
                <button onClick={() => setShowReadModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div className={`text-lg font-sanskrit ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {selectedPoem.content}
                </div>
                <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
                  <h3 className="font-medium mb-2">हिंदी अनुवाद:</h3>
                  <p>{selectedPoem.translation}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleLike(poems.findIndex(p => p.title === selectedPoem.title))}
                      className={`flex items-center ${selectedPoem.isLiked ? 'text-red-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <Heart className={`h-5 w-5 ${selectedPoem.isLiked ? 'fill-current' : ''}`} />
                      <span className="ml-1">{selectedPoem.likes}</span>
                    </button>
                    <button 
                      onClick={() => setShowComments(!showComments)}
                      className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="ml-1">{selectedPoem.comments.length}</span>
                    </button>
                    <button 
                      onClick={() => handleShare(selectedPoem)}
                      className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => speakText(selectedPoem.translation)}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                    }`}
                  >
                    <Volume2 className="h-5 w-5 mr-2" />
                    <span>सुनें</span>
                  </button>
                </div>

                {/* Comments Section */}
                {showComments && (
                  <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>टिप्पणियाँ</h3>
                    
                    {/* Add Comment */}
                    <div className="flex space-x-2 mb-6">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="अपनी टिप्पणी लिखें..."
                        className={`flex-1 p-2 rounded-lg ${
                          isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'
                        } border-2 border-transparent focus:border-purple-500 outline-none`}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                      />
                      <button
                        onClick={handleAddComment}
                        className={`px-4 py-2 rounded-lg ${
                          isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
                        } text-white font-medium`}
                      >
                        भेजें
                      </button>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {selectedPoem.comments.map((comment) => (
                        <div 
                          key={comment.id}
                          className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {comment.author}
                            </span>
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {comment.timestamp}
                            </span>
                          </div>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {comment.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;