import React from 'react';

export const Difference: React.FC = () => {
  const pillars = [
    { title: "Senior-led", desc: "Hands-on expertise from the start." },
    { title: "Embedded", desc: "A partnership model, not a vendor relationship." },
    { title: "Unified", desc: "Calibrated teams focused on a singular goal." },
    { title: "Active Assurance", desc: "Continuous delivery oversight and honesty." },
    { title: "Capability Transfer", desc: "Building redundancy, not dependency." }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          03 / The Difference
        </h2>
        <h3 className="text-5xl md:text-6xl font-light leading-[1.1] mb-8 text-white">
          Designed for impact.
        </h3>
        <p className="text-[#009688] uppercase tracking-[0.2em] text-[15px] font-black">Operating at the core</p>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <ul className="space-y-12 mb-20">
          {pillars.map((item, idx) => (
            <li key={idx} className="flex items-start gap-8 group">
              <span className="text-[14px] font-bold text-[#FF851B] pt-2">•</span>
              <div>
                <span className="text-2xl md:text-3xl font-[900] block text-white mb-3 tracking-tight lowercase">
                  {item.title}
                </span>
                <span className="text-xl text-neutral-500 font-light block leading-snug max-w-xl">
                  {item.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-neutral-800 pt-20 space-y-8 text-2xl md:text-[1.75rem] font-light italic text-neutral-400">
          <p>We don’t flood programmes with headcount.</p>
          <p className="text-white font-bold not-italic border-l-4 border-[#009688] pl-12 py-1">
            We engineer clarity, alignment, and adoption.
          </p>
        </div>
      </div>
    </div>
  );
};