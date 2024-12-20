import React from 'react';
import { FileText, Image, Type, Video, Code, QrCode, Settings } from 'lucide-react';
import ToolCard from './ToolCard';

const tools = [
  {
    icon: FileText,
    title: 'PDF Tools',
    description: 'Convert, compress, merge and split PDF files with ease'
  },
  {
    icon: Image,
    title: 'Image Tools',
    description: 'Compress, resize, and convert images between formats'
  },
  {
    icon: Type,
    title: 'Text Tools',
    description: 'Format, convert, and analyze text content'
  },
  {
    icon: Video,
    title: 'Media Tools',
    description: 'Convert and compress video and audio files'
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'Format and validate code, generate assets'
  },
  {
    icon: QrCode,
    title: 'QR Tools',
    description: 'Generate and scan QR codes instantly'
  },
  {
    icon: Settings,
    title: 'Utilities',
    description: 'Various helpful tools for everyday tasks'
  }
];

function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard
          key={tool.title}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
        />
      ))}
    </div>
  );
}

export default ToolsGrid;