
import React from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Premise } from './components/Premise';
import { WhoWeAre } from './components/WhoWeAre';
import { Difference } from './components/Difference';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

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
