import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is JobX?",
          answer: "JobX is a professional job and career platform that connects job seekers with verified employers. We go beyond traditional job listings by providing personalized matching, career guidance, and dedicated support throughout your job search journey.",
        },
        {
          question: "Is JobX free to use?",
          answer: "Yes, JobX is completely free for job seekers. You can browse jobs, create your profile, apply to positions, and receive career guidance at no cost. Employers have various hiring packages tailored to their recruitment needs.",
        },
        {
          question: "How is JobX different from other job portals?",
          answer: "Unlike traditional job portals, JobX offers a personalized approach. We verify all job listings, provide one-on-one career guidance, offer interview preparation support, and maintain ongoing relationships with our candidates even after placement.",
        },
      ],
    },
    {
      category: "For Job Seekers",
      questions: [
        {
          question: "How do I find jobs on JobX?",
          answer: "Getting started is easy! Simply contact us through our website or WhatsApp, share your resume and preferences, and our team will match you with suitable opportunities. We'll guide you through each step of the application process.",
        },
        {
          question: "What types of jobs are available?",
          answer: "We have opportunities across various industries and experience levels - from entry-level positions to senior roles. Our listings include IT, marketing, sales, finance, healthcare, manufacturing, and many more sectors.",
        },
        {
          question: "Do you help with resume writing?",
          answer: "Yes! We offer resume building assistance to help you create a professional resume that stands out. Our team can review your existing resume and provide suggestions for improvement.",
        },
        {
          question: "What support do you provide during the interview process?",
          answer: "We provide comprehensive interview support including tips on common questions, mock interview sessions, advice on presentation and communication, and specific guidance based on the company you're interviewing with.",
        },
      ],
    },
    {
      category: "For Employers",
      questions: [
        {
          question: "How can I post a job on JobX?",
          answer: "To post a job, simply contact us via email or WhatsApp with your job requirements. Our team will create an optimized listing and start sourcing qualified candidates for your position.",
        },
        {
          question: "How do you screen candidates?",
          answer: "We conduct initial screening based on your requirements, including resume review, skills assessment, and preliminary interviews. We only forward candidates who meet your specified criteria.",
        },
        {
          question: "What are your hiring packages?",
          answer: "We offer flexible hiring solutions tailored to your needs - from single position postings to ongoing recruitment partnerships. Contact us for a customized quote based on your hiring volume and requirements.",
        },
        {
          question: "How long does the hiring process take?",
          answer: "The timeline varies based on the role and requirements, but we typically present qualified candidates within 5-7 business days of receiving your job description. Our efficient screening process ensures faster time-to-hire.",
        },
      ],
    },
    {
      category: "Support & Contact",
      questions: [
        {
          question: "How can I contact JobX?",
          answer: "You can reach us through multiple channels: Email us at enquiry@jobx.in, call or WhatsApp us at +91 8943313259, or fill out the contact form on our website. We typically respond within 24 hours.",
        },
        {
          question: "What are your working hours?",
          answer: "Our team is available Monday through Saturday, 9 AM to 6 PM IST. You can leave messages outside these hours, and we'll get back to you on the next working day.",
        },
        {
          question: "Do you provide career counseling?",
          answer: "Yes! We offer personalized career counseling to help you understand your strengths, explore career options, and make informed decisions about your professional path. This service is free for all registered job seekers.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about JobX and how we can help you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div 
                key={category.category} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.category}-${index}`}
                      className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-medium hover:text-secondary hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a 
                  href="https://wa.me/918943313259" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;