import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Privacy Policy & <span className="text-secondary">Terms</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Privacy Policy */}
            <div className="prose prose-lg max-w-none animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6" id="privacy-policy">
                Privacy Policy
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h3>
                  <p>
                    At JobX ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our job platform and related services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h3>
                  <p className="mb-3">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and other contact details you provide.</li>
                    <li><strong>Professional Information:</strong> Resume, work history, education, skills, certifications, and career preferences.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited and features used.</li>
                    <li><strong>Device Information:</strong> Browser type, IP address, device type, and operating system.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h3>
                  <p className="mb-3">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Match you with relevant job opportunities</li>
                    <li>Connect job seekers with potential employers</li>
                    <li>Provide career guidance and support services</li>
                    <li>Communicate with you about jobs, services, and updates</li>
                    <li>Improve our platform and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing</h3>
                  <p className="mb-3">We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Employers:</strong> With your consent, we share your profile and resume with potential employers.</li>
                    <li><strong>Service Providers:</strong> Third parties who help us operate our platform and deliver services.</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                  </ul>
                  <p className="mt-3">We do not sell your personal information to third parties.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h3>
                  <p>
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h3>
                  <p>
                    For privacy-related inquiries, please contact us at:<br />
                    Email: enquiry@jobx.in<br />
                    Phone: +91 8943313259
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-border" />

            {/* Terms of Service */}
            <div className="prose prose-lg max-w-none animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6" id="terms-of-service">
                Terms of Service
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing or using JobX services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Description of Services</h3>
                  <p>
                    JobX provides a platform connecting job seekers with employers. Our services include job matching, career guidance, resume assistance, and related support services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h3>
                  <p className="mb-3">As a user, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and truthful information</li>
                    <li>Keep your contact information up to date</li>
                    <li>Not misrepresent your qualifications or experience</li>
                    <li>Use the platform for lawful purposes only</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Not engage in harassment or discrimination</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Job Listings</h3>
                  <p>
                    While we strive to verify all job listings, JobX does not guarantee the accuracy of job postings or the legitimacy of employers. Users should exercise due diligence when applying for positions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. No Employment Guarantee</h3>
                  <p>
                    JobX facilitates connections between job seekers and employers but does not guarantee employment. Hiring decisions are made solely by employers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h3>
                  <p>
                    All content on the JobX platform, including logos, text, graphics, and software, is the property of JobX or its licensors and is protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h3>
                  <p>
                    JobX shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our liability is limited to the maximum extent permitted by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Modifications</h3>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective upon posting. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">9. Termination</h3>
                  <p>
                    We may terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users or our business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h3>
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">11. Contact</h3>
                  <p>
                    For questions about these terms, please contact us at:<br />
                    Email: enquiry@jobx.in<br />
                    Phone: +91 8943313259
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;