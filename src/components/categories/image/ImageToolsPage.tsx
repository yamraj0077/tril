import React from 'react';
import { Image, ImagePlus, Images } from 'lucide-react';
import ToolCard from '../../shared/ToolCard';
import SEOHead from '../../shared/SEOHead';

const imageTools = [
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    description: 'Compress images without losing quality. Supports JPG, PNG, WebP formats',
    icon: Image,
    metaTitle: 'Free Online Image Compressor - Reduce Image Size Without Losing Quality',
    metaDescription: 'Compress images online for free. Reduce image file size while maintaining quality. Support for JPG, PNG, WebP formats.',
    path: '/tools/image-compressor'
  },
  {
    id: 'image-converter',
    title: 'Image Converter',
    description: 'Convert images between different formats including JPG, PNG, WebP, and more',
    icon: ImagePlus,
    metaTitle: 'Free Image Format Converter - Convert Images Online',
    metaDescription: 'Convert images between formats online. Support JPG, PNG, WebP and more. Fast, free, and secure image conversion.',
    path: '/tools/image-converter'
  },
  {
    id: 'image-resizer',
    title: 'Image Resizer',
    description: 'Resize images to exact dimensions while preserving aspect ratio',
    icon: Images,
    metaTitle: 'Free Online Image Resizer - Resize Images Without Losing Quality',
    metaDescription: 'Resize images online for free. Maintain aspect ratio and quality. Perfect for social media, websites, and email.',
    path: '/tools/image-resizer'
  }
];

function ImageToolsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Image Tools - Free Online Image Editor and Converter"
        description="Free online image tools to compress, convert, and resize images. Easy to use, no installation needed. Process images securely in your browser."
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Image Tools
          </h1>
          <p className="text-xl text-gray-600">
            Professional image editing tools, right in your browser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}