import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';

const Audience = () => {
  return (
    <Section className="bg-zinc-900">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Who this is for</h3>
          <ul className="space-y-4">
            {[
              "Restaurant owners who want more direct orders.",
              "Hotels paying too much commission to booking sites.",
              "Businesses tired of slow, broken Wordpress sites.",
              "Owners who value speed and clarity."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-zinc-300">
                <div className="mt-1 bg-green-900/30 p-1 rounded-full">
                  <Check size={14} className="text-green-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-zinc-500 mb-6">Who this is NOT for</h3>
          <ul className="space-y-4">
            {[
              "People looking for the cheapest option ($50 sites).",
              "Micromanagers who want to design it themselves.",
              "Businesses that don't care about mobile users.",
              "Agencies looking for white-label work."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-zinc-500">
                <div className="mt-1 bg-zinc-800 p-1 rounded-full">
                  <X size={14} className="text-zinc-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Audience;