import React, { useEffect, useState } from 'react';

const LINES = [
  '> booting xskinbones.exe',
  '> loading kawaii modules ........ ok',
  '> mounting sticker drive ........ ok',
  '> status: ONLINE ♡',
];

const BootScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setDone(true), 320);
          return 100;
        }
        return p + 7;
      });
    }, 70);
    return () => window.clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-pastel px-6">
      <div className="win w-full max-w-md">
        <div className="win-bar">
          <span>♡ xskinbones.exe</span>
          <span className="text-[10px]">loading…</span>
        </div>
        <div className="space-y-3 p-6">
          <p className="font-display text-2xl text-primary">XSKINBONES</p>
          <div className="space-y-1 font-pixel text-[11px] text-muted-foreground">
            {LINES.map((line, i) => (
              <p key={line} className={progress > i * 25 ? 'opacity-100' : 'opacity-0'}>
                {line}
              </p>
            ))}
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full border-2 border-ink bg-white">
            <div
              className="h-full bg-candy transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-right font-pixel text-[10px] text-ink">{Math.min(progress, 100)}%</p>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
