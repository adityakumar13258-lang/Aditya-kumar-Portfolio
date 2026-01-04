import { Section } from './ui/Section';
import { XCircle } from 'lucide-react';

const problems = [
  {
    title: "The PDF Menu Trap",
    description: "Forcing customers to download a 10MB PDF just to see the price of Butter Chicken. They hate it. You lose them."
  },
  {
    title: "Hidden Phone Numbers",
    description: "If they have to scroll three times to find your 'Call Now' button, they are calling your competitor."
  },
  {
    title: "Slow Loading Speeds",
    description: "Heavy animations might look cool to designers, but on a 4G connection in traffic, they just look like a blank screen."
  }
];

const Problems = () => {
  return (
    <Section className="bg-zinc-900/30">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">You are losing money online.</h2>
        <p className="text-zinc-400">Here are the three ways most Indian restaurants fail digitally.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((prob, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-red-900/50 transition-colors group">
            <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-semibold text-white mb-3">{prob.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">{prob.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Problems;