import React from 'react';
import { cn } from '@/lib/utils';
import Sticker from './Sticker';
import FloatingSticker from './FloatingSticker';
import p1 from '@/assets/proj-1.jpg';
import p2 from '@/assets/proj-2.jpg';
import p3 from '@/assets/proj-3.jpg';
import p4 from '@/assets/proj-4.jpg';

interface Project {
  no: string;
  title: string;
  desc: string;
  tools: string[];
  img: string;
  sticker: string;
  span?: string;
  rotate: string;
}

const projects: Project[] = [
  { no: '01', title: 'DIGITAL WINGS', desc: 'Brand + web identity built from scratch for a creative studio idea.', tools: ['Figma', 'HTML', 'CSS'], img: p2, sticker: '♡ FAV', span: 'lg:col-span-2', rotate: 'rotate-[-1deg]' },
  { no: '02', title: 'HAUNTEDREADS', desc: 'A spooky reading corner with a very cozy layout.', tools: ['UI', 'JS'], img: p1, sticker: 'SPOOKY', rotate: 'rotate-[1.4deg]' },
  { no: '03', title: 'TECHNOWINGS', desc: 'Company portal concept with service management screens.', tools: ['Web', 'Design'], img: p3, sticker: 'WORK', rotate: 'rotate-[-1.6deg]' },
  { no: '04', title: 'SONIC BASS', desc: 'Audio brand visuals, posters and product mockups.', tools: ['Photoshop', 'Illustrator'], img: p4, sticker: '♡ LOUD', rotate: 'rotate-[1deg]' },
  { no: '05', title: 'PC PARADISE', desc: 'Custom build guides + shop layout for PC nerds.', tools: ['Hardware', 'UI'], img: p2, sticker: 'BUILD', span: 'lg:col-span-2', rotate: 'rotate-[-0.8deg]' },
  { no: '06', title: 'DIGITAL BROCHURES', desc: 'Print-ready brochure set with a very pink grid system.', tools: ['InDesign', 'Illustrator'], img: p1, sticker: 'PRINT', rotate: 'rotate-[1.6deg]' },
  { no: '07', title: 'CYBERSECURITY LAB', desc: 'Home lab for network testing and safe experiments.', tools: ['Kali', 'Networking'], img: p3, sticker: '♡ HACK', rotate: 'rotate-[-1.2deg]' },
  { no: '08', title: '3D CREATIVE LAB', desc: 'Blender renders of cute objects and tiny rooms.', tools: ['Blender'], img: p4, sticker: '3D', rotate: 'rotate-[1.2deg]' },
];

const Projects: React.FC = () => (
  <section id="projects" className="relative px-4 py-20">
    <span className="ghost-type left-[-2%] top-8 text-[15vw]">ONLINE</span>
    <FloatingSticker className="left-[4%] top-40" tone="fuchsia" rotate={-8} speed={0.09}>♡ LOL</FloatingSticker>

    <div className="container relative z-10 mx-auto">
      <h2 className="mb-10 text-center font-display text-3xl text-ink sm:text-4xl">STUFF I MADE ✧</h2>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.no}
            className={cn(
              'win group relative overflow-hidden transition-transform duration-300 hover:rotate-0 hover:-translate-y-2',
              p.rotate,
              p.span,
            )}
          >
            <div className="win-bar">
              <span>{p.title}.PRJ</span>
              <span className="text-[10px]">{p.no}</span>
            </div>

            <div className="relative overflow-hidden border-b-2 border-ink">
              <img
                src={p.img}
                alt={`${p.title} project preview`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute right-3 top-3">
                <Sticker tone="pink" rotate={-8}>{p.sticker}</Sticker>
              </span>
              <span className="tape -bottom-3 left-6" />
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-1 font-sans text-sm text-ink/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full border-2 border-ink bg-cream px-2 py-0.5 font-pixel text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
              <button className="btn-sticker mt-4 bg-candy !px-4 !py-2 text-xs text-white">VIEW PROJECT ♡</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
