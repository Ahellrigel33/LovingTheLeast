"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookSummaryModal from "@/components/BookSummaryModal";
import { Heart, BookOpen, Sparkles, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const storySection = useIntersectionObserver({ threshold: 0.2 });
  const quoteSection = useIntersectionObserver({ threshold: 0.2 });

  const ctaSection = useIntersectionObserver({ threshold: 0.3 });

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Book summary modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-sky-cream">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="hero-section min-h-screen flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-sky-cream relative overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div className="hero-content max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className={`order-2 lg:order-1 fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal-dark mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                We thought it would only be for a few months.
              </h1>
              <p className={`text-base sm:text-lg text-charcoal mb-6 sm:mb-8 leading-relaxed fade-in fade-in-delay-100 text-center lg:text-left ${heroSection.isVisible ? 'visible' : ''}`}>
                Our lives were irrevocably changed when we said, &quot;Yes&quot; to caring for one child for a short period of time. God had a much bigger plan for us. Through the life of one beautiful boy, our eyes have been opened to the needs of the world&apos;s most vulnerable.
              </p>
              <div className={`flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-charcoal-light mb-6 sm:mb-8 italic handwritten fade-in fade-in-delay-150 ${heroSection.isVisible ? 'visible' : ''}`}>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current animate-pulse flex-shrink-0" />
                <p className="text-center">A journey of loving one of <b>&quot;the least of these&quot;</b></p>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current animate-pulse flex-shrink-0" />
              </div>
              <div className={`space-y-4 fade-in fade-in-delay-200 ${heroSection.isVisible ? 'visible' : ''} text-center lg:text-left`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://a.co/d/01ZCZ06J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-new font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    Read Our Story
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light italic handwritten">A deeply moving memoir</p>
              </div>
              <div className={`text-center lg:text-left mt-8 sm:mt-10 fade-in fade-in-delay-250 ${heroSection.isVisible ? 'visible' : ''}`}>
                <p className="text-sm sm:text-base font-semibold text-gold mb-2">Matthew 25:40</p>
                <blockquote className="text-base sm:text-lg italic text-charcoal leading-relaxed border-l-4 border-gold pl-4">
                  &quot;And the King will answer and say to them, &apos;Assuredly, I say to you, inasmuch as you did it to one of the least of these My brethren, you did it to Me.&apos;&quot;
                </blockquote>
              </div>
            </div>
            <div className={`order-1 lg:order-2 text-center fade-in fade-in-delay-300 ${heroSection.isVisible ? 'visible' : ''} mb-6 lg:mb-0`}>
              <div className="relative inline-block book-glow">
                <div className="relative">
                  <Image
                    src="/only-jesus-knows-cover-front.jpeg"
                    alt="Only Jesus Knows book cover"
                    width={240}
                    height={320}
                    className="rounded-xl book-shadow book-float w-48 sm:w-60 md:w-72 lg:w-80 h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Books and Message Section */}
      <section
        ref={storySection.ref as React.RefObject<HTMLElement>}
        className="story-preview px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="story-content">
          <div className="max-w-6xl mx-auto">
            {/* Opening Quote and Message */}
            <div className={`text-center mb-12 fade-in ${storySection.isVisible ? 'visible' : ''}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-charcoal-dark mb-6">
                &quot;Love in action is a harsh and dreadful thing.&quot;
              </h2>
              <p className="text-lg sm:text-xl text-charcoal mb-2 font-handwritten">~Fyodor Dostoevsky</p>

              <div className="max-w-4xl mx-auto mt-8">
                <p className={`text-base sm:text-lg text-charcoal leading-relaxed mb-4 fade-in fade-in-delay-100 ${storySection.isVisible ? 'visible' : ''}`}>
                  Nearly every community has families and caregivers desperately in need of help with their dearly loved children with intellectual and developmental disabilities. Yet many people do not even know that this need exists.
                </p>
              </div>
            </div>

            {/* Two Books Section */}
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-dark mb-2">This Journey in Two Parts</h3>
              <p className="text-charcoal opacity-80">Exploring love in action from different perspectives</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Book One - Grace According to Gifts */}
              <div className={`fade-in fade-in-delay-300 ${storySection.isVisible ? 'visible' : ''}`}>
                <div className="story-highlight-card relative h-full">
                  <div className="absolute top-3 right-3 bg-sky-blue text-white text-sm font-bold px-3 py-1.5 rounded-full">Book One</div>
                  <div className="text-center p-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <BookOpen className="w-6 h-6 text-sky-blue-dark" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-charcoal-dark">Grace According to Gifts</h3>
                    <div className="mb-4">
                      <span className="bg-sky-blue/10 text-sky-blue-dark text-sm font-semibold px-3 py-1 rounded-full">
                        Available Now
                      </span>
                    </div>
                    <blockquote className="text-sm italic text-charcoal-light mb-6 border-l-2 border-gold pl-4">
                      &quot;We are your servants, Lord. Use us to make a difference in the lives of others.&quot;
                    </blockquote>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-sky-blue hover:bg-sky-blue-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      Read Full Summary
                    </button>
                  </div>
                </div>
              </div>

              {/* Book Two - Only Jesus Knows */}
              <div className={`fade-in fade-in-delay-400 ${storySection.isVisible ? 'visible' : ''}`}>
                <div className="story-highlight-card relative h-full">
                  <div className="absolute top-3 right-3 bg-gold text-white text-sm font-bold px-3 py-1.5 rounded-full">Book Two</div>
                  <div className="text-center p-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <BookOpen className="w-6 h-6 text-gold-dark" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-charcoal-dark">Only Jesus Knows</h3>
                    <div className="mb-4">
                      <span className="bg-gold/20 text-gold-dark text-sm font-semibold px-3 py-1 rounded-full">
                        Available Now
                      </span>
                    </div>
                    <blockquote className="text-sm italic text-charcoal-light mb-6 border-l-2 border-gold pl-4">
                      &quot;Throughout our years with Moise, we were left with questions that had no answers. My response was always the same: &apos;Only Jesus knows.&apos;&quot;
                    </blockquote>
                    <a
                      href="https://a.co/d/01ZCZ06J"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center"
                    >
                      Read Our Story
                    </a>
                  </div>
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
        className="px-4 sm:px-6 py-8 sm:py-12"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #f7f4e8 50%, #fdfcf8 75%, #f0f9ff 100%)',
          minHeight: 'auto'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className={`fade-in ${quoteSection.isVisible ? 'visible' : ''}`}>
            <div
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-orange-200/30 max-w-3xl mx-auto"
              style={{ padding: '1.5rem 2rem' }}
            >
              <div className="text-center">
                <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed italic text-charcoal-dark font-medium">
                  &quot;I couldn&apos;t see how any of it could &apos;work together for good.&apos; All I could see was my son&apos;s suffering... How many times can a human heart break and still survive? Mine broke every day.&quot;
                </blockquote>
              </div>
              <p className="text-sm sm:text-base text-gold-dark font-semibold text-center mt-4 font-handwritten">
                — Karol Holmes, Only Jesus Knows
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Final CTA */}
      <section
        id="contact"
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #4A90A4 0%, #6FB7D6 50%, #B8E0F5 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic fade-in ${ctaSection.isVisible ? 'visible' : ''} text-cream font-semibold`}>
            &quot;I pray that in these pages, you&apos;ll find hope for your own journey and see how God can work in the most unexpected ways.&quot;
          </p>
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm fade-in fade-in-delay-100 ${ctaSection.isVisible ? 'visible' : ''} text-cream-light font-medium`}>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-gold" style={{ color: 'var(--gold)' }} />
              Available Soon
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" style={{ color: 'var(--gold)' }} />
              Inspiring True Story
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-gold" style={{ color: 'var(--gold)' }} />
              Perfect for Gift Giving
            </span>
          </div>
        </div>
      </section>


      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-sky-gold text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Book Summary Modal */}
      <BookSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
