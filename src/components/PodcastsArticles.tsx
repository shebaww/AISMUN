// components/PodcastsArticles.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ContentItem {
  type: "podcast" | "article";
  title: string;
  description: string;
  image: string;
  link: string;
  duration?: string; // for podcasts
  readTime?: string; // for articles
}

const PodcastsArticles: React.FC = () => {
  const content: ContentItem[] = [
    {
      type: "podcast",
      title: "The USA and Iran Shadow War",
      description:
        "Discussing the Conflict in the Middle East. Can Democracy still prevent a wider war?",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
      link: "/resources/",
      duration: "23 min",
    },
    {
      type: "article",
      title: "The Art of Resolution Writing",
      description:
        "A comprehensive guide to crafting impactful UN resolutions that pass committee.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      link: "https://bestdelegate.com/model-un-made-easy-how-to-write-a-resolution/",
      readTime: "20 min read",
    },
    {
      type: "article",
      title: "From Delegate to Chair",
      description:
        "Tips and insights for transitioning from a delegate to leading your own committee.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      link: "https://bestdelegate.com/chairing-for-beginners-iv-how-to-be-an-excellent-chair-and-the-future-of-chairing/",
      readTime: "20 min read",
    },
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-3 block uppercase tracking-widest">
              Learn More
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary">
              Podcasts & Articles
            </h2>
          </div>
          <Link
            to="/resources"
            className="font-label-caps text-[12px] text-ambassador-gold border-b border-ambassador-gold/30 pb-1 uppercase tracking-widest hover:text-primary hover:border-primary transition-all"
          >
            View All Resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-xl overflow-hidden editorial-shadow hover:shadow-2xl transition-all duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[200px] md:min-h-full"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-wider ${
                        item.type === "podcast"
                          ? "bg-ambassador-gold/20 text-ambassador-gold"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-[20px] text-primary mb-2 group-hover:text-ambassador-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                      {item.duration || item.readTime}
                    </span>
                    <Link
                      to={item.link}
                      className="font-label-caps text-[11px] text-ambassador-gold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {item.type === "podcast" ? "Listen" : "Read"}
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastsArticles;
