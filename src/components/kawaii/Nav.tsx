import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { blip, isMuted, subscribeMute, toggleMute } from '@/lib/sfx';

const links = [
  { name: 'HOME', href: '#home', icon: '⌂' },
  { name: 'ABOUT', href: '#about', icon: '☺' },
  { name: 'SKILLS', href: '#skills', icon: '✦' },
  { name: 'PROJECTS', href: '#projects', icon: '▤' },
  { name: 'GALLERY', href: '#gallery', icon: '✿' },
  { name: 'SOCIALS', href: '#socials', icon: '✉' },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(isMuted());

  useEffect(() => subscribeMute(setMuted) as unknown as () => void, []);

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="win overflow-hidden">
          <div className="win-bar">
            <span>xskinbones.sys — navigation</span>
            <button
              onClick={() => {
                toggleMute();
                blip(660);
              }}
              className="rounded border border-ink bg-white px-1.5 text-[9px] text-ink"
              aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
            >
              {muted ? 'SOUND: OFF' : 'SOUND: ON'}
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 bg-white/90 px-3 py-2 backdrop-blur">
            <a href="#home" className="font-display text-base text-primary md:text-lg">
              XSKINBONES <span className="text-fuchsia">♡</span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onMouseEnter={() => blip(980, 0.05)}
                  className="group flex items-center gap-1 rounded-full border-2 border-transparent px-3 py-1 font-pixel text-[11px] text-ink transition-colors hover:border-ink hover:bg-pink-pale"
                >
                  <span className="text-primary">{l.icon}</span>
                  {l.name}
                </a>
              ))}
            </div>

            <button
              className="rounded-full border-2 border-ink px-3 py-1 font-pixel text-[11px] md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? '× CLOSE' : '☰ MENU'}
            </button>
          </div>

          <div
            className={cn(
              'grid grid-cols-2 gap-2 overflow-hidden bg-white/95 px-3 transition-all md:hidden',
              open ? 'max-h-64 py-3' : 'max-h-0 py-0',
            )}
          >
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border-2 border-ink bg-pink-pale px-3 py-2 text-center font-pixel text-[11px]"
              >
                {l.icon} {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
