// components/Footer.tsx
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank");
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <h2
            className="font-display-lg text-[32px] text-champagne mb-6"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            AISMUN
          </h2>
          <p className="font-body-md text-[16px] text-surface-variant/60 mb-8 leading-relaxed">
            AIS Model United Nations brings students together from around the
            world to learn and share ideas from diverse experiences.
          </p>
          <button
            onClick={handleTelegramRedirect}
            className="flex items-center gap-2 px-6 py-3 bg-ambassador-gold/20 text-champagne font-label-caps text-[12px] uppercase tracking-widest hover:bg-ambassador-gold hover:text-deep-navy transition-all rounded-lg"
          >
            <FaTelegramPlane className="text-[20px]" />
            Join Telegram
          </button>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-caps text-[12px] text-champagne mb-6 uppercase tracking-widest">
            About
          </h6>
          <ul className="space-y-3 font-body-md text-[16px] text-surface-variant/60">
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/about"
              >
                Our Mission
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/secretariat"
              >
                Secretariat
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/past-conferences"
              >
                Past Conferences
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-caps text-[12px] text-champagne mb-6 uppercase tracking-widest">
            Resources
          </h6>
          <ul className="space-y-3 font-body-md text-[16px] text-surface-variant/60">
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/committees"
              >
                Committees
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/guide"
              >
                MUN Guide
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/code-of-conduct"
              >
                Code of Conduct
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-caps text-[12px] text-champagne mb-6 uppercase tracking-widest">
            Support
          </h6>
          <ul className="space-y-3 font-body-md text-[16px] text-surface-variant/60">
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-champagne transition-colors"
                to="/why-parents-trust"
              >
                Parents' Guide
              </Link>
            </li>
            <li>
              <button
                onClick={handleTelegramRedirect}
                className="hover:text-champagne transition-colors"
              >
                Telegram
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-caps text-[12px] text-champagne mb-6 uppercase tracking-widest">
            Connect
          </h6>
          <div className="flex gap-4">
            <button
              onClick={handleTelegramRedirect}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-champagne hover:text-champagne transition-all"
            >
              <FaTelegramPlane className="text-[20px]" />
            </button>
            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-champagne hover:text-champagne transition-all">
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </button>
            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-champagne hover:text-champagne transition-all">
              <span className="material-symbols-outlined text-sm">
                photo_camera
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-label-caps text-[10px] text-surface-variant/40 tracking-[0.2em]">
          &copy; 2026 AISMUN. DESIGNED FOR GLOBAL EXCELLENCE.
        </p>
        <div className="flex gap-8 md:gap-12 font-label-caps text-[10px] text-surface-variant/40 tracking-[0.2em] flex-wrap justify-center">
          <span>ADDIS ABABA, ETHIOPIA</span>
          <span>GLOBAL REACH</span>
          <span>EST. 2017</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
