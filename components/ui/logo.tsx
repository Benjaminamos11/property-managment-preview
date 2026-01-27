import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo = ({ className, light = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-1.5 font-bold tracking-tight text-xl", light ? "text-white" : "text-black", className)}>
      <span>Otti</span>
      <span className="text-otti-grey/40 font-light">|</span>
      <div className="relative">
        <span>One</span>
      </div>
    </div>
  );
};
