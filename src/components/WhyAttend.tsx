// components/WhyAttend.tsx
import React from "react";

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

const WhyAttend: React.FC = () => {
  const pillars: Pillar[] = [
    {
      icon: "gavel",
      title: "Unrivaled Debate Experience",
      description:
        "From entry-level General Assembly committees to high-stakes Security Council crisis suites, our sessions are built to challenge every skill level.",
    },
    {
      icon: "book",
      title: "Open-Source Learning",
      description:
        "No paywalls, no login accounts. Access our entire step-by-step delegate training academy completely free directly on this site and in our telegram channel.",
    },
    {
      icon: "group",
      title: "Thriving Diplomatic Network",
      description:
        "Connect with passionate students, chairs, and future global leaders across our active Telegram network.",
    },
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Why Attend?
          </span>
          <h2 className="font-display-lg text-[40px] md:text-[56px] text-primary mb-6">
            Why Attend AISMUN?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-xl p-8 editorial-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="material-symbols-outlined text-5xl text-ambassador-gold mb-6">
                {pillar.icon}
              </span>
              <h3 className="font-display-lg text-[24px] text-primary mb-4 group-hover:text-ambassador-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
