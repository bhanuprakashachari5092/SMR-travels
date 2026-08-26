import React from 'react';

interface SMRLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkBackground?: boolean;
}

export const SMRLogo: React.FC<SMRLogoProps> = ({ 
  className = '', 
  size = 'md',
  darkBackground = false
}) => {
  const sizeStyles: Record<'sm' | 'md' | 'lg' | 'xl', { height: string; maxHeight: string }> = {
    sm: { height: '42px', maxHeight: '42px' },
    md: { height: '58px', maxHeight: '58px' },
    lg: { height: '74px', maxHeight: '74px' },
    xl: { height: '90px', maxHeight: '90px' },
  };

  const heightClasses = {
    sm: 'h-9 sm:h-10 max-h-10',
    md: 'h-12 sm:h-14 md:h-[58px] max-h-[58px]',
    lg: 'h-16 sm:h-18 md:h-[74px] max-h-[74px]',
    xl: 'h-20 sm:h-22 md:h-[90px] max-h-[90px]',
  };

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <img
        src="/images/smr-logo-transparent.webp"
        alt="SMR Car Travels - Your Journey. Our Responsibility."
        width={180}
        height={58}
        style={{ height: sizeStyles[size].height, maxHeight: sizeStyles[size].maxHeight, width: 'auto' }}
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          darkBackground 
            ? 'brightness-125 contrast-125 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]' 
            : 'drop-shadow-[0_4px_14px_rgba(23,105,255,0.18)]'
        }`}
      />
    </div>
  );
};
