import { ArrowRight, ChevronDown, CheckCircle2, TrendingUp, Bell } from 'lucide-react';
import { Button } from './ui/Button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden bg-zinc-950">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-amber-700/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Floating 3D Elements (Visualizing Success) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        
        {/* Card 1: New Booking Notification */}
        <div className="absolute top-[20%] left-[5%] bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-float opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
              <Bell size={20} />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-bold">New Table Reservation</p>
              <p className="text-zinc-400 text-xs">Just now via Website</p>
            </div>
          </div>
        </div>

        {/* Card 2: Revenue Graph */}
        <div className="absolute bottom-[25%] right-[5%] bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-float-delayed opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500">
              <TrendingUp size={20} />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-bold">Weekly Orders</p>
              <p className="text-green-500 text-xs font-bold">+124% Growth</p>
            </div>
          </div>
          {/* Mock Graph Bars */}
          <div className="flex items-end gap-1 h-12 w-32 pb-1 border-b border-zinc-700">
            <div className="w-full bg-zinc-700 h-[30%] rounded-t-sm"></div>
            <div className="w-full bg-zinc-700 h-[50%] rounded-t-sm"></div>
            <div className="w-full bg-zinc-700 h-[40%] rounded-t-sm"></div>
            <div className="w-full bg-zinc-700 h-[70%] rounded-t-sm"></div>
            <div className="w-full bg-amber-500 h-[90%] rounded-t-sm"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto space-y-8 z-10">
        
        {/* Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-amber-500/30 text-xs font-medium text-amber-500 uppercase tracking-widest backdrop-blur-sm hover:bg-zinc-900 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Accepting New Clients
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
          I build restaurant websites <br className="hidden md:block" />
          that make people <br className="md:hidden" />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 blur-2xl opacity-20"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 animate-shimmer bg-[length:200%_auto]">
              call, visit, and book.
            </span>
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          I build high-performance websites for restaurants and hotels in India.
          Get <span className="text-white font-medium">more calls</span>, <span className="text-white font-medium">more walk-ins</span>, and <span className="text-white font-medium">zero monthly fees</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up [animation-delay:300ms]">
          <Button 
            onClick={scrollToContact} 
            icon={<ArrowRight size={18} />}
            className="hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 border-0"
          >
            Book a Strategy Call
          </Button>
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})} 
            className="group px-6 py-4 text-zinc-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
          >
            View Recent Work
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 flex flex-wrap justify-center gap-6 text-zinc-500 text-sm animate-fade-in-up [animation-delay:400ms]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-zinc-700" />
            <span>Delivered in 3-5 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-zinc-700" />
            <span>Mobile-First Design</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-zinc-700" />
            <span>100% Ownership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;