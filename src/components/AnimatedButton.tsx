import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

/**
 * Animated Button Component
 * Features:
 * - Bounce-jump animation on hover
 * - Glow pulse effect for primary buttons
 * - Scale pop animation on click
 * - Shimmer effect for secondary buttons
 */
export default function AnimatedButton({
  children,
  variant = 'primary',
  icon,
  onClick,
  href,
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold no-underline transition-all duration-300 overflow-hidden relative';

  const variantClasses = {
    primary: 'bg-[#FF6B35] text-white hover:shadow-lg hover:shadow-[#FF6B35]/50 active:scale-95',
    secondary: 'bg-white text-[#004E89] border-2 border-[#004E89] hover:shadow-md active:scale-95',
    outline: 'bg-transparent text-[#FF6B35] border-2 border-[#FF6B35] hover:bg-[#FF6B35]/10 active:scale-95',
  };

  const animationClass = 'hover:animate-bounce-jump active:animate-scale-pop';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${animationClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon || <ArrowRight className="w-5 h-5" />}
        </span>
        {/* Glow effect for primary buttons */}
        {variant === 'primary' && (
          <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: '0 0 20px 10px rgba(255, 107, 53, 0.3)',
              animation: 'glow-pulse 1.5s ease-in-out infinite'
            }}
          />
        )}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon || <ArrowRight className="w-5 h-5" />}
      </span>
      {/* Glow effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: '0 0 20px 10px rgba(255, 107, 53, 0.3)',
            animation: 'glow-pulse 1.5s ease-in-out infinite'
          }}
        />
      )}
    </button>
  );
}
