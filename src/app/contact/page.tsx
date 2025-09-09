"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, BookOpen, ChevronUp, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const formSection = useIntersectionObserver({ threshold: 0.2 });

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

  // Initialize Tally script
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script if needed
      const scripts = document.querySelectorAll('script[src="https://tally.so/widgets/embed.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white children-drawing-pattern">
      {/* Subtle emotional accents */}
      <div className="heart-decoration" style={{ top: '20%', right: '5%' }}>
        <Heart className="w-10 h-10 fill-current" />
      </div>
      <div className="heart-decoration" style={{ top: '60%', left: '3%' }}>
        <Heart className="w-8 h-8 fill-current" style={{ animationDelay: '3s' }} />
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
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current animate-heartbeat" />
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Contact Me
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I&apos;d love to hear from you. Whether you&apos;re walking a similar journey, have questions about resources, 
              or simply want to connect, I&apos;m here to listen and share in your story.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`fade-in ${formSection.isVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full mb-6"></div>
              </div>

              {/* Tally Form Embed */}
              <div className="w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/mJydPY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="447" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Contact Me"
                  className="rounded-lg"
                />
              </div>

              <div className="text-center text-sm text-slate-500 mt-6">
                <p>
                  Or email me directly at{' '}
                  <a 
                    href="mailto:karolholmesauthor@gmail.com" 
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    karolholmesauthor@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">I&apos;m Here to Walk With You</h3>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            If you are bearing the heavy load of grief, loss, or parenting children with special needs, 
            it is my prayer that I can walk with you on your journey. Every story matters, and I believe 
            God can use our shared experiences to bring hope and healing.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Resources & Support</h4>
              <p className="text-sm text-slate-600">
                Questions about navigating services for special needs? I&apos;m here to help guide you.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Heart className="w-8 h-8 text-pink-500 fill-current mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Shared Journey</h4>
              <p className="text-sm text-slate-600">
                Walking a similar path? Let&apos;s connect and encourage each other along the way.
              </p>
            </div>
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
      
      <Footer />
    </div>
  );
}
