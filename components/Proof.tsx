import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { ExternalLink, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const projects = [
  {
    name: "Saffron & Spice",
    type: "Fine Dining",
    stat: "+40% Weekend Reservations",
    image: "https://images2.imgbox.com/1d/86/LdnqiJyn_o.png",
    link: "https://saffronandspicegrowth.netlify.app/"
  },
  {
    name: "The Saffron Table",
    type: "Cafe",
    stat: "2x Menu Views via QR",
    image: "https://images2.imgbox.com/ee/b4/Bx2cJ6bn_o.png",
    link: "https://benevolent-longma-e18206.netlify.app/"
  },
  {
    name: "Royal Spice",
    type: "Luxury Restaurant",
    stat: "15% More Direct Bookings",
    image: "https://images2.imgbox.com/2b/02/TsfuTD6P_o.png",
    link: "https://theroyalspicepro.netlify.app/"
  },
  {
    name: "Spice Route Express",
    type: "Cloud Kitchen",
    stat: "30% Increase in Calls",
    image: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

const testimonials = [
  {
    id: 1,
    text: "Aditya didn't just build a website, he built a reservation engine. We went from 5 calls a day to 50+ direct bookings a week. The ROI was instant.",
    author: "Rajesh Malhotra",
    role: "Owner, Saffron & Spice",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+M&background=f59e0b&color=000"
  },
  {
    id: 2,
    text: "Our old site was slow and looked terrible on mobile. The new design is blazing fast, and customers actually compliment us on how easy it is to order now.",
    author: "Priya Sharma",
    role: "Manager, The Saffron Table",
    avatar: "https://ui-avatars.com/api/?name=Priya+S&background=f59e0b&color=000"
  },
  {
    id: 3,
    text: "Stop wasting money on agencies that don't understand hospitality. Aditya knows exactly what diners are looking for. Simple, effective, and profitable.",
    author: "Amit Verma",
    role: "GM, Royal Spice",
    avatar: "https://ui-avatars.com/api/?name=Amit+V&background=f59e0b&color=000"
  }
];

const Proof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Section id="work" className="border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-2">Selected Work</h2>
          <h3 className="text-3xl font-bold text-white">Results speak louder.</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 block transition-all duration-500 ease-out hover:-translate-y-2 hover:border-zinc-700 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
          >
            {/* Image Overlay */}
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
            </div>
            
            {/* Content */}
            <div className="p-6 relative z-20 bg-zinc-900 border-t border-zinc-800 group-hover:border-zinc-700 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">{project.name}</h4>
                  <p className="text-zinc-500 text-sm">{project.type}</p>
                </div>
                <div className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                  {project.stat}
                </div>
              </div>
            </div>

            {/* Hover Action */}
            <div className="absolute top-4 right-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-700 p-2.5 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-30 shadow-lg">
              <ExternalLink size={18} className="text-white" />
            </div>
          </a>
        ))}
      </div>

      {/* Testimonial Slider */}
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden">
        {/* Background Decorative Quote */}
        <Quote className="absolute top-8 right-8 text-zinc-800/50 w-32 h-32 rotate-12 -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          <div className="min-h-[200px] md:min-h-[160px] relative">
            {testimonials.map((t, idx) => (
              <div 
                key={t.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  idx === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <blockquote className="text-xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                  "{t.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-zinc-700" />
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-zinc-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-2 mt-8 md:mt-0 relative z-20">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-12 text-zinc-500 text-sm">
        * Note: These are demonstration concepts representing the quality of work delivered.
      </p>
    </Section>
  );
};

export default Proof;