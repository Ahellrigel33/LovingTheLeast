"use client";

import Header from "@/components/Header";
import { BookOpen, Heart, Users, Lightbulb, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function StudyGuide() {
  const heroSection = useIntersectionObserver({ threshold: 0.1 });
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
    <div className="min-h-screen bg-white">
      <Header isStudyGuide={true} />

      {/* Hero Section */}
      <section
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="min-h-[40vh] flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 warm-gradient pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className={`fade-in ${heroSection.isVisible ? 'visible' : ''}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current animate-heartbeat" />
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Study & Discussion Guide
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-6">
              for Only Jesus Knows
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              These questions are designed to help you reflect on the powerful themes within the book. 
              Whether you are journaling on your own or discussing with a group, we encourage you to be open 
              and honest as you explore the journey of the Holmes family and how it connects to your own life and faith.
            </p>
          </div>
        </div>
      </section>

      {/* Study Questions */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Part 1 */}
          <div className="study-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Part 1: The Call and The Commitment</h3>
            </div>
            <div className="space-y-6 pl-0 sm:pl-16">
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">1.</span> In Chapter 1, Karol and Jim make a quick, almost naive decision to host Moise. 
                  What do you believe motivated their initial "yes"? Have you ever felt a calling or made a commitment without knowing the full cost? 
                  How did that decision shape you?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">2.</span> Upon meeting Moise at the airport, Karol is terrified by his condition. 
                  She writes, "A voice in my head screamed at me not to go through with the plan." Discuss the conflict between fear and commitment. 
                  What does this moment teach us about God's ability to use us even when we feel inadequate or afraid?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">3.</span> The subtitle of the book is <em>Loving the World's Most Vulnerable</em>. 
                  How did your understanding of that phrase change from the beginning of the book to the end? 
                  Who are the "vulnerable" in your own community?
                </p>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="study-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Part 2: The Journey of Care & Advocacy</h3>
            </div>
            <div className="space-y-6 pl-0 sm:pl-16">
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">1.</span> The book details a relentless series of medical challenges—from heart surgery and CMV to the loss of hearing, sight, and mobility. 
                  How did Karol's role as a mother evolve into that of a fierce advocate? Discuss the tension she felt between trusting medical professionals 
                  and trusting her own "mama instinct."
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">2.</span> Karol often expresses worry about the impact Moise's needs had on her four other children. 
                  In what ways did growing up with Moise shape Jamee, Grant, Jade, and Brock? What does their story reveal about sacrifice, compassion, 
                  and finding a "new normal" in a family?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">3.</span> In Chapter 8, the family experiences the pain of public judgment and stares. 
                  In contrast, they also experience incredible kindness from strangers (like the carnival workers or the little girl on the playground). 
                  What can these moments teach us about how we interact with families affected by disability?
                </p>
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <div className="study-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Part 3: Faith, Doubt, and Suffering</h3>
            </div>
            <div className="space-y-6 pl-0 sm:pl-16">
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">1.</span> Throughout the book, Karol is brutally honest about her spiritual struggles. 
                  In Chapter 5, she asks, "He was supremely sovereign. But was He good?" Have you ever felt this way? 
                  Discuss whether it is faithful to question God's character in the midst of suffering.
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">2.</span> After Moise loses his sight, Karol reads a passage where Jesus tells Peter, 
                  "What is that to you? You follow Me." She interprets this as Jesus telling her, "It's none of your business." 
                  How did this revelation shift her perspective? How can we apply this mindset to the things in our own lives 
                  that we cannot understand or control?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">3.</span> When faced with Moise's final illness, the family makes the difficult decision 
                  to refuse a ventilator and move to comfort care. Discuss the complexities of this choice. 
                  How does a belief in heaven and God's sovereignty impact end-of-life decisions?
                </p>
              </div>
            </div>
          </div>

          {/* Part 4 */}
          <div className="study-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Part 4: Grief, Loss, and Hope</h3>
            </div>
            <div className="space-y-6 pl-0 sm:pl-16">
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">1.</span> The family grieves the loss of two children, Jalayne and Moise. 
                  Karol notes that the grief was different for each. Compare the grief of a sudden, tragic accident 
                  with the grief of watching a long, slow decline. What did you learn about the nature of grief from her experiences?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">2.</span> Karol writes about the isolation of grief, stating that the church is often 
                  "woefully ill-equipped to handle" long-term suffering. What does it truly mean to "weep with those who weep" (Romans 12:15)? 
                  How can we better support those in our community who are walking through extended periods of trial or sorrow?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">3.</span> The title, <em>Only Jesus Knows</em>, reflects a central theme of mystery. 
                  What are some of the things about Moise's life and purpose that "only Jesus knows"? 
                  How can we find peace in accepting that we may never have all the answers on this side of heaven?
                </p>
              </div>
            </div>
          </div>

          {/* Part 5 */}
          <div className="study-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">5</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Part 5: Legacy and A Call to Action</h3>
            </div>
            <div className="space-y-6 pl-0 sm:pl-16">
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">1.</span> The story of Jelani in Chapter 16 is a powerful example of Moise's impact. 
                  Jelani says, "Moise made me realize that everyone needs a person. I had to be his person because no one else would be." 
                  Who was a "person" for Moise in this story? Who is a "person" in your life that you are called to love and support?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">2.</span> Chapter 15 is a direct challenge to the reader about the crisis facing adults with IDD. 
                  Before reading this book, were you aware of the challenges families face when a child with disabilities ages out of the school system? 
                  What is one practical step you or your group could take to support the "least of these" in your own community?
                </p>
              </div>
              <div className="question-card">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">3.</span> At the end of the book, Jade says, "People have often mentioned how lucky Moise is to have our family... 
                  But I think what people didn't recognize was how lucky we were to have him." After reading his story, 
                  what do you believe was Moise's gift to his family and to the world?
                </p>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-500 fill-current animate-heartbeat" />
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <Heart className="w-6 h-6 text-pink-500 fill-current animate-heartbeat" />
            </div>
            <p className="text-lg sm:text-xl text-slate-700 italic">
              May these questions lead you to deeper understanding, compassion, and action.
            </p>
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
