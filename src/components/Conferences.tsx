import React from 'react';

interface Conference {
  title: string;
  date: string;
  image: string;
  alt: string;
  span: string;
  aspect: string;
  delay?: string;
}

const conferences: Conference[] = [
  {
    title: 'Manila Summit 2026',
    date: 'Spring 2026',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Manila Summit conference hall',
    span: 'md:col-span-7',
    aspect: 'aspect-[16/9]',
  },
  {
    title: 'Jakarta International',
    date: 'Winter 2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    alt: 'Jakarta International delegates',
    span: 'md:col-span-5 md:mt-24',
    aspect: 'aspect-[4/5]',
    delay: '0.2s',
  },
  {
    title: 'New Delhi Delegation',
    date: 'Autumn 2024',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc9638f0?w=1200&q=80',
    alt: 'New Delhi Delegation closing ceremony',
    span: 'md:col-span-12 mt-8',
    aspect: 'aspect-[21/9]',
    delay: '0.3s',
  },
];

const Conferences: React.FC = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[64px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
              Global Reach
            </span>
            <h2 className="font-display-lg text-[40px] md:text-[32px] text-primary leading-tight">
              A curated selection of our most prestigious sessions.
            </h2>
          </div>
          <a
            className="font-label-caps text-[12px] border-b border-primary pb-2 uppercase tracking-widest hover:text-ambassador-gold transition-colors"
            href="javascript:void(0)"
          >
            Explore All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">
          {conferences.map((conf, index) => (
            <div
              key={index}
              className={`reveal ${conf.span} group cursor-pointer`}
              style={{ transitionDelay: conf.delay || '0s' }}
            >
              <div className={`relative overflow-hidden ${conf.aspect} mb-6`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={conf.image}
                  alt={conf.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <p className="font-label-caps text-[12px] text-on-surface-variant mb-2 uppercase">
                {conf.date}
              </p>
              <h4 className="font-display-lg text-[32px] group-hover:text-ambassador-gold transition-colors">
                {conf.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;

