import React from 'react';
import Window from './Window';
import Sticker from './Sticker';
import FloatingSticker from './FloatingSticker';

const tags = ['♡ TECH NERD', '♡ CREATOR', '♡ DESIGNER', '♡ HACKER', '♡ GAMER', '♡ OTAKU'];
const tones = ['pink', 'white', 'sky', 'violet', 'fuchsia', 'white'] as const;

const About: React.FC = () => (
  <section id="about" className="relative px-4 py-20">
    <span className="ghost-type right-[-2%] top-10 text-[16vw]">XOXO</span>
    <FloatingSticker className="right-[6%] top-24" tone="pink" rotate={9} speed={0.05}>BRB CREATING</FloatingSticker>

    <div className="container relative z-10 mx-auto">
      <h2 className="mb-10 text-center font-display text-3xl text-ink sm:text-4xl">
        ABOUT THIS HUMAN <span className="text-primary">♡</span>
      </h2>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <Window title="ABOUT.EXE" className="rotate-[-0.8deg]">
          <div className="relative">
            <span className="tape -top-9 left-8" />
            <p className="font-sans text-lg leading-relaxed text-ink/85">
              I&apos;m Mahesh Trikey, aka xskinbones. I&apos;m a 21-year-old tech enthusiast and multi-skilled
              creator from Goa. I love computers, design, cybersecurity, networking, websites, hardware and
              basically anything that lets me experiment and build something cool.
            </p>
            <p className="mt-4 font-hand text-2xl text-fuchsia">
              I don&apos;t really fit into one box. I like opening the box, figuring out how it works, and then
              making something weird with it.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <Sticker key={t} tone={tones[i]} rotate={i % 2 ? 3 : -3}>
                  {t}
                </Sticker>
              ))}
            </div>
          </div>
        </Window>

        <Window title="PROFILE.DAT" className="rotate-[1.2deg]" icon="☺">
          <div className="mb-4 grid place-items-center">
            <div className="grid h-24 w-24 place-items-center rounded-2xl border-2 border-ink bg-pink-pale text-4xl shadow-sticker">
              ⌨
            </div>
            <p className="mt-2 font-display text-lg text-primary">XSKINBONES</p>
          </div>
          <dl className="space-y-2 rounded-xl border-2 border-dashed border-ink/40 bg-cream p-4 font-pixel text-[12px]">
            {[
              ['NAME', 'MAHESH TRIKEY'],
              ['AGE', '21'],
              ['DOB', '08.05.2005'],
              ['BASE', 'GOA, INDIA'],
              ['STATUS', 'ONLINE ♡'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Window>
      </div>
    </div>
  </section>
);

export default About;
