import React from 'react';

export const WhoWeAre: React.FC = () => {
  const phases = [
    {
      label: "Shape",
      stage: "At the start",
      color: "#FF851B",
      desc: "We embed change thinking into the operating model, business case and governance from day one. The programme is designed to land, not rescued later."
    },
    {
      label: "Ready",
      stage: "Approaching go-live",
      color: "#009688",
      desc: "A four-to-six week intervention that pressure-tests readiness, surfaces what will actually fail at go-live, and intervenes in the weeks you still have."
    },
    {
      label: "Land",
      stage: "Go-live and beyond",
      color: "#FF851B",
      desc: "We separate real adoption from hypercare theatre, re-engage leadership, and drive recovery in the markets and processes where the business is pulling back."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#009688] mb-12">
          02 / What We Bring
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          Across the arc<br />
          of the programme —<br />
          not just the<br />
          emergency at the end.
        </h3>
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
        <div className="pt-16 border-t border-neutral-800 mt-16">
          <p className="text-lg text-neutral-500 font-light italic">
            Also: Master Data, Operating Model evolution, and AI-enabled change where the programme requires it.
          </p>
        </div>
      </div>
    </div>
  );
};
