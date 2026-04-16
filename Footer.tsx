import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto border-t border-neutral-900 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-bold text-neutral-500 mb-8">
            Start the shift
          </h2>
          <a
            href="mailto:hello@techtonic-consulting.com"
            className="text-2xl md:text-4xl font-light hover:opacity-50 transition-opacity tracking-tight"
          >
            hello@techtonic-consulting.com
          </a>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end">
          <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-600 mb-2">
            Techtonic Ltd. &copy; {new Date().getFullYear()}
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase font-light text-neutral-700">
            Engineered Transformation
          </div>
        </div>
      </div>
    </footer>
  );
};
