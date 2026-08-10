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
  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/smr-logo-transparent.png"
        alt="SMR Car Travels - Your Journey. Our Responsibility."
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          darkBackground 
            ? 'brightness-125 contrast-125 drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]' 
            : 'drop-shadow-[0_4px_12px_rgba(23,105,255,0.15)]'
        }`}
      />
    </div>
  );
};





