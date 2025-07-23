"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Calendar, Heart, Home, Star, BookOpen } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="timeline-container py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
        
        {events.map((event, index) => {
          const observer = useIntersectionObserver({ threshold: 0.3 });
          const isLeft = index % 2 === 0;
          
          return (
            <div
              key={index}
              ref={observer.ref as React.RefObject<HTMLDivElement>}
              className={`timeline-event relative flex items-center justify-center mb-12 fade-in ${
                observer.isVisible ? 'visible' : ''
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                <div className={`timeline-card ${event.highlight ? 'timeline-card-highlight' : ''}`}>
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                    {isLeft && event.icon}
                    <span className="text-sm font-semibold text-slate-500">{event.date}</span>
                    {!isLeft && event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
              
              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full z-10 timeline-dot">
                {event.highlight && (
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Default timeline events for the story
export const storyTimelineEvents: TimelineEvent[] = [
  {
    date: "Spring 2018",
    title: "The Phone Call",
    description: "A simple request to help a sick baby from Haiti for 'just a few months' changed everything.",
    icon: <Calendar className="w-4 h-4 text-blue-500" />,
  },
  {
    date: "Summer 2018",
    title: "First Meeting",
    description: "At the airport, tiny Moise was placed in my arms. Fear mixed with purpose as we began our journey.",
    icon: <Heart className="w-4 h-4 text-pink-500" />,
    highlight: true,
  },
  {
    date: "2018-2020",
    title: "Growing Love",
    description: "What started as temporary care blossomed into deep family bonds. Moise became our son in every way that mattered.",
    icon: <Home className="w-4 h-4 text-green-500" />,
  },
  {
    date: "2020-2022",
    title: "Challenges & Grace",
    description: "Through medical struggles and uncertainties, we learned that love doesn't always need answers—only faith.",
    icon: <Star className="w-4 h-4 text-yellow-500" />,
  },
  {
    date: "2023",
    title: "Sharing Our Story",
    description: "Writing 'Only Jesus Knows' to honor Moise's life and share how God works through the most vulnerable.",
    icon: <BookOpen className="w-4 h-4 text-purple-500" />,
    highlight: true,
  },
];
