import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Values from './components/Values';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import WhyMe from './components/WhyMe';
import Process from './components/Process';
import Audience from './components/Audience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookingWidget from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Values />
        <Problems />
        <Solution />
        <Proof />
        <Process />
        <Pricing />
        <WhyMe />
        <Audience />
        <BookingWidget />
      </main>
      <Footer />
    </div>
  );
}