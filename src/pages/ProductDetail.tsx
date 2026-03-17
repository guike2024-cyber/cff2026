import { useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowLeft, Check, AlertCircle, Zap, Battery, Volume2, Smartphone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import ImageGallery from '@/components/ImageGallery';

// Product data
const products: Record<string, any> = {
  'head-massager-pro': {
    id: 1,
    name: 'Head Massager Pro',
    category: 'Head Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Precision head massager for scalp stimulation and relaxation',
    price: 'Custom Quote',
    rating: 4.8,
    reviews: 156,
    
    // Technical Specifications
    specs: {
      dimensions: '220 x 180 x 150 mm',
      weight: '480 g',
      material: 'ABS + Silicone',
      color: 'Black/White',
      battery: 'Lithium-ion 2000mAh',
      batteryLife: '4-5 hours',
      chargeTime: '2 hours',
      warranty: '2 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Multi-Point Stimulation',
        description: 'Advanced vibration technology with 8 precision nodes for targeted scalp massage'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Smart Control',
        description: 'Wireless operation with intuitive touch controls and 5 intensity levels'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Long Battery Life',
        description: '4-5 hours of continuous use on a single charge'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Quiet Operation',
        description: 'Ultra-quiet motor design for peaceful relaxation experience'
      },
    ],

    // Usage Instructions
    usageInstructions: [
      {
        step: 1,
        title: 'Charging',
        description: 'Connect the device to the USB charger. Full charge takes approximately 2 hours. LED indicator shows charging status.',
      },
      {
        step: 2,
        title: 'Power On',
        description: 'Press and hold the power button for 2 seconds to turn on. The device will vibrate once to confirm activation.',
      },
      {
        step: 3,
        title: 'Select Intensity',
        description: 'Use the intensity buttons to adjust massage strength from level 1 (gentle) to level 5 (intense).',
      },
      {
        step: 4,
        title: 'Massage Application',
        description: 'Gently place the device on your scalp and move it slowly across different areas. Recommended massage time: 10-15 minutes.',
      },
      {
        step: 5,
        title: 'Auto-Off',
        description: 'Device automatically shuts off after 30 minutes of use for safety. Manual shutdown: press power button for 2 seconds.',
      },
    ],

    // Safety Warnings
    safetyWarnings: [
      'Do not use if you have a pacemaker or other electronic implants',
      'Not suitable for pregnant women without medical consultation',
      'Avoid use on open wounds or irritated skin',
      'Keep away from water except during IPX5 rated water exposure',
      'Do not exceed 30 minutes of continuous use',
    ],

    // Care Instructions
    careInstructions: [
      'Clean the device with a damp cloth after each use',
      'Allow to dry completely before storage',
      'Store in a cool, dry place away from direct sunlight',
      'Charge device every 3 months if not in regular use',
      'Do not disassemble the device',
    ],
  },

  'head-massager-deluxe': {
    id: 2,
    name: 'Head Massager Deluxe',
    category: 'Head Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Premium head massager with multi-point stimulation technology',
    price: 'Custom Quote',
    rating: 4.9,
    reviews: 203,
    
    // Technical Specifications
    specs: {
      dimensions: '240 x 200 x 160 mm',
      weight: '520 g',
      material: 'Premium ABS + Medical Grade Silicone',
      color: 'Midnight Black/Rose Gold',
      battery: 'Lithium-ion 2500mAh',
      batteryLife: '6-8 hours',
      chargeTime: '2.5 hours',
      warranty: '3 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Premium Multi-Point Stimulation',
        description: '12 precision nodes with adaptive vibration technology for customized massage experience'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'App Control & Presets',
        description: 'Bluetooth connectivity with mobile app for preset programs and personalized settings'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '6-8 hours of continuous use with fast charging capability'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Heat Therapy',
        description: 'Integrated heating function (up to 42°C) for enhanced relaxation and blood circulation'
      },
    ],

    // Usage Instructions
    usageInstructions: [
      {
        step: 1,
        title: 'Initial Setup',
        description: 'Download the companion app and create an account. Charge device fully before first use (2.5 hours).',
      },
      {
        step: 2,
        title: 'Bluetooth Pairing',
        description: 'Enable Bluetooth on your device and open the app. Press the pairing button for 3 seconds until LED blinks blue.',
      },
      {
        step: 3,
        title: 'Select Program',
        description: 'Choose from preset programs: Relaxation, Deep Massage, Heat Therapy, or create custom settings.',
      },
      {
        step: 4,
        title: 'Massage Application',
        description: 'Place device on scalp and let it guide you through the massage sequence. Recommended time: 15-20 minutes.',
      },
      {
        step: 5,
        title: 'Heat Function',
        description: 'Enable heat therapy through the app. Temperature gradually increases to 42°C over 2 minutes.',
      },
      {
        step: 6,
        title: 'Recovery Mode',
        description: 'After massage, activate recovery mode for gentle stimulation and cool-down period.',
      },
    ],

    // Safety Warnings
    safetyWarnings: [
      'Consult a doctor if you have epilepsy or seizure disorders',
      'Do not use if you have a pacemaker or other electronic implants',
      'Not recommended for pregnant women without medical consultation',
      'Avoid use on open wounds, infections, or severely irritated skin',
      'Maximum heat temperature is 42°C - do not exceed',
      'Do not exceed 20 minutes of continuous use with heat therapy',
    ],

    // Care Instructions
    careInstructions: [
      'Clean with a soft, damp cloth immediately after use',
      'Allow all components to dry completely before storage',
      'Store in the provided protective case',
      'Charge device monthly during extended storage',
      'Do not expose to extreme temperatures',
      'Use only the provided charging cable',
    ],
  },

  'neck-massager-elite': {
    id: 3,
    name: 'Neck Massager Elite',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Ergonomic neck massager with heat therapy and 3D massage technology',
    price: 'Custom Quote',
    
    // Technical Specifications
    specs: {
      dimensions: '280 x 120 x 100 mm',
      weight: '350 g',
      material: 'ABS + Memory Foam',
      color: 'Black/Silver',
      battery: 'Lithium-ion 1800mAh',
      batteryLife: '3-4 hours',
      chargeTime: '1.5 hours',
      warranty: '2 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: '3D Massage Technology',
        description: 'Multi-directional massage nodes that adapt to neck contours for targeted relief'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy',
        description: 'Integrated heating function up to 40°C for enhanced muscle relaxation'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Adjustable Intensity',
        description: '4 massage intensity levels and 3 heat settings for personalized comfort'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Ergonomic Design',
        description: 'Contoured shape fits perfectly around neck and shoulders for hands-free use'
      },
    ],

    // Usage Instructions
    usageInstructions: [
      {
        step: 1,
        title: 'Charging',
        description: 'Connect to USB charger. Full charge takes 1.5 hours. LED indicator shows charging status.',
      },
      {
        step: 2,
        title: 'Positioning',
        description: 'Place the massager around your neck with the massage nodes aligned with neck muscles.',
      },
      {
        step: 3,
        title: 'Select Massage Mode',
        description: 'Press mode button to cycle through 4 massage intensity levels. Start with level 1 for first use.',
      },
      {
        step: 4,
        title: 'Enable Heat Therapy',
        description: 'Press heat button to activate heating function. Temperature gradually increases to 40°C.',
      },
      {
        step: 5,
        title: 'Massage Duration',
        description: 'Recommended massage time: 15-20 minutes. Device automatically stops after 30 minutes.',
      },
    ],

    // Safety Warnings
    safetyWarnings: [
      'Do not use if you have a pacemaker or electronic implants',
      'Not suitable for neck injuries or acute pain without medical consultation',
      'Avoid use on broken or severely irritated skin',
      'Do not exceed 40°C heat temperature',
      'Do not use while driving or operating machinery',
      'Remove immediately if you experience dizziness or discomfort',
    ],

    // Care Instructions
    careInstructions: [
      'Wipe clean with a soft, damp cloth after each use',
      'Allow to dry completely before storage',
      'Store in a cool, dry place away from direct sunlight',
      'Do not submerge in water',
      'Charge device every 2 months during extended storage',
      'Avoid dropping or applying excessive pressure',
    ],
  },

  'neck-massager-pro': {
    id: 4,
    name: 'Neck Massager Pro',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional-grade neck massager with AI-powered massage patterns',
    price: 'Custom Quote',
    
    // Technical Specifications
    specs: {
      dimensions: '300 x 140 x 110 mm',
      weight: '420 g',
      material: 'Premium ABS + Medical Silicone',
      color: 'Midnight Black/Champagne Gold',
      battery: 'Lithium-ion 2200mAh',
      batteryLife: '5-6 hours',
      chargeTime: '2 hours',
      warranty: '3 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'AI-Powered Massage',
        description: 'Intelligent algorithms adapt massage patterns based on muscle tension detection'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Smart App Control',
        description: 'Bluetooth connectivity with app for custom programs and usage tracking'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Advanced Heat Therapy',
        description: 'Dual-zone heating up to 42°C with temperature control via app'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '5-6 hours of continuous use with fast charging technology'
      },
    ],

    // Usage Instructions
    usageInstructions: [
      {
        step: 1,
        title: 'App Setup',
        description: 'Download the companion app and create account. Charge device fully before first use.',
      },
      {
        step: 2,
        title: 'Bluetooth Connection',
        description: 'Enable Bluetooth and open app. Press pairing button for 3 seconds until LED blinks blue.',
      },
      {
        step: 3,
        title: 'Neck Positioning',
        description: 'Place massager around neck. App will guide optimal positioning for maximum effectiveness.',
      },
      {
        step: 4,
        title: 'Select AI Program',
        description: 'Choose from: Relaxation, Deep Tissue, Tension Relief, or Recovery. AI adapts in real-time.',
      },
      {
        step: 5,
        title: 'Heat and Intensity',
        description: 'Adjust heat temperature and massage intensity through app. Recommended: 15-25 minutes.',
      },
      {
        step: 6,
        title: 'Recovery Tracking',
        description: 'App tracks massage history and provides personalized recommendations based on usage patterns.',
      },
    ],

    // Safety Warnings
    safetyWarnings: [
      'Consult physician if you have cervical spine issues or injuries',
      'Do not use with pacemakers or electronic implants',
      'Not recommended for pregnant women without medical consultation',
      'Avoid use on open wounds, infections, or severe skin irritation',
      'Maximum heat temperature: 42°C',
      'Do not exceed 25 minutes of continuous use with heat therapy',
      'Stop immediately if experiencing pain, numbness, or tingling',
    ],

    // Care Instructions
    careInstructions: [
      'Clean with soft, damp cloth immediately after use',
      'Allow all components to dry completely before storage',
      'Store in protective case provided',
      'Charge device monthly during extended storage',
      'Keep away from extreme temperatures and humidity',
      'Use only the provided charging cable and adapter',
      'Do not attempt to repair - contact customer service',
    ],
  },

  'back-massager-plus': {
    id: 7,
    name: 'Back Massager Plus',
    category: 'Back Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Full-body back massager with multiple massage modes and heat therapy',
    price: 'Custom Quote',
    
    // Technical Specifications
    specs: {
      dimensions: '380 x 280 x 100 mm',
      weight: '680 g',
      material: 'ABS + Memory Foam',
      color: 'Black/Gray',
      battery: 'Lithium-ion 3000mAh',
      batteryLife: '5-6 hours',
      chargeTime: '3 hours',
      warranty: '2 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Multi-Zone Massage',
        description: 'Covers entire back area with 8 independent massage zones for comprehensive relief'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy',
        description: 'Integrated heating function up to 45°C for deep muscle relaxation'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: '5 Massage Modes',
        description: 'Kneading, tapping, rolling, shiatsu, and combination modes for targeted therapy'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Portable Design',
        description: 'Lightweight and ergonomic design for easy use on any surface'
      },
    ],
  },

  'back-massager-pro': {
    id: 8,
    name: 'Back Massager Pro',
    category: 'Back Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional-grade back massager with advanced AI technology and app control',
    price: 'Custom Quote',
    
    // Technical Specifications
    specs: {
      dimensions: '400 x 300 x 120 mm',
      weight: '750 g',
      material: 'Premium ABS + Medical Grade Silicone',
      color: 'Midnight Black/Silver',
      battery: 'Lithium-ion 3500mAh',
      batteryLife: '7-8 hours',
      chargeTime: '2.5 hours',
      warranty: '3 years',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'AI-Adaptive Technology',
        description: 'Intelligent system detects muscle tension and automatically adjusts massage intensity'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Smart App Control',
        description: 'Bluetooth connectivity with app for custom programs, tracking, and personalized recommendations'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Dual-Zone Heat',
        description: 'Independent heating zones up to 48°C for upper and lower back therapy'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '7-8 hours of continuous use with intelligent power management'
      },
    ],
  },

  'neck-massager-comfort': {
    id: 5,
    name: 'Neck Massager Comfort',
    category: 'Neck Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Portable neck massager with lightweight design and simple controls',
    price: 'Custom Quote',
    
    // Technical Specifications
    specs: {
      dimensions: '260 x 100 x 90 mm',
      weight: '280 g',
      material: 'ABS + Soft Silicone',
      color: 'White/Gray',
      battery: 'Lithium-ion 1500mAh',
      batteryLife: '2-3 hours',
      chargeTime: '1 hour',
      warranty: '1 year',
    },

    // Features
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Simple One-Button Control',
        description: 'Easy-to-use design with single button for power and mode switching'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Lightweight & Portable',
        description: 'Only 280g - perfect for travel, office, or home use'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Gentle Vibration',
        description: '3 vibration intensity levels suitable for daily neck tension relief'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Quiet Operation',
        description: 'Ultra-quiet motor perfect for use at work or while relaxing'
      },
    ],

    // Usage Instructions
    usageInstructions: [
      {
        step: 1,
        title: 'Initial Charge',
        description: 'Connect to USB charger. Full charge takes 1 hour. LED light indicates charging status.',
      },
      {
        step: 2,
        title: 'Power On',
        description: 'Press the button once to power on. Device will vibrate to confirm activation.',
      },
      {
        step: 3,
        title: 'Select Intensity',
        description: 'Press button again to cycle through 3 intensity levels: Gentle, Medium, Strong.',
      },
      {
        step: 4,
        title: 'Apply to Neck',
        description: 'Place around neck and position massage nodes on tense areas. Recommended time: 10-15 minutes.',
      },
      {
        step: 5,
        title: 'Auto-Off Feature',
        description: 'Device automatically turns off after 20 minutes for safety. Manual shutdown: press button for 3 seconds.',
      },
    ],

    // Safety Warnings
    safetyWarnings: [
      'Do not use if you have a pacemaker or electronic implants',
      'Not suitable for acute neck injuries without medical consultation',
      'Avoid use on open wounds or severely irritated skin',
      'Do not use while driving or operating machinery',
      'Do not exceed 20 minutes of continuous use',
      'Remove immediately if you experience discomfort or dizziness',
    ],

    // Care Instructions
    careInstructions: [
      'Wipe with a soft cloth after each use',
      'Allow to dry completely before storage',
      'Store in a cool, dry place',
      'Do not submerge in water',
      'Charge device every month during extended storage',
      'Avoid dropping or applying excessive pressure to the device',
    ],
  },

  'waist-massager-smart': {
    id: 9,
    name: 'Waist Massager Smart',
    category: 'Waist Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Smart waist massager with app control and customizable programs',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '420 x 150 x 80 mm',
      weight: '580 g',
      material: 'Premium ABS + Medical Grade Silicone',
      color: 'Black/Silver',
      battery: 'Lithium-ion 2500mAh',
      batteryLife: '6-7 hours',
      chargeTime: '2.5 hours',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Smart App Control',
        description: 'Bluetooth connectivity with dedicated app for custom programs and usage tracking'
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Customizable Programs',
        description: '10+ pre-set massage programs plus ability to create custom programs'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy',
        description: 'Adjustable heat function up to 42 degrees C for enhanced muscle relaxation'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '6-7 hours of continuous use with intelligent power management'
      },
    ],
  },

  'waist-massager-pro': {
    id: 10,
    name: 'Waist Massager Pro',
    category: 'Waist Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional waist massager for targeted muscle relief',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '450 x 160 x 90 mm',
      weight: '650 g',
      material: 'Premium ABS + Medical Grade Silicone',
      color: 'Midnight Black/Gold',
      battery: 'Lithium-ion 3000mAh',
      batteryLife: '8-9 hours',
      chargeTime: '2 hours',
      warranty: '3 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Multi-Mode Massage',
        description: '8 different massage modes including kneading, tapping, and shiatsu techniques'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Dual-Zone Heat',
        description: 'Independent heating zones up to 45 degrees C for upper and lower waist therapy'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Variable Intensity',
        description: '5 adjustable intensity levels for personalized muscle relief'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '8-9 hours of continuous use for all-day comfort'
      },
    ],
  },
  'hand-massager-pro': {
    id: 11,
    name: 'Hand Massager Pro',
    category: 'Hand Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional hand massager for palm and finger relief',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '180 x 120 x 100 mm',
      weight: '320 g',
      material: 'ABS + Soft Silicone',
      color: 'Silver/Black',
      battery: 'Lithium-ion 1500mAh',
      batteryLife: '3-4 hours',
      chargeTime: '1.5 hours',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Precision Finger Massage',
        description: 'Targeted vibration for each finger and palm area with 6 massage nodes'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Portable Design',
        description: 'Compact and lightweight for on-the-go hand and finger relief'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Quick Charge',
        description: 'Fast charging in 1.5 hours with 3-4 hours of continuous use'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Multiple Intensity Levels',
        description: '4 adjustable intensity settings for customized massage experience'
      },
    ],
  },
  'knee-massager-therapy': {
    id: 12,
    name: 'Knee Massager Therapy',
    category: 'Knee Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Targeted knee massager for joint relief and mobility improvement',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '280 x 200 x 120 mm',
      weight: '550 g',
      material: 'Premium ABS + Medical Grade Silicone',
      color: 'White/Blue',
      battery: 'Lithium-ion 2500mAh',
      batteryLife: '5-6 hours',
      chargeTime: '2 hours',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Targeted Joint Relief',
        description: 'Advanced vibration technology targeting knee joints and surrounding muscles with 8 massage nodes'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy Function',
        description: 'Adjustable heat up to 42 degrees C for enhanced therapeutic effect'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Adjustable Size',
        description: 'Universal fit design accommodates different knee sizes and shapes'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Quiet Operation',
        description: 'Ultra-quiet motor with 6 intensity levels for comfortable use'
      },
    ],
  },
  'foot-massager-comfort': {
    id: 13,
    name: 'Foot Massager Comfort',
    category: 'Foot Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Shiatsu foot massager with adjustable intensity and heat therapy',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '320 x 280 x 150 mm',
      weight: '2.5 kg',
      material: 'ABS + Soft Silicone',
      color: 'Black/Gray',
      battery: 'AC Powered',
      batteryLife: 'N/A',
      chargeTime: 'N/A',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Shiatsu Massage Technology',
        description: 'Traditional shiatsu massage with 8 rotating massage nodes for deep foot relief'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy Function',
        description: 'Adjustable heat up to 45 degrees C for enhanced relaxation and circulation'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Adjustable Intensity',
        description: '5 intensity levels and 3 massage modes for customized foot care experience'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Compact Design',
        description: 'Space-saving design fits perfectly in any room for convenient daily use'
      },
    ],
  },

  'professional-massage-gun': {
    id: 14,
    name: 'Professional Massage Gun',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'High-performance massage gun with 6 speed levels and 4 interchangeable heads',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '280 x 80 x 60 mm',
      weight: '650 g',
      material: 'Aluminum + Rubber Grip',
      color: 'Black/Silver',
      battery: 'Lithium-ion 2400mAh',
      batteryLife: '3-4 hours',
      chargeTime: '2 hours',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: '6 Speed Levels',
        description: 'Variable speed control from 1200 to 3200 RPM for customized muscle recovery'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: '4 Interchangeable Heads',
        description: 'Multiple massage head attachments for different muscle groups and therapy types'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Long Battery Life',
        description: '3-4 hours of continuous use with fast USB-C charging'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Cordless Design',
        description: 'Portable and lightweight for convenient use anywhere, anytime'
      },
    ],
  },

  'massage-gun-elite': {
    id: 15,
    name: 'Massage Gun Elite',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Premium massage gun with advanced vibration technology and 8 speed levels',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '290 x 85 x 65 mm',
      weight: '700 g',
      material: 'Premium Aluminum + Ergonomic Grip',
      color: 'Midnight Black/Gold',
      battery: 'Lithium-ion 2600mAh',
      batteryLife: '4-5 hours',
      chargeTime: '2.5 hours',
      warranty: '3 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: '8 Speed Levels',
        description: 'Advanced vibration technology with 8 adjustable speed settings up to 3800 RPM'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: '6 Massage Heads',
        description: 'Comprehensive set of 6 specialized massage heads for full-body therapy'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '4-5 hours of continuous use with intelligent power management'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Quiet Motor',
        description: 'Advanced noise reduction technology for peaceful massage experience'
      },
    ],
  },

  'massage-gun-pro': {
    id: 16,
    name: 'Massage Gun Pro',
    category: 'Massage Guns',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Professional-grade massage gun for intense muscle recovery and athletic performance',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '300 x 90 x 70 mm',
      weight: '750 g',
      material: 'Premium Aluminum + Medical Grade Silicone',
      color: 'Professional Black',
      battery: 'Lithium-ion 3000mAh',
      batteryLife: '5-6 hours',
      chargeTime: '3 hours',
      warranty: '3 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: '10 Speed Levels',
        description: 'Professional-grade vibration control with 10 speed settings up to 4000 RPM'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: '8 Massage Heads',
        description: 'Complete therapeutic set with 8 specialized massage heads for all muscle types'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Extended Battery',
        description: '5-6 hours of continuous use with fast charging capability'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Professional Performance',
        description: 'Intense vibration technology for deep tissue massage and muscle recovery'
      },
    ],
  },

  'fat-burning-massager': {
    id: 17,
    name: 'Fat Burning Massager',
    category: 'Fat burning Massagers',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663320539188/VoKQAtF9mqKFHY8zzWMevj/product-showcase-8kyMwimpXMT3CTKiu6FKwk.webp',
    description: 'Advanced fat burning massager with EMS technology and heat therapy',
    price: 'Custom Quote',
    
    specs: {
      dimensions: '250 x 180 x 100 mm',
      weight: '450 g',
      material: 'ABS + Silicone Electrode Pads',
      color: 'White/Black',
      battery: 'Lithium-ion 1500mAh',
      batteryLife: '2-3 hours',
      chargeTime: '1.5 hours',
      warranty: '2 years',
    },

    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'EMS Technology',
        description: 'Electrical Muscle Stimulation technology for enhanced fat burning and muscle toning'
      },
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Heat Therapy Function',
        description: 'Adjustable heat up to 50°C to accelerate metabolism and improve circulation'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Multiple Modes',
        description: '8 different massage modes and intensity levels for customized body sculpting'
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: 'Portable Design',
        description: 'Lightweight and compact design for convenient use on different body areas'
      },
    ],
  },
};

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const [, navigate] = useLocation();
  const productId = params?.id || '';
  const product = products[productId];

  const [activeTab, setActiveTab] = useState('specs');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <AnimatedButton href="/products" variant="primary">
              Back to Products
            </AnimatedButton>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div>
              <ImageGallery images={[product.image, product.image, product.image]} alt={product.name} />
            </div>

            {/* Product Info */}
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              


              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">
                  {product.price}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Contact us for bulk pricing and customization options
                </p>
                <AnimatedButton href="/contact" variant="primary" className="w-full">
                  Request Quote
                </AnimatedButton>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-bold text-foreground">Key Features:</h3>
                {product.features.slice(0, 2).map((feature: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex gap-4 border-b border-border mb-8">
              {[
                { id: 'specs', label: 'Technical Specs' },
                { id: 'features', label: 'Features' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {/* Technical Specs */}
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                    <div key={key} className="border border-border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="font-semibold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Features */}
              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature: any, idx: number) => (
                    <div key={idx} className="border border-border rounded-lg p-6">
                      <div className="text-primary mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}


            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-secondary text-secondary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact our sales team for pricing, bulk orders, and customization options
            </p>
            <AnimatedButton href="/contact" variant="primary">
              Get in Touch
            </AnimatedButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
