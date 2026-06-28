import React from 'react';
import { PartnerCard, PartnerData } from './PartnerCard';
import natPhoto from './nat.jpg';

const nat: PartnerData = {
  firstName: 'Natalie',
  lastName: 'Gormally',
  role: 'Leadership engagement. People readiness. Adoption. Behaviour change.',
  bio: [
    'Advises leaders on people readiness across complex global integrations — deep experience in transition planning, capability building, and ensuring teams can work from day one.',
    'Delivered adoption and readiness programmes across multiple transformations in complex, regulated environments.',
    'Her work changes how people work — not just how systems get used or the deal looks on paper.'
  ],
  email: 'natalie.gormally@techtonic-consulting.com',
  phone: '+44 7764 747963',
  phoneTel: '+447764747963',
  linkedinHandle: 'nataliegormally',
  linkedinUrl: 'https://www.linkedin.com/in/nataliegormally/',
  focusTags: ['Engagement & Comms', 'Leadership Alignment', 'People Readiness'],
  accent: '#009688',
  photo: natPhoto,
  title: 'Partner — Adoption & Readiness'
};

export const Nat: React.FC = () => <PartnerCard partner={nat} />;
