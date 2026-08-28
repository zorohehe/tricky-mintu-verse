import React, { useState } from 'react';
import mascot from '@/assets/mascot.png';
import Window from './Window';
import Sticker from './Sticker';
import FloatingSticker from './FloatingSticker';
import { blip } from '@/lib/sfx';

const Hero: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [secret, setSecret] = useState(false);

  const tapHeart = () => {
    blip(1200 + clicks * 120, 0.06);
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      setSecret(true);
      setClicks(0);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-32 md:pt-40">
      <span className="ghost-type left-[-2%] top-24 text-[18vw] md:text-[13vw]">XSKINBONES</span>

      <FloatingSticker className="left-[6%] top-32" tone="pink" rotate={-10}>♡ XOXO</FloatingSticker>
      <FloatingSticker className="right-[8%] top-40" tone="sky" rotate={8} speed={0.1}>SYSTEM ONLINE</FloatingSticker>
      <FloatingSticker className="left-[10%] bottom-24" tone="violet" rotate={6} speed={0.14}>100% TECH NERD</FloatingSticker>
      <FloatingSticker className="right-[12%] bottom-16" tone="white" rotate={-7} speed={0.08}>♡ NO SLEEP</FloatingSticker>

      <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-pop-in space-y-6">
          <div className="flex flex-wrap gap-2">
            <Sticker tone="pink" rotate={-4}>♡ ONLINE</Sticker>
            <Sticker tone="white" rotate={3}>OTAKU MODE</Sticker>
            <Sticker tone="sky" rotate={-2}>BUILD MODE</Sticker>
          </div>

          <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl xl:text-6xl">
            HEY, I&apos;M{' '}
            <span className="bg-candy bg-clip-text text-transparent">XSKINBONES</span>
          </h1>

          <p className="max-w-xl font-grotesk text-xl font-bold uppercase tracking-tight text-fuchsia sm:text-2xl">
            I design, hack &amp; build for fun.
          </p>

          <p className="font-hand text-2xl text-ink/70">Mahesh Trikey • 21 • Goa, India</p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-sticker bg-candy text-white" onMouseEnter={() => blip(900)}>
              ✧ EXPLORE MY WORLD
            </a>
            <a href="#socials" className="btn-sticker bg-white text-ink" onMouseEnter={() => blip(700)}>
              ♡ DM ME
            </a>
            <button
              onClick={tapHeart}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-pink-pale text-xl shadow-sticker transition-transform hover:scale-110"
              aria-label="Cute heart button"
            >
              ♥
            </button>
          </div>

          <Window title="xskinbones.exe" className="max-w-sm rotate-[-1.5deg]" bodyClassName="p-4">
            <pre className="font-pixel text-[12px] leading-relaxed text-ink">
{`STATUS: ONLINE ♡
AGE: 21
BASE: GOA, INDIA
MODE: CREATING`}
            </pre>
            <div className="mt-3 h-3 w-full overflow-hidden rounded-full border-2 border-ink bg-white">
              <div className="h-full w-4/5 animate-blink bg-candy" />
            </div>
          </Window>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[3rem] bg-candy opacity-25 blur-3xl" />
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-4 top-10 z-20 hidden animate-float md:block">
              <Sticker tone="white" rotate={-12}>♡ DESIGN MODE</Sticker>
            </div>
            <div className="absolute -right-2 top-1/3 z-20 hidden animate-float md:block" style={{ animationDelay: '1.2s' }}>
              <Sticker tone="fuchsia" rotate={9}>KALI LINUX</Sticker>
            </div>
            <div className="absolute bottom-8 -left-2 z-20 hidden animate-float md:block" style={{ animationDelay: '0.6s' }}>
              <Sticker tone="sky" rotate={-6}>ERROR?! ✧</Sticker>
            </div>
            <img
              src={mascot}
              alt="Original anime mascot of xskinbones wearing pink headphones and holding a retro handheld computer"
              width={1024}
              height={1280}
              className="relative z-10 w-full drop-shadow-[0_18px_28px_rgba(255,105,180,0.35)]"
            />
          </div>
        </div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative mt-14 overflow-hidden border-y-2 border-ink bg-candy py-2">
        <div className="flex w-max animate-marquee gap-8 font-pixel text-sm text-white">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 gap-8">
              {['DESIGN', '♡', 'HACK', '✧', 'BUILD', '♥', 'EXPERIMENT', '★', 'REPEAT', '♡', 'XSKINBONES', '✦'].map(
                (w, j) => (
                  <span key={j}>{w}</span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {secret && (
        <div className="fixed inset-0 z-[150] grid place-items-center bg-ink/40 px-6" role="dialog">
          <Window title="secret.exe" className="w-full max-w-sm animate-pop-in">
            <p className="font-display text-xl text-primary">SECRET MODE UNLOCKED ♡</p>
            <p className="mt-2 font-hand text-2xl text-ink">YOU FOUND THE SECRET!</p>
            <p className="mt-1 font-pixel text-[11px] text-muted-foreground">
              +1 friendship point. go touch some hardware.
            </p>
            <button onClick={() => setSecret(false)} className="btn-sticker mt-4 bg-candy text-white">
              CLOSE ♡
            </button>
          </Window>
        </div>
      )}
    </section>
  );
};

export default Hero;
