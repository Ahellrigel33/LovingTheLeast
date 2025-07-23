"use client";

import { useEffect, useState } from "react";
import { Heart, BookOpen, Menu, X } from "lucide-react";

export default function Header() {
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-amber-50/95 via-orange-50/95 to-rose-50/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-amber-50/90 via-white/90 to-rose-50/90 backdrop-blur-sm shadow-sm"
      }`}
    >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <Heart className="w-3 h-3 text-pink-500 fill-current absolute -top-1 -right-1 animate-heartbeat" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Only Jesus Knows
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-300 relative group"
              >
                About Karol
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Order Book
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
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
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 px-4 text-slate-700 hover:text-orange-600 hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 px-4 text-slate-700 hover:text-orange-600 hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              About Karol
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 px-4 text-slate-700 hover:text-orange-600 hover:bg-white/50 rounded-lg transition-all duration-200"
            >
              Contact
            </button>
            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mt-3">
              <BookOpen className="w-4 h-4" />
              Order Book
            </button>
          </nav>
        </div>
    </header>
  );
}
