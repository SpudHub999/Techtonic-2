import React from 'react';

export const Premise: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#FF851B] mb-12">
          01 / The premise
        </h2>
        <h3 className="text-4xl md:text-5xl font-light leading-[1.1] text-white">
          Change is the<br />
          hard part —<br />
          and the part<br />
          most often left<br />
          to chance.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-10">
          <p className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
            Big transformations succeed on paper and stall in practice. The system goes live, the integration completes, the new operating model is signed off — and then the people, processes and behaviours don't move with it. That's where the value quietly leaks away.
          </p>
          <p className="text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
            We exist to close that gap — to make sure change doesn't just get delivered, it takes hold.
          </p>
        </div>
        <div className="pt-16">
          <p className="text-white border-l-2 border-[#FF851B] pl-10 py-3 text-2xl font-light">
            Systems go live. Behaviour doesn't always follow.{' '}
            <span className="font-bold">We make sure it does.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
