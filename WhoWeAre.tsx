import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-4">
        <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#009688] mb-12">
          02 / Who We Are
        </h2>
        <h3 className="text-5xl md:text-6xl font-light leading-[1.1] text-white">
          A high-impact alternative to traditional models.
        </h3>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-12 text-2xl md:text-[1.75rem] font-light leading-relaxed body-text-contrast">
          <p>
            Techtonic is built specifically for the human side of complex technical change — ERP / SAP S/4, Master Data, Operating Model evolution, and AI enablement.
          </p>
          <p>
            We align people, process, and technology at the foundational level — so transformation delivers sustained performance, not short-term compliance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-20">
            <div>
              <div className="text-[13px] uppercase tracking-[0.3em] font-black mb-4 text-[#FF851B]">No Big 4</div>
              <p className="text-lg text-neutral-400 leading-snug">Focused senior expertise only.</p>
            </div>
            <div>
              <div className="text-[13px] uppercase tracking-[0.3em] font-black mb-4 text-[#FF851B]">No body shopping</div>
              <p className="text-lg text-neutral-400 leading-snug">Quality over quantity, every time.</p>
            </div>
            <div>
              <div className="text-[13px] uppercase tracking-[0.3em] font-black mb-4 text-[#FF851B]">Premium Capability</div>
              <p className="text-lg text-neutral-400 leading-snug">Lean execution, connected delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};