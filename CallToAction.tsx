import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <div className="py-32 md:py-48 flex flex-col items-center text-center px-10">
      <h2 className="text-[12px] tracking-[0.6em] uppercase font-bold text-[#009688] mb-16">
        Talk to us
      </h2>

      <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight max-w-4xl">
        Let's talk about what needs to{' '}
        <span className="text-[#FF851B] italic">land.</span>
      </h3>

      <p className="text-xl md:text-2xl font-light text-neutral-400 mb-16 max-w-2xl">
        Whether you're shaping a programme, heading into a go-live or a merger, or trying to realise value from one that's already happened — let's have a conversation. A direct, senior view from Nat or James. No slides, no pitch.
      </p>

      <a
        href="mailto:hello@techtonic-consulting.com?subject=Let's%20talk"
        className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold border-2 border-[#FF851B] text-[#FF851B] px-12 py-5 hover:bg-[#FF851B] hover:text-black transition-all duration-500"
      >
        Book a call
      </a>

      <div className="mt-32 border-t border-neutral-800 pt-16 max-w-xl">
        <p className="text-[12px] tracking-[0.3em] uppercase font-bold text-neutral-500 mb-6">
          Not ready to book?
        </p>
        <p className="text-lg font-light text-neutral-400 mb-10">
          Tell us the one thing keeping you up at night. We'll come back with a senior view within 48 hours.
        </p>
        <a
          href="mailto:hello@techtonic-consulting.com?subject=Our%20programme%20challenge"
          className="inline-block text-[11px] uppercase tracking-[0.3em] font-semibold border border-white/20 text-neutral-400 px-10 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
        >
          Send us your problem
        </a>
      </div>
    </div>
  );
};
