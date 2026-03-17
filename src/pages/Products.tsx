import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import ProductCardScroll from '@/components/ProductCardScroll';

/**
 * Products Page
 * Design: Product catalog with filtering and detailed product cards
 * - Category filter
 * - Product grid with specifications
 * - Product detail links
 * - GSAP 3D scroll animations
 */

const allProducts = [
  // Head Massagers (2)
  {
    id: 1,
    name: 'Head Massager Pro',
    category: 'Head Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Precision head massager for scalp stimulation and relaxation',
    specs: ['Scalp Stimulation', 'Adjustable Intensity', 'Wireless', 'Quiet Operation'],
    price: 'Custom Quote',
  },
  {
    id: 2,
    name: 'Head Massager Deluxe',
    category: 'Head Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Premium head massager with multi-point stimulation technology',
    specs: ['Multi-Point Stimulation', 'Heat Function', 'Long Battery Life', 'Portable'],
    price: 'Custom Quote',
  },
  // Neck Massagers (3)
  {
    id: 3,
    name: 'Neck Massager Elite',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Ergonomic neck massager with heat therapy and adjustable intensity',
    specs: ['Heat Therapy', 'Adjustable Intensity', 'Wireless Design', '3-Hour Battery'],
    price: 'Custom Quote',
  },
  {
    id: 4,
    name: 'Neck Massager Pro',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional neck massager with advanced pulse technology',
    specs: ['Pulse Technology', 'Heat Therapy', 'Adjustable Modes', 'Ergonomic Design'],
    price: 'Custom Quote',
  },
  {
    id: 5,
    name: 'Neck Massager Comfort',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Comfortable neck massager for daily relaxation and relief',
    specs: ['Comfortable Fit', 'Multiple Modes', 'Portable', 'Easy to Use'],
    price: 'Custom Quote',
  },
  // Back Massagers (2)
  {
    id: 6,
    name: 'Back Massager Plus',
    category: 'Back Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Full-body back massager with multiple massage modes and heat function',
    specs: ['8 Massage Modes', 'Heat Function', 'Adjustable Width', 'Portable'],
    price: 'Custom Quote',
  },
  {
    id: 7,
    name: 'Back Massager Pro',
    category: 'Back Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional back massager with deep tissue massage capability',
    specs: ['Deep Tissue', 'Variable Speed', 'Heat Therapy', 'Cordless'],
    price: 'Custom Quote',
  },
  // Waist Massagers (2)
  {
    id: 8,
    name: 'Waist Massager Smart',
    category: 'Waist Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Smart waist massager with app control and customizable programs',
    specs: ['App Control', 'Customizable Programs', 'Heat Therapy', 'Wireless'],
    price: 'Custom Quote',
  },
  {
    id: 9,
    name: 'Waist Massager Pro',
    category: 'Waist Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional waist massager for targeted muscle relief',
    specs: ['Targeted Relief', 'Multiple Modes', 'Heat Function', 'Portable Design'],
    price: 'Custom Quote',
  },
  // Hand Massagers (1)
  {
    id: 10,
    name: 'Hand Massager Pro',
    category: 'Hand Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Portable hand massager for precise muscle relief and recovery',
    specs: ['Portable', 'Quiet Operation', 'Long Battery Life', 'Ergonomic Grip'],
    price: 'Custom Quote',
  },
  // Knee Massagers (1)
  {
    id: 11,
    name: 'Knee Massager Therapy',
    category: 'Knee Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Targeted knee massager for joint relief and mobility improvement',
    specs: ['Targeted Relief', 'Heat Function', 'Adjustable Size', 'Quiet Motor'],
    price: 'Custom Quote',
  },
  // Foot Massagers (1)
  {
    id: 12,
    name: 'Foot Massager Comfort',
    category: 'Foot Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Shiatsu foot massager with adjustable intensity and heat therapy',
    specs: ['Shiatsu Massage', 'Heat Therapy', 'Adjustable Intensity', 'Compact Design'],
    price: 'Custom Quote',
  },
  // Massage Guns (3)
  {
    id: 13,
    name: 'Professional Massage Gun',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'High-performance massage gun with 6 speed levels and 4 interchangeable heads',
    specs: ['6 Speed Levels', '4 Massage Heads', 'Cordless Design', 'USB Charging'],
    price: 'Custom Quote',
  },
  {
    id: 14,
    name: 'Massage Gun Elite',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Premium massage gun with advanced vibration technology',
    specs: ['Advanced Vibration', '8 Speed Levels', '6 Massage Heads', 'Quiet Motor'],
    price: 'Custom Quote',
  },
  {
    id: 15,
    name: 'Massage Gun Pro',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional-grade massage gun for intense muscle recovery',
    specs: ['Intense Vibration', '10 Speed Levels', '8 Massage Heads', 'Long Battery'],
    price: 'Custom Quote',
  },
  // Fat burning Massagers (1)
  {
    id: 16,
    name: 'Fat Burning Massager',
    category: 'Fat burning Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Advanced fat burning massager with EMS technology and heat therapy',
    specs: ['EMS Technology', 'Heat Therapy', 'Multiple Modes', 'Portable Design'],
    price: 'Custom Quote',
  },
];

// Define the exact order of categories
const categoryOrder = [
  'All Products',
  'Head Massagers',
  'Neck Massagers',
  'Back Massagers',
  'Waist Massagers',
  'Hand Massagers',
  'Knee Massagers',
  'Foot Massagers',
  'Massage Guns',
  'Fat burning Massagers',
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All Products'
      ? allProducts
      : allProducts.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive range of professional electric massagers for B2B clients
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Filter by Category</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categoryOrder.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground border border-border hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product: typeof allProducts[0], index: number) => (
              <ProductCardScroll key={product.id} index={index}>
                <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <ul className="space-y-2">
                        {product.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="text-sm text-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">
                          {product.price}
                        </span>
                        <AnimatedButton href="/contact" variant="primary">
                          Inquire
                        </AnimatedButton>
                      </div>
                      <a
                        href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              </ProductCardScroll>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-6">
            We offer design-based customization and OEM services for well-known brands
          </p>
          <AnimatedButton href="/contact" variant="primary">
            Get Custom Quote
          </AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
