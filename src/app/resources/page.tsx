"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import { Heart, BookOpen, ChevronUp, ExternalLink, Clock, Users, FileText, Shield, GraduationCap, Building, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
                    Legal guardianship is necessary for you to have legal authority to speak to your child's physicians or make medical decisions. Contact a guardianship attorney in your area.
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
                A special needs trust can be set up at the same time as your legal will. Once your child is eligible for Supplemental Security Income or disability,
                they are allowed no more than two thousand dollars in their name to obtain SSI. Any assets left in their name could jeopardize their eligibility.
                A special needs trust allows a certain percentage of your assets to be set aside for your child's use and managed by a designated adult.
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
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/advocates-for-access.png"
                    alt="Advocates for Access logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
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
                    Advocates for Access <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* The Arc of Illinois */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-100 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/the-arc-illinois.svg"
                    alt="The Arc of Illinois logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">The Arc of Illinois</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Advocates for people with intellectual and developmental disabilities, families, and community organizations to ensure that
                    people with disabilities can live, work, learn, and play in communities across the state.
                  </p>
                  <a
                    href="https://www.thearcofil.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    The Arc of Illinois | Disability Assistance, Programs & Advocacy <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* DORS */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-200 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/legal-clarity-il.png"
                    alt="Legal Clarity Illinois logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Department of Rehabilitation Services (DORS)</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Plays a crucial role in supporting individuals with disabilities by providing essential resources and services.
                  </p>
                  <a
                    href="https://legalclarity.org/illinois-dors-program-eligibility-application-and-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Illinois DORS Program: Eligibility, Application, and Services - LegalClarity  <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* DSCC */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-300 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/starnet-il.png"
                    alt="StarNet Illinois logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Division of Specialized Care for Children (DSCC)</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Provides a variety of opportunities for professional development and learning for parents and professionals who touch
                    the lives of young children, ages birth through eight, with an emphasis on children with special needs.
                  </p>
                  <a
                    href="https://starnetregionii.org/resources/division-specialized-care-children-dscc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Division of Specialized Care for Children (DSCC) | StarNet Region II <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Envision Unlimited */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-400 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/envision-unlimited.svg"
                    alt="Envision Unlimited logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Envision Unlimited</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    A full spectrum of care organization serving people with intellectual and developmental disabilities as well as
                    mental health challenges from infants to senior citizens, regardless of race, gender, religion, or ability to pay.
                  </p>
                  <a
                    href="https://www.envisionunlimited.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Welcome to Envision Unlimited <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Easterseals Disability Services */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-500 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/easterseals-ci.svg"
                    alt="Easterseals Central Illinois logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Easterseals Disability Services</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    A nonprofit organization that provides health and human services, incorporated under the provisions of Section 501(c)(3) of the Internal Revenue Code.
                    They focus on helping people—supporting people with disabilities, older adults, veterans, and their families.
                  </p>
                  <a
                    href="https://ci.easterseals.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Easterseals Disability Services | Home <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Equip for Equality */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-600 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/equip-for-equality.svg"
                    alt="Equip for Equality logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Equip for Equality</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    A statewide organization that protects the rights and promotes the independence of people with disabilities in Illinois.
                    It provides legal services, policy advocacy, monitoring, and training.
                  </p>
                  <a
                    href="https://www.equipforequality.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Equip for Equality <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Illinois Association of Rehabilitation Facilities */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-700 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/iarf.png"
                    alt="Illinois Association of Rehabilitation Facilities logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Illinois Association of Rehabilitation Facilities</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    The voice of human service organizations in government. They have worked to provide agencies with individual consultation on issues that affect them specifically.
                    IARF also commits itself to developing programs that return members' investment of their dues. Their purpose is "To assist in the development and improvement of services in Illinois."
                  </p>
                  <a
                    href="https://www.iarf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Illinois Association of Rehabilitation Facilities <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Illinois Department of Human Services - Division of Developmental Disabilities */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-800 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/idhs.png"
                    alt="Illinois Department of Human Services logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Illinois Department of Human Services - Division of Developmental Disabilities</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Provides leadership for the effective management of the design and delivery of quality outcome-based, person-centered services and supports for individuals who have developmental disabilities.
                  </p>
                  <a
                    href="https://www.dhs.state.il.us/page.aspx?item=29761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    IDHS - Division of Developmental Disabilities <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Illinois Department of Human Services - Division of Early Childhood */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-900 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/idhs.png"
                    alt="Illinois Department of Human Services logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Illinois Department of Human Services - Division of Early Childhood</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Helps strengthen and centralize the state's existing childcare, home visiting, and early intervention programs, as well as operationalize and create administrative capacity to establish sustainable infrastructure needs in order to streamline services.
                    Working hand-in-hand with local communities throughout Illinois, the Division of Early Childhood provides low-income, working families with access to quality, affordable childcare; administers community-based prevention and intervention programs; and helps all children between the ages of birth to three with disabilities or delays to learn and grow.
                  </p>
                  <a
                    href="https://www.dhs.state.il.us/page.aspx?item=32004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    IDHS - Early Childhood <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Illinois PUNS */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-1000 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/idhs.png"
                    alt="Illinois Department of Human Services logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Illinois PUNS</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    A database that registers individuals who want or need Developmental Disability Waiver services (i.e. Community Integrated Living Arrangements, Home Based Supports, Child Group Homes) funded by the Illinois Department of Human Services/Division of Developmental Disabilities.
                  </p>
                  <a
                    href="https://www.dhs.state.il.us/page.aspx?item=41131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    IDHS - Illinois PUNS - Division of Developmental Disabilities <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Illinois State Board of Education */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-1100 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/isbe.png"
                    alt="Illinois State Board of Education logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Illinois State Board of Education (ISBE) Special Education Services Department</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Responsible for ensuring the general supervision of all educational programs for children with disabilities in the state.
                  </p>
                  <a
                    href="https://www.isbe.net/Pages/Special-Education-Programs.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Special Education <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Together For Choice */}
            <div className={`bg-white rounded-xl p-6 shadow-lg fade-in fade-in-delay-1200 ${resourcesSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src="/resources-logos/together-for-choice.svg"
                    alt="Together For Choice logo"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Together For Choice</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-3">
                    Offers educational resources and support on housing, services, regulations, and policies related to individuals with intellectual and/or developmental disabilities.
                    Their mission is to unite to protect and advance the rights of individuals with intellectual and/or developmental disabilities (I/DD) to live, work and thrive in a community or setting of their choice.
                  </p>
                  <a
                    href="https://www.togetherforchoice.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Together For Choice | Protecting and advancing the rights of individuals with I/DD <ExternalLink className="w-4 h-4" />
                  </a>
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
              <Link
                href="/contact"
                className="btn-primary btn-gradient text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                Contact Me
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
