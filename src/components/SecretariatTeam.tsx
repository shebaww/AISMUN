// components/SecretariatTeam.tsx
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const SecretariatTeam: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Meklit Thomas",
      role: "Secretary-General",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote:
        "Welcome to AISMUN. Our goal this season is to deliver an unforgettable, high-caliber conference experience.",
    },
    {
      name: "Ruth Estifanos",
      role: "Deputy Secretary-General",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      quote: "Committed to excellence in diplomacy and delegate development.",
    },
    {
      name: "Emerald",
      role: "Secretary",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      quote:
        "Ensuring every committee runs with precision and professionalism.",
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
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Arsema",
      role: "Public Relations",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Rhodas",
      role: "Head of Delegate Training",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
    },
    {
      name: "Hemen Daniel",
      role: "Head of Delegate Training",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      quote:
        "Creating seamless experiences from registration to closing ceremony.",
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
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-champagne/20 group-hover:ring-champagne/40 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display-lg text-[24px] text-primary text-center mb-1">
                {member.name}
              </h3>
              <p className="font-label-caps text-[12px] text-ambassador-gold text-center mb-4 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="font-body-md text-[16px] text-on-surface-variant text-center italic">
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecretariatTeam;
