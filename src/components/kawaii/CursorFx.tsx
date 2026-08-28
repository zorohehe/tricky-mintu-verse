import React, { useEffect, useRef, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  char: string;
}

const CHARS = ['✧', '♡', '✦', '★', '·'];

/** Custom pink cursor + sparkle trail (pointer devices only). */
const CursorFx: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [enabled, setEnabled] = useState(false);
  const idRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(fine);
    if (!fine) return;

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const now = performance.now();
      if (now - lastRef.current > 55) {
        lastRef.current = now;
        const spark: Spark = {
          id: idRef.current++,
          x: e.clientX + (Math.random() * 18 - 9),
          y: e.clientY + (Math.random() * 18 - 9),
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
        };
        setSparks((prev) => [...prev.slice(-14), spark]);
        window.setTimeout(
          () => setSparks((prev) => prev.filter((s) => s.id !== spark.id)),
          700,
        );
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.style.cursor = '';
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle text-sm text-primary"
          style={{ left: s.x, top: s.y }}
        >
          {s.char}
        </span>
      ))}
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2 text-lg text-primary drop-shadow"
        style={{ left: pos.x, top: pos.y }}
      >
        ♥
      </span>
      <span
        className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50 transition-transform duration-100"
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
};

export default CursorFx;
