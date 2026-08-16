// App.tsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TelegramBanner from "./components/TelegramBanner";
import WhyAttend from "./components/WhyAttend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import SecretariatTeam from "./components/SecretariatTeam";
import PastConferences from "./components/PastConferences";
import CommitteesTopics from "./components/CommitteesTopics";
import MUNGuide from "./components/MUNGuide";
import CodeOfConduct from "./components/CodeOfConduct";
import Resources from "./components/Resources.tsx";
import PodcastsArticles from "./components/PodcastsArticles.tsx";
import FAQContact from "./components/FAQContact";
import WhyParentsTrust from "./components/WhyParentsTrust";

// ScrollToTop component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// RouteWrapper component
const RouteWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions: IntersectionObserverInit = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.remove("active");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <>{children}</>;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <TelegramBanner />
    <WhyAttend />
    <PodcastsArticles />
    <Testimonials />
  </>
);

const App: React.FC = () => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        nav?.classList.add("shadow-xl", "bg-surface/95");
      } else {
        nav?.classList.remove("shadow-xl", "bg-surface/95");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        {/* Wrap Routes in RouteWrapper so the IntersectionObserver initializes */}
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/secretariat" element={<SecretariatTeam />} />
            <Route path="/past-conferences" element={<PastConferences />} />
            <Route path="/committees" element={<CommitteesTopics />} />
            <Route path="/guide" element={<MUNGuide />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/faq" element={<FAQContact />} />
            <Route path="/why-parents-trust" element={<WhyParentsTrust />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </RouteWrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
