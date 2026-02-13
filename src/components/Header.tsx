"use client";

import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <header
      className={`${isStudyGuide ? 'sticky top-0' : 'fixed top-0'} w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-dove-gray/30"
        : "bg-cream-light/90 backdrop-blur-sm shadow-sm border-b border-dove-gray/20"
        }`}
    >
      <div className="max-w-8xl mx-auto px-6 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Dove Logo"
                width={24}
                height={24}
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-charcoal-dark handwritten whitespace-nowrap leading-none" style={{ color: 'var(--charcoal-dark)' }}>
              Only Jesus Knows
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isStudyGuide ? (
              <>
                <Link href="/" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <Link href="/about" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <Link href="/resources" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <Link href="/podcasts" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  Podcasts
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <Link href="/contact" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <Link href="/study-guide" className="text-charcoal hover:text-sky-blue-dark font-medium transition-all duration-300 relative group">
                  Study Guide
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--gold)' }}></span>
                </Link>
                <a href="https://a.co/d/jldTYKX" target="_blank" rel="noopener noreferrer" className="btn-cta text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Order Book
                </a>
              </>
            ) : (
              <Link
                href="/"
                className="btn-cta text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Back to Home
              </Link>
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
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-6 pb-4 space-y-2">
          {!isStudyGuide ? (
            <>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                About
              </Link>
              <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                Resources
              </Link>
              <Link href="/podcasts" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                Podcasts
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                Contact
              </Link>
              <Link href="/study-guide" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 px-4 text-charcoal hover:text-sky-blue-dark hover:bg-cream-light/50 rounded-lg transition-all duration-200">
                Study Guide
              </Link>
              <a href="https://a.co/d/jldTYKX" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full btn-cta text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mt-3">
                <BookOpen className="w-4 h-4" />
                Order Book
              </a>
            </>
          ) : (
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full btn-cta text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Back to Home
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
