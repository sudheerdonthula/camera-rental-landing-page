// CameraCard.js
import React from 'react';

export default function CameraCard({ image, name, url, onClick }) {
  const handleClick = () => {
    if (url) {
      // Open in new window with security attributes
      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        newWindow.opener = null; // Security: prevent access to parent window
      }
    }
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event) => {
    // Handle keyboard accessibility (Enter and Space keys)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-xl hover:scale-105 transform transition duration-300 bg-white"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${name}`}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-contain mb-4"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold text-center">{name}</h2>
    </div>
  );
}