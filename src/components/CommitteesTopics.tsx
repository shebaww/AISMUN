// components/CommitteesTopics.tsx
import React, { useState, useEffect, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";

interface Committee {
  name: string;
  difficulty: string;
  format: string;
  overview: string;
  topicA: string;
  topicAContext: string;
  topicB: string;
  topicBContext: string;
  icon: string;
}

const CommitteesTopics: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const committees: Committee[] = [
    {
      name: "WHO — World Health Organization",
      difficulty: "Beginner Friendly",
      format: "Single-Delegate",
      overview:
        "Addresses global public health crises, health equity, healthcare infrastructure, and disease prevention strategies. Perfect for delegates new to MUN.",
      topicA:
        "Building Resilient Healthcare Infrastructure Against Antimicrobial Resistance",
      topicAContext:
        "The rapid rise of drug-resistant pathogens threatens modern medicine, requiring coordinated international research and responsible antibiotic stewardship.",
      topicB: "Equitable Access to Mental Health Care in Post-Conflict Zones",
      topicBContext:
        "Psychological trauma severely hinders community recovery following humanitarian disasters, yet mental health resources remain drastically underfunded globally.",
      icon: "health_and_safety",
    },
    {
      name: "UNGA — United Nations General Assembly",
      difficulty: "Beginner / Intermediate",
      format: "Single-Delegate",
      overview:
        "The main deliberative assembly of the UN. Delegates discuss broad global issues and develop comprehensive resolutions through consensus-building.",
      topicA:
        "Strengthening International Cooperation for Sustainable Development",
      topicAContext:
        "As nations face overlapping crises, cooperation on SDGs requires renewed commitment and innovative financing mechanisms.",
      topicB: "Addressing Global Food Security Challenges",
      topicBContext:
        "Supply chain disruptions and climate change threaten food access for millions, requiring coordinated international action.",
      icon: "public",
    },
    {
      name: "UNESCO — United Nations Educational, Scientific and Cultural Organization",
      difficulty: "Intermediate",
      format: "Single-Delegate",
      overview:
        "Focuses on education, science, culture, and communication. Delegates address cultural preservation, educational access, and scientific cooperation.",
      topicA: "Protecting Cultural Heritage in Conflict Zones",
      topicAContext:
        "Armed conflicts increasingly target historic infrastructure, archives, and cultural sites, requiring international mechanisms for heritage defense.",
      topicB: "Expanding Access to Digital Education in Developing Nations",
      topicBContext:
        "The digital divide continues to limit educational opportunities in underserved regions, requiring infrastructure investment and capacity building.",
      icon: "school",
    },
    {
      name: "DISEC — Disarmament & International Security",
      difficulty: "Intermediate",
      format: "Single-Delegate",
      overview:
        "Handles international challenges regarding weapons proliferation, militarization of new frontiers, and threats to global stability.",
      topicA: "Regulatory Frameworks for Autonomous Weapon Systems",
      topicAContext:
        "The integration of artificial intelligence into lethal target acquisition raises ethical, legal, and operational dilemmas under International Humanitarian Law.",
      topicB: "Combatting the Illicit Small Arms Trade in Conflict Zones",
      topicBContext:
        "Unchecked arms smuggling undermines peacekeeping efforts, fuels insurgencies, and destabilizes developing economies across vulnerable regions.",
      icon: "gavel",
    },
    {
      name: "IMF — International Monetary Fund",
      difficulty: "Intermediate / Advanced",
      format: "Single-Delegate",
      overview:
        "Addresses global economic stability, monetary cooperation, and financial assistance to member countries facing balance of payments problems.",
      topicA: "Addressing Sovereign Debt Crises in Developing Nations",
      topicAContext:
        "Rising debt burdens in developing countries threaten economic stability and require coordinated debt restructuring mechanisms.",
      topicB: "Enhancing Financial Inclusion Through Digital Innovation",
      topicBContext:
        "Fintech innovations offer opportunities to expand financial services to underserved populations, but require robust regulatory frameworks.",
      icon: "attach_money",
    },
    {
      name: "UNSC — United Nations Security Council",
      difficulty: "Advanced",
      format: "Crisis / Double-Delegate Allowed",
      overview:
        "The primary organ responsible for maintaining international peace and security. Features real-time crisis updates, binding directives, and veto powers for Permanent Five members.",
      topicA: "Maritime Sovereignty & Militarization in the South China Sea",
      topicAContext:
        "Escalating naval blockades, artificial island expansion, and disputed freedom-of-navigation operations threaten global trade corridors and regional sovereignty.",
      topicB: "Emergency Crisis Session",
      topicBContext:
        "Unannounced real-time scenario introduced live during Committee Session II.",
      icon: "shield",
    },
    {
      name: "AU — African Union",
      difficulty: "Intermediate",
      format: "Single-Delegate",
      overview:
        "Focuses on African continental integration, peace and security, and socio-economic development. Delegates address issues specific to the African continent.",
      topicA:
        "Strengthening Peacekeeping Operations in Conflict-Affected Regions",
      topicAContext:
        "The African Union's peacekeeping missions face resource constraints and mandate challenges in maintaining stability across the continent.",
      topicB:
        "Accelerating the African Continental Free Trade Area Implementation",
      topicBContext:
        "The AfCFTA offers tremendous economic opportunities but requires addressing infrastructure gaps and regulatory harmonization.",
      icon: "people",
    },
    {
      name: "UNODC — United Nations Office on Drugs and Crime",
      difficulty: "Intermediate",
      format: "Single-Delegate",
      overview:
        "Addresses drug trafficking, organized crime, corruption, and terrorism prevention through international cooperation and legal frameworks.",
      topicA: "Combating Transnational Organized Crime Networks",
      topicAContext:
        "Transnational criminal organizations increasingly operate across borders, requiring sophisticated international law enforcement cooperation.",
      topicB: "Addressing the Global Opioid Crisis",
      topicBContext:
        "The proliferation of synthetic opioids has created a public health emergency requiring coordinated treatment and prevention strategies.",
      icon: "security",
    },
  ];

  const handleTelegramRedirect = () => {
    window.open("https://t.me/+2TCTBUasTbplNDRh", "_blank");
  };

  // Filter committees based on difficulty
  const filteredCommittees =
    filter === "All"
      ? committees
      : committees.filter((c) => c.difficulty.includes(filter));

  // Get unique difficulty levels for filter buttons
  const difficulties = [
    "All",
    "Beginner Friendly",
    "Beginner / Intermediate",
    "Intermediate",
    "Intermediate / Advanced",
    "Advanced",
  ];

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filter]);

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards(new Set());
    // Small delay to allow DOM to update
    setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          const index = parseInt(ref.getAttribute("data-index") || "0");
          // Check if card is already visible
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        }
      });
    }, 100);
  }, [filter]);

  return (
    <div className="min-h-screen pt-32 pb-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Engage & Debate
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            Committees & Global Debates
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-6">
            Choose your arena. From foundational General Assembly forums to
            fast-paced crisis simulations, explore our specialized committee
            lineups.
          </p>

          {/* Notice Banner */}
          <div className="max-w-3xl mx-auto bg-ambassador-gold/5 border border-ambassador-gold/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4">
            <span className="material-symbols-outlined text-3xl text-ambassador-gold">
              info
            </span>
            <p className="font-body-md text-[14px] text-on-surface-variant text-center md:text-left">
              <span className="font-semibold">
                Notice on Schedules & Room Assignments:
              </span>{" "}
              Room numbers, committee timetables, and background guide releases
              are distributed directly via our Telegram Channel prior to each
              conference session.
            </p>
            <button
              onClick={handleTelegramRedirect}
              className="flex-shrink-0 px-6 py-2 bg-ambassador-gold text-white font-label-caps text-[11px] uppercase tracking-widest hover:bg-deep-navy transition-all rounded-lg flex items-center gap-2"
            >
              <FaTelegramPlane className="text-[16px]" />
              Join for Updates
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setFilter(difficulty)}
              className={`px-6 py-2 font-label-caps text-[11px] uppercase tracking-wider rounded-full transition-all duration-300 ${
                filter === difficulty
                  ? "bg-primary text-white shadow-lg"
                  : "border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCommittees.map((committee, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`bg-white rounded-xl p-8 editorial-shadow hover:shadow-2xl transition-all duration-700 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-4xl text-ambassador-gold">
                  {committee.icon}
                </span>
                <div>
                  <h3 className="font-display-lg text-[22px] text-primary group-hover:text-ambassador-gold transition-colors">
                    {committee.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="font-label-caps text-[10px] bg-ambassador-gold/10 text-ambassador-gold px-3 py-1 rounded-full uppercase tracking-wider">
                      {committee.difficulty}
                    </span>
                    <span className="font-label-caps text-[10px] bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full uppercase tracking-wider">
                      {committee.format}
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-body-md text-[15px] text-on-surface-variant mb-6 leading-relaxed">
                {committee.overview}
              </p>

              <div className="space-y-4">
                <div className="border-l-2 border-ambassador-gold pl-4">
                  <p className="font-label-caps text-[10px] text-ambassador-gold uppercase tracking-wider">
                    Topic A
                  </p>
                  <p className="font-body-md text-[15px] text-primary font-medium">
                    {committee.topicA}
                  </p>
                  <p className="font-body-md text-[13px] text-on-surface-variant/70 mt-1">
                    {committee.topicAContext}
                  </p>
                </div>
                <div className="border-l-2 border-outline-variant/50 pl-4">
                  <p className="font-label-caps text-[10px] text-ambassador-gold uppercase tracking-wider">
                    Topic B
                  </p>
                  <p className="font-body-md text-[15px] text-primary font-medium">
                    {committee.topicB}
                  </p>
                  <p className="font-body-md text-[13px] text-on-surface-variant/70 mt-1">
                    {committee.topicBContext}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                  Background Guide:{" "}
                  <span className="text-ambassador-gold">
                    Coming Soon on Telegram
                  </span>
                </span>
                <button
                  onClick={handleTelegramRedirect}
                  className="flex items-center gap-1 text-primary hover:text-ambassador-gold transition-colors font-label-caps text-[11px] uppercase tracking-wider"
                >
                  <FaTelegramPlane className="text-[14px]" />
                  Get Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCommittees.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body-lg text-[18px] text-on-surface-variant">
              No committees found for this difficulty level.
            </p>
          </div>
        )}

        {/* Preparation Checklist */}
        <div className="mt-20 bg-deep-navy text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTelegramPlane className="text-3xl text-champagne" />
              </div>
              <h4 className="font-display-lg text-[20px] text-champagne mb-2">
                1. Join Telegram
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/70">
                Get your country assignment & background guide
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-champagne">
                  book
                </span>
              </div>
              <h4 className="font-display-lg text-[20px] text-champagne mb-2">
                2. Read MUN Guide
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/70">
                Study our free 3-module debate curriculum
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-champagne">
                  edit_note
                </span>
              </div>
              <h4 className="font-display-lg text-[20px] text-champagne mb-2">
                3. Write Position Paper
              </h4>
              <p className="font-body-md text-[14px] text-surface-variant/70">
                Draft your 1-page policy paper before session
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteesTopics;
