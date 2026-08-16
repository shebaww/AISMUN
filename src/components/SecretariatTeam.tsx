// components/SecretariatTeam.tsx
import React from "react";
import meklit from "../assets/exec-team/meklit.JPG";
import emerald from "../assets/exec-team/emerald.JPG";
import ruth from "../assets/exec-team/ruth.JPG";
import hemen from "../assets/exec-team/hemen.JPG";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  objectPosition?: string; // Optional: Override default 'object-center'
}

const SecretariatTeam: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Meklit Thomas",
      role: "Secretary-General",
      image: meklit,
      quote:
        "I’m Meklit! Outside of MUN, I’m always curious about global issues and love a good debate. MUN has given me some of my favorite memories, and I’m excited to help create the same experience for every delegate at AISMUN.",
    },
    {
      name: "Ruth Estifanos",
      role: "Deputy Secretary-General",
      image: ruth,
      quote:
        "I'm AISMUN's Deputy Secretary-General. I love creating conferences that challenge, support, and inspire delegates. I'm passionate about global affairs, diplomacy, and diverse perspectives. My favorite part of MUN? Watching students exchange ideas, grow confident, and leave with broader global understanding.",
    },
    {
      name: "Emerald",
      role: "Secretary",
      image: emerald,
      quote:
        "Hello, I’m Emerald! I’ve always been fascinated by human psychology and behavior, and alongside my love for art and debating, the MUN environment has helped me tie together all my passions as I use my interests to understand diplomacy and emerging global conflicts.",
    },
    {
      name: "Omna Berhanu",
      role: "Treasurer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      quote: "Empowering delegates to find their voice and make an impact.",
    },
    {
      name: "Gelila",
      role: "Public Relations",
      image:
        "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Arsema",
      role: "Public Relations",
      image:
        "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Hemen Daniel",
      role: "Head of Delegate Training",
      image: hemen,
      quote:
        "As Head of Delegate Training, I designed and led training sessions to prepare delegates for conferences. I taught MUN procedures, public speaking, research, resolution writing, and debate strategies while mentoring new members to build confidence and improve their performance. I also organized practice simulations, provided individualized feedback, and helped delegates develop the skills needed to represent their assigned countries effectively.",
      objectPosition: "object-middle",
    },
    {
      name: "Nahom Natnael",
      role: "Head of Delegate Training",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Anan Megersa",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Meet Our Leadership
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            Secretariat & Team
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
            The dedicated team behind AISMUN, working to create an exceptional
            diplomatic experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-xl p-8 editorial-shadow group hover:shadow-2xl transition-all duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 ring-4 ring-champagne/20 group-hover:ring-champagne/40 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${
                    member.objectPosition || "object-center"
                  } group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <h3 className="font-display-lg text-[24px] text-primary text-center mb-1">
                {member.name}
              </h3>
              <p className="font-label-caps text-[12px] text-ambassador-gold text-center mb-4 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="font-body-md text-[16px] text-on-surface-variant text-left italic">
                {member.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecretariatTeam;
