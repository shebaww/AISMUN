// components/Hero.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";
import hero6 from "../assets/hero-6.jpg";

const Hero: React.FC = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTelegramRedirect = () => {
    window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank");
  };

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full overflow-hidden relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={image}
                alt={`AISMUN Conference ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30"></div>
        <div className="absolute inset-0 bg-ambassador-gold/5 mix-blend-overlay"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ambassador-gold/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-champagne/3 rounded-full blur-3xl"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,210,140,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,140,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      ></div>

      <div className="relative z-10 text-center px-[20px] max-w-4xl">
        <span className="reveal font-label-caps text-[12px] text-champagne tracking-[0.3em] uppercase mb-6 block">
          AISMUN • A CONFERENCE FOR ALL DELEGATES
        </span>
        <h1 className="reveal font-display-lg text-[40px] md:text-[64px] text-white mb-8 leading-tight">
          Empowering Global Leaders <br />
          <span className="italic font-normal">of Tomorrow</span>
        </h1>
        <p className="reveal font-body-lg text-[18px] md:text-[20px] text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join hundreds of delegates in resolving complex global crises,
          mastering public speaking, and negotiating world-changing resolutions.
        </p>
        <div className="reveal flex flex-col md:flex-row gap-6 justify-center mt-10">
          <button
            onClick={handleTelegramRedirect}
            className="px-10 py-5 bg-ambassador-gold text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-deep-navy transition-all editorial-shadow relative overflow-hidden group rounded-lg flex items-center gap-3"
          >
            <FaTelegramPlane className="text-[20px]" />
            Join Telegram Community →
          </button>
          <Link
            className="px-10 py-5 border border-white/30 text-white font-label-caps text-[12px] uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 transition-all rounded-lg"
            to="/guide"
          >
            Explore MUN Guide
          </Link>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-champagne"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <span className="material-symbols-outlined text-white/50 text-[28px]">
          expand_more
        </span>
      </div>
    </header>
  );
};

export default Hero;
