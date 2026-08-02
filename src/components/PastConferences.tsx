// components/PastConferences.tsx
import React from "react";
// Import actual conference images
import conference2025 from "../assets/AIS UNESCO MUN/photo_2026-07-23_16-29-16.jpg";
import conference2024 from "../assets/AIS UNESCO MUN/photo_2026-07-23_16-29-19.jpg";

// Import gallery images
import gallery1 from "../assets/AIS UNESCO MUN/IMG_20260425_231834_731.jpg";
import gallery2 from "../assets/AIS UNESCO MUN/IMG_20260425_231834_761.jpg";
import gallery3 from "../assets/AIS UNESCO MUN/IMG_20260425_231834_946.jpg";
import gallery4 from "../assets/AIS UNESCO MUN/IMG_20260425_231835_003.jpg";
import gallery5 from "../assets/AIS UNESCO MUN/IMG_20260425_231835_067.jpg";
import gallery6 from "../assets/AIS UNESCO MUN/IMG_20260425_231835_384.jpg";
import gallery7 from "../assets/AIS UNESCO MUN/IMG_20260425_231835_396.jpg";
import gallery8 from "../assets/AIS UNESCO MUN/IMG_20260425_231844_587.jpg";

interface ConferenceYear {
  year: string;
  location: string;
  image: string;
  delegates: number;
  committees: number;
  highlight: string;
}

const PastConferences: React.FC = () => {
  const conferences: ConferenceYear[] = [
    {
      year: "2026",
      location: "UNESCO AISMUN",
      image: conference2025,
      delegates: 120,
      committees: 5,
      highlight: "UNESCO AISMUN 2026 - 'Navigating Global Fractures'",
    },
    {
      year: "2025",
      location: "AISMUN 2025",
      image: conference2024,
      delegates: 50,
      committees: 5,
      highlight: "AISMUN 2025 - 'The Era of Digital Sovereignty'",
    },
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Our Legacy
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            Past Conferences & Gallery
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conferences.map((conf, index) => (
            <div
              key={index}
              className="reveal group overflow-hidden rounded-2xl editorial-shadow"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={conf.image}
                  alt={`AISMUN ${conf.year} in ${conf.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="font-display-lg text-[48px] block">
                    {conf.year}
                  </span>
                  <span className="font-body-lg text-[18px]">
                    {conf.location}
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="font-body-md text-[16px] text-on-surface-variant mb-4">
                  {conf.highlight}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-6">
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                        Delegates
                      </p>
                      <p className="font-display-lg text-[24px] text-primary">
                        {conf.delegates}+
                      </p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                        Committees
                      </p>
                      <p className="font-display-lg text-[24px] text-primary">
                        {conf.committees}
                      </p>
                    </div>
                  </div>
                  <button className="text-ambassador-gold hover:text-primary transition-colors font-label-caps text-[12px] uppercase tracking-wider">
                    View Gallery →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid with Real Images */}
        <div className="mt-16">
          <h3 className="font-display-lg text-[28px] text-primary text-center mb-8">
            Conference Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={image}
                  alt={`Conference moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastConferences;
