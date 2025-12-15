import { ArrowRight, Shield, TrendingUp, Users, Heart, CheckCircle, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted Jobs",
      description: "All opportunities are verified and from reputable employers you can trust.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access opportunities that help you advance and reach your full potential.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Our team is here to guide you through every step of your job search.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Clear communication and honest dealings in everything we do.",
    },
  ];

  const steps = [
    { number: "01", title: "Create Profile", description: "Sign up and tell us about your skills and preferences." },
    { number: "02", title: "Browse Jobs", description: "Explore curated opportunities matching your profile." },
    { number: "03", title: "Get Hired", description: "Apply, interview, and land your dream job." },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      company: "Tech Solutions Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      quote: "JobX helped me find my dream job in just 2 weeks! The process was smooth and the team was incredibly supportive.",
    },
    {
      name: "Rahul Kumar",
      role: "Marketing Manager",
      company: "Brand Co",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "I was struggling to find the right opportunity until I discovered JobX. Their personalized approach made all the difference.",
    },
    {
      name: "Anita Desai",
      role: "HR Specialist",
      company: "People First",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "As both a job seeker and now an employer using JobX, I can say their platform truly understands both sides of the hiring equation.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                <Star size={16} className="fill-secondary" />
                Your Career Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Because You <span className="text-secondary">Deserve More</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Find your dream job or discover top talent. JobX connects ambitious professionals with opportunities that match their potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                  Find Jobs <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                  Post a Job
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Jobs Posted</p>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Happy Candidates</p>
                </div>
                <div className="h-12 w-px bg-border hidden sm:block"></div>
                <div className="hidden sm:block">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Partner Companies</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=700&fit=crop"
                  alt="Professional team working together"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Job Matched!</p>
                    <p className="text-sm text-muted-foreground">Senior Developer Role</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At JobX, we believe everyone deserves a fulfilling career. Our mission is to bridge the gap between talented individuals and companies seeking exceptional people. We're not just a job platform – we're your career partner committed to helping you succeed.
            </p>
            <Button variant="link" className="text-secondary font-medium text-lg" asChild>
              <a href="/about">
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose JobX?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond job listings to provide a complete career support system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Getting started with JobX is simple. Follow these three easy steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl md:text-7xl font-bold text-secondary/30">{step.number}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-primary-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Get Started Now <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from people who found their perfect opportunity through JobX.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="border-0 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-secondary-foreground/90">
              Whether you're looking for your dream job or the perfect candidate, JobX is here to help. Join thousands who have already found success with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-secondary text-lg px-8"
                asChild
              >
                <a href="https://wa.me/918943313259" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} className="mr-2" /> Chat on WhatsApp
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

export default Index;