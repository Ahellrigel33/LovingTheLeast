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
    <div className="min-h-screen bg-cream-light children-drawing-pattern">
      {/* Subtle emotional accents */}
      <div className="heart-decoration-new" style={{ top: '20%', right: '5%' }}>
        <Heart className="w-12 h-12 fill-current" />
      </div>
      <div className="heart-decoration-new" style={{ top: '60%', left: '3%' }}>
        <Heart className="w-8 h-8 fill-current" style={{ animationDelay: '3s' }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="hero-section min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-sky-cream relative overflow-hidden hero-texture paper-texture children-drawing-pattern"
        style={{ marginTop: '64px' }}
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 warm-gradient-new pointer-events-none"></div>

        <div className="hero-content max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className={`order-2 lg:order-1 fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
              <div className={`text-center lg:text-left mb-6 sm:mb-8 fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
                <p className="text-sm sm:text-base font-semibold text-gold mb-2">Matthew 25:40</p>
                <blockquote className="text-base sm:text-lg italic text-charcoal leading-relaxed border-l-4 border-gold pl-4 mb-4">
                  "And the King will answer and say to them, 'Assuredly, I say to you, inasmuch as you did it to one of the least of these My brethren, you did it to Me."
                </blockquote>
              </div>
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal-dark mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                We thought it would only be for a few months.
              </h1>
              <p className={`text-base sm:text-lg text-charcoal mb-6 sm:mb-8 leading-relaxed fade-in fade-in-delay-100 text-center lg:text-left ${heroSection.isVisible ? 'visible' : ''}`}>
                Our lives were irrevocably changed when we said, "Yes" to caring for one child for a short period of time. God had a much bigger plan for us. Through the life of one beautiful boy, our eyes have been opened to the needs of the world's most vulnerable.
              </p>
              <div className={`flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-charcoal-light mb-6 sm:mb-8 italic handwritten fade-in fade-in-delay-150 ${heroSection.isVisible ? 'visible' : ''}`}>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current animate-pulse flex-shrink-0" />
                <p className="text-center">A journey about what &quot;<b>loving the least of these</b>&quot; really means</p>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current animate-pulse flex-shrink-0" />
              </div>
              <div className={`space-y-4 fade-in fade-in-delay-200 ${heroSection.isVisible ? 'visible' : ''} text-center lg:text-left`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-primary-new text-white font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    Read Our Story
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  </button>
                  <button 
                    className="btn-secondary-new font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center gap-2 w-full sm:w-auto justify-center opacity-60 cursor-not-allowed"
                    disabled
                  >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    Study Guide
                    <span className="bg-gradient-gold-sky text-white text-xs px-2 py-1 rounded-full font-bold ml-1">Coming Soon</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light italic handwritten">Available now - A deeply moving memoir</p>
              </div>
            </div>
            <div className={`order-1 lg:order-2 text-center fade-in fade-in-delay-300 ${heroSection.isVisible ? 'visible' : ''} mb-6 lg:mb-0`}>
              <div className="relative inline-block book-glow">
                <div className="relative">
                  <Image
                    src="/grace-according-to-gifts-cover.jpg"
                    alt="Grace According to Gifts book cover - Book One"
                    width={240}
                    height={320}
                    className="rounded-xl book-shadow book-float w-48 sm:w-60 md:w-72 lg:w-80 h-auto"
                    priority
                  />
                  <div className="absolute top-2 left-2 bg-gradient-gold-sky text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                    Book One
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Story Preview */}
      <section
        ref={storySection.ref as React.RefObject<HTMLElement>}
        className="story-preview px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="story-pattern"></div>
        <div className="story-content">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className={`md:col-span-2 story-card fade-in ${storySection.isVisible ? 'visible' : ''}`}>
                <div className="story-accent"></div>
                <h2 className="story-title text-xl sm:text-2xl md:text-3xl font-bold">It Started with a Phone Call...</h2>
                <p className={`story-text text-sm sm:text-base mb-4 fade-in fade-in-delay-100 ${storySection.isVisible ? 'visible' : ''}`}>
                  It&apos;s funny the things you remember so clearly, isn&apos;t it? I can still picture myself standing in the kitchen here in East Peoria when the phone rang that day.
                  Someone I barely knew was asking if we&apos;d ever considered taking in a sick baby for a little while.
                </p>
                <p className={`story-text text-sm sm:text-base fade-in fade-in-delay-200 ${storySection.isVisible ? 'visible' : ''}`}>
                  &quot;A few months? We can do that. How hard could it be?&quot; Looking back now, I almost laugh. We were so naive.
                  Moise wasn&apos;t just a temporary guest—he burrowed his way into our hearts and changed everything.
                </p>
              </div>
              <div className={`text-center md:text-right fade-in fade-in-delay-300 ${storySection.isVisible ? 'visible' : ''} mt-6 md:mt-0`}>
                <div className="story-highlight-card">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">Only Jesus Knows</h3>
                  <p className="text-xs sm:text-sm mb-3 opacity-90">Loving the World&apos;s Most Vulnerable</p>
                  <p className="text-xs italic opacity-80">
                    &quot;Throughout our years with Moise, we were left with questions that had no answers. My response was always the same: &apos;Only Jesus knows.&apos;&quot;
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
        className="quote-section px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="quote-pattern"></div>
        <div className="quote-wrapper">
          <div className="relative z-10 w-full">
            <div className={`quote-card fade-in ${quoteSection.isVisible ? 'visible' : ''} max-w-3xl mx-auto`}>
              <div className="relative px-6 sm:px-8 py-8 sm:py-10">
                <span className="quote-marks quote-mark-start text-4xl sm:text-5xl md:text-6xl">&quot;</span>
                <blockquote className="quote-text text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                  I couldn&apos;t see how any of it could &apos;work together for good.&apos; All I could see was my son&apos;s suffering... How many times can a human heart break and still survive? Mine broke every day.
                </blockquote>
                <span className="quote-marks quote-mark-end text-4xl sm:text-5xl md:text-6xl">&quot;</span>
              </div>
              <p className="quote-author text-sm sm:text-base md:text-lg px-6 sm:px-8 pb-6 sm:pb-8">— Karol Holmes, Only Jesus Knows</p>
            </div>
          </div>
        </div>
      </section>


      {/* About & Book Info */}
      <section
        id="about"
        ref={aboutSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-cream-light to-sky-blue-light flow-connector"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`fade-in ${aboutSection.isVisible ? 'visible' : ''}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-dark mb-4 sm:mb-6">About Karol</h2>
              <div className="space-y-4 text-charcoal text-sm sm:text-base">
                <p className={`fade-in fade-in-delay-100 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  Hi, I&apos;m Karol. I&apos;m a wife to Jim and a mom to our wonderfully chaotic crew of seven. A few years ago, I wrote
                  <em className="text-charcoal-dark"> Grace According to His Gifts</em> to share the beginning of our journey.
                </p>
                <p className={`fade-in fade-in-delay-200 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  But as our life with Moise continued, I knew there was a deeper, harder, and more beautiful story to tell.
                  <strong className="text-charcoal-dark"> Only Jesus Knows</strong> is that story—my attempt to be honest about the struggles
                  and point to the goodness of God who carried us through it all.
                </p>
                <div className={`pt-4 fade-in fade-in-delay-300 ${aboutSection.isVisible ? 'visible' : ''}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-blue-light to-cream rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold fill-current" style={{ color: 'var(--gold)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-dark text-sm sm:text-base">Karol Holmes</p>
                      <p className="text-xs sm:text-sm text-charcoal">Author & Mother of Seven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`text-center fade-in fade-in-delay-200 ${aboutSection.isVisible ? 'visible' : ''} mt-8 lg:mt-0`}>
              <div className="bg-cream p-6 sm:p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                <Image
                  src="/Book Cover.png"
                  alt="Only Jesus Knows book cover"
                  width={240}
                  height={320}
                  className="mx-auto rounded-lg shadow-lg mb-4 sm:mb-6 w-48 sm:w-60 h-auto"
                />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal-dark mb-2">Only Jesus Knows</h3>
                <p className="text-sm sm:text-base text-charcoal mb-4 sm:mb-6">A story of unexpected love, profound loss, and unwavering faith</p>
                <button className="btn-primary-new w-full text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Order Your Copy Today
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-heartbeat text-gold" style={{ color: 'var(--gold)' }} />
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
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-r from-sky-blue to-sky-blue-dark text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <p className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic opacity-90 fade-in ${ctaSection.isVisible ? 'visible' : ''}`}>
            &quot;I pray that in these pages, you&apos;ll find hope for your own journey and see how God can work in the most unexpected ways.&quot;
          </p>
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm fade-in fade-in-delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Available Now
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Inspiring True Story
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-gold" style={{ color: 'var(--gold)' }} />
              Perfect for Gift Giving
            </span>
          </div>
        </div>
      </section>


      {/* Footer with warmer design */}
      <footer className="relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-sky-blue-light to-cream-light"></div>

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-radial-gradient(
              circle at 0% 0%,
              transparent 0,
              transparent 40px,
              var(--gold-light, rgba(218, 165, 32, 0.1)) 40px,
              var(--gold-light, rgba(218, 165, 32, 0.1)) 80px
            )`,
            backgroundSize: '160px 160px'
          }}></div>
        </div>

        <div className="relative z-10 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* About Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-charcoal-dark mb-3 sm:mb-4 text-sm sm:text-base">About Karol</h4>
                <p className="text-charcoal text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Author, mother of seven, and passionate advocate for vulnerable children.
                  Sharing stories of faith, hope, and unexpected grace.
                </p>
              </div>

              {/* Books Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-charcoal-dark mb-3 sm:mb-4 text-sm sm:text-base">My Books</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      Only Jesus Knows
                    </a>
                  </li>
                  <li>
                    <a href="https://a.co/d/jldTYKX" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      Grace According to His Gifts
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-charcoal-dark mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Home</a></li>
                  <li><a href="#about" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">About</a></li>
                  <li><a href="#testimonials" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-charcoal-dark mb-3 sm:mb-4 text-sm sm:text-base">Let&apos;s Connect</h4>
                <p className="text-charcoal text-xs sm:text-sm mb-3 sm:mb-4">
                  Follow our journey and get in touch
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:karol@lovingtheleast.com"
                    className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors flex items-center justify-center md:justify-start gap-2 group break-all"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="break-all">karol@lovingtheleast.com</span>
                  </a>
                  <div className="flex gap-2 sm:gap-3 justify-center md:justify-start mt-3 sm:mt-4">
                    <a
                      href="mailto:karol@lovingtheleast.com"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-sky-blue hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-sky-blue-dark hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-dove-gray/30 pt-6 sm:pt-8">
              <div className="text-center">
                <p className="text-charcoal text-xs sm:text-sm">
                  © 2025 Karol Holmes. All rights reserved. Made with <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current" style={{ color: 'var(--gold)' }} /> and faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-sky-gold text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}