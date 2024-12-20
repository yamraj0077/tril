import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PageTitle from './components/PageTitle';
import ToolsGrid from './components/ToolsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <PageTitle 
            title="Popular Developer Tools"
            subtitle="Discover our most popular tools used by thousands of developers worldwide"
          />
          <ToolsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;