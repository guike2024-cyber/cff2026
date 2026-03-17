import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppContact Component
 * Fixed button in bottom-left corner that opens WhatsApp chat
 * Allows users to quickly contact the company via WhatsApp
 */

export default function WhatsAppContact() {
  // Company WhatsApp number - direct link provided by company
  const whatsappUrl = 'https://wa.me/8617328807153';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:animate-bounce-jump active:animate-scale-pop"
      aria-label="Contact via WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
