import React from 'react';
import { FileText } from 'lucide-react';
import PDFToolCard from './PDFToolCard';
import SEOHead from '../../shared/SEOHead';

const pdfTools = [
  {
    id: 'pdf-merger',
    title: 'PDF Merger',
    description: 'Combine multiple PDF files into a single document quickly and easily',
    icon: FileText,
    metaTitle: 'Free Online PDF Merger - Combine PDF Files Online',
    metaDescription: 'Merge multiple PDF files into one document online for free. Easy to use, no installation required. Combine PDFs quickly and securely.',
    path: '/tools/pdf-merger'
  },
  {
    id: 'pdf-compressor',
    title: 'PDF Compressor',
    description: 'Reduce PDF file size while maintaining quality',
    icon: FileText,
    metaTitle: 'PDF Compressor - Compress PDF Files Online Free',
    metaDescription: 'Compress PDF files online for free. Reduce PDF size while maintaining quality. Fast, secure, and easy to use.',
    path: '/tools/pdf-compressor'
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word',
    description: 'Convert PDF files to editable Word documents',
    icon: FileText,
    metaTitle: 'Convert PDF to Word Online - Free PDF to DOCX Converter',
    metaDescription: 'Convert PDF to Word online free. Transform PDF documents to editable DOCX format. High-quality conversion, easy to use.',
    path: '/tools/pdf-to-word'
  }
];

function PDFToolsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="PDF Tools - Free Online PDF Converter and Editor"
        description="Free online PDF tools to merge, compress, convert PDF files. Easy to use, no installation needed. Process PDFs securely in your browser."
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PDF Tools
          </h1>
          <p className="text-xl text-gray-600">
            Complete suite of free online PDF tools to handle all your document needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdfTools.map((tool) => (
            <PDFToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PDFToolsPage;