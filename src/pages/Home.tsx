import { ArrowRight, CheckCircle, Award, TrendingUp, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { useAuth } from '@/_core/hooks/useAuth';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';

/**
 * Home Page
 * Design: Professional B2B landing page with hero section, product showcase, and company strengths
 * - Hero banner with company tagline and CTA
 * - Product grid with featured products
 * - Company strengths section
 * - Testimonials/certifications
 */

const products = [
  {
    id: 1,
    name: 'Massage Gun Pro',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional-grade massage gun with 6 speed levels',
    price: 'Custom Quote',
  },
  {
    id: 2,
    name: 'Neck Massager Elite',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Ergonomic neck massager with heat therapy',
    price: 'Custom Quote',
  },
  {
    id: 3,
    name: 'Back Massager Plus',
    category: 'Back Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Full-body back massager with multiple modes',
    price: 'Custom Quote',
  },
  {
    id: 4,
    name: 'Foot Massager Comfort',
    category: 'Foot Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Shiatsu foot massager with adjustable intensity',
    price: 'Custom Quote',
  },
];

const strengths = [
  {
    icon: <Award className="w-8 h-8" />,
    titleKey: 'home.strength1',
    descKey: 'home.strength1Desc',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    titleKey: 'home.strength2',
    descKey: 'home.strength2Desc',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    titleKey: 'home.strength3',
    descKey: 'home.strength3Desc',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    titleKey: 'home.strength4',
    descKey: 'home.strength4Desc',
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/hero-banner-X3RCYKmgw44qjaB8Jps6Jm.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{fontSize: '35px'}}>
              {t('home.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 font-medium">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/products" variant="primary">
                {t('home.viewProducts')}
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary">
                {t('home.getQuote')}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Company Strengths Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.strengths')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.strengthsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary mb-4">{strength.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(strength.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(strength.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.featuredProducts')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.featuredProductsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">
                      {product.price}
                    </span>
                    <Link href="/products" className="text-primary hover:text-orange-700 transition-colors no-underline inline-flex items-center gap-1 hover:animate-bounce-jump">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <AnimatedButton href="/products" variant="primary">
              {t('home.viewAllProducts')}
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Massage Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.massageAreas')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('home.massageAreasDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-head_c7c9b303.jpg"
                  alt="Head Massage - Relieve Headaches and Migraines"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.headMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.headMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.relieveHeadaches')}</li>
                  <li>✓ {t('home.reduceMigraine')}</li>
                  <li>✓ {t('home.improveCirculation')}</li>
                </ul>
              </div>
            </div>

            {/* Neck & Shoulder Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-trapezius_d49887ab.jpg"
                  alt="Neck and Shoulder Massage - Relieve Stiffness"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.neckShoulderMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.neckShoulderMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.relieveStiffness')}</li>
                  <li>✓ {t('home.reduceNeckPain')}</li>
                  <li>✓ {t('home.improvePosure')}</li>
                </ul>
              </div>
            </div>

            {/* Eye Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-eye_75b148d0.jpg"
                  alt="Eye Massage - Reduce Eye Strain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.eyeMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.eyeMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.reduceEyeStrain')}</li>
                  <li>✓ {t('home.relieveDryEyes')}</li>
                  <li>✓ {t('home.improveVision')}</li>
                </ul>
              </div>
            </div>

            {/* Waist Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-waist_2be6026a.webp"
                  alt="Waist Massage - Relieve Lower Back Pain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.waistMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.waistMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.relieveLowerBackPain')}</li>
                  <li>✓ {t('home.improveFlexibility')}</li>
                  <li>✓ {t('home.reduceStress')}</li>
                </ul>
              </div>
            </div>

            {/* Calf Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-calf_e699dae2.webp"
                  alt="Calf Massage - Reduce Leg Fatigue"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.calfMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.calfMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.reduceLegFatigue')}</li>
                  <li>✓ {t('home.relieveSwelling')}</li>
                  <li>✓ {t('home.improveBloodFlow')}</li>
                </ul>
              </div>
            </div>

            {/* Foot Massage */}
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/massage-foot_e4b9d217.webp"
                  alt="Foot Massage - Relieve Foot Pain and Soreness"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('home.footMassage')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.footMassageDesc')}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ {t('home.relieveFootPain')}</li>
                  <li>✓ {t('home.reduceFootSoreness')}</li>
                  <li>✓ {t('home.improveFootHealth')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground" style={{height: '253px'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.readyToPartner')}
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            {t('home.readyToPartnerDesc')}
          </p>
          <AnimatedButton href="/contact" variant="primary">
            {t('home.getInTouch')}
          </AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
