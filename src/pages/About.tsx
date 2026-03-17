import { CheckCircle, Award, Globe, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';

/**
 * About Page
 * Design: Company profile with mission, values, and certifications
 * - Company overview
 * - Key achievements
 * - Certifications and awards
 * - Team information
 */

const achievements = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'Exporting to over 50 countries worldwide with consistent quality standards',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Industry Recognition',
    description: 'Verified by SGS Group - world-leading inspection and certification company',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Dedicated professionals with years of experience in product development',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control at every stage of production',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'CE Certification', description: 'European Conformity' },
  { name: 'SGS Verified', description: 'Third-party Inspection' },
  { name: 'RoHS Compliant', description: 'Hazardous Substances Restriction' },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative border-b border-border"
        style={{        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/about_internet_1fc26b8d.jpg)',        minHeight: '300px'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Aojiang Tech
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Leading manufacturer of professional electric massagers for B2B clients
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Wenzhou Aojiang Electronic Technology Co., Ltd. is a specialized manufacturer of small electric massagers, dedicated to providing high-quality wellness products to B2B clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Founded with a vision to revolutionize the massage therapy industry, we combine innovative design with reliable manufacturing to deliver products that exceed customer expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to excellence is reflected in our annual export volume of over $6.3 million and our partnerships with well-known international brands.
              </p>

              <div className="space-y-3">
                {[
                  'Design-based customization for specific requirements',
                  'OEM services for well-known brands',
                  'Rigorous quality assurance procedures',
                  'Competitive pricing with bulk order discounts',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Company Stats
                  </p>
                  <h3 className="text-3xl font-bold text-foreground">
                    15+ Years
                  </h3>
                  <p className="text-muted-foreground">
                    Industry experience and expertise
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Annual Export
                  </p>
                  <h3 className="text-3xl font-bold text-foreground">
                    $6.3M+
                  </h3>
                  <p className="text-muted-foreground">
                    Global distribution and sales
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Product Range
                  </p>
                  <h3 className="text-3xl font-bold text-foreground">
                    8+ Types
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive massage solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality, innovation, and customer satisfaction sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center"
              >
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-secondary-foreground/80">
                To provide innovative, high-quality electric massage solutions that enhance wellness and improve quality of life for people worldwide, while maintaining the highest standards of manufacturing excellence and customer service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-3 text-lg text-secondary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Quality First:</strong> Unwavering commitment to product excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Innovation:</strong> Continuous improvement and technological advancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Reliability:</strong> Dependable partnerships and consistent delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Integrity:</strong> Transparent business practices and ethical standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact us today to discuss your requirements and explore partnership opportunities
          </p>
          <AnimatedButton href="/contact" variant="primary">
            Get in Touch
          </AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
