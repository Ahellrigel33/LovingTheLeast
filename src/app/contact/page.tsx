"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import { Heart, BookOpen, ChevronUp, Mail, Send, User, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const formSection = useIntersectionObserver({ threshold: 0.2 });

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Loving the Least website');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim());
      
      const mailtoLink = `mailto:karolholmesauthor@gmail.com?subject=${subject}&body=${body}`;
      
      // Open the default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full mb-6"></div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-green-600 fill-current" />
                    <p className="text-green-700 font-medium">
                      Thank you for reaching out! Your default email client should have opened with your message. 
                      If it didn&apos;t, you can email me directly at karolholmesauthor@gmail.com
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg animate-fade-in">
                  <p className="text-red-700 font-medium">
                    There was an issue sending your message. Please try emailing me directly at karolholmesauthor@gmail.com
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="What would you like to talk about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                    placeholder="Share your story, ask questions, or just say hello..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary btn-gradient text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <Heart className="w-4 h-4 fill-current" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-sm text-slate-500">
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
              </form>
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
    </div>
  );
}
