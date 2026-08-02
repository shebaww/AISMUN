// components/CodeOfConduct.tsx
import React from "react";

interface Rule {
  title: string;
  description: string;
}

const CodeOfConduct: React.FC = () => {
  const rules: Rule[] = [
    {
      title: "Professionalism & Diplomacy",
      description:
        "All delegates are expected to maintain the highest standards of diplomacy, respect, and decorum. Harassment, discrimination, personal attacks, or hate speech of any kind will result in immediate disqualification and removal.",
    },
    {
      title: "Dress Code",
      description:
        "Western Business Attire (WBA) is required during all committee sessions: Suit jackets, blazers, dress shirts, slacks, formal skirts, or dresses. National traditional formalwear is permitted with prior approval from the Secretariat.",
    },
    {
      title: "Academic Integrity & AI Policy",
      description:
        "All position papers and draft resolutions must be original work. Pre-written resolutions ('ghostwriting') prior to the conference are strictly prohibited and result in immediate disqualification from awards.",
    },
  ];

  return (
    <section className="py-32 bg-deep-navy text-white">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-champagne mb-4 block uppercase tracking-widest">
            Our Standards
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-white mb-6">
            Code of Conduct
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="reveal bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-champagne/30 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-champagne text-2xl">◆</span>
                <h3 className="font-display-lg text-[22px] text-champagne group-hover:text-white transition-colors">
                  {rule.title}
                </h3>
              </div>
              <p className="font-body-md text-[16px] text-surface-variant/70 group-hover:text-surface-variant/90 transition-colors leading-relaxed">
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
