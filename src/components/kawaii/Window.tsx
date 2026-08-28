import React from 'react';
import { cn } from '@/lib/utils';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  icon?: string;
}

const Window: React.FC<WindowProps> = ({ title, children, className, bodyClassName, icon = '♡' }) => (
  <div className={cn('win', className)}>
    <div className="win-bar">
      <span className="truncate">
        <span className="mr-1">{icon}</span>
        {title}
      </span>
      <span className="flex shrink-0 items-center gap-1">
        {['—', '□', '×'].map((s) => (
          <span
            key={s}
            className="grid h-4 w-4 place-items-center rounded-[3px] border border-ink bg-white text-[9px] leading-none text-ink"
          >
            {s}
          </span>
        ))}
      </span>
    </div>
    <div className={cn('p-5', bodyClassName)}>{children}</div>
  </div>
);

export default Window;
