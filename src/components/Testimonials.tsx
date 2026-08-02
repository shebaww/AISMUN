// components/Testimonials.tsx
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  country: string;
  image: string;
  delay: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I'm so happy to have met all the members of AISMUN. Who would have known that from this conference I met my new family!",
    name: "Kidus Leul",
    country: "Ethiopia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDpUS_eYwiSU6h18KX4OTfDSWuWj8RyOe_uMlTMLN3Q&s=10",
    delay: "0s",
  },
  {
    quote:
      "Meeting people from around the world with the same passion and eagerness as yours is perhaps one of the best experiences.",
    name: "Girum Hayle",
    country: "Ethiopia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufg1VKBAhw8uiSYpJiDh2UZeQHrZQVUNs0JDwDTH7EQ&s=10",
    delay: "0.1s",
  },
  {
    quote:
      "This is my first MUN conference where I have gained a lot of new experience and met people who are smart and kind.",
    name: "Natnael Gulilat",
    country: "United States",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4zAl9bs1KnwLYcLpnQySRigfA79NUNEWVP_W-MunBQ&s",
    delay: "0.2s",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Voices of Impact
          </span>
          <h2 className="font-display-lg text-[40px] md:text-[56px] text-primary">
            Delegates' Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal bg-white p-8 rounded-xl editorial-shadow group hover:shadow-2xl transition-all duration-300"
              style={{ transitionDelay: testimonial.delay }}
            >
              <span className="text-6xl text-ambassador-gold/10 absolute font-serif">
                "
              </span>
              <p className="font-body-lg text-[18px] italic text-primary/80 mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-variant rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <p className="font-title-lg text-[20px] text-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
