import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import p1 from '@/assets/proj-1.jpg';
import p2 from '@/assets/proj-2.jpg';
import p3 from '@/assets/proj-3.jpg';
import p4 from '@/assets/proj-4.jpg';

const categories = ['ALL', 'UI/UX', '3D', 'GRAPHICS', 'VIDEO'] as const;
type Cat = (typeof categories)[number];

interface Item {
  img: string;
  note: string;
  cat: Exclude<Cat, 'ALL'>;
  h: string;
  rot: string;
}

const items: Item[] = [
  { img: p2, note: 'my desk mood ♡', cat: 'UI/UX', h: 'h-64', rot: 'rotate-[-2deg]' },
  { img: p4, note: 'blender practice', cat: '3D', h: 'h-52', rot: 'rotate-[1.5deg]' },
  { img: p1, note: 'sticker sheet v3', cat: 'GRAPHICS', h: 'h-72', rot: 'rotate-[-1deg]' },
  { img: p3, note: 'lab screenshots', cat: 'UI/UX', h: 'h-56', rot: 'rotate-[2deg]' },
  { img: p4, note: 'render dump', cat: '3D', h: 'h-64', rot: 'rotate-[-1.5deg]' },
  { img: p1, note: 'brochure spread', cat: 'GRAPHICS', h: 'h-48', rot: 'rotate-[1deg]' },
  { img: p2, note: 'motion test ▶', cat: 'VIDEO', h: 'h-60', rot: 'rotate-[-2deg]' },
  { img: p3, note: 'ui exploration', cat: 'UI/UX', h: 'h-52', rot: 'rotate-[1.8deg]' },
  { img: p4, note: 'loop clip ▶', cat: 'VIDEO', h: 'h-56', rot: 'rotate-[-1deg]' },
];

const Gallery: React.FC = () => {
  const [cat, setCat] = useState<Cat>('ALL');
  const shown = cat === 'ALL' ? items : items.filter((i) => i.cat === cat);

  return (
    <section id="gallery" className="relative px-4 py-20">
      <div className="container relative z-10 mx-auto">
        <h2 className="mb-8 text-center font-display text-3xl text-ink sm:text-4xl">
          MY DIGITAL SCRAPBOOK <span className="text-primary">♡</span>
        </h2>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                'rounded-full border-2 border-ink px-4 py-1.5 font-pixel text-[11px] shadow-sticker transition-transform hover:-translate-y-0.5',
                cat === c ? 'bg-candy text-white' : 'bg-white text-ink',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {shown.map((item, i) => (
            <figure
              key={`${item.note}-${i}`}
              className={cn(
                'win relative break-inside-avoid p-3 transition-transform duration-300 hover:rotate-0',
                item.rot,
              )}
            >
              <span className="tape -top-3 left-10" />
              <img
                src={item.img}
                alt={item.note}
                loading="lazy"
                width={1024}
                height={768}
                className={cn('w-full rounded-md border-2 border-ink object-cover', item.h)}
              />
              <figcaption className="mt-2 flex items-center justify-between font-hand text-xl text-ink">
                {item.note}
                <span className="font-pixel text-[10px] text-fuchsia">{item.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
