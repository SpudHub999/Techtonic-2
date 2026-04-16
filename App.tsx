
import React from 'react';
import { Hero } from './Hero';
import { Section } from './Section';
import { Premise } from './Premise';
import { WhoWeAre } from './WhoWeAre';
import { Difference } from './Difference';
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';
import { Header } from './Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen mineral-texture selection:bg-neutral-800 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        <Section id="premise" variant="primary">
          <Premise />
        </Section>

        <Section id="who-we-are" variant="secondary">
          <WhoWeAre />
        </Section>

        <Section id="difference" variant="primary">
          <Difference />
        </Section>

        <Section id="cta" variant="secondary">
          <CallToAction />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
