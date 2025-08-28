import React, { useEffect, useRef, useState } from 'react';

const SPLINE_SRC = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
const SCENE_URL = 'https://prod.spline.design/00xeECdZSAQfgZTz/scene.splinecode';

function useSplineViewer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = document.querySelector(`script[src="${SPLINE_SRC}"]`);
    if (existing) {
      if (customElements.get('spline-viewer')) setReady(true);
      else existing.addEventListener('load', () => setReady(true), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = SPLINE_SRC;
    script.async = true;
    script.addEventListener('load', () => setReady(true), { once: true });
    document.head.appendChild(script);
  }, []);

  return ready;
}

export default function Hero() {
  const ready = useSplineViewer();
  const [viewerVisible, setViewerVisible] = useState(true);
  const containerRef = useRef(null);

  // Fallback if loading takes too long
  useEffect(() => {
    const to = setTimeout(() => {
      if (!ready) setViewerVisible(false);
    }, 3500);
    return () => clearTimeout(to);
  }, [ready]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background base */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Spline background */}
      <div ref={containerRef} className="absolute inset-0 -z-10">
        {ready && viewerVisible ? (
          // eslint-disable-next-line react/no-unknown-property
          <spline-viewer url={SCENE_URL} style={{ width: '100%', height: '100%' }} loading-anim="false"></spline-viewer>
        ) : (
          <div className="absolute inset-0 -z-10">
            {/* Fallback particle-like shader using gradients */}
            <div className="w-full h-full opacity-60" style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)'
            }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.08),transparent_60%)] animate-pulse" />
          </div>
        )}
      </div>

      {/* Overlay gradient for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-24 sm:pt-28 lg:pt-32 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
          The Web’s Most Daring
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Experiences</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Celebrate visionary designers, creative developers, and boundary-pushing brands. Discover the next wave of digital craft.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#work" className="rounded-full px-5 py-3 bg-white text-black font-medium hover:bg-white/90 transition shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Explore Winners
          </a>
          <a href="#submit" className="rounded-full px-5 py-3 border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition">
            Submit Your Site
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {[
            { kpi: '2.3K+', label: 'Sites Reviewed' },
            { kpi: '180+', label: 'Expert Jurors' },
            { kpi: '75', label: 'Countries' },
            { kpi: '24/7', label: 'Global Showcase' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm py-4">
              <div className="text-2xl font-semibold">{item.kpi}</div>
              <div className="text-xs tracking-wide text-white/60 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle scanline shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent" />
    </section>
  );
}
