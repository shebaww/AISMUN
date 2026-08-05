// components/TelegramBanner.tsx
import React from "react";

const TelegramBanner: React.FC = () => {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank");
  };

  return (
    <section className="py-16 bg-black border-y-2 border-ambassador-gold/20 relative overflow-hidden">
      {/* Ambient background glow behind the entire section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ambassador-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-ambassador-gold/15 via-black/90 to-black rounded-2xl p-8 md:p-12 border border-ambassador-gold/30 shadow-2xl">
          {/* Ambient glow behind the CTA button */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-ambassador-gold/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-48 h-48 bg-champagne/5 rounded-full blur-2xl pointer-events-none" />

          {/* Subtle grid pattern overlay for depth */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20px 20px, rgba(255,210,140,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display-lg text-[24px] md:text-[28px] text-champagne mb-3 drop-shadow-[0_2px_10px_rgba(255,210,140,0.15)]">
                How Registration & Announcements Work
              </h3>
              <p className="font-body-md text-[16px] text-white/70 leading-relaxed">
                We do not run web accounts or static forms.{" "}
                <span className="text-champagne font-semibold drop-shadow-[0_1px_8px_rgba(255,210,140,0.2)]">
                  All conference dates, committee releases, venue updates, and
                  delegate registration forms are broadcast exclusively on our
                  Telegram channel.
                </span>
              </p>
            </div>

            {/* CTA Button with glow effect */}
            <div className="relative flex-shrink-0">
              {/* Button glow */}
              <div className="absolute inset-0 bg-ambassador-gold/30 rounded-lg blur-xl animate-pulse" />
              <a
                href="https://t.me/+2TCTBUasTbplNDRh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-ambassador-gold to-amber-500 text-deep-navy font-label-caps text-[12px] uppercase tracking-widest transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(255,210,140,0.2)] hover:shadow-[0_0_35px_rgba(255,210,140,0.4)] hover:scale-[1.02] inline-flex items-center gap-2 font-bold"
              >
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  chevron_right
                </span>
                Click Here to Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBanner;
