import React from 'react';

export const Difference: React.FC = () => {
  const avoid = [
    "Junior teams learning on your programme",
    "Slideware that never reaches the front line",
    "Methodology over judgement",
    "Change treated as a downstream afterthought"
  ];

  const get = [
    "Senior practitioners who've done it before",
    "Change designed in, not bolted on",
    "A network that scales without diluting quality",
    "A relentless focus on adoption and value, not activity"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          05 / The difference
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          Not a Big 4<br />
          machine.<br />
          Not a body shop.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase font-bold text-neutral-500 mb-8">
              What you avoid
            </p>
            <ul className="space-y-6">
              {avoid.map((item, idx) => (
                <li key={idx} className="text-lg md:text-xl font-light leading-snug text-neutral-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase font-bold text-[#009688] mb-8">
              What you get
            </p>
            <ul className="space-y-6">
              {get.map((item, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <span className="text-[14px] font-bold text-[#FF851B] pt-1.5">&bull;</span>
                  <span className="text-lg md:text-xl font-light leading-snug text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-16 mt-16">
          <p className="text-white font-bold border-l-4 border-[#009688] pl-12 py-1 text-2xl">
            We engineer clarity, alignment, and adoption.
          </p>
        </div>
      </div>
    </div>
  );
};
