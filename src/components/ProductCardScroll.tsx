import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductCardScrollProps {
  children: React.ReactNode;
  index: number;
}

/**
 * ProductCardScroll Component
 * Implements GSAP + ScrollTrigger 3D scroll animation for product cards
 * Creates "movie-level" visual effects with perspective, rotation, and scale
 */
export default function ProductCardScroll({ children, index }: ProductCardScrollProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    // Create staggered animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.2, // Smooth scrubbing
        markers: false,
      },
    });

    // Stagger delay based on card index
    const delay = index * 0.1;

    // 3D Perspective Animation
    tl.fromTo(
      card,
      {
        opacity: 0,
        rotationX: 90,
        rotationY: -30,
        z: -200,
        scale: 0.8,
      },
      {
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      },
      delay
    );

    // Add subtle floating effect on scroll
    tl.to(
      card,
      {
        y: -20,
        rotationZ: 2,
        duration: 0.8,
        ease: 'sine.inOut',
      },
      delay
    );

    // Hover effect setup
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(255, 107, 53, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
