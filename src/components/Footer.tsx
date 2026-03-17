import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

/**
 * Footer Component
 * Design: Professional B2B footer with company info and contact details
 * - Multi-column layout with company info, products, and contact
 * - Social media links
 * - Copyright notice
 * - Multi-language support
 */

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/aojiang-logo-transparent_b961bd43.png"
                alt="Aojiang Tech Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Expert manufacturer of small electric massagers for B2B clients worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/cffmaggie/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Follow us on Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586376866634" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Follow us on Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/111518064/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Connect with us on LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@maggiechen9319" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Subscribe to our YouTube channel">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <p>{t('contact.addressValue')}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <p>{t('contact.phoneValue')}</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <p>{t('contact.emailValue')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex justify-center items-center text-sm text-secondary-foreground/70">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
