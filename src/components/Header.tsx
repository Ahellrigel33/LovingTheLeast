"use client";

import { useEffect, useState } from "react";
import { Heart, BookOpen, Menu, X } from "lucide-react";

interface HeaderProps {
  isStudyGuide?: boolean;
}

export default function Header({ isStudyGuide = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`${isStudyGuide ? 'sticky top-0' : 'fixed'} w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-dove-gray/30"
          : "bg-cream-light/90 backdrop-blur-sm shadow-sm border-b border-dove-gray/20"
      }`}
    >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <BookOpen className="w-6 h-6 text-sky-blue-dark" style={{ color: 'var(--sky-blue-dark)' }} />
                <Heart className="w-3 h-3 text-gold fill-current absolute -top-1 -right-1 animate-heartbeat" style={{ color: 'var(--gold)' }} />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-charcoal-dark" style={{ color: 'var(--charcoal-dark)' }}>
                Only Jesus Knows
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {!isStudyGuide ? (
                <>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                  </button>
                  <button
                    onClick={() => window.location.href = '/about'}
                    className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                  </button>
                  <button
                    onClick={() => window.location.href = '/resources'}
                    className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group"
                  >
                    Resources
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                  </button>
                  <div className="relative group">
                    <button
                      className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group flex items-center gap-2 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      Study Guide
                      <span className="bg-gradient-gold-sky text-white text-xs px-2 py-1 rounded-full font-bold">Coming Soon</span>
                    </button>
                  </div>
                  <button className="btn-primary-new text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Order Book
                  </button>
                </>
              ) : (
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-primary-new text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Back to Home
              </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-cream/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 pb-4 space-y-2">
            {!isStudyGuide ? (
              <>
                <button
                  onClick={() => {window.location.href = '/'; setIsMobileMenuOpen(false);}}
                  className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => {window.location.href = '/about'; setIsMobileMenuOpen(false);}}
                  className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => {window.location.href = '/resources'; setIsMobileMenuOpen(false);}}
                  className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200"
                >
                  Resources
                </button>
                <button
                  onClick={() => {window.location.href = '/contact'; setIsMobileMenuOpen(false);}}
                  className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200"
                >
                  Contact
                </button>
                <div className="py-2 px-4 text-dove-gray rounded-lg flex items-center justify-between opacity-50">
                  <span>Study Guide</span>
                  <span className="bg-gradient-gold-sky text-white text-xs px-2 py-1 rounded-full font-bold">Coming Soon</span>
                </div>
                <button className="w-full btn-primary-new text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mt-3">
                  <BookOpen className="w-4 h-4" />
                  Order Book
                </button>
              </>
            ) : (
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full btn-primary-new text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Back to Home
              </button>
            )}
          </nav>
        </div>
    </header>
  );
}
