import React from 'react';

const items = [
  {
    title: 'Site of the Day',
    desc: 'Daily selection of the world’s most engaging experiences and craft.',
    badge: 'SOTD',
  },
  {
    title: 'Developer Award',
    desc: 'Pristine code, performance and web standards that push the medium.',
    badge: 'DEV',
  },
  {
    title: 'Mobile Excellence',
    desc: 'Avant‑garde handheld experiences with buttery touch and flow.',
    badge: 'MOBILE',
  },
  {
    title: 'Ecommerce Experience',
    desc: 'Shops that blend utility with brand to create desire and trust.',
    badge: 'ECOM',
  },
  {
    title: 'UI Design',
    desc: 'Visual systems that are memorable, delightful and accessible.',
    badge: 'UI',
  },
  {
    title: 'UX Design',
    desc: 'Flows and frameworks that respect users and drive outcomes.',
    badge: 'UX',
  },
];

function ShineBorder({ children }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
        <div className="absolute -inset-[200%] bg-[conic-gradient(from_var(--angle),rgba(255,255,255,0.35),transparent_30%,transparent_70%,rgba(255,255,255,0.35))] animate-[spin_6s_linear_infinite]" style={{ filter: 'blur(12px)' }} />
        <div className="absolute inset-0 rounded-2xl bg-white/10" />
      </div>
      <div className="relative rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

export default function AwardsGrid() {
  return (
    <section id="categories" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-semibold">Recognizing Excellence</h2>
          <p className="mt-4 text-white/70">From pixel poetry to bulletproof performance, these awards celebrate work that reshapes the web.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <ShineBorder key={card.title}>
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-white/60">{card.badge}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/60">
                    Featured
                    <span className="block h-[6px] w-[6px] rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{card.desc}</p>
                <div className="mt-6 flex-1"></div>
                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <a href="#" className="text-sm text-white hover:text-white/90 underline/50 underline-offset-4 decoration-white/30">View winners</a>
                  <button className="text-xs px-3 py-1.5 rounded-full bg-white text-black font-medium hover:bg-white/90">Nominate</button>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-1/2 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
    </section>
  );
}
