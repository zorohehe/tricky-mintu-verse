import React, { useEffect, useState } from 'react';
import Sticker from './Sticker';
import { cn } from '@/lib/utils';

interface FloatingStickerProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'pink' | 'white' | 'sky' | 'violet' | 'fuchsia';
  rotate?: number;
  speed?: number;
}

/** Sticker that drifts slightly as the page scrolls. */
const FloatingSticker: React.FC<FloatingStickerProps> = ({
  children,
  className,
  tone = 'white',
  rotate = -6,
  speed = 0.06,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * speed));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <span
      className={cn('pointer-events-none absolute z-20 hidden md:inline-flex', className)}
      style={{ transform: `translateY(${-offset}px)` }}
    >
      <Sticker tone={tone} rotate={rotate}>
        {children}
      </Sticker>
    </span>
  );
};

export default FloatingSticker;
