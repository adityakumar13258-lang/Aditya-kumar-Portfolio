import { Section } from './ui/Section';
import { UserCheck, Send, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: "1",
    title: "Discovery call with me",
    desc: "We dive deep into your business, audience, and goals. We discuss content, copywriting, and visuals.",
    icon: <UserCheck size={32} strokeWidth={1.5} />,
    tags: ["Wireframe", "Website copy", "Goals", "Audience", "Brand Story"]
  },
  {
    num: "2",
    title: "Designing & Approval",
    desc: "Your vision comes to life in Figma. We iterate until every detail serves your conversion goals.",
    icon: (
      <div className="flex items-center gap-2">
        <ArrowRight size={24} className="text-zinc-400" />
        <CheckCircle size={28} className="text-amber-500 fill-amber-500/10" />
      </div>
    ),
    tags: ["Figma", "UI/UX", "Prototype", "Feedback", "Visuals"]
  },
  {
    num: "3",
    title: "Development & Launch",
    desc: "Built with obsessive attention to performance, speed, and user experience. Every pixel crafted for maximum conversion.",
    icon: <Send size={30} className="text-amber-500" strokeWidth={1.5} />,
    tags: ["React", "Performance", "SEO", "Launch", "Speed"]
  }
];

// Background decorative tags for the bottom of the card
const bgTags = [
  "Wireframe", "Website copy", "Figma", "Animation", "Logo", "Design", 
  "Web", "Mobile", "SEO", "Speed", "Launch", "Growth"
];

const Process = () => {
  return (
    <Section className="bg-zinc-950">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          From Discovery to Delivery — <span className="text-amber-500">In 3 Phases</span>
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Every project is intentional, fast-moving, and obsessively crafted. 
          Here's how we go from idea to launch.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col hover:border-zinc-700 transition-colors group">
            
            {/* Top Content */}
            <div className="p-8 pb-0 flex flex-col items-center text-center flex-grow z-10">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-500/20 to-transparent border border-amber-500/20 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl"></div>
                <span className="text-3xl font-light text-white relative z-10">{step.num}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {step.desc}
              </p>
            </div>

            {/* Bottom Visual Area */}
            <div className="relative h-48 mt-auto w-full overflow-hidden bg-zinc-950/50 border-t border-zinc-800/50">
              
              {/* Faint Background Tags Grid */}
              <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-3 p-4 opacity-20 pointer-events-none select-none overflow-hidden">
                {bgTags.map((tag, i) => (
                  <span key={i} className="text-xs uppercase tracking-widest font-bold text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Gradient Overlay to fade edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-0"></div>

              {/* Central Floating Icon Card */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 bg-black border border-zinc-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-black animate-float group-hover:border-amber-500/50 transition-colors">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;