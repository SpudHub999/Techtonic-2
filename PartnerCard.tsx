import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export interface PartnerData {
  firstName: string;
  lastName: string;
  role: string;
  bio: string[];
  email: string;
  phone: string;          // Display format (e.g. "+44 7764 747963")
  phoneTel: string;       // tel: link format (e.g. "+447764747963")
  linkedinHandle: string;
  linkedinUrl: string;
  focusTags: string[];
  accent: string;         // hex
  photo: string;          // imported image
  title: string;          // for vCard ORG/TITLE
}

function downloadVCard(p: PartnerData) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${p.lastName};${p.firstName};;;`,
    `FN:${p.firstName} ${p.lastName}`,
    'ORG:Techtonic',
    `TITLE:${p.title}`,
    `EMAIL;type=WORK:${p.email}`,
    `TEL;type=CELL:${p.phoneTel}`,
    `URL:${p.linkedinUrl}`,
    'URL:https://techtonic-consulting.com',
    'END:VCARD'
  ];
  const blob = new Blob([lines.join('\r\n')], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${p.firstName}-${p.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const PartnerCard: React.FC<{ partner: PartnerData }> = ({ partner: p }) => {
  // Set page title + noindex meta
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${p.firstName} ${p.lastName} | Techtonic`;
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,nofollow';
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      if (meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, [p.firstName, p.lastName]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] mineral-texture selection:bg-neutral-800 selection:text-white">
      <Header />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Accent strip */}
          <div className="h-[3px] mb-14" style={{ backgroundColor: p.accent }} />

          {/* Headshot */}
          <div className="flex justify-center mb-10">
            <img
              src={p.photo}
              alt={`${p.firstName} ${p.lastName}`}
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white text-center mb-4 leading-tight">
            {p.firstName} <span className="font-bold">{p.lastName}</span>
          </h1>

          {/* Role */}
          <p
            className="text-center text-lg md:text-xl font-light mb-14 leading-snug max-w-xl mx-auto"
            style={{ color: p.accent }}
          >
            {p.role}
          </p>

          {/* Bio */}
          <div className="space-y-6 mb-10 max-w-xl mx-auto">
            {p.bio.map((para, i) => (
              <p key={i} className="text-base md:text-lg font-light leading-relaxed text-neutral-300">
                {para}
              </p>
            ))}
          </div>

          {/* Focus tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {p.focusTags.map((t, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-400 border border-white/10 px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => downloadVCard(p)}
            className="block w-full text-center text-[11px] uppercase tracking-[0.3em] font-bold py-5 mb-3 text-black transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: p.accent }}
          >
            Save my contact
          </button>

          {/* Secondary actions */}
          <div className="grid grid-cols-3 gap-3 mb-16">
            <a
              href={`mailto:${p.email}`}
              className="block text-center text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/10 text-neutral-300 py-4 hover:border-white/30 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={`tel:${p.phoneTel}`}
              className="block text-center text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/10 text-neutral-300 py-4 hover:border-white/30 hover:text-white transition-colors"
            >
              Call
            </a>
            <a
              href={p.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/10 text-neutral-300 py-4 hover:border-white/30 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Back link */}
          <div className="text-center border-t border-neutral-900 pt-10">
            <Link
              to="/"
              className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-500 hover:text-white transition-colors"
            >
              ← techtonic-consulting.com
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
