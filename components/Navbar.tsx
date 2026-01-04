import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-white">
          Aditya<span className="text-amber-500">.</span>
        </div>
        <button 
          onClick={scrollToContact}
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-zinc-200 hover:text-amber-500' : 'text-zinc-300 hover:text-white'}`}
        >
          <Calendar size={16} className="text-amber-500" />
          <span className="hidden sm:inline">Book Strategy Call</span>
          <span className="sm:hidden">Book</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;