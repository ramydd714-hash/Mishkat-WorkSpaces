
import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  Hero, 
  About, 
  Services, 
  WhyUs, 
  Testimonials, 
  LocationContact, 
  Footer 
} from './components/Sections';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
