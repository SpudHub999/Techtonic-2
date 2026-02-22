import React from 'react';

export const CallToAction: React.FC = () => {
  const logoSrc = "techtonic-logo.svg";

  return (
    <div className="py-52 flex flex-col items-center text-center px-10">
      <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter text-[#FF851B] mb-4 lowercase leading-none">
        align the core.
      </h2>
      <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter text-[#009688] mb-24 lowercase leading-none">
        shift what matters.
      </h2>
      
      <div className="mt-16">
         <img 
          src={logoSrc} 
          alt="Techtonic" 
          className="h-12 w-auto block object-contain opacity-40 hover:opacity-100 transition-all duration-700 select-none pointer-events-none"
        />
      </div>
    </div>
  );
};