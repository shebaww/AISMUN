import React from 'react';

interface Stat {
  number: string;
  label: string;
}

const ImpactGrid: React.FC = () => {
  const stats: Stat[] = [
    { number: '50,000+', label: 'Global Delegates' },
    { number: '120+', label: 'Participating Countries' },
    { number: '200+', label: 'Annual Conferences' },
  ];

  return (
    <section className="py-32 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal border-l border-outline-variant/30 pl-8 py-4"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display-lg text-[32px] text-primary mb-2">
                {stat.number}
              </h3>
              <p className="font-label-caps text-[12px] text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
