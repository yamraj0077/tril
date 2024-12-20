import React from 'react';
import { Type, Hash, AlignLeft } from 'lucide-react';
import ToolCard from '../../shared/ToolCard';
import SEOHead from '../../shared/SEOHead';

const textTools = [
  {
    id: 'text-formatter',
    title: 'Text Formatter',
    description: 'Format and beautify text with various styling options',
    icon: Type,
    metaTitle: 'Online Text Formatter - Format and Beautify Text',
    metaDescription: 'Format text online with various styling options. Clean up text formatting, remove extra spaces, and more. Free text formatting tool.',
    path: '/tools/text-formatter'
  },
  {
    id: 'text-counter',
    title: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text',
    icon: Hash,
    metaTitle: 'Free Word Counter - Count Words, Characters & More Online',
    metaDescription: 'Count words, characters, sentences online. Perfect for writers, students, and content creators. Free word counting tool.',
    path: '/tools/word-counter'
  },
  {
    id: 'text-diff',
    title: 'Text Diff Checker',
    description: 'Compare two texts and find the differences between them',
    icon: AlignLeft,
    metaTitle: 'Online Text Comparison Tool - Find Differences Between Texts',
    metaDescription: 'Compare two texts and highlight differences online. Perfect for finding changes between text versions. Free text comparison tool.',
    path: '/tools/text-diff'
  }
];

function TextToolsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Text Tools - Free Online Text Editor and Analyzer"
        description="Free online text tools to format, analyze, and compare text. Easy to use, no installation needed. Process text securely in your browser."
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Text Tools
          </h1>
          <p className="text-xl text-gray-600">
            Professional text processing tools at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}