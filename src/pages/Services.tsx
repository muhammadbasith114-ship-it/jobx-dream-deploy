import { Search, Building2, Compass, FileText, Users, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Job Search Assistance",
      description: "Finding the right job can be overwhelming. We simplify the process by matching you with opportunities that align with your skills, experience, and career goals.",
      features: [
        "Personalized job recommendations",
        "Access to exclusive listings",
        "Application tracking support",
        "Interview preparation tips",
      ],
    },
    {
      icon: Building2,
      title: "Employer Hiring Solutions",
      description: "Building the right team is crucial for success. We help employers find qualified candidates who not only have the skills but also fit their company culture.",
      features: [
        "Targeted candidate sourcing",
        "Pre-screened applicants",
        "Quick turnaround time",
        "Flexible hiring packages",
      ],
    },
    {
      icon: Compass,
      title: "Career Guidance & Support",
      description: "Not sure about your next career move? Our career counseling services help you discover your strengths and chart a path toward professional fulfillment.",
      features: [
        "One-on-one career counseling",
        "Skill gap analysis",
        "Industry insights and trends",
        "Career transition support",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "Resume Building",
      description: "Get help crafting a professional resume that highlights your strengths and catches employers' attention.",
    },
    {
      icon: Users,
      title: "Interview Coaching",
      description: "Prepare for interviews with mock sessions and personalized feedback to boost your confidence.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Our support doesn't end with placement. We're here to help you succeed in your new role.",
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
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career solutions for job seekers and employers. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-6 animate-fade-in ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="text-secondary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-secondary-foreground text-xs font-bold">✓</span>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
                <div className={`relative animate-fade-in ${index % 2 === 1 ? 'lg:order-1' : ''}`} style={{ animationDelay: "0.2s" }}>
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=450&fit=crop"
                        : "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=450&fit=crop"
                    }
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our core services, we offer additional support to ensure your success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={service.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="text-secondary" size={28} />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-secondary-foreground/90">
              Whether you're seeking your next opportunity or looking to hire top talent, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                Find Jobs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-secondary text-lg px-8"
              >
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;