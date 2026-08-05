// components/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import conference2026 from "../assets/AIS UNESCO MUN/photo_2026-07-23_16-29-25.jpg";
import conference2025 from "../assets/AIS UNESCO MUN/photo_2026-07-23_16-29-52.jpg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="max-w-3xl">
            <span className="font-label-caps text-[12px] text-champagne mb-4 block uppercase tracking-widest">
              About AISMUN
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[64px] text-white mb-6 leading-tight">
              Empowering the Next Generation of Global Leaders
            </h1>
            <p className="font-body-lg text-[20px] text-surface-variant/80 leading-relaxed">
              Built by delegates, for delegates. AISMUN is a student-led
              platform dedicated to diplomacy, debate, and actionable youth
              advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-6">
                Defining the Future of{" "}
                <span className="italic">Diplomatic Excellence</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
                Model United Nations isn't just about putting on a suit and
                reading speeches—it's about stepping into the high-stakes
                reality of global decision-making.
              </p>
              <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
                <span className="font-semibold text-primary">AISMUN</span> was
                founded to bridge the gap between academic theory and real-world
                diplomacy. What started as a small local initiative has grown
                into a premier MUN conference ecosystem, bringing together
                hundreds of passionate delegates, chairs, and crisis actors from
                across schools and regions.
              </p>
              <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
                We believe that effective debate should be{" "}
                <span className="text-ambassador-gold font-semibold">
                  accessible, rigorous, and transformative
                </span>
                . Whether you are stepping into your very first committee
                session or navigating a complex double-delegate Security Council
                crisis, AISMUN is engineered to push your leadership, public
                speaking, and negotiation skills to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="text-center mb-16">
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
              Our Philosophy
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary">
              Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal bg-white p-8 rounded-xl editorial-shadow">
              <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
                public
              </span>
              <h3 className="font-display-lg text-[22px] text-primary mb-3">
                Open-Source Diplomacy
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                We believe top-tier diplomatic training shouldn't sit behind
                paywalls or complex login portals. Our entire learning
                curriculum, position paper guides, and debate cheat sheets are
                completely free and open to all delegates worldwide.
              </p>
            </div>

            <div
              className="reveal bg-white p-8 rounded-xl editorial-shadow"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
                balance
              </span>
              <h3 className="font-display-lg text-[22px] text-primary mb-3">
                Substance Over Pretense
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                While we maintain traditional diplomacy and Western Business
                Attire standards, our focus remains squarely on the quality of
                debate, policy accuracy, and genuine resolution-building—not
                just parliamentary posturing.
              </p>
            </div>

            <div
              className="reveal bg-white p-8 rounded-xl editorial-shadow"
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
                hub
              </span>
              <h3 className="font-display-lg text-[22px] text-primary mb-3">
                A Thriving, Connected Network
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                AISMUN extends far beyond the final committee session. Through
                our central Telegram hub, delegates form lifelong friendships,
                discover inter-school debate opportunities, and join a permanent
                community of young changemakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat Preview */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="text-center mb-16">
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
              Our Leadership
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4">
              Secretariat & Executive Leadership
            </h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
              Meet the team behind AISMUN's vision and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl editorial-shadow">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-display-lg text-[20px] text-primary">
                    Secretary-General
                  </h4>
                  <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                    Meklit Thomas
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-2">
                    Senior student with 4+ years of MUN experience across 15+
                    international conferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl editorial-shadow">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-display-lg text-[20px] text-primary">
                    Deputy Secretary-General
                  </h4>
                  <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                    Ruth Estifanos
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-2">
                    Specializes in parliamentary procedure, committee logistics,
                    and chair training.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl editorial-shadow">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-display-lg text-[20px] text-primary">
                    Secretary
                  </h4>
                  <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                    Emerald
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-2">
                    Heading delegate relations, Telegram community management,
                    and first-timer orientation programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl editorial-shadow">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-display-lg text-[20px] text-primary">
                    Treasurer
                  </h4>
                  <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                    Omna Berhanu
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-2">
                    Veteran treasurer known for managing complex, rock-solid
                    budgets andi seamless financial committee ops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/secretariat"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-deep-navy transition-all rounded-lg"
            >
              <span className="material-symbols-outlined text-[18px]">
                people
              </span>
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Past Conferences Preview */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="text-center mb-16">
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
              Our Legacy
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4">
              Past Conferences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden editorial-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={conference2026}
                  alt="UNESCO AISMUN 2026"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display-lg text-[24px] text-primary">
                  UNESCO AISMUN 2026
                </h3>
                <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                  "Navigating Global Fractures"
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span className="font-body-md text-on-surface-variant">
                    120+ Delegates
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    •
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    5 Committees
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    •
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    11 Resolutions
                  </span>
                </div>
                <Link
                  to="/past-conferences"
                  className="inline-flex items-center gap-2 mt-4 text-ambassador-gold font-label-caps text-[12px] uppercase tracking-wider hover:text-primary transition-colors"
                >
                  View Gallery
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden editorial-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={conference2025}
                  alt="AISMUN 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display-lg text-[24px] text-primary">
                  AISMUN 2025
                </h3>
                <p className="font-label-caps text-[12px] text-ambassador-gold uppercase tracking-wider">
                  "The Era of Digital Sovereignty"
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span className="font-body-md text-on-surface-variant">
                    50+ Delegates
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    •
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    5 Committees
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    •
                  </span>
                  <span className="font-body-md text-on-surface-variant">
                    9 Resolutions
                  </span>
                </div>
                <Link
                  to="/past-conferences"
                  className="inline-flex items-center gap-2 mt-4 text-ambassador-gold font-label-caps text-[12px] uppercase tracking-wider hover:text-primary transition-colors"
                >
                  View Gallery
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
