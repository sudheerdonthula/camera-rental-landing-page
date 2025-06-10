import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    <div className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-purple-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white border-opacity-30">
            Professional Photography & Videography
          </span>
        </div>
        
        <div className="text-white">
          <TypeAnimation
            sequence={[
              'Give us an opportunity to capture your moments',
              3000,
              'Professional photography that tells your story',
              3000,
              'Creating memories that last forever',
              3000,
              'Your vision, our expertise',
              3000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ 
              display: 'inline-block',
              fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textAlign: 'center'
            }}
          />
        </div>
        
        <p className="mt-6 text-lg text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
          Transform your special moments into timeless memories with our premium photography and videography services
        </p>
         </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}