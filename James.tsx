import React from 'react';
import { PartnerCard, PartnerData } from './PartnerCard';
import jamesPhoto from './james.png';

const james: PartnerData = {
  firstName: 'James',
  lastName: 'Fanger',
  role: 'Change leadership for complex, global integrations and transformations.',
  bio: [
    'Brings structure, control and clarity to large-scale integrations — aligning workstreams, markets and stakeholders to move as one.',
    'Delivered enterprise transformations and integrations across 100+ countries and service centres, including multiple SAP S/4HANA programmes.',
    'Builds the governance, operating models and delivery frameworks that make integration executable at scale.'
  ],
  email: 'james.fanger@techtonic-consulting.com',
  phone: '+44 7837 930005',
  phoneTel: '+447837930005',
  linkedinHandle: 'jamesfanger',
  linkedinUrl: 'https://www.linkedin.com/in/jamesfanger/',
  focusTags: ['Programme Control', 'Delivery at Scale', 'Operating Model'],
  accent: '#FF851B',
  photo: jamesPhoto,
  title: 'Partner — Programme Leadership'
};

export const James: React.FC = () => <PartnerCard partner={james} />;
