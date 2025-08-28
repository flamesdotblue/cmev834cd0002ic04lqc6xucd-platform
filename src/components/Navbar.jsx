import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-[0.2em] text-sm sm:text-base">
          AWWWARDS<span className="text-white/50">•</span>LAB
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <li><a className="hover:text-white transition" href="#work">Winners</a></li>
          <li><a className="hover:text-white transition" href="#categories">Categories</a></li>
          <li><a className="hover:text-white transition" href="#about">About</a></li>
        </ul>
        <a href="#submit" className="rounded-full bg-white text-black text-xs sm:text-sm px-4 py-2 font-medium hover:bg-white/90 transition">
          Submit Site
        </a>
      </nav>
    </header>
  );
}
