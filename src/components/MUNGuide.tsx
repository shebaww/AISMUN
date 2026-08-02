// components/MUNGuide.tsx
import React, { useState } from "react";

interface Module {
  id: string;
  title: string;
  icon: string;
  color: string;
  lessons: {
    title: string;
    content: string[];
  }[];
}

const MUNGuide: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>("module1");

  const modules: Module[] = [
    {
      id: "module1",
      title: "The Foundations of MUN",
      icon: "",
      color: "border-green-500",
      lessons: [
        {
          title: "What is Model UN?",
          content: [
            "Model United Nations is an academic simulation of the UN where you step into the shoes of a diplomat representing a country.",
            "You research foreign policy, debate international issues, and collaborate to draft resolutions.",
          ],
        },
        {
          title: "Understanding Rules of Procedure (RoP)",
          content: [
            "• Roll Call: Present or Present & Voting.",
            "• Speakers' List: The main agenda flow where delegates deliver formal policy speeches.",
            "• Moderated Caucus: A structured debate focused on a specific sub-topic with set speaking limits (e.g., 10-minute caucus, 45-second speaking time).",
            "• Unmoderated Caucus: Informal lobbying where delegates leave their seats to draft papers and form blocs.",
            "• Points & Motions:",
            "  - Point of Personal Privilege: Used when you cannot hear or have physical discomfort.",
            "  - Point of Order: Used to correct a procedural error made by the dais.",
            "  - Point of Parliamentary Inquiry: Used to ask the Chair a question about the rules.",
          ],
        },
      ],
    },
    {
      id: "module2",
      title: "Pre-Conference Preparation",
      icon: "",
      color: "border-yellow-500",
      lessons: [
        {
          title: "Researching Your Country's Policy",
          content: [
            "1. Never use your personal opinion. You represent your assigned nation's national interests.",
            "2. Check past UN Voting Records on the CIA World Factbook and the UN Digital Library.",
            "3. Identify your natural regional allies (bloc partners).",
          ],
        },
        {
          title: "Writing a Winning Position Paper",
          content: [
            "Your position paper should be 1 page per topic split into three paragraphs:",
            "• Paragraph 1: Background of the Issue & International Relevance.",
            "• Paragraph 2: Your Country's Past Actions & Official Position.",
            "• Paragraph 3: Proposed Solutions & Action Plan.",
          ],
        },
      ],
    },
    {
      id: "module3",
      title: "In-Room Dominance",
      icon: "",
      color: "border-red-500",
      lessons: [
        {
          title: "The 30-Second Speech Formula",
          content: [
            "1. Hook: Start with a bold statistic, quote, or rhetorical question.",
            "2. Point: Clearly state your country's policy on the sub-topic.",
            "3. Action: Call on 2–3 specific countries or regional blocs to join your working paper during the upcoming unmod.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-32 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Learn & Prepare
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            OUR MUN GUIDE
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
            No login or authentication required! Delegates can progress through
            these self-paced modules at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeModule === module.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-primary hover:bg-surface-variant/50"
                }`}
              >
                <span className="mr-3">{module.icon}</span>
                <span className="font-display-lg text-[18px]">
                  {module.title}
                </span>
              </button>
            ))}
          </div>

          {/* Module Content */}
          <div className="lg:col-span-2">
            {modules.map(
              (module) =>
                activeModule === module.id && (
                  <div
                    key={module.id}
                    className="bg-white rounded-2xl p-8 editorial-shadow"
                  >
                    <h2 className="font-display-lg text-[28px] text-primary mb-8">
                      {module.icon} {module.title}
                    </h2>
                    <div className="space-y-8">
                      {module.lessons.map((lesson, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-ambassador-gold pl-6"
                        >
                          <h3 className="font-display-lg text-[22px] text-primary mb-4">
                            {lesson.title}
                          </h3>
                          <div className="space-y-3">
                            {lesson.content.map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className="font-body-md text-[16px] text-on-surface-variant leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUNGuide;
