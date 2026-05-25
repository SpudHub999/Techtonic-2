import React from 'react';

export const Network: React.FC = () => {
  const disciplines = [
    "Strategy",
    "Programme management",
    "Change",
    "Learning enablement",
    "Process"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          03 / The network
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          Senior on<br />
          the ground.<br />
          Scale behind us.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="text-7xl md:text-8xl font-light text-[#009688] leading-none">50+</span>
          <span className="text-lg md:text-xl font-light text-neutral-400 leading-snug">
            trusted professionals,<br />at every stage of their careers.
          </span>
        </div>
        <div className="space-y-10">
          <p className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
            Techtonic is led senior and delivered senior. Behind us sits an associated network of trusted professionals spanning strategy, programme management, change, learning enablement and process.
          </p>
          <p className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
            That means we flex to the size and shape of your programme without ever diluting the seniority you're paying for.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-12">
          {disciplines.map((d, idx) => (
            <span
              key={idx}
              className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-400 border border-white/10 px-5 py-2.5"
            >
              {d}
            </span>
          ))}
        </div>
        <div className="pt-12">
          <p className="text-white border-l-2 border-[#009688] pl-10 py-3 text-2xl font-light">
            Hand-picked. <span className="font-bold">Tried and trusted.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
