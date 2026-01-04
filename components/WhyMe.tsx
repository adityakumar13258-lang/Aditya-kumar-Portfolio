import { Section } from './ui/Section';

const WhyMe = () => {
  return (
    <Section className="bg-zinc-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
          Why I'm different from <br />
          <span className="text-zinc-600">traditional agencies.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Way */}
          <div className="space-y-6 opacity-50 blur-[0.5px] hover:blur-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-xl font-semibold text-zinc-400 border-b border-zinc-800 pb-4">Traditional Agency</h3>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex gap-3">❌ Charges ₹50,000+ upfront</li>
              <li className="flex gap-3">❌ Takes 4-6 weeks to deliver</li>
              <li className="flex gap-3">❌ Requires monthly "maintenance" fees</li>
              <li className="flex gap-3">❌ Uses heavy, slow templates</li>
              <li className="flex gap-3">❌ Focuses on "branding" not sales</li>
            </ul>
          </div>

          {/* My Way */}
          <div className="space-y-6 bg-zinc-900/80 p-8 rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-900/10">
            <h3 className="text-xl font-semibold text-white border-b border-zinc-800 pb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Aditya Kumar
            </h3>
            <ul className="space-y-4 text-zinc-200">
              <li className="flex gap-3">✅ Flat, affordable project fee</li>
              <li className="flex gap-3">✅ Live in 3-5 days</li>
              <li className="flex gap-3">✅ <span className="text-amber-500 font-bold">Zero</span> monthly fees</li>
              <li className="flex gap-3">✅ Lightweight & Mobile Perfect</li>
              <li className="flex gap-3">✅ Focuses on calls & bookings</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyMe;