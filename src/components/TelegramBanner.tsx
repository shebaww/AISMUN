// components/TelegramBanner.tsx
import React from "react";

const TelegramBanner: React.FC = () => {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/your_aismun_channel", "_blank");
  };

  return (
    <section className="py-16 bg-deep-navy border-y-2 border-ambassador-gold/20">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="bg-gradient-to-r from-ambassador-gold/10 to-champagne/5 rounded-2xl p-8 md:p-12 border border-ambassador-gold/20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display-lg text-[24px] md:text-[28px] text-champagne mb-3">
                How Registration & Announcements Work
              </h3>
              <p className="font-body-md text-[16px] text-surface-variant/80 leading-relaxed">
                We do not run web accounts or static forms.{" "}
                <span className="text-champagne font-semibold">
                  All conference dates, committee releases, venue updates, and
                  delegate registration forms are broadcast exclusively on our
                  Telegram channel.
                </span>
              </p>
            </div>
            <button
              onClick={handleTelegramRedirect}
              className="flex-shrink-0 px-8 py-4 bg-ambassador-gold text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-champagne hover:text-deep-navy transition-all rounded-lg shadow-lg hover:shadow-xl whitespace-nowrap flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
              Click Here to Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBanner;
