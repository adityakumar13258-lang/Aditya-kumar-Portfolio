import { Section } from './ui/Section';
import { TrendingUp, Asterisk, Clock, RefreshCw, Smartphone, PartyPopper } from 'lucide-react';

const values = [
  {
    icon: <TrendingUp size={24} />,
    title: "Strategy First, Always",
    desc: "We don't touch the visuals until we understand your goals, audience, and story."
  },
  {
    icon: <Asterisk size={24} />,
    title: "Design That Converts",
    desc: "Every scroll, section, and CTA is placed with purpose — not just for aesthetics."
  },
  {
    icon: <Clock size={24} />,
    title: "Fast, Focused Delivery",
    desc: "You'll see real progress in the first 48 hours. Launch-ready in 7-14 days."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Direct Communication",
    desc: "You work with one person — not a project manager or a chain of emails."
  },
  {
    icon: <Smartphone size={24} />,
    title: "100% Intentional",
    desc: "Everything is designed and built custom — tailored to your brand and goals."
  },
  {
    icon: <PartyPopper size={24} />,
    title: "Future-Friendly",
    desc: "Your site won't just look great now. It's built to scale as you grow."
  }
];

const Values = () => {
  return (
    <Section className="bg-zinc-950 border-t border-zinc-900/50">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Built for <span className="text-amber-500">founders</span> who value <br className="hidden md:block" />
          <span className="text-amber-500">why</span> over whatever.
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Not just for the clean design. But for the clarity, precision, and the 
          <span className="text-zinc-200"> "damn, this actually works"</span> moment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item, idx) => (
          <div key={idx} className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group relative overflow-hidden">
             {/* Subtle Glow Effect on Hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 border border-zinc-800 group-hover:border-amber-500/30 group-hover:text-amber-400 transition-all shadow-[0_4px_20px_-4px_rgba(245,158,11,0.1)]">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-[15px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Values;