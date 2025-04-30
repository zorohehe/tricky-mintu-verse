
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  hoverEffect = false,
  intensity = 'medium',
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const glitchIntensity = {
    low: 0.01,
    medium: 0.03,
    high: 0.07,
  };

  useEffect(() => {
    if (!hoverEffect || isHovering) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const intensity = glitchIntensity[intensity];
      
      const interval = setInterval(() => {
        const glitched = text
          .split('')
          .map((char) => {
            if (Math.random() < intensity) {
              return chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return char;
          })
          .join('');
        
        setGlitchText(glitched);
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setGlitchText(text);
    }
  }, [text, hoverEffect, isHovering, intensity]);

  return (
    <span
      className={cn(
        'inline-block',
        isHovering || !hoverEffect ? 'animate-text-glitch' : '',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {glitchText}
    </span>
  );
};

export default GlitchText;
