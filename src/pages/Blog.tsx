import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';

/**
 * Blog Page
 * Design: Embed entire Google Blog using iframe with navigation
 * - Navigation bar at top
 * - Full blog content displayed inline
 * - Responsive iframe layout
 */

export default function Blog() {
  const { t } = useTranslation();
  const blogUrl = 'https://aojiang-massager.blogspot.com/';

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-primary-foreground/90">
            Latest insights, tips, and updates about massage therapy and wellness
          </p>
        </div>
      </div>

      {/* Blog Content - Full Width Container */}
      <div className="w-full bg-background">
        {/* Embedded Blog */}
        <div className="w-full min-h-screen">
          <iframe
            src={blogUrl}
            title="Aojiang Blog"
            className="w-full h-screen border-0"
            style={{
              minHeight: '100vh',
              width: '100%',
              border: 'none',
              display: 'block'
            }}
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  );
}
