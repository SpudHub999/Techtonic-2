import React from 'react';

export const Difference: React.FC = () => {
  const pillars = [
    "Senior practitioners, not layers.",
    "Delivery quality, not slideware.",
    "Translation across technical teams, leadership and end users.",
    "Lean model, no legacy tax."
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          03 / Why Techtonic
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] mb-8 text-white">
          Designed<br />
          for impact.
        </h3>
        <p className="text-[#009688] uppercase tracking-[0.2em] text-[15px] font-black">
          Operating at the core
        </p>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <ul className="space-y-10 mb-20">
          {pillars.map((item, idx) => (
            <li key={idx} className="flex items-start gap-8 group">
              <span className="text-[14px] font-bold text-[#FF851B] pt-2">&bull;</span>
              <span className="text-2xl md:text-3xl font-light text-white leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t border-neutral-800 pt-20 space-y-8">
          <p className="text-2xl md:text-[1.75rem] font-light italic text-neutral-400">
            We don't flood programmes with headcount.
          </p>
          <p className="text-white font-bold not-italic border-l-4 border-[#009688] pl-12 py-1 text-2xl">
            We engineer clarity, alignment, and adoption.
          </p>
        </div>
      </div>
    </div>
  );
};
