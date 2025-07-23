"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, BookOpen } from "lucide-react";

export default function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-20 opacity-0 scale-95"
      }`}
    >
      <button className="floating-order-btn group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <BookOpen className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Order Now</span>
        <ShoppingCart className="w-5 h-5 relative z-10 animate-bounce" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
        </div>
      </button>
    </div>
  );
}
