import React from 'react';
import { Section } from './ui/Section';
import { Smartphone, MousePointerClick, Zap, Search } from 'lucide-react';

const features = [
  {
    icon: <Smartphone size={24} />,
    title: "Mobile-First Design",
    desc: "85% of food searches happen on mobile. I design for the phone screen first, desktop second."
  },
  {
    icon: <MousePointerClick size={24} />,
    title: "One-Tap Actions",
    desc: "Sticky buttons for 'Call Now', 'WhatsApp', and 'Get Directions' that follow the user everywhere."
  },
  {
    icon: <Search size={24} />,
    title: "Google Friendly",
    desc: "Structured data that helps Google Maps and Search understand exactly where you are and what you serve."
  },
  {
    icon: <Zap size={24} />,
    title: "Blazing Fast",
    desc: "No bulky code. Just clean, optimized pages that load instantly, even on weak mobile data."
  }
];

const Solution = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-4">The Solution</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            A website built for <span className="text-amber-500">orders</span>, not awards.
          </h3>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            I replace your digital clutter with a streamlined, high-performance sales tool. 
            Everything is included to get you live and booking guests in under a week.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-zinc-300">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Responsive Digital Menu (No PDFs)
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              WhatsApp & Google Maps Integration
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Direct Booking Links (OpenTable/Zomato)
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Hosting Setup & Domain Connection
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:bg-zinc-900 transition-colors">
              <div className="text-amber-500 mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-zinc-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Solution;