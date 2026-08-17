import React from 'react';

interface SMRLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  darkBackground?: boolean;
}

export const SMRLogo: React.FC<SMRLogoProps> = ({ 
  className = '', 
  size = 'md',
  darkBackground = false
}) => {
  const sizeStyles: Record<'sm' | 'md' | 'lg', { height: string; maxHeight: string }> = {
    sm: { height: '36px', maxHeight: '36px' },
    md: { height: '48px', maxHeight: '48px' },
    lg: { height: '64px', maxHeight: '64px' },
  };

  const heightClasses = {
    sm: 'h-8 sm:h-9 max-h-9',
    md: 'h-10 sm:h-12 max-h-12',
    lg: 'h-14 sm:h-16 max-h-16',
  };

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <img
        src="/images/smr-logo-transparent.png"
        alt="SMR Car Travels - Your Journey. Our Responsibility."
        style={{ height: sizeStyles[size].height, maxHeight: sizeStyles[size].maxHeight, width: 'auto' }}
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          darkBackground 
            ? 'brightness-125 contrast-125 drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]' 
            : 'drop-shadow-[0_4px_12px_rgba(23,105,255,0.15)]'
        }`}
      />
    </div>
  );
};
