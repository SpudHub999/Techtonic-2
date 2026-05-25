import React from 'react';

export const WhoWeAre: React.FC = () => {
  const phases = [
    {
      label: "Shape",
      stage: "Before the programme hardens",
      color: "#FF851B",
      desc: "We design the change strategy, leadership narrative and operating model so change is built in from day one — not bolted on later."
    },
    {
      label: "Ready",
      stage: "Before go-live or Day 1",
      color: "#009688",
      desc: "We build the readiness and adoption that gets people genuinely prepared — not just trained, but confident to operate."
    },
    {
      label: "Land",
      stage: "After the switch flips",
      color: "#FF851B",
      desc: "We drive adoption, embed new ways of working, and recover value when transformations have gone live but haven't yet taken hold."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#009688] mb-12">
          02 / What we do
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white mb-10">
          Shape.<br />
          Ready.<br />
          Land.
        </h3>
        <p className="text-lg font-light leading-relaxed text-neutral-400">
          We lead the human side of complex change across its whole arc — whether that's an ERP or system transformation, a post-merger integration, a new operating model, or an AI-enabled shift in how people work.
        </p>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-16">
          {phases.map((phase, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[14px] uppercase tracking-[0.3em] font-black"
                  style={{ color: phase.color }}
                >
                  {phase.label}
                </span>
                <span className="h-[1px] flex-1 bg-neutral-800"></span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 font-light">
                  {phase.stage}
                </span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed body-text-contrast">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
