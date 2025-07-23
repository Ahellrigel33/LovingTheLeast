"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  highlight?: boolean;
}

interface TestimonialCardsProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function TestimonialCards({ testimonials, title = "What Readers Are Saying" }: TestimonialCardsProps) {
  const observer = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.1) 35px, rgba(59, 130, 246, 0.1) 70px)`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          {title}
        </h2>
        
        <div 
          ref={observer.ref as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`testimonial-card ${testimonial.highlight ? 'testimonial-highlight' : ''} fade-in fade-in-delay-${index * 100} ${
                  observer.isVisible ? 'visible' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50 flex-shrink-0" />
                  <div className="flex-1">
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              testimonial.rating !== undefined && i < testimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-slate-700 leading-relaxed italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sample testimonials
export const sampleTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Mother of Three",
    content: "This book touched my heart in ways I never expected. Karol's honesty about the struggles and joys of caring for Moise reminded me that love doesn't need to be perfect to be powerful.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Pastor Michael Chen",
    role: "Community Church Leader",
    content: "A beautiful testament to faith in action. Karol's story challenges us to see the vulnerable among us not as burdens, but as blessings that can transform our hearts.",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    content: "I couldn't put this book down. It's raw, real, and ultimately hopeful. Every parent should read this story of unconditional love and surrender.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Foster Parent",
    content: "As someone who has walked a similar path, Karol's words resonated deeply. This book gives voice to the complex emotions of loving a child you might lose.",
    rating: 5,
  },
  {
    name: "Rebecca Smith",
    content: "Only Jesus Knows is more than a memoir—it's a call to action. It challenged me to ask: How can I love the vulnerable in my own community?",
    rating: 5,
    highlight: true,
  },
  {
    name: "James Wilson",
    role: "Book Club Coordinator",
    content: "Our entire book club was moved to tears. Karol's vulnerability in sharing both the beautiful and difficult moments makes this a must-read.",
    rating: 5,
  },
];
