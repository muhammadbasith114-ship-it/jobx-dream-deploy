import { Target, Eye, Heart, Users, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Trust",
      description: "We build lasting relationships through honesty, integrity, and transparency in all our dealings.",
    },
    {
      icon: Users,
      title: "People First",
      description: "Every individual matters. We treat job seekers and employers with equal respect and care.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from matching talent to providing support.",
    },
    {
      icon: Sparkles,
      title: "Growth",
      description: "We believe in continuous improvement and helping everyone reach their full potential.",
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
              About <span className="text-secondary">JobX</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to transform how people find meaningful work and how companies discover exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  JobX was born from a simple observation: finding the right job shouldn't be complicated, stressful, or impersonal. Too many talented individuals were getting lost in the noise of traditional job platforms, and employers were struggling to find candidates who truly fit their needs.
                </p>
                <p>
                  We decided to do things differently. Instead of just listing jobs, we focused on understanding people – their skills, aspirations, and what makes them unique. We built relationships with employers to understand not just what they need, but who would thrive in their environment.
                </p>
                <p>
                  Today, JobX stands as a bridge between ambition and opportunity. We've helped hundreds of individuals find fulfilling careers and enabled companies to build teams that drive success. But we're just getting started.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">2024</p>
                <p className="text-sm">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-0 shadow-lg animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Eye className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted career platform where every professional finds work that fulfills them and every company finds talent that propels them forward. We envision a world where job searching is empowering, not exhausting.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Target className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect talented individuals with opportunities that match their potential, while helping businesses find the perfect team members. We're committed to making the hiring process transparent, efficient, and human-centered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at JobX.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why JobX?</h2>
              <p className="text-primary-foreground/80 text-lg">
                Because you deserve more than just a job listing. You deserve a partner who understands your worth and fights for your success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span>Personalized job matching based on your skills and aspirations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span>Dedicated support throughout your job search journey</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span>Verified opportunities from trusted employers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span>Career guidance and professional development resources</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;