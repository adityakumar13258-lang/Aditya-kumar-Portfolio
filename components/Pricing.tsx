import React from 'react';
import { Section } from './ui/Section';
import { Check, ArrowUpRight, MessageCircle, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

const plans = [
  {
    name: "Starter",
    price: "₹6,999",
    tagline: "One-Time",
    bestFor: "Small restaurants & cafés getting online for the first time",
    demoLink: "https://benevolent-longma-e18206.netlify.app/",
    features: [
      "1-page restaurant landing page",
      "Mobile-friendly, fast-loading",
      "Menu section with prices",
      "Contact details & address",
      "Google Maps integration",
      "WhatsApp & Call buttons",
      "1 round of revisions"
    ],
    why: "Perfect if you want a clean online presence that helps customers quickly find your menu, location, and contact details.",
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Growth",
    price: "₹9,999",
    tagline: "One-Time",
    bestFor: "Restaurants looking to grow visibility and customer trust",
    demoLink: "https://saffronandspicegrowth.netlify.app/",
    features: [
      "Everything in Starter, plus:",
      "3–4 page website (Home, Menu, About, Contact)",
      "Photo gallery (ambience & food)",
      "Enquiry / feedback form",
      "Links to Zomato & Swiggy",
      "Social media integration",
      "2 rounds of revisions"
    ],
    why: "This plan helps you look established, trustworthy, and professional, increasing enquiries and walk-ins.",
    cta: "Choose Growth",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Pro",
    price: "₹14,999",
    tagline: "One-Time",
    bestFor: "Serious restaurant owners & premium dining brands",
    demoLink: "https://theroyalspicepro.netlify.app/",
    features: [
      "Everything in Growth, plus:",
      "Custom section planning",
      "Full multi-page website",
      "Online table booking system",
      "Basic SEO setup",
      "Advanced menu with images",
      "Advanced animations",
      "Priority delivery & 3 revisions",
      "1 month post-launch support"
    ],
    why: "Designed to maximize bookings, brand image, and customer experience — not just “look good”.",
    cta: "Go Pro",
    highlight: false
  }
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="pricing" className="bg-zinc-950 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Simple Pricing. <span className="text-zinc-500">Built Around Your Goals.</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Simple. Transparent. Built for Restaurants. <br />
          Choose a plan based on how serious you are about getting more customers.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col bg-zinc-900/40 border rounded-3xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              plan.highlight 
                ? 'border-amber-500/50 shadow-2xl shadow-amber-900/20' 
                : 'border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {/* Top Badge for Popular Plan */}
            {plan.badge && (
              <div className="absolute top-0 inset-x-0 bg-amber-500/10 border-b border-amber-500/20 py-1.5 text-center">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                  <Sparkles size={12} /> {plan.badge}
                </span>
              </div>
            )}

            <div className={`p-8 flex-grow relative z-10 ${plan.badge ? 'pt-12' : ''}`}>
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-amber-500' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500 text-sm font-medium">{plan.tagline}</span>
                </div>
                <p className="text-zinc-400 text-sm mt-4 min-h-[40px]">
                  <span className="text-zinc-500">Best for:</span> {plan.bestFor}
                </p>
              </div>

              <div className="w-full h-px bg-zinc-800 mb-6" />

              <div className="space-y-4 mb-8">
                <p className="text-sm font-medium text-white">What's Included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                      <Check size={16} className="text-amber-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 mb-8">
                <p className="text-xs text-zinc-400 italic">
                  "<strong className="text-zinc-300 not-italic">Why choose {plan.name}?</strong> {plan.why}"
                </p>
              </div>
            </div>

            <div className="p-8 pt-0 mt-auto relative z-10">
              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02] ${
                  plan.highlight 
                    ? 'bg-amber-500 text-zinc-950 hover:bg-amber-400 font-bold' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {plan.cta}
                <ArrowUpRight size={18} />
              </button>

              {plan.demoLink && (
                <a 
                  href={plan.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500 hover:text-amber-500 transition-colors group/link"
                >
                  View Live Demo 
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform"/>
                </a>
              )}
            </div>

            {/* Bottom Glow Effect (from screenshot) */}
            <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none z-0 ${
              plan.highlight ? 'from-amber-600/20' : 'from-amber-900/10'
            } to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
        ))}
      </div>

      {/* Consultation & Notes Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 pt-12 border-t border-zinc-900">
        
        {/* Not Sure */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-3">🔍 Not Sure Which Plan Is Right?</h3>
          <p className="text-zinc-400 mb-6">
            Book a free 15-minute consultation and I’ll help you choose the best option for your restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} variant="outline" icon={<Calendar size={16} />}>
              Schedule Meet
            </Button>
            <Button onClick={scrollToContact} variant="secondary" icon={<MessageCircle size={16} />}>
              WhatsApp Me
            </Button>
          </div>
        </div>

        {/* Important Notes */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            🧠 Important Notes
          </h3>
          <ul className="space-y-3">
            {[
              "All prices are one-time (no hidden monthly fees)",
              "Mobile-first & restaurant-focused design",
              "Built to increase calls, visits & bookings",
              "Custom domain charges are not included"
            ].map((note, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="text-center mt-20">
        <p className="inline-block text-zinc-500 text-sm border border-zinc-800 rounded-full px-4 py-2 bg-zinc-900/50">
          💡 I don’t charge for pages — I charge for what those pages help your restaurant earn.
        </p>
      </div>

    </Section>
  );
};

export default Pricing;