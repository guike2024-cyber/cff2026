import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import AnimatedButton from '@/components/AnimatedButton';
import { trpc } from '@/lib/trpc';
import { useTranslation } from 'react-i18next';

/**
 * Contact Page
 * Design: Contact form and company information
 * - Contact form with validation
 * - Company contact details
 * - Business hours
 * - Success message after form submission
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sendContactEmailMutation = trpc.contact.sendEmail.useMutation();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('contact.fillRequired', 'Please fill in all required fields'));
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmailMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      // Show success state
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit form:', error);
      toast.error(t('contact.submitFailed', 'Failed to submit form. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative border-b border-border"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/S6h7TxA8qD1E_b7abb293.jpg)',
          minHeight: '300px'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title', 'Contact Us')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {t('contact.subtitle', 'Get in touch with our team for inquiries, quotes, and partnership opportunities')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {t('contact.address', 'Address')}
                      </h3>
                      <p className="text-muted-foreground">
                        Wenzhou, Zhejiang<br />
                        China
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {t('contact.phone', 'Phone')}
                      </h3>
                      <p className="text-muted-foreground">
                        +86 17328807153
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {t('contact.email', 'Email')}
                      </h3>
                      <p className="text-muted-foreground">
                        cffmaggie123@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {t('contact.businessHours', 'Business Hours')}
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8">
                {isSuccess ? (
                  /* Success Message */
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {t('contact.successTitle', 'Message Sent Successfully!')}
                    </h2>
                    <p className="text-muted-foreground max-w-md mb-2">
                      {t('contact.successMessage', 'Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.')}
                    </p>
                    <p className="text-sm text-muted-foreground mb-8">
                      {t('contact.successNote', 'Please check your email inbox for a confirmation.')}
                    </p>
                    <button
                      onClick={handleSendAnother}
                      className="px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t('contact.sendAnother', 'Send Another Message')}
                    </button>
                  </div>
                ) : (
                  /* Contact Form */
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      {t('contact.sendMessage', 'Send us a Message')}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.fullName', 'Full Name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                          placeholder={t('contact.namePlaceholder', 'Your name')}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.emailAddress', 'Email Address')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.companyName', 'Company Name')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                          placeholder={t('contact.companyPlaceholder', 'Your company')}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.phoneNumber', 'Phone Number')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                          placeholder="+86 (0) 577-XXXX-XXXX"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.subject', 'Subject')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                        >
                          <option value="">{t('contact.selectSubject', 'Select a subject')}</option>
                          <option value="product-inquiry">{t('contact.productInquiry', 'Product Inquiry')}</option>
                          <option value="bulk-order">{t('contact.bulkOrder', 'Bulk Order')}</option>
                          <option value="oem-services">{t('contact.oemServices', 'OEM Services')}</option>
                          <option value="partnership">{t('contact.partnership', 'Partnership Opportunity')}</option>
                          <option value="other">{t('contact.other', 'Other')}</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.message', 'Message')} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground resize-none"
                          placeholder={t('contact.messagePlaceholder', 'Tell us about your inquiry or requirements...')}
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 font-semibold flex items-center justify-center gap-2 hover:animate-bounce-jump active:animate-scale-pop"
                      >
                        <Send className="w-5 h-5" />
                        {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.sendMessageBtn', 'Send Message')}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
