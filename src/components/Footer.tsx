import Link from "next/link";
import Image from "next/image";
import { Heart, BookOpen, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
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
                  <div className="text-charcoal text-xs sm:text-sm flex items-center justify-center md:justify-start gap-2 opacity-60">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                    Only Jesus Knows
                    <span className="badge-gradient text-white text-xs px-2 py-1 rounded-full font-bold ml-1">Coming Soon</span>
                  </div>
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
                <li><Link href="/" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">About</Link></li>
                <li><Link href="/resources" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Resources</Link></li>
                <li><Link href="/contact" className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-charcoal-dark mb-3 sm:mb-4 text-sm sm:text-base">Let&apos;s Connect</h4>
              <p className="text-charcoal text-xs sm:text-sm mb-3 sm:mb-4">
                Follow our journey and get in touch
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="text-charcoal hover:text-sky-blue-dark text-xs sm:text-sm transition-colors flex items-center justify-center md:justify-start gap-2 group break-all"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="break-all">Get In Touch</span>
                </Link>
                <div className="flex gap-2 sm:gap-3 justify-center md:justify-start mt-3 sm:mt-4">
                  <Link
                    href="/contact"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                    aria-label="Contact Me"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                  <a
                    href="https://www.instagram.com/karolholmesauthor/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-cream/70 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section with Designer Credit */}
          <div className="border-t border-dove-gray/30 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Designer Credit - Left Side */}
              <div className="flex items-center gap-2 text-charcoal text-xs sm:text-sm">
                <span>Site by:</span>
                <a 
                  href="https://brighteredge.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 hover:opacity-80"
                  aria-label="Visit Brighter Edge Tech website"
                >
                  <Image
                    src="/brighter-edge-tech-logo.png"
                    alt="Brighter Edge Tech"
                    width={128}
                    height={36}
                    className="rounded"
                  />
                </a>
              </div>

              {/* Copyright - Center/Right */}
              <div className="text-center sm:text-right">
                <p className="text-charcoal text-xs sm:text-sm">
                  © 2025 Karol Holmes. All rights reserved. Made with <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current" style={{ color: 'var(--gold)' }} /> and faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
