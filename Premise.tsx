import React from 'react';

export const Premise: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          01 / The Premise
        </h2>
        <h3 className="text-5xl md:text-6xl font-light leading-[1.1] text-white">
          Thriving organisations<br /> 
          don’t just<br /> 
          update systems.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-12 text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
          <p>
            They shift their foundations — how people work, how data flows, and how decisions are made.
          </p>
          <p>
            Technology enables transformation. <span className="text-[#009688] font-bold">People make it real.</span>
          </p>
          <p>
            We translate complex technical programmes into clear, structured human journeys — aligning leadership, capability, and execution at the core.
          </p>
          <div className="pt-8">
            <p className="text-white border-l-2 border-[#FF851B] pl-10 py-3">
              That’s where <span className="font-bold lowercase tracking-tighter">techtonic</span> operates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};