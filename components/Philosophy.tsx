import { Section } from './ui/Section';

const Philosophy = () => {
  return (
    <Section className="border-t border-zinc-900">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-2">My Philosophy</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Your website isn't an art gallery. <br />
            <span className="text-zinc-500">It's a sales employee that never sleeps.</span>
          </h3>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              Most agencies will sell you a "pretty" design that takes months to build and costs a fortune to maintain. 
              But pretty doesn't pay the bills.
            </p>
            <p>
              I believe a hospitality website has only one job: <strong>Reduce friction.</strong> 
              If a hungry customer can't see your menu or book a table in 5 seconds, they are gone.
            </p>
            <p className="text-white border-l-2 border-amber-500 pl-4">
              I don't just build pages. I build systems that fill your tables.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Philosophy;