import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Heart } from 'lucide-react';

function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">काव्यपथ</h2>
              <p className="text-sm">
                अपनी कविताओं को लिखें, पढ़ें और साझा करें। हिंदी साहित्य की एक नई यात्रा।
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">त्वरित लिंक</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">होम</a></li>
                <li><a href="#" className="hover:text-white transition-colors">विशेषताएं</a></li>
                <li><a href="#" className="hover:text-white transition-colors">श्लोक व्याख्या</a></li>
                <li><a href="#" className="hover:text-white transition-colors">लोकप्रिय श्लोक</a></li>
                <li><a href="#" className="hover:text-white transition-colors">समुदाय</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">संसाधन</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">शिक्षण सामग्री</a></li>
                <li><a href="#" className="hover:text-white transition-colors">डिजिटल पुस्तकालय</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ऑडियो संग्रह</a></li>
                <li><a href="#" className="hover:text-white transition-colors">वीडियो प्रशिक्षण</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ब्लॉग</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">न्यूज़लेटर</h3>
              <p className="text-sm mb-4">नवीनतम श्लोक, व्याख्याओं और हिंदी साहित्य के अपडेट प्राप्त करें</p>
              <form className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="आपका ईमेल पता"
                    className="flex-grow px-4 py-2 bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-r hover:bg-purple-700 transition-colors"
                  >
                    <Mail size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm">
                © 2024 काव्यपथ। सर्वाधिकार सुरक्षित।
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">गोपनीयता नीति</a>
                <a href="#" className="hover:text-white transition-colors">उपयोग की शर्तें</a>
                <a href="#" className="hover:text-white transition-colors">कुकी नीति</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;