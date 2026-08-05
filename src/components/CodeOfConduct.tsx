// components/CodeOfConduct.tsx
import React from "react";

interface Rule {
  icon: string;
  title: string;
  description: string;
}

const CodeOfConduct: React.FC = () => {
  const rules: Rule[] = [
    {
      icon: "gavel",
      title: "Professionalism & Diplomacy",
      description:
        "All delegates are expected to maintain the highest standards of diplomacy, respect, and decorum. Harassment, discrimination, personal attacks, or hate speech of any kind will result in immediate disqualification and removal.",
    },
    {
      icon: "checkroom",
      title: "Dress Code",
      description:
        "Western Business Attire (WBA) is required during all committee sessions: Suit jackets, blazers, dress shirts, slacks, formal skirts, or dresses. National traditional formalwear is permitted with prior approval from the Secretariat.",
    },
    {
      icon: "verified",
      title: "Academic Integrity & AI Policy",
      description:
        "All position papers and draft resolutions must be original work. Pre-written resolutions ('ghostwriting') prior to the conference are strictly prohibited and result in immediate disqualification from awards.",
    },
  ];

  return (
    <section className="py-28 bg-off-white border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-3 block uppercase tracking-[0.25em]">
            Our Standards
          </span>
          <h2 className="font-display-lg text-[36px] md:text-[52px] text-primary mb-4">
            Code of Conduct
          </h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Excellence in diplomacy starts with mutual respect, integrity, and
            adherence to professional conference standards.
          </p>
        </div>

        {/* Rule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Top Accent Stripe on Hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-ambassador-gold to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Header */}
              <div className="w-14 h-14 bg-ambassador-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ambassador-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl text-ambassador-gold group-hover:text-white transition-colors duration-300">
                  {rule.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display-lg text-[22px] text-primary mb-3 group-hover:text-ambassador-gold transition-colors">
                {rule.title}
              </h3>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
