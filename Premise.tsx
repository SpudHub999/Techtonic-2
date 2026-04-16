import React from 'react';

export const Premise: React.FC = () => {
  const signals = [
    "Approaching go-live — readiness signals softer than the plan suggests.",
    "Live, but hypercare is masking poor adoption.",
    "Leadership messages aren't landing, and local markets are disengaging.",
    "Design is done, but the business case isn't translating into behaviour.",
    "Lots of contractors, nobody owning change quality."
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          01 / When to bring us in
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          We're built for<br />
          specific moments<br />
          in a transformation.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <ul className="space-y-10">
          {signals.map((signal, idx) => (
            <li key={idx} className="flex items-start gap-8 group">
              <span className="text-[14px] font-bold text-[#FF851B] pt-2">&bull;</span>
              <span className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
                {signal}
              </span>
            </li>
          ))}
        </ul>
        <div className="pt-16">
          <p className="text-white border-l-2 border-[#FF851B] pl-10 py-3 text-2xl font-light">
            If any of this sounds like your programme,{' '}
            <span className="font-bold">we should talk.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
