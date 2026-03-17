import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';


/**
 * Navigation Component
 * Design: Professional B2B header with sticky positioning
 * - Logo on left, navigation links on right
 * - Mobile hamburger menu
 * - Language switcher
 * - Warm orange primary color with deep blue accents
 */

export default function Navigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/aojiang-logo-colored_467a309a.png"
            alt="Aojiang Tech Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-orange-700 transition-colors duration-300 font-medium text-sm no-underline"
          >
            {t('nav.getQuote')}
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-card rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium no-underline"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-center font-medium no-underline"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
