# Aojiang Tech Website - Design Guide

## Design Philosophy: Professional B2B Industrial Minimalism

This website adopts a **clean, professional B2B aesthetic** inspired by Alibaba International Station, emphasizing trust, clarity, and product-focused presentation.

### Core Design Principles

1. **Trust & Professionalism**: Clean layouts, consistent typography, and authoritative color schemes that convey reliability for B2B buyers
2. **Product-Centric**: Generous whitespace around product imagery; high-quality product photography is the hero
3. **Information Hierarchy**: Clear visual distinction between primary (company info, key products) and secondary content (certifications, details)
4. **Accessibility**: High contrast, readable fonts, logical navigation structure

### Color Palette

- **Primary**: `#FF6B35` (Warm Orange) - Energy, innovation, attention
- **Secondary**: `#004E89` (Deep Blue) - Trust, professionalism, stability
- **Accent**: `#F7B801` (Gold) - Premium quality, highlights
- **Neutral**: `#F5F5F5` (Light Gray) - Clean backgrounds
- **Text**: `#1A1A1A` (Dark Gray) - High readability
- **Borders**: `#E0E0E0` (Subtle Gray) - Minimal visual noise

### Typography System

- **Display Font**: `Poppins` (Bold, 700) - Headlines, brand statements
- **Body Font**: `Inter` (Regular 400, Medium 500) - Body text, descriptions
- **Accent Font**: `Roboto Mono` (500) - Technical specs, product codes

### Layout Paradigm

- **Hero Section**: Full-width with product showcase and company tagline
- **Product Grid**: 3-column responsive layout on desktop, 1-2 columns on mobile
- **Feature Sections**: Alternating left-right layout with text and imagery
- **Footer**: Multi-column information architecture with links and contact details

### Signature Elements

1. **Product Cards**: Subtle shadow, hover elevation effect, clean borders
2. **Section Dividers**: Thin horizontal lines with optional accent color
3. **Certification Badges**: SVG icons with labels for SGS, ISO, etc.

### Interaction Philosophy

- **Hover States**: Subtle color shifts, shadow elevation, smooth transitions (0.3s ease)
- **Loading States**: Skeleton screens for product lists
- **CTA Buttons**: Clear visual feedback with color inversion on hover
- **Navigation**: Sticky header with smooth scroll behavior

### Animation Guidelines

- Entrance animations: Fade-in + slight slide-up (0.6s ease-out)
- Hover effects: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Transitions: Prefer opacity and transform over color changes for performance
- Avoid excessive motion; prioritize clarity over decoration

### Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### Accessibility Standards

- WCAG 2.1 AA compliance
- Color contrast ratio ≥ 4.5:1 for text
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators visible on all interactive elements

---

## Implementation Notes

This design guide ensures consistency across all pages. When implementing components, refer to this document to maintain visual cohesion and brand identity.
