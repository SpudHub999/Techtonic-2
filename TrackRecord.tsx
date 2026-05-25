import React from 'react';

export const TrackRecord: React.FC = () => {
  const sectors = [
    "Pharmaceuticals",
    "FMCG",
    "Financial Services",
    "Wealth Management",
    "Private Equity",
    "Utilities"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#009688] mb-12">
          04 / Track record
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          Trusted on<br />
          transformations<br />
          that matter.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <p className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast mb-16">
          Our team has led change inside some of the world's largest organisations — FTSE 100-listed and billion-dollar global businesses — across six sectors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-neutral-800 pt-12">
          {sectors.map((sector, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-[14px] font-bold text-[#FF851B]">&bull;</span>
              <span className="text-xl md:text-2xl font-light text-white">{sector}</span>
            </div>
          ))}
        </div>
        <p className="text-lg text-neutral-500 font-light italic pt-16">
          Named references available on request.
        </p>
      </div>
    </div>
  );
};
