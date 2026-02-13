"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Heart, Mic, Podcast, ChevronUp, ExternalLink } from "lucide-react";

type PodcastEntry = {
  date: string;
  name: string;
  host: string;
  link: string;
};

const formatDate = (value: string) => {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
};

export default function PodcastsPage() {
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const listSection = useIntersectionObserver({ threshold: 0.15 });
  const [podcasts, setPodcasts] = useState<PodcastEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadPodcasts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/podcasts");

        if (!response.ok) {
          throw new Error("Failed to load podcasts.");
        }

        const data = await response.json();
        if (isMounted) {
          setPodcasts(Array.isArray(data.podcasts) ? data.podcasts : []);
        }
      } catch {
        if (isMounted) {
          setError("We couldn’t load the podcast list right now. Please try again soon.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPodcasts();

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white children-drawing-pattern">
      <div className="heart-decoration" style={{ top: "18%", right: "6%" }}>
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="heart-decoration" style={{ top: "72%", left: "4%" }}>
        <Heart className="w-6 h-6 fill-current" style={{ animationDelay: "2.5s" }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="min-h-[45vh] flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden hero-texture"
        style={{ marginTop: "64px" }}
      >
        <div className="absolute inset-0 warm-gradient pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className={`fade-in ${heroSection.isVisible ? "visible" : ""}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
              <Podcast className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current animate-heartbeat" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Podcast Appearances
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Listen to recent guest conversations, interviews, and stories that spotlight loving the world&apos;s most vulnerable.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast List */}
      <section
        ref={listSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {isLoading && (
              <div className="text-center text-slate-600">Loading the latest podcasts...</div>
            )}

            {!isLoading && error && (
              <div className="text-center text-slate-600">{error}</div>
            )}

            {!isLoading && !error && podcasts.length === 0 && (
              <div className="text-center text-slate-600">No podcast appearances listed yet. Check back soon.</div>
            )}

            {!isLoading && !error && podcasts.map((podcast) => (
              <div
                key={`${podcast.date}-${podcast.name}-${podcast.link}`}
                className="bg-white rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  {podcast.host && (
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-pink-400 px-3 py-1 text-xs font-semibold text-white shadow-sm mb-2">
                      Host: {podcast.host}
                    </span>
                  )}
                  {podcast.name ? (
                    <p className="text-lg sm:text-xl font-semibold text-slate-800">{podcast.name}</p>
                  ) : (
                    <p className="text-lg sm:text-xl font-semibold text-slate-800">{formatDate(podcast.date)}</p>
                  )}
                  {podcast.date && podcast.name && (
                    <p className="text-sm text-slate-500 mt-2">Aired {formatDate(podcast.date)}</p>
                  )}
                </div>
                {podcast.link ? (
                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Listen Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm text-slate-500 italic">Link coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
}
