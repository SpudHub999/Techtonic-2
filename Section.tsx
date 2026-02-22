
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Section: React.FC<SectionProps> = ({ id, children, variant = 'primary' }) => {
  const bgClass = variant === 'primary' ? 'bg-[#0A0A0A]' : 'bg-[#121212]';
  
  return (
    <div id={id} className={`relative py-32 md:py-48 px-6 md:px-12 ${bgClass}`}>
      {/* Structural Strata Line - Brand Gradient */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#FF851B]/40 to-transparent"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};
