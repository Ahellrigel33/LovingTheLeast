"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import { Heart, BookOpen, ChevronUp, ExternalLink, Clock, Users, FileText, Shield, GraduationCap, Building, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Resources() {
  // Intersection observers for fade-in animations
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
  const timelineSection = useIntersectionObserver({ threshold: 0.2 });
  const resourcesSection = useIntersectionObserver({ threshold: 0.2 });

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
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current animate-heartbeat" />
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Resources
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              If you have a child with intellectual and/or developmental disabilities (IDD), it can be overwhelming to know where to turn for help and support. 
              I'm here to help. Below are resources specifically for those residing in Illinois, but every state has resources; we just need to figure out how to access them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 fade-in ${timelineSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Timeline of Important Steps</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Below is a timeline of important steps to take as your child grows to adulthood, followed by helpful resources to guide you throughout your child's life.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-400 hidden sm:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12">
              
              {/* Birth to 3 */}
              <div className={`relative flex items-start gap-6 fade-in ${timelineSection.isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Birth to 3 Years</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Early Intervention</h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    If you have questions or concerns about your child's development, speak to your child's physician. 
                    Ask him/her to make a referral for an EI assessment.
                  </p>
                </div>
              </div>

              {/* Age 3 or Kindergarten */}
              <div className={`relative flex items-start gap-6 fade-in fade-in-delay-100 ${timelineSection.isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Age 3 or Kindergarten</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Early Childhood Education</h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    If your child is in EI, they will transition to ECE. If they are not in EI but you have concerns, 
                    contact your child's physician. You can also reach out to your local school district for an ECE screening.
                  </p>
                </div>
              </div>

              {/* Kindergarten and beyond */}
              <div className={`relative flex items-start gap-6 fade-in fade-in-delay-200 ${timelineSection.isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Kindergarten & Beyond</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Special Education</h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Every child, regardless of disability, has a legal right to education and services through their local school district. 
                    Contact your school district or ISBE.
                  </p>
                </div>
              </div>

              {/* Age 7 */}
              <div className={`relative flex items-start gap-6 fade-in fade-in-delay-300 ${timelineSection.isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Age 7</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">PUNS List</h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    When your child turns seven years old, it is important to have them placed on the PUNS list. 
                    The PUNS list allows families to have access to various services as your child grows and transitions out of the school system.
                  </p>
                </div>
              </div>

              {/* Age 17 */}
              <div className={`relative flex items-start gap-6 fade-in fade-in-delay-400 ${timelineSection.isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Age 17</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Legal Guardianship</h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    After your child turns seventeen years old, you will need to begin taking steps to obtain legal guardianship of them. 
                    It is vitally important that you be appointed as your child's legal guardian on or soon after their eighteenth birthday.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Legal Planning Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">Legal Planning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Legal Will</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                As with any child, a Legal Will and Trust should be set up at birth. A Legal Will allows you to appoint someone 
                you trust to act as your child's guardian in the unfortunate event of your death or if you are otherwise incapacitated.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Special Needs Trust</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                A special needs trust can be set up at the same time as your legal will. Once your child is eligible for SSI or disability, 
                they are allowed no more than two thousand dollars in their name. A special needs trust allows a certain percentage of your 
                assets to be set aside for your child's use and managed by a designated adult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Directory */}
      <section
        ref={resourcesSection.ref as React.RefObject<HTMLElement>}
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 fade-in ${resourcesSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Resource Directory</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive list of organizations and services to support individuals with intellectual and developmental disabilities in Illinois.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            
            {/* Advocates for Access */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Advocates for Access</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Provides direct services, combined with advocacy for social change to allow greater integration of persons with disabilities into mainstream life.
                  </p>
                  <a 
                    href="https://advocatesforaccess.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* The Arc of Illinois */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-100 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">The Arc of Illinois</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Advocates for people with intellectual and developmental disabilities, families, and community organizations to ensure that 
                    people with disabilities can live, work, learn, and play in communities across the state.
                  </p>
                  <p className="text-slate-600 text-sm italic">Website information to be updated</p>
                </div>
              </div>
            </div>

            {/* DORS */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-200 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Department of Rehabilitation Services (DORS)</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Plays a crucial role in supporting individuals with disabilities by providing essential resources and services.
                  </p>
                  <p className="text-slate-600 text-sm italic">Illinois DORS Program: Eligibility, Application, and Services</p>
                </div>
              </div>
            </div>

            {/* DSCC */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-300 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Division of Specialized Care for Children (DSCC)</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Provides a variety of opportunities for professional development and learning for parents and professionals who touch 
                    the lives of young children, ages birth through eight, with an emphasis on children with special needs.
                  </p>
                  <p className="text-slate-600 text-sm italic">StarNet Region II</p>
                </div>
              </div>
            </div>

            {/* Envisions Unlimited */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-400 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Envision Unlimited</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    A full spectrum of care organization serving people with intellectual and developmental disabilities as well as 
                    mental health challenges from infants to senior citizens, regardless of race, gender, religion, or ability to pay.
                  </p>
                  <p className="text-slate-600 text-sm italic">Welcome to Envision Unlimited</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Need Help Finding Resources?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Please feel free to contact me with questions. I'm here to help you navigate these resources and find the support your family needs.
              </p>
              <a 
                href="mailto:karolholmesauthor@gmail.com"
                className="btn-primary btn-gradient text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                Contact Me
              </a>
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
