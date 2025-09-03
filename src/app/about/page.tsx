"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import { Heart, BookOpen, ChevronUp, Users, Home, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const welcomeSection = useIntersectionObserver({ threshold: 0.2 });
  const familySection = useIntersectionObserver({ threshold: 0.2 });

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
      <div className="heart-decoration" style={{ top: '15%', right: '8%' }}>
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="heart-decoration" style={{ top: '70%', left: '5%' }}>
        <Heart className="w-6 h-6 fill-current" style={{ animationDelay: '2s' }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="min-h-[50vh] flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden hero-texture"
        style={{ marginTop: '64px' }}
      >
        <div className="absolute inset-0 warm-gradient pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className={`fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-current animate-heartbeat" />
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              About Karol
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Wife to Jim, mother of seven amazing children, and passionate advocate for the world's most vulnerable
            </p>
          </div>
        </div>
      </section>

      {/* Scripture Opening */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-br from-sky-blue-light to-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-sky-blue/20">
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-charcoal-dark leading-relaxed italic mb-4">
                "Once our eyes are opened we cannot pretend we do not know what to do. God, who weighs our hearts and keeps our souls knows we know and holds us responsible to act."
              </blockquote>
              <cite className="text-base sm:text-lg font-semibold text-gold-dark not-italic">
                Proverbs 24:12
              </cite>
            </div>
          </div>
        </div>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-radial-gradient(
              circle at 20% 30%,
              transparent 0,
              transparent 40px,
              var(--sky-blue, rgba(135, 206, 235, 0.1)) 40px,
              var(--sky-blue, rgba(135, 206, 235, 0.1)) 80px
            )`,
            backgroundSize: '160px 160px'
          }}></div>
        </div>
      </section>

      {/* Welcome Letter Section */}
      <section
        ref={welcomeSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`fade-in ${welcomeSection.isVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Welcome!</h2>
                  <Sparkles className="w-6 h-6 text-orange-500" />
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full mb-6"></div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm so glad you stopped by. I am already praying for you. Isn't it amazing how, when we pray for someone, we grow to love them? 
                  The moment I wrote the first word of my first book, <em>Grace According to Gifts</em>, I began praying for anyone who would read. 
                  Now I pray for anyone who reads my story or visits me on social media, or here on my website. 
                  I want you to feel welcome and loved by me and by Almighty God.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  I'm Karol ~ My priorities are, first and foremost, a Child of God. Next, I am wife to my amazing husband, Jim. 
                  Then I am mother to seven amazing children. Finally, I am a writer who is passionate about grief, loss, and parenting 
                  children and adults with intellectual and developmental disabilities. I believe firmly in keeping priorities and praying for them in this order.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Right out of high school, I earned a degree in Clinical Laboratory Science where I learned to analyze blood and body fluids 
                  for diagnostic purposes. I worked for thirty years in the medical field. I used to have a bit of a "save the world" mentality. 
                  I wanted to be a missionary in a third-world country. Instead, God brought my mission to me and placed it in my arms.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Jim and I were content with what we considered to be the perfect-sized family after our fourth child was born. 
                  God had a different plan. He brought a tiny baby boy from Haiti who needed someone to care for him. 
                  This child changed the trajectory of our lives as we were thrust into the world of developmental disabilities and medical complexities. 
                  Our eyes were opened to a desperate need. We couldn't pretend we did not know. Later, we adopted two more children with significant needs. 
                  Two of our children are now in heaven.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Because of our experiences with our oldest disabled son, I have become aware of the alarming lack of services and support 
                  for adults with intellectual and developmental disabilities. Once again, I cannot pretend I do not know.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg border-l-4 border-orange-400 my-8">
                  <p className="text-base sm:text-lg leading-relaxed italic text-slate-700 font-medium">
                    We are called to care for "the least of these," those who are poor, vulnerable, and marginalized. 
                    Is there anyone more vulnerable than those who are dependent on others for their most basic needs?
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed">
                  If you are bearing the heavy load of grief, loss, or parenting children with special needs, 
                  it is my prayer that I can walk with you on your journey.
                </p>

                <div className="text-center mt-8 pt-6 border-t border-orange-200">
                  <p className="text-lg font-medium text-slate-700 mb-2">God is good, all the time,</p>
                  <p className="text-lg text-slate-600">With so much love,</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Heart className="w-5 h-5 text-pink-500 fill-current" />
                    <p className="text-xl font-bold text-orange-600 handwritten">Karol</p>
                    <Heart className="w-5 h-5 text-pink-500 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Photo Section - Placeholder for future images */}
      <section
        ref={familySection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 fade-in ${familySection.isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Family</h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Family photos will be added soon, including pictures of our beautiful family and special moments with Moise and Kruz together.
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-8 fade-in fade-in-delay-200 ${familySection.isVisible ? 'visible' : ''}`}>
            {/* Placeholder cards for future family photos */}
            <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-orange-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Family Photo</h4>
              <p className="text-sm text-slate-600">Coming Soon</p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-500 fill-current" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Moise & Kruz</h4>
              <p className="text-sm text-slate-600">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Connect With Me</h3>
          <p className="text-base sm:text-lg text-slate-600 mb-8">
            I'd love to hear from you. Whether you're walking a similar journey or simply want to connect, 
            I'm here to listen and share in your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="btn-primary btn-gradient text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2 justify-center"
            >
              <Heart className="w-5 h-5 fill-current" />
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
