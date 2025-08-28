import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AwardsGrid from './components/AwardsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AwardsGrid />
      </main>
      <Footer />
    </div>
  );
}
