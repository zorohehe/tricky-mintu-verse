
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  prompt?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  text,
  className,
  typingSpeed = 50,
  prompt = ">",
  cursor = true,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, typingSpeed, onComplete]);

  return (
    <div className={cn('font-mono text-cyber-green', className)}>
      <span className="text-cyber-purple mr-2">{prompt}</span>
      <span>{displayText}</span>
      {cursor && (
        <span className={`inline-block w-2 h-5 bg-cyber-green ml-1 ${isComplete ? 'animate-pulse' : ''}`}></span>
      )}
    </div>
  );
};

export default TerminalText;
