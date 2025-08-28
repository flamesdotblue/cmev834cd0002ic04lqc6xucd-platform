import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Awwwards Lab — Unofficial concept</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter / X</a>
          <a href="#" className="hover:text-white">Dribbble</a>
        </nav>
      </div>
    </footer>
  );
}
