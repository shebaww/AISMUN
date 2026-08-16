// components/Resources.tsx
import React, { useState, useRef } from "react";
import podcast1 from "../assets/podcasts/MUN podcast.aac";

interface Podcast {
  id: string;
  title: string;
  description: string;
  host: string;
  duration: string;
  date: string;
  image: string;
  audioUrl: string;
  tags: string[];
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  tags: string[];
}

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "podcasts" | "articles">(
    "all",
  );
  const [playingPodcast, setPlayingPodcast] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const podcasts: Podcast[] = [
    {
      id: "podcast-1",
      title: "The USA and Iran Shadow War",
      description:
        "Discussing the Conflict in the Middle East. Can Democracy still prevent a wider war?",
      host: "AISMUN Team",
      duration: "23 min",
      date: "August 2026",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
      audioUrl: podcast1,
      tags: ["Middle East", "Geopolitics", "Conflict Resolution"],
    },
  ];

  const articles: Article[] = [
    // Your articles
    {
      id: "article-1",
      title: "The Art of Resolution Writing",
      excerpt:
        "A comprehensive guide to crafting impactful UN resolutions that pass committee.",
      author: "Best Delegate",
      date: "2024",
      readTime: "20 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      link: "https://bestdelegate.com/model-un-made-easy-how-to-write-a-resolution/",
      tags: ["Writing", "Resolutions", "Strategy"],
    },
    {
      id: "article-2",
      title: "From Delegate to Chair",
      excerpt:
        "Tips and insights for transitioning from a delegate to leading your own committee.",
      author: "Best Delegate",
      date: "2024",
      readTime: "20 min read",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      link: "https://bestdelegate.com/chairing-for-beginners-iv-how-to-be-an-excellent-chair-and-the-future-of-chairing/",
      tags: ["Leadership", "Chairing", "Mentorship"],
    },
  ];

  const filteredPodcasts =
    activeTab === "all" || activeTab === "podcasts" ? podcasts : [];
  const filteredArticles =
    activeTab === "all" || activeTab === "articles" ? articles : [];

  const togglePlay = (podcastId: string) => {
    if (playingPodcast === podcastId) {
      audioRefs.current[podcastId]?.pause();
      setPlayingPodcast(null);
    } else {
      // Pause any other playing podcast
      Object.keys(audioRefs.current).forEach((key) => {
        if (key !== podcastId && audioRefs.current[key]) {
          audioRefs.current[key]?.pause();
        }
      });
      audioRefs.current[podcastId]?.play();
      setPlayingPodcast(podcastId);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
            Resources
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-6">
            Podcasts & Articles
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
            Expand your MUN knowledge with our original podcast series and
            in-depth articles. All content is free and open to all delegates.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-label-caps text-[11px] uppercase tracking-wider transition-all ${
              activeTab === "all"
                ? "bg-primary text-white shadow-lg"
                : "border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("podcasts")}
            className={`px-6 py-2 rounded-full font-label-caps text-[11px] uppercase tracking-wider transition-all ${
              activeTab === "podcasts"
                ? "bg-primary text-white shadow-lg"
                : "border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            Podcasts
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-6 py-2 rounded-full font-label-caps text-[11px] uppercase tracking-wider transition-all ${
              activeTab === "articles"
                ? "bg-primary text-white shadow-lg"
                : "border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            Articles
          </button>
        </div>

        {/* Podcasts Section */}
        {(activeTab === "all" || activeTab === "podcasts") && (
          <div className="mb-16">
            <h2 className="font-display-lg text-[28px] text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-ambassador-gold">
                mic
              </span>
              Podcasts
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {filteredPodcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-white rounded-xl overflow-hidden editorial-shadow hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 relative">
                      <img
                        src={podcast.image}
                        alt={podcast.title}
                        className="w-full h-full object-cover min-h-[200px] md:min-h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-label-caps bg-ambassador-gold/20 text-ambassador-gold uppercase tracking-wider">
                          Podcast
                        </span>
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {podcast.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-label-caps text-[9px] bg-ambassador-gold/10 text-ambassador-gold px-3 py-1 rounded-full uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display-lg text-[22px] text-primary mb-1 group-hover:text-ambassador-gold transition-colors">
                        {podcast.title}
                      </h3>
                      <p className="font-label-caps text-[11px] text-ambassador-gold uppercase tracking-wider mb-2">
                        Hosted by {podcast.host} • {podcast.date} •{" "}
                        {podcast.duration}
                      </p>
                      <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed mb-4">
                        {podcast.description}
                      </p>

                      {/* Audio Player */}
                      <div className="bg-surface-variant/20 rounded-lg p-3 flex items-center gap-4">
                        <button
                          onClick={() => togglePlay(podcast.id)}
                          className="w-10 h-10 bg-ambassador-gold text-white rounded-full flex items-center justify-center hover:bg-deep-navy transition-colors flex-shrink-0"
                        >
                          <span className="material-symbols-outlined text-[24px]">
                            {playingPodcast === podcast.id
                              ? "pause"
                              : "play_arrow"}
                          </span>
                        </button>
                        <div className="flex-1 min-w-0">
                          <audio
                            ref={(el) => {
                              audioRefs.current[podcast.id] = el;
                            }}
                            controls
                            className="w-full h-8"
                            src={podcast.audioUrl}
                            onPlay={() => setPlayingPodcast(podcast.id)}
                            onPause={() => setPlayingPodcast(null)}
                            onEnded={() => setPlayingPodcast(null)}
                          >
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant/60 flex-shrink-0">
                          {podcast.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Articles Section */}
        {(activeTab === "all" || activeTab === "articles") && (
          <div>
            <h2 className="font-display-lg text-[28px] text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-ambassador-gold">
                article
              </span>
              Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden editorial-shadow hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-label-caps text-[9px] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[12px] text-on-surface-variant/60 mb-2">
                      <span className="font-label-caps uppercase tracking-wider">
                        {article.author}
                      </span>
                      <span>•</span>
                      <span className="font-label-caps uppercase tracking-wider">
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="font-label-caps uppercase tracking-wider">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display-lg text-[20px] text-primary mb-2 group-hover:text-ambassador-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-caps text-[11px] text-ambassador-gold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                    >
                      Read Full Article
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredPodcasts.length === 0 && filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body-lg text-[18px] text-on-surface-variant">
              No resources found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
