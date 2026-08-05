// components/Navbar.tsx
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/committees", label: "Committees" },
    { path: "/guide", label: "MUN Guide" },
    { path: "/code-of-conduct", label: "Code of Conduct" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleTelegramRedirect = () => {
    window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-outline-variant/10 bg-surface/80 shadow-[0_20px_50px_rgba(18,30,50,0.03)] transition-all duration-300 h-20">
      <div className="flex justify-between items-center w-full px-[20px] md:px-[64px] max-w-[1280px] mx-auto h-full">
        <Link
          className="text-[28px] md:text-[32px] text-primary tracking-tight font-serif"
          to="/"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          AISMUN
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`font-body-md text-[14px] xl:text-[16px] font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "text-primary border-b-2 border-ambassador-gold pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Hide Telegram button on mobile screens (hidden below lg breakpoint) */}
          <button
            onClick={handleTelegramRedirect}
            className="hidden lg:flex bg-ambassador-gold text-white px-6 py-2.5 md:px-8 md:py-3 font-label-caps text-[11px] md:text-[12px] uppercase transition-all hover:bg-deep-navy hover:translate-y-[-1px] shadow-lg rounded-lg items-center gap-2"
          >
            <FaTelegramPlane className="text-[20px]" />
            Join Telegram
          </button>

          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-lg border-t border-outline-variant/20">
          <div className="px-[20px] py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                className={`font-body-md text-[16px] font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
