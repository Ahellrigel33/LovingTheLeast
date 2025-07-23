"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import { Heart, BookOpen, Sparkles, ChevronUp, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const storySection = useIntersectionObserver({ threshold: 0.2 });
  const quoteSection = useIntersectionObserver({ threshold: 0.2 });
  const aboutSection = useIntersectionObserver({ threshold: 0.2 });
  const ctaSection = useIntersectionObserver({ threshold: 0.3 });

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen bg-white children-drawing-pattern">
      {/* Subtle emotional accents */}
      <div className="heart-decoration" style={{ top: '20%', right: '5%' }}>
        <Heart className="w-12 h-12 fill-current" />
      </div>
      <div className="heart-decoration" style={{ top: '60%', left: '3%' }}>
        <Heart className="w-8 h-8 fill-current" style={{ animationDelay: '3s' }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="hero-section min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center px-6 py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden hero-texture paper-texture children-drawing-pattern"
        style={{ marginTop: '64px' }}
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 warm-gradient pointer-events-none"></div>

        <div className="hero-content max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                We thought it would only be for a few months.
              </h1>
              <p className={`text-lg text-slate-600 mb-8 leading-relaxed fade-in fade-in-delay-100 ${heroSection.isVisible ? 'visible' : ''}`}>
                When we said "yes" to a sick baby from Haiti, holding onto the hope that it was just for a little while, our lives took a turn we never saw coming.
                This is our story—the story of Moise, our son, and how a short-term commitment changed our family forever.
              </p>
              <div className={`flex items-center gap-2 text-base text-slate-500 mb-8 italic handwritten fade-in fade-in-delay-150 ${heroSection.isVisible ? 'visible' : ''}`}>
                <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
                <p>A journey to understand what "<b>loving the least of these</b>" really means</p>
                <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
              </div>
              <div className={`space-y-4 fade-in fade-in-delay-200 ${heroSection.isVisible ? 'visible' : ''}`}>
                <button className="btn-primary btn-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Read Our Story
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </button>
                <p className="text-sm text-slate-500 italic handwritten">Available now - A deeply moving memoir</p>
              </div>
            </div>
            <div className={`text-center fade-in fade-in-delay-300 ${heroSection.isVisible ? 'visible' : ''}`}>
              <div className="relative inline-block book-glow">
                <Image
                  src="/Book Cover.png"
                  alt="Only Jesus Knows book cover"
                  width={320}
                  height={427}
                  className="rounded-xl book-shadow book-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Story Preview */}
      <section
        ref={storySection.ref as React.RefObject<HTMLElement>}
        className="story-preview"
      >
        <div className="story-pattern"></div>
        <div className="story-content">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`md:col-span-2 story-card fade-in ${storySection.isVisible ? 'visible' : ''}`}>
                <div className="story-accent"></div>
                <h2 className="story-title text-2xl md:text-3xl font-bold">It Started with a Phone Call...</h2>
                <p className={`story-text mb-4 fade-in fade-in-delay-100 ${storySection.isVisible ? 'visible' : ''}`}>
                  It's funny the things you remember so clearly, isn't it? I can still picture myself standing in the kitchen here in East Peoria when the phone rang that day.
                  Someone I barely knew was asking if we'd ever considered taking in a sick baby for a little while.
                </p>
                <p className={`story-text fade-in fade-in-delay-200 ${storySection.isVisible ? 'visible' : ''}`}>
                  "A few months? We can do that. How hard could it be?" Looking back now, I almost laugh. We were so naive.
                  Moise wasn't just a temporary guest—he burrowed his way into our hearts and changed everything.
                </p>
              </div>
              <div className={`text-center md:text-right fade-in fade-in-delay-300 ${storySection.isVisible ? 'visible' : ''}`}>
                <div className="story-highlight-card">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Only Jesus Knows</h3>
                  <p className="text-sm mb-3 opacity-90">Loving the World's Most Vulnerable</p>
                  <p className="text-xs italic opacity-80">
                    "Throughout our years with Moise, we were left with questions that had no answers. My response was always the same: 'Only Jesus knows.'"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Quote */}
      <section
        id="quote-section"
        ref={quoteSection.ref as React.RefObject<HTMLElement>}
        className="quote-section"
      >
        <div className="quote-pattern"></div>
        <div className="quote-wrapper">
          <div className="relative z-10 w-full">
            <div className={`quote-card fade-in ${quoteSection.isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <span className="quote-marks quote-mark-start">"</span>
                <blockquote className="quote-text">
                  I couldn’t see how any of it could 'work together for good.' All I could see was my son’s suffering... How many times can a human heart break and still survive? Mine broke every day.
                </blockquote>
                <span className="quote-marks quote-mark-end">"</span>
              </div>
              <p className="quote-author">— Karol Holmes, Only Jesus Knows</p>
            </div>
          </div>
        </div>
      </section>


      {/* About & Book Info */}
      <section
        id="about"
        ref={aboutSection.ref as React.RefObject<HTMLElement>}
        className="py-16 lg:py-24 px-6 bg-gradient-to-r from-slate-50 to-blue-50 flow-connector"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in ${aboutSection.isVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Karol</h2>
              <div className="space-y-4 text-slate-600">
                <p className={`fade-in fade-in-delay-100 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  Hi, I'm Karol. I'm a wife to Jim and a mom to our wonderfully chaotic crew of six. A few years ago, I wrote
                  <em className="text-slate-700"> Grace According to His Gifts</em> to share the beginning of our journey.
                </p>
                <p className={`fade-in fade-in-delay-200 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  But as our life with Moise continued, I knew there was a deeper, harder, and more beautiful story to tell.
                  <strong className="text-slate-700">Only Jesus Knows</strong> is that story—my attempt to be honest about the struggles
                  and point to the goodness of God who carried us through it all.
                </p>
                <div className={`pt-4 fade-in fade-in-delay-300 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-pink-500 fill-current" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Karol Holmes</p>
                      <p className="text-sm text-slate-500">Author & Mother of Six</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`text-center fade-in fade-in-delay-200 ${aboutSection.isVisible ? 'visible' : ''}`}>
              <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                <Image
                  src="/Book Cover.png"
                  alt="Only Jesus Knows book cover"
                  width={240}
                  height={320}
                  className="mx-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Only Jesus Knows</h3>
                <p className="text-slate-600 mb-6">A story of unexpected love, profound loss, and unwavering faith</p>
                <button className="btn-primary btn-gradient w-full text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Order Your Copy Today
                  <Heart className="w-4 h-4 fill-current animate-heartbeat" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section
        id="contact"
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className="py-12 lg:py-16 px-6 bg-blue-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <p className={`text-lg md:text-xl mb-6 italic opacity-90 fade-in ${ctaSection.isVisible ? 'visible' : ''}`}>
            "I pray that in these pages, you'll find hope for your own journey and see how God can work in the most unexpected ways."
          </p>
          <div className={`flex justify-center space-x-6 text-sm fade-in fade-in-delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}>
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Available Now
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Inspiring True Story
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 fill-current" />
              Perfect for Gift Giving
            </span>
          </div>
        </div>
      </section>


      {/* Footer with warmer design */}
      <footer className="relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-radial-gradient(
              circle at 0% 0%,
              transparent 0,
              transparent 40px,
              rgba(251, 146, 60, 0.1) 40px,
              rgba(251, 146, 60, 0.1) 80px
            )`,
            backgroundSize: '160px 160px'
          }}></div>
        </div>

        <div className="relative z-10 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* About Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-slate-800 mb-4">About Karol</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Author, mother of six, and passionate advocate for vulnerable children.
                  Sharing stories of faith, hope, and unexpected grace.
                </p>
              </div>

              {/* Books Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-slate-800 mb-4">My Books</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-slate-600 hover:text-orange-600 text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
                      <BookOpen className="w-4 h-4" />
                      Only Jesus Knows
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-600 hover:text-orange-600 text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
                      <BookOpen className="w-4 h-4" />
                      Grace According to His Gifts
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-slate-800 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Home</a></li>
                  <li><a href="#about" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">About</a></li>
                  <li><a href="#testimonials" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-slate-800 mb-4">Let's Connect</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Follow our journey and get in touch
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:karol@lovingtheleast.com"
                    className="text-slate-600 hover:text-orange-600 text-sm transition-colors flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    karol@lovingtheleast.com
                  </a>
                  <div className="flex gap-3 justify-center md:justify-start mt-4">
                    <a
                      href="mailto:karol@lovingtheleast.com"
                      className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-orange-200 pt-8">
              <div className="text-center">
                <p className="text-slate-600 text-sm">
                  © 2025 Karol Holmes. All rights reserved. Made with <Heart className="inline-block w-4 h-4 text-pink-500 fill-current" /> and faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}