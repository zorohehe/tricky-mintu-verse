import React from 'react';
import { cn } from '@/lib/utils';

const toys = [
  { name: 'KALI LINUX', note: '♡ CYBER LAB', icon: '🐉' },
  { name: 'FIGMA', note: '♡ UI MAGIC', icon: '✎' },
  { name: 'PHOTOSHOP', note: '♡ PIXEL PUSH', icon: '🖌' },
  { name: 'ILLUSTRATOR', note: '♡ VECTOR LOVE', icon: '✒' },
  { name: 'BLENDER', note: '♡ 3D WORLD', icon: '◈' },
  { name: 'HTML', note: '♡ SKELETON', icon: '<>' },
  { name: 'CSS', note: '♡ MAKEUP', icon: '❀' },
  { name: 'JAVASCRIPT', note: '♡ CHAOS', icon: '⚡' },
  { name: 'LINUX', note: '♡ HOME OS', icon: '🐧' },
  { name: 'NETWORK TOOLS', note: '♡ PACKET SPY', icon: '⇄' },
  { name: 'CCTV / NVR', note: '♡ EYES ON', icon: '◉' },
];

const Arsenal: React.FC = () => (
  <section className="relative px-4 py-16">
    <span className="ghost-type right-[2%] top-4 text-[14vw]">TECH</span>

    <div className="container relative z-10 mx-auto">
      <h2 className="mb-8 text-center font-display text-3xl text-ink sm:text-4xl">MY DIGITAL TOYS ♡</h2>

      <div className="flex snap-x gap-4 overflow-x-auto pb-4 no-scrollbar md:flex-wrap md:justify-center md:overflow-visible">
        {toys.map((t, i) => (
          <div
            key={t.name}
            className={cn(
              'win w-44 shrink-0 snap-start p-4 text-center transition-transform duration-300 hover:-translate-y-2 hover:rotate-2',
              i % 2 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]',
            )}
          >
            <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-pink-pale text-xl">
              {t.icon}
            </div>
            <p className="font-pixel text-[12px] text-ink">[ {t.name} ]</p>
            <p className="mt-1 font-hand text-lg text-fuchsia">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Arsenal;
