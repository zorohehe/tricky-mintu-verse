import React from 'react';
import Sticker from './Sticker';
import { cn } from '@/lib/utils';
import { blip } from '@/lib/sfx';

interface SkillCard {
  no: string;
  name: string;
  icon: string;
  blurb: string;
  tools: string[];
  label: 'LEARNING' | 'EXPLORING' | 'BUILDING' | 'OBSESSED';
  bar: number;
  tone: string;
}

const skills: SkillCard[] = [
  { no: '01', name: 'UI/UX DESIGN', icon: '✎', blurb: 'Interfaces that feel cute and make sense.', tools: ['Figma', 'Adobe XD'], label: 'OBSESSED', bar: 5, tone: 'bg-pink-pale' },
  { no: '02', name: 'ETHICAL HACKING', icon: '☠', blurb: 'Breaking things politely so they get safer.', tools: ['Kali', 'Burp', 'Wireshark'], label: 'BUILDING', bar: 4, tone: 'bg-violet/25' },
  { no: '03', name: 'NETWORKING', icon: '⇄', blurb: 'Cables, routers, subnets and a lot of patience.', tools: ['Cisco', 'pfSense', 'VPN'], label: 'EXPLORING', bar: 4, tone: 'bg-sky/30' },
  { no: '04', name: 'GRAPHIC DESIGN', icon: '✦', blurb: 'Posters, brochures, stickers, chaos collages.', tools: ['Photoshop', 'Illustrator'], label: 'OBSESSED', bar: 5, tone: 'bg-pink-pale' },
  { no: '05', name: 'CCTV SETUP', icon: '◉', blurb: 'Cameras, NVRs and very tidy cable runs.', tools: ['IP Cams', 'NVR'], label: 'BUILDING', bar: 3, tone: 'bg-fuchsia/20' },
  { no: '06', name: 'HARDWARE & REPAIR', icon: '⚙', blurb: 'Opening the box to see what makes it beep.', tools: ['PC Build', 'Soldering'], label: 'OBSESSED', bar: 5, tone: 'bg-sky/25' },
];

const Skills: React.FC = () => (
  <section id="skills" className="relative px-4 py-20">
    <span className="ghost-type left-[-1%] top-6 text-[15vw]">CREATE</span>

    <div className="container relative z-10 mx-auto">
      <h2 className="mb-10 text-center font-display text-3xl text-ink sm:text-4xl">MY SKILL TREE 🌸</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <article
            key={s.no}
            onMouseEnter={() => blip(760, 0.05)}
            className={cn(
              'win group relative overflow-hidden transition-transform duration-300 hover:-translate-y-2',
              i % 3 === 1 ? 'rotate-[1deg]' : i % 3 === 2 ? 'rotate-[-1.2deg]' : '',
            )}
          >
            <div className="win-bar">
              <span>SKILL_{s.no}.CARD</span>
              <span className="text-[10px]">{s.label}</span>
            </div>
            <div className={cn('p-5', s.tone)}>
              <div className="mb-3 flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-white text-2xl shadow-sticker transition-transform group-hover:animate-wiggle">
                  {s.icon}
                </span>
                <span className="font-display text-2xl text-white text-stroke-ink">{s.no}</span>
              </div>
              <h3 className="font-display text-lg text-ink">{s.name}</h3>
              <p className="mt-1 font-sans text-sm text-ink/70">{s.blurb}</p>

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={cn(
                      'h-3 flex-1 rounded-full border-2 border-ink',
                      j < s.bar ? 'bg-primary' : 'bg-white',
                    )}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <Sticker key={t} tone="white" rotate={0} className="!px-2 !py-0.5">
                    {t}
                  </Sticker>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
