// components/WhyParentsTrust.tsx
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import React from "react";

const WhyParentsTrust: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Parent's Guide
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            Why Parents Should Trust AISMUN
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
            A safe, educational, and transformative experience for your child's
            personal and academic growth.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal bg-white p-8 rounded-xl editorial-shadow">
            <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
              verified
            </span>
            <h3 className="font-display-lg text-[22px] text-primary mb-3">
              Safe & Supervised Environment
            </h3>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
              All AISMUN events are conducted in professional venues with
              trained staff, security personnel, and clear safety protocols. Our
              team maintains a strict Code of Conduct to ensure a respectful and
              harassment-free environment for all participants.
            </p>
          </div>

          <div
            className="reveal bg-white p-8 rounded-xl editorial-shadow"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
              school
            </span>
            <h3 className="font-display-lg text-[22px] text-primary mb-3">
              Educational Excellence
            </h3>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
              AISMUN provides comprehensive learning resources, including our
              free MUN Guide with debate training, research methods, and public
              speaking modules. Students develop critical thinking, research
              skills, and global awareness.
            </p>
          </div>

          <div
            className="reveal bg-white p-8 rounded-xl editorial-shadow"
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
              diversity_3
            </span>
            <h3 className="font-display-lg text-[22px] text-primary mb-3">
              Character Development
            </h3>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
              Beyond academics, AISMUN fosters leadership, teamwork, diplomacy,
              and confidence. Students learn to articulate ideas, negotiate
              differences, and collaborate with peers from diverse backgrounds.
            </p>
          </div>

          <div
            className="reveal bg-white p-8 rounded-xl editorial-shadow"
            style={{ transitionDelay: "0.3s" }}
          >
            <span className="material-symbols-outlined text-4xl text-ambassador-gold mb-4">
              verified_user
            </span>
            <h3 className="font-display-lg text-[22px] text-primary mb-3">
              Transparent Communication
            </h3>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
              We maintain open communication with parents through our Telegram
              channel. All event details, schedules, and important updates are
              shared publicly. Our team is always available to address any
              concerns.
            </p>
          </div>
        </div>

        {/* Parent Testimonials */}
        <section className="mt-20">
          <h2 className="font-display-lg text-[32px] text-primary text-center mb-12">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white p-6 rounded-xl">
              <span className="material-symbols-outlined text-3xl text-ambassador-gold mb-3">
                format_quote
              </span>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed italic">
                "My daughter's confidence has grown tremendously since joining
                AISMUN. She's more articulate and globally aware."
              </p>
              <p className="font-label-caps text-[12px] text-primary mt-4">
                — Parent of Delegate, 2025
              </p>
            </div>
            <div className="bg-off-white p-6 rounded-xl">
              <span className="material-symbols-outlined text-3xl text-ambassador-gold mb-3">
                format_quote
              </span>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed italic">
                "The professionalism and safety measures at AISMUN gave us
                complete peace of mind. Highly recommend."
              </p>
              <p className="font-label-caps text-[12px] text-primary mt-4">
                — Parent of Delegate, 2025
              </p>
            </div>
            <div className="bg-off-white p-6 rounded-xl">
              <span className="material-symbols-outlined text-3xl text-ambassador-gold mb-3">
                format_quote
              </span>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed italic">
                "AISMUN provided my son with skills that go far beyond the
                classroom. A truly transformative experience."
              </p>
              <p className="font-label-caps text-[12px] text-primary mt-4">
                — Parent of Delegate, 2024
              </p>
            </div>
          </div>
        </section>

        {/* FAQs for Parents */}
        <section className="mt-20 bg-deep-navy text-white rounded-2xl p-8 md:p-12">
          <h2 className="font-display-lg text-[32px] text-champagne text-center mb-8">
            Frequently Asked Questions for Parents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display-lg text-[18px] text-champagne mb-2">
                Is my child supervised at all times?
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/80">
                Yes. All sessions have designated staff and chairs present.
                Security personnel are on-site throughout the event.
              </p>
            </div>
            <div>
              <h4 className="font-display-lg text-[18px] text-champagne mb-2">
                What is the age range for delegates?
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/80">
                AISMUN is open to students aged 14-25. Some committees are
                specifically designed for beginners.
              </p>
            </div>
            <div>
              <h4 className="font-display-lg text-[18px] text-champagne mb-2">
                How do I stay informed?
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/80">
                All updates are shared on our public Telegram channel. Parents
                are welcome to join and stay informed.
              </p>
            </div>
            <div>
              <h4 className="font-display-lg text-[18px] text-champagne mb-2">
                What if I have concerns during the event?
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/80">
                Our team is available via Telegram and email. We respond
                promptly to all parental inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() =>
              window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank")
            }
            className="inline-flex items-center gap-3 px-10 py-4 bg-ambassador-gold text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-deep-navy transition-all rounded-lg shadow-lg hover:shadow-xl"
          >
            <FaTelegramPlane />
            Join Parent Information Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyParentsTrust;
