import React from 'react';
import logo from '../techtonic-logo.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-20">
        <div className="max-w-6xl">
          <div className="mb-16">
            <img
              src={logo}
              alt="Techtonic"
              className="w-full max-w-4xl h-auto block object-contain select-none pointer-events-none opacity-90"
            />
          </div>

          <div className="flex flex-col gap-10 mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-light tracking-tight text-white leading-tight max-w-5xl">
              Senior change leadership for SAP S/4 programmes{' '}
              <span className="text-[#009688] italic font-light">under pressure.</span>
            </h1>
            <div className="hidden md:block h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#FF851B]/40 via-[#009688]/40 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-light text-neutral-400 max-w-2xl">
              We help transformation actually land — when the technical programme is on track but the business isn't moving with it.
            </p>
            <p className="text-[11px] tracking-[0.35em] uppercase font-black text-neutral-500 opacity-60 mt-8">
              For the shifts that matter.
            </p>
          </div>
        </div>
      </div>

      {/* Tectonic structural line motif */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute right-[12%] h-full w-[1px] bg-white/5"></div>
        <div className="absolute left-[8%] bottom-[15%] w-[40%] h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
    </section>
  );
};
