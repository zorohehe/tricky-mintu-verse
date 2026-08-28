import React from 'react';
import { cn } from '@/lib/utils';

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'pink' | 'white' | 'sky' | 'violet' | 'fuchsia';
  rotate?: number;
}

const tones: Record<string, string> = {
  pink: 'bg-primary text-primary-foreground',
  white: 'bg-white text-ink',
  sky: 'bg-sky text-ink',
  violet: 'bg-violet text-white',
  fuchsia: 'bg-fuchsia text-white',
};

const Sticker: React.FC<StickerProps> = ({ children, className, tone = 'pink', rotate = 0 }) => (
  <span
    className={cn('sticker', tones[tone], className)}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </span>
);

export default Sticker;
