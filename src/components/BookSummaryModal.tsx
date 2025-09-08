"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, BookOpen, ExternalLink } from "lucide-react";

interface BookSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookSummaryModal({ isOpen, onClose }: BookSummaryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-sky-blue-dark" />
            <h2 className="text-xl font-bold text-charcoal-dark">Grace According to Gifts</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] max-w-xs mx-auto">
                <Image
                  src="/grace-according-to-gifts-cover.jpg"
                  alt="Grace According to Gifts book cover"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>

            {/* Book Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-charcoal-dark mb-2">Grace According to Gifts</h3>
                <p className="text-lg font-semibold text-sky-blue-dark mb-4">Book One - Available Now</p>
              </div>

              <div className="space-y-4 text-charcoal leading-relaxed">
                <p>
                  Life was going precisely as planned when Jim and Karol Holmes began praying, &quot;We are your servants, Lord. Use us to make a difference in the lives of others.&quot; In response, God brought something they didn&apos;t expect. All it took was one phone call to set their lives on a path entirely different from the one they had imagined. Suddenly, they were faced with an agonizing decision when God asked them to love one very special child.
                </p>

                <p>
                  In Grace According To Gifts, Karol Glueck Holmes is unflinchingly honest as she takes the reader on an incredible journey of love in action. She and Jim discover that, together, they have a gift that they didn&apos;t know they had and, frankly, didn&apos;t even want. As they answer God&apos;s call for their life, they are thrust into a world of heartache, tragedy, and extraordinary testing of their faith. They asked God to use them to make a difference for others. They never imagined that three little children would lead them and, ultimately, make a radical difference in them.
                </p>

                <p>
                  Wherever you are in your journey through life, Karol&apos;s story will bring hope and cause you to stop and ask, &quot;What does God want for my life?&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="https://a.co/d/jldTYKX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-cta inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  Read on Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
