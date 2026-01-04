import React from 'react';
import { ArrowUpRight, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 px-4 pb-8 pt-20">
      <div className="max-w-7xl mx-auto bg-amber-500 rounded-[3rem] px-6 py-20 md:py-32 relative overflow-hidden flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-950 tracking-tight leading-[1.1] mb-12 max-w-5xl z-10">
          Let's create <span className="font-serif italic text-white mx-2">website</span> that <br className="hidden md:block" />
          actually converts
        </h2>

        {/* CTA Button */}
        <button 
          onClick={scrollToContact}
          className="group flex items-center gap-3 bg-zinc-950 text-white pl-8 pr-6 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 mb-16 z-10 shadow-2xl shadow-zinc-950/20"
        >
          Get Started
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Social Icons */}
        <div className="flex gap-4 mb-24 z-10">
          <a href="#" className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
            <Linkedin size={24} strokeWidth={1.5} />
          </a>
          <a href="#" className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
            <Twitter size={24} strokeWidth={1.5} />
          </a>
          <a href="#" className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-zinc-900 font-medium text-sm md:text-base px-8 absolute bottom-8 left-0 right-0 z-10">
          <div className="flex items-center gap-1">
            Built by <span className="font-bold text-black">Aditya</span>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-1">
            Proudly built with <span className="font-bold text-black">React</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;