import React, { useState } from 'react';
import { Wrench, FileText, Image, Type, Video, Code, QrCode, Settings, Menu, X } from 'lucide-react';
import MenuItem from './MenuItem';

const menuItems = [
  { icon: FileText, label: 'PDF Tools', description: 'Convert, compress, merge and split PDF files with ease' },
  { icon: Image, label: 'Image Tools', description: 'Compress, resize, and convert images between formats' },
  { icon: Type, label: 'Text Tools', description: 'Format, convert, and analyze text content' },
  { icon: Video, label: 'Media Tools', description: 'Convert and compress video and audio files' },
  { icon: Code, label: 'Dev Tools', description: 'Format and validate code, generate assets' },
  { icon: QrCode, label: 'QR Tools', description: 'Generate and scan QR codes instantly' },
  { icon: Settings, label: 'Utilities', description: 'Various helpful tools for everyday tasks' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Wrench className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">Free Online Tools</span>
          </div>
          
          <nav className="hidden md:flex ml-8 space-x-8">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                description={item.description}
              />
            ))}
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <item.icon className="h-5 w-5 text-indigo-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;